# GitHub Education Free Domain Setup Guide

This guide will help you claim your free domain through GitHub Education benefits and connect it to your website.

## 🎓 What GitHub Education Provides

The **GitHub Student Developer Pack** includes several free domain options:

### Available Free Domain Offers:

1. **Namecheap** ⭐ (Most Popular)
   - **Free .me domain** for 1 year
   - Includes 1 free SSL certificate
   - Example: `jamlimaofficial.me`
   - Renewal after 1 year: ~$4.88/year

2. **.Tech Domains**
   - **Free .tech domain** for 1 year
   - Example: `jamlimaofficial.tech`

3. **Name.com**
   - **Two free domains** from their selection
   - Various TLDs available

> **Note**: The CNAME file currently has `jamlimaofficial.com`, but `.com` domains are **not free** through GitHub Education. You'll need to either:
> - Use a free domain (`.me`, `.tech`, etc.) and update the CNAME file
> - Purchase a `.com` domain separately (~$10-15/year)

---

## 📝 Step 1: Claim Your GitHub Education Benefits

### Verify Your GitHub Education Status

1. **Go to GitHub Education Benefits**:
   - Visit: https://education.github.com/benefits
   - Or: https://github.com/settings/education/benefits

2. **Check Your Status**:
   - If you haven't applied yet, click **"Get benefits"**
   - You'll need to verify you're a student/teacher
   - Provide proof (school email, student ID, etc.)

3. **Wait for Approval**:
   - Usually takes 1-5 business days
   - You'll receive an email when approved

### Access the Student Developer Pack

Once approved:
1. Go to: https://education.github.com/pack
2. Browse available offers
3. Look for **"Domains"** category

---

## 🆓 Step 2: Claim Your Free Domain

### Option A: Namecheap (.me Domain) - Recommended

1. **Access the Offer**:
   - Go to: https://nc.me/landing/github
   - Or find it in the GitHub Education Pack
   - Click **"Claim Offer"** or **"Get Started"**

2. **Create/Log in to Namecheap Account**:
   - Sign up if you don't have an account
   - Use your GitHub account to link (if available)

3. **Search for Your Domain**:
   - Search for: `jamlimaofficial.me` (or your preferred name)
   - Check availability
   - Add to cart

4. **Apply the Discount**:
   - The GitHub Education discount should apply automatically
   - Verify it shows **$0.00** for the first year
   - Complete checkout

5. **Domain Registration**:
   - Complete the registration process
   - Your domain will be active immediately

### Option B: .Tech Domains

1. **Access the Offer**:
   - Find ".Tech Domains" in GitHub Education Pack
   - Click to claim

2. **Register Your Domain**:
   - Search for: `jamlimaofficial.tech`
   - Complete registration with GitHub Education discount

### Option C: Name.com

1. **Access the Offer**:
   - Find "Name.com" in GitHub Education Pack
   - Claim the offer

2. **Choose Your Domains**:
   - Select 2 free domains from available options
   - Complete registration

---

## 🔧 Step 3: Update Your Project for the New Domain

Once you have your domain, you need to update the CNAME file:

### If You Got a .me Domain (jamlimaofficial.me)

Update the CNAME file:

```bash
# Update public/CNAME
jamlimaofficial.me
```

### If You Got a .tech Domain (jamlimaofficial.tech)

```bash
# Update public/CNAME
jamlimaofficial.tech
```

### If You Want to Keep .com (Purchase Required)

If you really want `jamlimaofficial.com`, you'll need to:
1. Purchase it from a registrar (~$10-15/year)
2. Keep the current CNAME file as is
3. Follow the DNS configuration guide

---

## 🌐 Step 4: Configure DNS for GitHub Pages

After you have your domain, configure DNS records. The process depends on which registrar you used:

### If You Used Namecheap:

1. **Log in to Namecheap**
2. Go to **Domain List** → Click **Manage** next to your domain
3. Navigate to **Advanced DNS** tab
4. Scroll to **Host Records** section

#### Add 4 A Records:
   - Click **Add New Record**
   - For each IP, add:
     - **Type**: `A Record`
     - **Host**: `@` (or leave blank)
     - **Value**: `185.199.108.153`
     - **TTL**: `Automatic`
     - Click **Save** (green checkmark)
   - Repeat for:
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

