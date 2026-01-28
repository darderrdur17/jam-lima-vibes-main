# DNS Configuration Guide for jamlimaofficial.com

This guide provides step-by-step instructions for configuring DNS records to connect your custom domain to GitHub Pages.

## 📋 What You Need

**Domain**: `jamlimaofficial.com`  
**DNS Records Required**:
- **4 A Records** for the apex domain (jamlimaofficial.com)
- **1 CNAME Record** for www subdomain (optional but recommended)

## 🎯 DNS Records to Add

### For Apex Domain (jamlimaofficial.com)
Add these **4 A Records**:

| Type | Name/Host | Value/Points To | TTL |
|------|-----------|-----------------|-----|
| A | @ (or blank) | 185.199.108.153 | 3600 (or Auto) |
| A | @ (or blank) | 185.199.109.153 | 3600 (or Auto) |
| A | @ (or blank) | 185.199.110.153 | 3600 (or Auto) |
| A | @ (or blank) | 185.199.111.153 | 3600 (or Auto) |

### For www Subdomain (www.jamlimaofficial.com) - Optional
Add this **CNAME Record**:

| Type | Name/Host | Value/Points To | TTL |
|------|-----------|-----------------|-----|
| CNAME | www | `yourusername.github.io` | 3600 (or Auto) |

> **Note**: Replace `yourusername` with your actual GitHub username. You can find this in your GitHub profile URL.

---

## 🔧 Step-by-Step Instructions by Registrar

### 1. Namecheap (Common for GitHub Education)

1. **Log in** to your Namecheap account
2. Go to **Domain List** → Click **Manage** next to `jamlimaofficial.com`
3. Navigate to **Advanced DNS** tab
4. Scroll to **Host Records** section

#### Add A Records:
   - Click **Add New Record**
   - For each IP address, add:
     - **Type**: `A Record`
     - **Host**: `@` (or leave blank)
     - **Value**: `185.199.108.153` (first one)
     - **TTL**: `Automatic` or `30 min`
     - Click **Save** (green checkmark)
   - Repeat for the other 3 IPs:
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

5. **Remove any existing A records** that point to different IPs
6. Wait 5-30 minutes for changes to propagate

---

### 2. GoDaddy

1. **Log in** to GoDaddy
2. Go to **My Products** → Click **DNS** next to `jamlimaofficial.com`
3. Scroll to **Records** section

#### Add A Records:
   - Click **Add** button
   - For each IP:
     - **Type**: `A`
     - **Name**: `@` (or leave blank)
     - **Value**: `185.199.108.153` (first one)
     - **TTL**: `600 seconds` (or default)
     - Click **Save**
   - Repeat for all 4 IP addresses

#### Add CNAME for www:
   - Click **Add**
   - **Type**: `CNAME`
   - **Name**: `www`
   - **Value**: `yourusername.github.io`
   - **TTL**: `600 seconds`
   - Click **Save**

4. **Delete** any conflicting A or CNAME records
5. Changes usually take 10-30 minutes

---

### 3. Cloudflare

1. **Log in** to Cloudflare
2. Select your domain `jamlimaofficial.com`
3. Go to **DNS** → **Records**

#### Add A Records:
   - Click **Add record**
   - For each IP:
     - **Type**: `A`
     - **Name**: `@` (or `jamlimaofficial.com`)
     - **IPv4 address**: `185.199.108.153` (first one)
     - **Proxy status**: 🟠 **DNS only** (gray cloud) - **Important!**
     - **TTL**: `Auto`
     - Click **Save**
   - Add all 4 A records

#### Add CNAME for www:
   - Click **Add record**
   - **Type**: `CNAME`
   - **Name**: `www`
   - **Target**: `yourusername.github.io`
   - **Proxy status**: 🟠 **DNS only** (gray cloud)
   - **TTL**: `Auto`
   - Click **Save**

> ⚠️ **Important**: Make sure the proxy status is **DNS only** (gray cloud), not proxied (orange cloud). GitHub Pages doesn't work with Cloudflare's proxy.

---

### 4. Google Domains / Google Workspace

1. **Log in** to Google Domains
2. Click on `jamlimaofficial.com`
3. Go to **DNS** section

#### Add A Records:
   - Scroll to **Custom resource records**
   - For each IP:
     - **Name**: `@` (or leave blank)
     - **Type**: `A`
     - **Data**: `185.199.108.153` (first one)
     - **TTL**: `3600`
     - Click **Add**
   - Add all 4 A records

#### Add CNAME for www:
   - **Name**: `www`
   - **Type**: `CNAME`
   - **Data**: `yourusername.github.io`
   - **TTL**: `3600`
   - Click **Add**

4. Changes propagate in 5-30 minutes

---

### 5. Domain.com

1. **Log in** to Domain.com
2. Go to **My Domains** → Click **Manage** on `jamlimaofficial.com`
3. Click **DNS & Nameservers** tab
4. Scroll to **DNS Records**

