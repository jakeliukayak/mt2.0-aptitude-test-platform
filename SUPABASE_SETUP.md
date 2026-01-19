# Supabase Setup Guide

This document provides instructions for setting up the Supabase database for the MT2.0 Aptitude Test Platform.

## Prerequisites

1. A Supabase account (sign up at https://supabase.com)
2. A new Supabase project created

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your Supabase credentials:

```bash
cp .env.example .env.local
```

Then update the values:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

You can find these values in your Supabase project settings:
- Go to https://app.supabase.com
- Select your project
- Navigate to Settings > API
- Copy the "Project URL" and "anon/public" key

## Database Schema

### Table: `test_participants`

This table stores information about test participants and their results.

#### SQL Migration

Run the following SQL in your Supabase SQL Editor (Database > SQL Editor):

```sql
-- Create test_participants table
CREATE TABLE IF NOT EXISTS test_participants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  test_started_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  test_completed_at TIMESTAMPTZ,
  score INTEGER,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_test_participants_email ON test_participants(email);
CREATE INDEX IF NOT EXISTS idx_test_participants_created_at ON test_participants(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_test_participants_completed ON test_participants(test_completed_at) WHERE test_completed_at IS NOT NULL;

-- Add RLS (Row Level Security) policies
ALTER TABLE test_participants ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (start a test)
CREATE POLICY "Allow public insert" ON test_participants
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow anyone to update their own record (using the id)
CREATE POLICY "Allow update own record" ON test_participants
  FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);

-- Allow anyone to read (for admin purposes, you may want to restrict this)
CREATE POLICY "Allow public read" ON test_participants
  FOR SELECT
  TO public
  USING (true);
```

#### Table Structure

| Column | Type | Nullable | Default | Description |
|--------|------|----------|---------|-------------|
| `id` | UUID | NO | `gen_random_uuid()` | Primary key, auto-generated |
| `name` | TEXT | NO | - | Participant's full name |
| `phone` | TEXT | NO | - | Participant's phone number |
| `email` | TEXT | NO | - | Participant's email address |
| `test_started_at` | TIMESTAMPTZ | NO | `NOW()` | Timestamp when test was started |
| `test_completed_at` | TIMESTAMPTZ | YES | - | Timestamp when test was completed |
| `score` | INTEGER | YES | - | Final test score (0-8 for combined test) |
| `created_at` | TIMESTAMPTZ | NO | `NOW()` | Record creation timestamp |

## Testing the Setup

After setting up the table and environment variables:

1. Run the application: `npm run dev`
2. Navigate to the landing page
3. Fill in the user information form
4. Start the test

The participant data should be saved to your Supabase database. You can verify this by:
- Going to your Supabase dashboard
- Navigating to Database > Tables > test_participants
- Viewing the inserted records

## Optional: Viewing Test Results

To view test results in your Supabase dashboard:

```sql
-- Get all completed tests
SELECT 
  name,
  email,
  score,
  test_started_at,
  test_completed_at,
  EXTRACT(EPOCH FROM (test_completed_at - test_started_at))/60 as duration_minutes
FROM test_participants
WHERE test_completed_at IS NOT NULL
ORDER BY test_completed_at DESC;

-- Get average score
SELECT 
  AVG(score) as average_score,
  COUNT(*) as total_completed
FROM test_participants
WHERE test_completed_at IS NOT NULL;
```

## Troubleshooting

### Common Issues

1. **"Supabase is not configured" warning**
   - Make sure `.env.local` exists and contains valid credentials
   - Restart the development server after adding environment variables

2. **Insert/Update errors**
   - Check that RLS policies are correctly set up
   - Verify the table structure matches the schema above
   - Check the browser console for detailed error messages

3. **Connection errors**
   - Verify your Supabase project URL is correct
   - Ensure the anon key is the public "anon" key, not the service role key
   - Check that your Supabase project is active and not paused

## Development Without Supabase

The application can run without Supabase configured for testing purposes. If environment variables are not set:
- The app will log warnings to the console
- Mock participant IDs will be generated
- Data won't be persisted to a database
- All functionality will still work for UI testing

This allows you to develop and test the application before setting up Supabase.
