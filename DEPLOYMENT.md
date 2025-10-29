# Deploying to Cloudflare Pages - prowebsiteco.com

This guide will walk you through deploying your Pro Website Co site to Cloudflare Pages and connecting it to your domain.

## Prerequisites

1. A Cloudflare account (free tier works)
2. Your domain `prowebsiteco.com` either:
   - Already on Cloudflare nameservers, OR
   - You can add DNS records at your current registrar

## Method 1: Deploy via Git (Recommended)

### Step 1: Push to GitHub
```bash
# Initialize git if not already done
git init
git add .
git commit -m "Ready for Cloudflare Pages deployment"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

### Step 2: Connect to Cloudflare Pages

1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Click **Workers & Pages** in the left sidebar
3. Click **Create Application** > **Pages** > **Connect to Git**
4. Select your GitHub repository
5. Configure the build settings:
   - **Project name**: `prowebsiteco` (or your preferred name)
   - **Production branch**: `main`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `/` (leave empty)
   
6. Click **Save and Deploy**

### Step 3: Connect Your Custom Domain

1. Once deployed, go to your project in Cloudflare Pages
2. Click **Custom domains** tab
3. Click **Set up a custom domain**
4. Enter `prowebsiteco.com`
5. Cloudflare will automatically configure DNS if your domain is on Cloudflare
   - If domain is elsewhere, you'll get CNAME instructions

6. Add `www.prowebsiteco.com` as well (optional but recommended)
   - Click **Set up a custom domain** again
   - Enter `www.prowebsiteco.com`

### Step 4: Configure DNS (if domain not on Cloudflare)

If your domain is registered elsewhere, add these DNS records:

For root domain (`prowebsiteco.com`):
```
Type: CNAME
Name: @ (or prowebsiteco.com)
Value: YOUR-PROJECT.pages.dev
Proxy status: Proxied (orange cloud)
```

For www subdomain:
```
Type: CNAME
Name: www
Value: YOUR-PROJECT.pages.dev
Proxy status: Proxied (orange cloud)
```

## Method 2: Direct Upload (Faster for Testing)

### Step 1: Build the Project Locally
```bash
npm run build
```

### Step 2: Upload to Cloudflare Pages

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Go to **Workers & Pages**
3. Click **Create Application** > **Pages** > **Upload assets**
4. Name your project: `prowebsiteco`
5. Upload the contents of the `out` folder (not the folder itself, but its contents)
6. Click **Deploy**

### Step 3: Connect Custom Domain

Follow **Step 3** from Method 1 above.

## Environment Variables (if needed)

If you need to add environment variables:
1. Go to your Pages project
2. Click **Settings** > **Environment variables**
3. Add your variables for Production and Preview environments

## Automatic Deployments

With the Git integration (Method 1):
- **Production**: Automatically deploys when you push to `main` branch
- **Preview**: Automatically creates preview deployments for pull requests

## SSL/TLS Certificate

Cloudflare automatically provisions and renews SSL certificates for your domain. This happens within a few minutes of adding your custom domain.

## Build Settings Reference

```
Framework preset: Next.js (Static HTML Export)
Build command: npm run build
Build output directory: out
Node version: 18 (specified in .nvmrc)
```

## Troubleshooting

### Build Fails
- Check the build logs in Cloudflare Pages dashboard
- Ensure all dependencies are in `package.json`
- Try building locally first with `npm run build`

### Domain Not Working
- DNS propagation can take up to 48 hours (usually much faster)
- Check DNS records are correct
- Verify domain is added in Cloudflare Pages custom domains

### Images Not Loading
- Ensure all image paths are correct (relative to public folder)
- Check browser console for 404 errors

## Performance Optimizations (Already Configured)

✅ Static HTML export for blazing fast load times
✅ HTTP headers for security and caching (see `_headers` file)
✅ CDN distribution via Cloudflare's global network
✅ Automatic HTTPS
✅ Brotli and Gzip compression

## Updating Your Site

### For Git Integration:
```bash
# Make your changes
git add .
git commit -m "Update site content"
git push origin main
```

### For Direct Upload:
1. Build locally: `npm run build`
2. Go to your Pages project
3. Click **Create new deployment**
4. Upload the new `out` folder contents

## Support

For issues with:
- **Cloudflare**: Check [Cloudflare Docs](https://developers.cloudflare.com/pages/)
- **Next.js**: Check [Next.js Docs](https://nextjs.org/docs)
- **This deployment**: Review build logs in Cloudflare dashboard

---

Your site will be live at:
- `https://prowebsiteco.com` (once DNS is configured)
- `https://YOUR-PROJECT.pages.dev` (immediate, Cloudflare subdomain)

