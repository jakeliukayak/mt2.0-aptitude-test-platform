# GitHub Pages Deployment Setup

This guide explains how to configure GitHub repository settings and secrets to deploy the MT2.0 Aptitude Test Platform to GitHub Pages.

## Prerequisites

- A GitHub account with access to this repository
- A Supabase project (optional, but recommended for full functionality)
- Repository administrator permissions

## Step 1: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Build and deployment**, select:
   - **Source**: GitHub Actions
4. Save the settings

## Step 2: Configure Repository Secrets

The application requires two environment variables to connect to Supabase. These should be configured as **repository secrets** or **repository variables**.

### Option A: Using Repository Secrets (Recommended)

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add the following secrets:

#### Secret 1: NEXT_PUBLIC_SUPABASE_URL
- **Name**: `NEXT_PUBLIC_SUPABASE_URL`
- **Value**: Your Supabase project URL (e.g., `https://your-project.supabase.co`)

To find this value:
1. Go to [app.supabase.com](https://app.supabase.com)
2. Select your project
3. Navigate to **Settings** → **API**
4. Copy the **Project URL**

#### Secret 2: NEXT_PUBLIC_SUPABASE_ANON_KEY
- **Name**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Value**: Your Supabase anonymous/public key

To find this value:
1. Go to [app.supabase.com](https://app.supabase.com)
2. Select your project
3. Navigate to **Settings** → **API**
4. Copy the **anon public** key

### Option B: Using Repository Variables

Alternatively, you can use **Repository Variables** instead of secrets (since these are public environment variables):

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Secrets and variables** → **Actions** → **Variables** tab
3. Click **New repository variable**
4. Add the same two variables with the same names and values as described above

## Step 3: Set Up Supabase Database

Follow the instructions in [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) to create the necessary database tables.

## Step 4: Trigger Deployment

The deployment workflow (`.github/workflows/nextjs.yml`) will automatically run when:

- You push to the `main` branch
- You manually trigger it from the **Actions** tab

### Manual Deployment

1. Go to the **Actions** tab in your repository
2. Select the "Deploy Next.js site to Pages" workflow
3. Click **Run workflow**
4. Select the `main` branch
5. Click **Run workflow**

## Step 5: Access Your Deployed Site

Once the workflow completes successfully:

1. Your site will be available at: `https://[your-username].github.io/mt2.0-aptitude-test-platform/`
2. You can find the exact URL in the workflow run logs or in **Settings** → **Pages**

## Troubleshooting

### Build Fails

**Issue**: The build fails with "Module not found" or dependency errors

**Solution**: 
- Ensure all dependencies are listed in `package.json`
- Check the workflow logs in the **Actions** tab for specific error messages

### Site Shows 404

**Issue**: Deployed site shows a 404 error

**Solution**:
- Verify that GitHub Pages is enabled and set to "GitHub Actions" as the source
- Check that the `basePath` in `next.config.js` matches your repository name
- Wait a few minutes after deployment completes for GitHub Pages to update

### Supabase Connection Issues

**Issue**: Application doesn't save data or shows Supabase warnings

**Solution**:
- Verify that the secrets/variables are correctly set in repository settings
- Check that the secret names exactly match: `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Ensure your Supabase project is active and the database schema is set up correctly
- Check browser console for specific error messages

### Environment Variables Not Working

**Issue**: Environment variables are not being passed to the build

**Solution**:
- Make sure you added them as **secrets** or **variables** (not as environment secrets)
- The secret/variable names must be exact: `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Re-run the workflow after adding/updating secrets

## Testing Locally

To test the production build locally before deploying:

```bash
# Build the static site
npm run build

# The output will be in the 'out' directory
# You can serve it locally with any static file server
npx serve out
```

## Without Supabase

The application works without Supabase configuration, but data will not be persisted. If you don't want to set up Supabase:

1. You can skip adding the repository secrets
2. The app will use placeholder values and show console warnings
3. All UI functionality will work, but participant data won't be saved

## Additional Resources

- [Next.js Static Exports](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
- [Supabase Documentation](https://supabase.com/docs)