#### Add A Records:
   - Click **Add Record**
   - For each IP:
     - **Type**: `A`
     - **Host**: `@` (or leave blank)
     - **Points to**: `185.199.108.153` (first one)
     - **TTL**: `3600`
     - Click **Add Record**
   - Repeat for all 4 IPs

#### Add CNAME for www:
   - **Type**: `CNAME`
   - **Host**: `www`
   - **Points to**: `yourusername.github.io`
   - **TTL**: `3600`
   - Click **Add Record**

---

### 6. Hover

1. **Log in** to Hover
2. Click **Domains** → Select `jamlimaofficial.com`
3. Go to **DNS** tab

#### Add A Records:
   - Click **Add a record**
   - For each IP:
     - **Type**: `A`
     - **Hostname**: `@` (or leave blank)
     - **Points to**: `185.199.108.153` (first one)
     - Click **Add**
   - Add all 4 A records

#### Add CNAME for www:
   - **Type**: `CNAME`
   - **Hostname**: `www`
   - **Points to**: `yourusername.github.io`
   - Click **Add**

---

### 7. Other Registrars

If your registrar isn't listed above, look for:
- **DNS Management** or **DNS Settings**
- **DNS Records** or **Zone Editor**
- **Advanced DNS** or **Name Servers**

Then add the same records:
- **4 A Records** pointing to the GitHub Pages IPs
- **1 CNAME Record** for www (optional)

---

## ✅ Verification Steps

### Step 1: Check DNS Propagation

After adding DNS records, verify they're propagating:

1. **Check A Records**:
   - Visit: https://www.whatsmydns.net/#A/jamlimaofficial.com
   - You should see the 4 GitHub IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - It may take 5 minutes to 48 hours (usually 30 minutes)

2. **Check CNAME** (if you added www):
   - Visit: https://www.whatsmydns.net/#CNAME/www.jamlimaofficial.com
   - Should point to `yourusername.github.io`

### Step 2: Verify in GitHub

1. Go to your repository on GitHub
2. **Settings** → **Pages**
3. Under **Custom domain**, you should see `jamlimaofficial.com`
4. GitHub will show:
   - ✅ **"DNS check successful"** when DNS is configured correctly
   - ⚠️ **"DNS check pending"** if still propagating
   - ❌ **"DNS check failed"** if there's an error

### Step 3: Test Your Domain

Once DNS propagates (usually 30 minutes to 24 hours):

1. Visit `http://jamlimaofficial.com` (should redirect to HTTPS)
2. Visit `https://jamlimaofficial.com` (should show your site)
3. Visit `https://www.jamlimaofficial.com` (if configured)

---

## 🔍 Troubleshooting

### DNS Not Working After 24 Hours?

1. **Double-check your records**:
   - Make sure you added all 4 A records
   - Verify IP addresses are correct: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Check for typos in the domain name

2. **Remove conflicting records**:
   - Delete any old A records pointing to different IPs
   - Remove any CNAME records for the apex domain (@)

3. **Check CNAME file**:
   - Verify `public/CNAME` contains `jamlimaofficial.com` (no www, no trailing slash)
   - The file should be in your repository

4. **Clear DNS cache**:
   ```bash
   # On Mac/Linux
   sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
   
   # On Windows
   ipconfig /flushdns
   ```

### Common Mistakes

❌ **Wrong**: Only adding 1 or 2 A records (need all 4)  
❌ **Wrong**: Using CNAME for apex domain (must use A records)  
❌ **Wrong**: Pointing to `github.io` instead of IP addresses for A records  
❌ **Wrong**: CNAME file contains `www.jamlimaofficial.com` when you want apex domain  
❌ **Wrong**: Cloudflare proxy enabled (must be DNS only)

✅ **Correct**: 4 A records for apex domain  
✅ **Correct**: CNAME for www subdomain  
✅ **Correct**: CNAME file contains just `jamlimaofficial.com`

---

## 📝 Quick Checklist

- [ ] Added 4 A records for `jamlimaofficial.com` (apex domain)
- [ ] Added 1 CNAME record for `www.jamlimaofficial.com` (optional)
- [ ] Removed any conflicting DNS records
- [ ] Verified CNAME file exists: `public/CNAME` with content `jamlimaofficial.com`
- [ ] Enabled GitHub Pages in repository settings
- [ ] Waited 30 minutes - 24 hours for DNS propagation
- [ ] Checked DNS propagation at whatsmydns.net
- [ ] Verified domain works at https://jamlimaofficial.com

---

## 🆘 Still Need Help?

- **GitHub Pages Docs**: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
- **DNS Propagation Checker**: https://www.whatsmydns.net/
- **GitHub Support**: https://support.github.com/

---

## 📞 Next Steps After DNS is Configured

1. ✅ DNS records added
2. ⏳ Wait for propagation (30 min - 24 hours)
3. ⏳ GitHub will automatically detect your domain
4. ⏳ SSL certificate will be provisioned automatically (may take a few hours)
5. ✅ Your site will be live at https://jamlimaofficial.com

Good luck! 🚀
