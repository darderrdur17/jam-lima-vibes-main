# Namecheap DNS Setup for jamlimaofficial.me

Quick guide to configure your Namecheap domain for GitHub Pages.

## ✅ What's Already Done

- ✅ Domain registered: `jamlimaofficial.me`
- ✅ CNAME file updated in your project
- ⏳ Next: Configure DNS records

---

## 🔧 Step-by-Step: Configure DNS in Namecheap

### Step 1: Access Namecheap DNS Settings

1. **Log in** to your Namecheap account
2. Go to **Domain List** (top menu)
3. Find `jamlimaofficial.me` in your domain list
4. Click the **Manage** button (or click on the domain name)

### Step 2: Navigate to DNS Settings

1. You'll see several tabs: **Overview**, **Domain**, **Advanced DNS**, etc.
2. Click on the **Advanced DNS** tab
3. Scroll down to the **Host Records** section

### Step 3: Remove Existing Records (if any)

1. Look for any existing A records or CNAME records
2. If you see records pointing to other IPs or domains, click the **trash icon** to delete them
3. Keep any records you want to preserve (like email records)

### Step 4: Add 4 A Records for GitHub Pages

You need to add **4 separate A records**. For each one:

1. Click the **Add New Record** button
2. Fill in the details:
   - **Type**: Select `A Record` from dropdown
   - **Host**: Type `@` (or leave it blank/empty)
   - **Value**: Enter one of these IPs (add them one by one):
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **TTL**: Select `Automatic` (or `30 min`)
3. Click the **green checkmark** (✓) to save
4. **Repeat this process 3 more times** for the other 3 IP addresses

**You should end up with 4 A records** that look like this:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A Record | @ | 185.199.108.153 | Automatic |
| A Record | @ | 185.199.109.153 | Automatic |
| A Record | @ | 185.199.110.153 | Automatic |
| A Record | @ | 185.199.111.153 | Automatic |

### Step 5: Add CNAME for www (Optional but Recommended)

1. Click **Add New Record** again
2. Fill in:
   - **Type**: `CNAME Record`
   - **Host**: Type `www`
   - **Value**: `yourusername.github.io` (replace `yourusername` with your actual GitHub username)
   - **TTL**: `Automatic`
3. Click the **green checkmark** (✓) to save

> **How to find your GitHub username?** 
> - Go to https://github.com and check your profile URL
> - It will be something like: `https://github.com/yourusername`
> - Use that username in the CNAME value

### Step 6: Save and Wait

1. **Double-check** you have exactly 4 A records
2. All records should be saved (green checkmarks visible)
3. **Wait 5-30 minutes** for DNS to propagate

---

## ✅ Step 7: Enable GitHub Pages

### In Your GitHub Repository:

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**, select:
   - **Source**: `GitHub Actions` (recommended - this will use the workflow we created)
   - OR **Deploy from a branch**: Select `main` branch and `/docs` folder
5. Under **Custom domain**, enter: `jamlimaofficial.me`
6. Check the box **"Enforce HTTPS"** (will be available after DNS propagates)
7. Click **Save**

### GitHub will show:
- ⏳ **"DNS check pending"** - DNS is still propagating (wait 30 min - 24 hours)
- ✅ **"DNS check successful"** - Ready to go!
- ❌ **"DNS check failed"** - Check your DNS records

---

## 🔍 Step 8: Verify DNS Propagation

After 10-30 minutes, check if DNS is working:

1. **Check A Records**:
   - Visit: https://www.whatsmydns.net/#A/jamlimaofficial.me
   - You should see the 4 GitHub IPs appearing globally
   - Green checkmarks = working ✅

2. **Check in GitHub**:
   - Go to repository → Settings → Pages
   - Look for "DNS check successful" message

3. **Test Your Domain**:
   - Visit: `https://jamlimaofficial.me`
   - Your site should load! 🎉

---

## ⚠️ Common Issues & Solutions

### Issue: "DNS check failed" in GitHub

**Solution:**
- Double-check you added all 4 A records (not just 1 or 2)
- Make sure the IPs are exactly: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- Verify the Host field is `@` (or blank)
- Wait 30 minutes and check again

### Issue: Domain not loading after 24 hours

**Solution:**
- Verify DNS propagation: https://www.whatsmydns.net/#A/jamlimaofficial.me
- Check GitHub Pages is enabled and deployed
- Make sure CNAME file exists: `public/CNAME` with content `jamlimaofficial.me`
- Check GitHub Actions workflow ran successfully

### Issue: "Too many redirects" or SSL error

**Solution:**
- Wait a few hours for GitHub to provision SSL certificate
- Make sure "Enforce HTTPS" is checked in GitHub Pages settings
- Clear your browser cache

---

## 📋 Quick Checklist

- [ ] Logged into Namecheap
- [ ] Navigated to Advanced DNS for `jamlimaofficial.me`
- [ ] Added 4 A records (one for each GitHub IP)
- [ ] Added CNAME record for www (optional)
- [ ] Committed and pushed CNAME file update to GitHub
- [ ] Enabled GitHub Pages in repository settings
- [ ] Added `jamlimaofficial.me` as custom domain
- [ ] Waited 30 minutes for DNS propagation
- [ ] Verified DNS at whatsmydns.net
- [ ] Tested domain at https://jamlimaofficial.me

---

## 🚀 Next Steps After DNS is Working

1. **Commit your changes**:
   ```bash
   git add public/CNAME docs/CNAME
   git commit -m "Update domain to jamlimaofficial.me"
   git push
   ```

2. **Wait for GitHub Actions to deploy** (automatic on push)

3. **Verify your site**:
   - Visit: https://jamlimaofficial.me
   - Visit: https://www.jamlimaofficial.me (if you added the CNAME)

4. **Share your website!** 🎸

---

## 📞 Need Help?

- **Namecheap Support**: https://www.namecheap.com/support/
- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **DNS Checker**: https://www.whatsmydns.net/

Good luck! Your site should be live soon! 🎉