#### Add CNAME for www (Optional):
   - Click **Add New Record**
   - **Type**: `CNAME Record`
   - **Host**: `www`
   - **Value**: `yourusername.github.io` (replace with your GitHub username)
   - **TTL**: `Automatic`
   - Click **Save**

5. **Remove any existing conflicting records**
6. Wait 5-30 minutes for DNS to propagate

### If You Used .Tech Domains or Name.com:

Follow similar steps:
1. Log into your registrar's DNS management panel
2. Add the same 4 A records pointing to GitHub Pages IPs
3. Add optional CNAME for www subdomain

See `DNS_CONFIGURATION_GUIDE.md` for detailed instructions for other registrars.

---

## ✅ Step 5: Enable GitHub Pages & Verify

1. **Update CNAME File in Your Project**:
   ```bash
   # Edit public/CNAME with your new domain
   # For example: jamlimaofficial.me
   ```

2. **Commit and Push**:
   ```bash
   git add public/CNAME
   git commit -m "Update CNAME for GitHub Education domain"
   git push
   ```

3. **Enable GitHub Pages**:
   - Go to your repository → **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions** (recommended)
   - Or select **Deploy from a branch** → `main` → `/docs`

4. **Add Custom Domain in GitHub**:
   - In the **Pages** settings, under **Custom domain**
   - Enter your domain (e.g., `jamlimaofficial.me`)
   - Check **"Enforce HTTPS"** (will be available after DNS propagates)
   - Click **Save**

5. **Wait for DNS Propagation**:
   - Usually takes 30 minutes to 24 hours
   - Check status: https://www.whatsmydns.net/
   - GitHub will show "DNS check successful" when ready

---

## 🎯 Quick Decision Guide

### Which Domain Should You Choose?

**For Professional/Band Website:**
- ✅ **.me domain** (Namecheap) - Best option, professional, includes SSL
- ✅ **.com domain** - Most professional, but costs ~$10-15/year
- ⚠️ **.tech domain** - Good for tech projects, less professional for a band

**Recommendation**: Use **`.me` domain** from Namecheap (free for 1 year, professional, includes SSL)

### Domain Name Suggestions:

If `jamlimaofficial.me` is taken, try:
- `jamlimaband.me`
- `jam5official.me`
- `jamlimamusic.me`
- `jamlima.me`

---

## 📋 Complete Checklist

- [ ] Applied for GitHub Education benefits
- [ ] Received approval email
- [ ] Claimed free domain offer (Namecheap/.Tech/Name.com)
- [ ] Registered your domain (e.g., `jamlimaofficial.me`)
- [ ] Updated `public/CNAME` file with new domain
- [ ] Committed and pushed CNAME changes
- [ ] Added 4 A records in domain registrar DNS settings
- [ ] Added optional CNAME for www subdomain
- [ ] Enabled GitHub Pages in repository settings
- [ ] Added custom domain in GitHub Pages settings
- [ ] Waited for DNS propagation (30 min - 24 hours)
- [ ] Verified domain works at https://yourdomain.me

---

## 💰 Cost Breakdown

### Free Option (GitHub Education):
- **Year 1**: $0.00 (free through GitHub Education)
- **Year 2+**: ~$4.88/year for .me domain renewal

### Paid Option (.com domain):
- **Year 1**: ~$10-15 (one-time purchase)
- **Year 2+**: ~$10-15/year renewal

---

## 🆘 Troubleshooting

### Domain Not Available?
- Try variations: `jamlimaband.me`, `jam5official.me`, etc.
- Check different TLDs: `.tech`, `.online`, etc.

### Can't Find GitHub Education Benefits?
- Make sure you're logged into GitHub
- Visit: https://education.github.com/benefits
- Verify your student status is approved

### DNS Not Working?
- See `DNS_CONFIGURATION_GUIDE.md` for detailed troubleshooting
- Make sure you added all 4 A records
- Wait 24-48 hours for full propagation

---

## 📚 Resources

- **GitHub Education**: https://education.github.com/pack
- **Namecheap GitHub Offer**: https://nc.me/landing/github
- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **DNS Propagation Checker**: https://www.whatsmydns.net/

---

## 🚀 Next Steps

1. **Claim your GitHub Education benefits** (if not done yet)
2. **Choose and register your free domain**
3. **Update the CNAME file** in this project
4. **Configure DNS records** at your registrar
5. **Enable GitHub Pages** and add custom domain
6. **Wait for DNS propagation**
7. **Your site will be live!** 🎉

Good luck! If you need help with any step, let me know! 🎸
