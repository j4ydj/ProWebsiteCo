# Cloudflare Pages Setup for prowebsiteco.com

## Prerequisites
✅ Code pushed to GitHub repository
✅ Cloudflare account (create free at https://dash.cloudflare.com/sign-up)

---

## 🚀 PART 1: Connect GitHub to Cloudflare Pages

### Step 1: Access Cloudflare Pages
1. Log in to https://dash.cloudflare.com/
2. Click **Workers & Pages** in the left sidebar
3. Click **Create Application**
4. Select **Pages** tab
5. Click **Connect to Git**

### Step 2: Authorize GitHub
1. Click **Connect GitHub**
2. Authorize Cloudflare Pages to access your GitHub account
3. You may need to select which repositories Cloudflare can access:
   - Option A: Select "All repositories" (easier)
   - Option B: Select "Only select repositories" and choose your `prowebsiteco` repo

### Step 3: Select Your Repository
1. Find and click on your `prowebsiteco` repository from the list
2. Click **Begin setup**

### Step 4: Configure Build Settings

Fill in these **exact** settings:

```
Project name: prowebsiteco
Production branch: main
```

**Build settings:**
```
Framework preset: Next.js
Build command: npm run build
Build output directory: out
Root directory: (leave empty)
```

**Environment variables:** (leave empty for now)

### Step 5: Deploy
1. Click **Save and Deploy**
2. Wait 2-5 minutes for the first build to complete
3. You'll see a build log with real-time progress

### Step 6: Verify Deployment
Once complete, you'll get a URL like:
```
https://prowebsiteco.pages.dev
```

Click it to verify your site is live! 🎉

---

## 🌐 PART 2: Connect Your Custom Domain (prowebsiteco.com)

### Option A: If Your Domain is Already on Cloudflare

1. In your Pages project, click **Custom domains** tab
2. Click **Set up a custom domain**
3. Enter: `prowebsiteco.com`
4. Click **Continue**
5. Cloudflare will automatically create the DNS records ✨
6. Click **Activate domain**

7. Repeat for www subdomain:
   - Click **Set up a custom domain** again
   - Enter: `www.prowebsiteco.com`
   - Click **Continue** and **Activate domain**

**Done!** Your site will be live at prowebsiteco.com in a few minutes.

---

### Option B: If Your Domain is NOT on Cloudflare

#### Method 1: Transfer Nameservers to Cloudflare (Recommended)

1. In Cloudflare dashboard, click **Websites** > **Add a site**
2. Enter `prowebsiteco.com`
3. Select the Free plan
4. Cloudflare will scan your existing DNS records
5. Review and confirm the records
6. Cloudflare will show you 2 nameservers like:
   ```
   alice.ns.cloudflare.com
   bob.ns.cloudflare.com
   ```

7. Go to your domain registrar (GoDaddy, Namecheap, etc.)
8. Update the nameservers to the ones Cloudflare provided
9. Wait for DNS propagation (can take up to 48 hours, usually 1-2 hours)

10. Once active, follow **Option A** above to add custom domains

#### Method 2: Keep Domain at Current Registrar (CNAME)

If you can't change nameservers, add these DNS records at your registrar:

**For root domain** (prowebsiteco.com):
```
Type: CNAME or ALIAS
Name: @ (or prowebsiteco.com)
Value: prowebsiteco.pages.dev
TTL: Automatic or 3600
```

**For www subdomain**:
```
Type: CNAME
Name: www
Value: prowebsiteco.pages.dev
TTL: Automatic or 3600
```

⚠️ **Note**: Some registrars don't support CNAME for root domains. If you get an error, you may need to:
- Use an A record pointing to Cloudflare's IP (check Cloudflare dashboard)
- Or switch to Method 1 (transfer nameservers)

---

## 🔒 PART 3: SSL/HTTPS Setup

Cloudflare automatically provisions SSL certificates for your custom domain.

1. Go to **SSL/TLS** in Cloudflare dashboard
2. Ensure encryption mode is set to **Full** or **Full (strict)**
3. SSL certificate will be active within 15 minutes

---

## ⚡ PART 4: Performance & Security Settings (Optional)

### Speed Optimizations
1. Go to **Speed** > **Optimization**
2. Enable:
   - ✅ Auto Minify (JavaScript, CSS, HTML)
   - ✅ Brotli
   - ✅ Early Hints
   - ✅ HTTP/2 to Origin

### Security
1. Go to **Security** > **Settings**
2. Set Security Level to **Medium**
3. Enable **Bot Fight Mode** (Free plan)

### Caching
1. Go to **Caching** > **Configuration**
2. Set Browser Cache TTL to **4 hours** or higher
3. The `_headers` file in your repo already sets optimal cache headers

---

## 🎯 PART 5: Verify Everything Works

Test your site on all these URLs:

- ✅ `https://prowebsiteco.pages.dev` (Cloudflare subdomain)
- ✅ `https://prowebsiteco.com` (root domain)
- ✅ `https://www.prowebsiteco.com` (www subdomain)
- ✅ `http://prowebsiteco.com` (should redirect to HTTPS)

---

## 🔄 PART 6: Automatic Deployments

Now set up! Every time you push to GitHub:

```bash
git add .
git commit -m "Update website content"
git push origin main
```

Cloudflare Pages will:
1. Automatically detect the push
2. Build your site
3. Deploy it live
4. All in about 2-3 minutes! 🚀

You can watch builds in: **Workers & Pages** > **prowebsiteco** > **Deployments**

---

## 📊 Monitoring

### View Analytics
1. Go to your Pages project
2. Click **Analytics** tab
3. See visitor stats, bandwidth, and requests

### Build Logs
1. Click **Deployments** tab
2. Click any deployment to see the build log
3. Check for errors or warnings

---

## 🆘 Troubleshooting

### Build Fails
1. Check the build log in Cloudflare
2. Common issues:
   - Missing dependencies in package.json
   - Build command incorrect
   - Output directory wrong

### Custom Domain Not Working
1. Check DNS records are correct
2. Wait for DNS propagation (can take up to 48 hours)
3. Clear your browser cache
4. Try in incognito/private mode
5. Use https://dnschecker.org/ to verify DNS propagation

### 404 Errors
1. Ensure `_redirects` file is in the repository root
2. Check build output directory is set to `out`
3. Rebuild the project in Cloudflare

### Images Not Loading
1. Check browser console for errors
2. Verify image paths are correct
3. Ensure images are in the `public/` folder

---

## 📞 Support Resources

- **Cloudflare Docs**: https://developers.cloudflare.com/pages/
- **Next.js Docs**: https://nextjs.org/docs
- **Cloudflare Community**: https://community.cloudflare.com/

---

## 🎉 Success Checklist

- [ ] GitHub repository created and code pushed
- [ ] Cloudflare Pages project created
- [ ] First build successful
- [ ] Site loads on .pages.dev URL
- [ ] Custom domain prowebsiteco.com added
- [ ] www subdomain added
- [ ] SSL certificate active (HTTPS works)
- [ ] All URLs redirect properly
- [ ] Automatic deployments working

---

**Your site is now live on Cloudflare Pages with automatic deployments from GitHub!** 🚀

