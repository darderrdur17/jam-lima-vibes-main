# Custom Domain Setup Guide

This guide will help you connect your custom domain to your website.

## Prerequisites
- ✅ GitHub Education account
- ✅ Domain name (see `GITHUB_EDUCATION_DOMAIN_SETUP.md` if you need to claim a free domain)
- ✅ Repository with GitHub Pages enabled

> **📌 New to GitHub Education?** If you haven't claimed your free domain yet, start with `GITHUB_EDUCATION_DOMAIN_SETUP.md` first!

## Step 1: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - **Source**: `GitHub Actions` (recommended) or `Deploy from a branch`
   - If using branch: Select `main` branch and `/docs` folder
4. Click **Save**

## Step 2: Configure DNS Records

You need to add DNS records at your domain registrar (where you bought the domain). The CNAME file is already configured for `jamlimaofficial.com`.

### For GitHub Pages (Recommended)

Add these DNS records at your domain registrar:

#### Option A: Using Apex Domain (jamlimaofficial.com)
Add these **A records**:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

#### Option B: Using www Subdomain (www.jamlimaofficial.com)
Add this **CNAME record**:
```
Type: CNAME
Name: www
Value: yourusername.github.io
```

#### Option C: Using Both (Recommended)
- Add A records for apex domain (as shown in Option A)
- Add CNAME record for www subdomain (as shown in Option B)

### For Vercel (Alternative)

If you prefer using Vercel instead:

1. Deploy to Vercel:
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel
   ```

2. In Vercel Dashboard:
   - Go to your project → **Settings** → **Domains**
   - Add `jamlimaofficial.com` and `www.jamlimaofficial.com`
   - Follow Vercel's DNS instructions

## Step 3: Update CNAME File (if needed)

The CNAME file is already configured at `docs/CNAME` with `jamlimaofficial.com`. 

If you want to use www subdomain instead, update it:
```bash
# Update docs/CNAME
www.jamlimaofficial.com
```

## Step 4: Verify Domain

1. After adding DNS records, wait 24-48 hours for DNS propagation
2. Check DNS propagation: https://www.whatsmydns.net/
3. Test your domain: Visit `https://jamlimaofficial.com`

## Step 5: Enable HTTPS (Automatic)

GitHub Pages automatically provides SSL certificates via Let's Encrypt. Once DNS is configured correctly, HTTPS will be enabled automatically within a few hours.

## Troubleshooting

### Domain not working?
1. Check DNS propagation: https://www.whatsmydns.net/#A/jamlimaofficial.com
2. Verify CNAME file exists in `docs/CNAME`
3. Check GitHub Pages settings: Repository → Settings → Pages
4. Wait 24-48 hours for DNS to fully propagate

### SSL Certificate issues?
- GitHub Pages automatically provisions SSL certificates
- Make sure DNS records are correct
- Wait a few hours after DNS propagation

### Using GitHub Education Benefits

If you got your domain through GitHub Education benefits (e.g., Namecheap .me domain):
1. Log into your domain registrar
2. Find DNS management section
3. Add the A records or CNAME as shown above
4. Save changes

## Quick Reference

- **CNAME file location**: `docs/CNAME`
- **Domain**: `jamlimaofficial.com`
- **GitHub Pages URL**: `https://yourusername.github.io/jam-lima-vibes-main` (temporary until domain is connected)
- **Custom Domain URL**: `https://jamlimaofficial.com` (after DNS setup)

## Next Steps

1. ✅ GitHub Actions workflow created (`.github/workflows/deploy.yml`)
2. ✅ CNAME file configured (`docs/CNAME`)
3. ⏳ Enable GitHub Pages in repository settings
4. ⏳ Add DNS records at your domain registrar
5. ⏳ Wait for DNS propagation (24-48 hours)
6. ⏳ Verify domain is working

## Need Help?

- GitHub Pages Docs: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
- Vercel Docs: https://vercel.com/docs/concepts/projects/domains
