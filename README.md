# MT2.0 Aptitude Test Platform

A comprehensive web-based aptitude test platform built with Next.js, TypeScript, and Supabase. Features multiple reasoning test modes with timer functionality, detailed scoring, and participant tracking.

## Features

- **User Information Collection**: Capture participant name, phone, and email before test starts
- **Combined Test Mode**: 8 questions total (2 from each category)
  - Numerical Reasoning
  - Verbal Reasoning
  - Inductive Reasoning
  - Deductive Reasoning
- **Question Bank**: 5 unique questions for each reasoning category (20 total questions)
- **Timer**: 60 seconds per question with visual countdown and warnings
- **Scoring System**: 
  - Percentage and fraction display
  - Category breakdown showing performance in each reasoning type
  - Performance-based feedback messages
- **Supabase Integration**: 
  - Stores participant information
  - Tracks test completion and scores
  - Optional - app works without Supabase configured
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Material Design**: Google-inspired UI with smooth animations

## Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- (Optional) Supabase account for data persistence

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/jakeliukayak/mt2.0-aptitude-test-platform.git
cd mt2.0-aptitude-test-platform
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables (Optional)

The application can run without Supabase for testing purposes. To enable data persistence:

1. Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

2. Get your Supabase credentials from https://app.supabase.com
   - Create a new project if you haven't already
   - Go to Settings > API
   - Copy the Project URL and anon/public key

3. Update `.env.local` with your credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   ```

4. Set up the database schema (see [SUPABASE_SETUP.md](./SUPABASE_SETUP.md))

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` directory.

## Project Structure

```
mt2.0-aptitude-test-platform/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Landing page with user info form
│   ├── globals.css         # Global styles and CSS variables
│   ├── test/
│   │   └── page.tsx        # Test interface with questions and timer
│   └── results/
│       └── page.tsx        # Results page with score and breakdown
├── lib/
│   ├── supabase.ts         # Supabase client configuration
│   ├── supabaseTestManager.ts  # Participant data management
│   └── questionBank.ts     # Question bank and test logic
├── public/
│   └── logo.svg            # MT2.0 logo
├── next.config.js          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── .env.example            # Example environment variables
├── SUPABASE_SETUP.md       # Database setup instructions
└── package.json            # Dependencies and scripts
```

## How It Works

1. **Landing Page** (`/`): User enters name, phone, and email. Data is saved to Supabase (if configured) and user is navigated to test page.

2. **Test Page** (`/test`): 
   - Displays 8 questions (2 from each category) in random order
   - 60-second timer per question
   - Immediate feedback on answer selection
   - Auto-advances when timer expires
   - Allows user to quit test

3. **Results Page** (`/results`):
   - Shows overall score percentage
   - Displays category breakdown
   - Provides performance feedback
   - Updates Supabase with completion data
   - Allows user to take another test

## Technologies Used

- **Next.js 16+** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4.x** - Utility-first CSS framework
- **Supabase** - Backend as a Service (optional)
- **React 19** - UI library
- **Material Design** - Design principles and color palette

## Configuration

### Static Export

The app is configured for static export (`output: 'export'` in `next.config.js`), making it suitable for hosting on:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

### Without Supabase

The application gracefully handles missing Supabase configuration:
- Generates mock participant IDs
- Shows console warnings
- All UI functionality works normally
- No data is persisted to a database

## Development

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Adding Questions

Edit `lib/questionBank.ts` to add or modify questions. Each question must have:
- `question`: The question text
- `options`: Array of answer options
- `correct`: Index of correct answer (0-based)
- `category`: One of 'numerical', 'verbal', 'inductive', 'deductive'

## Deployment

### GitHub Pages

This repository is configured for automatic deployment to GitHub Pages via GitHub Actions.

**Quick Setup:**

1. **Enable GitHub Pages**: Go to repository **Settings** → **Pages** → Set source to **GitHub Actions**

2. **Add Supabase Secrets** (for data persistence):
   - Go to **Settings** → **Secrets and variables** → **Actions**
   - Add `NEXT_PUBLIC_SUPABASE_URL` with your Supabase project URL
   - Add `NEXT_PUBLIC_SUPABASE_ANON_KEY` with your Supabase anon key

3. **Deploy**: Push to `main` branch or manually trigger the workflow from the **Actions** tab

For detailed setup instructions, see [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md).

**Note**: The `basePath` is already configured in `next.config.js` for this repository. If you fork this repo, update the repository name in `next.config.js`.

### Vercel/Netlify

Simply connect your repository and deploy. No additional configuration needed.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License

## Support

For issues, questions, or contributions, please open an issue on GitHub or contact us via Instagram: [@mt2.0careercoach](https://www.instagram.com/mt2.0careercoach)