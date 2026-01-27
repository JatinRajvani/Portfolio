# 🌐 Domain Connection Guide - jatinrajvani.me

## ✅ What's Been Done
All SEO files have been updated with your domain **jatinrajvani.me**:
- ✅ index.html
- ✅ config/seoConfig.js
- ✅ public/robots.txt
- ✅ public/sitemap.xml
- ✅ HomePage.jsx

---

## 🚀 Next Steps: Connect Your Domain to Vercel

### **Step 1: Add Domain in Vercel Dashboard**

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your portfolio project
3. Click on **Settings** (top navigation)
4. Click on **Domains** (left sidebar)
5. In the "Add Domain" field, enter: `jatinrajvani.me`
6. Click **Add**
7. Also add `www.jatinrajvani.me` (recommended for www redirect)

Vercel will show you DNS records that need to be added.

---

### **Step 2: Configure DNS in Namecheap**

#### For Root Domain (jatinrajvani.me):

1. Log into [Namecheap](https://www.namecheap.com/)
2. Go to **Domain List** → Click **Manage** next to jatinrajvani.me
3. Click on **Advanced DNS** tab
4. Add the following records:

**A Record:**
- Type: `A Record`
- Host: `@`
- Value: `76.76.21.21` (Vercel's IP)
- TTL: Automatic

**CNAME Record (for www):**
- Type: `CNAME Record`
- Host: `www`
- Value: `cname.vercel-dns.com.`
- TTL: Automatic

> **Note**: Vercel will show you the exact DNS records in their dashboard. Use those values if they're different!

#### Alternative Method (Easier):

Instead of A Record, you can use CNAME for root domain:
- Type: `CNAME Record`
- Host: `@`
- Value: Your Vercel project URL (e.g., `your-project.vercel.app`)
- TTL: Automatic

---

### **Step 3: Wait for DNS Propagation**

- DNS changes can take **5 minutes to 48 hours** to propagate
- Usually takes **15-30 minutes** for Namecheap
- You can check status at: https://dnschecker.org/

---

### **Step 4: Deploy Your Updated Code**

Since you've already deployed to Vercel, you need to push the updated SEO files:

```bash
# Navigate to your project
cd c:\Users\Jatin Rajvani\Desktop\New_Portfolio_old\vite_app

# Add all changes
git add .

# Commit changes
git commit -m "Update SEO with custom domain jatinrajvani.me"

# Push to GitHub (Vercel will auto-deploy)
git push
```

Vercel will automatically redeploy with your new SEO settings!

---

### **Step 5: Verify Domain Connection**

After DNS propagates:

1. Visit https://jatinrajvani.me
2. Check if it loads your portfolio
3. Verify SSL certificate is active (🔒 in browser)
4. Test www redirect: https://www.jatinrajvani.me

---

## 🧪 Test Your SEO

Once your domain is live, test with these tools:

### 1. **Lighthouse (Chrome DevTools)**
- Press F12 → Lighthouse tab
- Run SEO audit
- Aim for 90+ score

### 2. **Google Rich Results Test**
- URL: https://search.google.com/test/rich-results
- Enter: https://jatinrajvani.me
- Check for structured data

### 3. **Facebook Sharing Debugger**
- URL: https://developers.facebook.com/tools/debug/
- Enter: https://jatinrajvani.me
- See preview card

### 4. **Twitter Card Validator**
- URL: https://cards-dev.twitter.com/validator
- Enter: https://jatinrajvani.me
- See Twitter preview

---

## 📊 After Domain is Live

### Submit to Search Engines:

#### **Google Search Console**
1. Go to: https://search.google.com/search-console
2. Add property: `jatinrajvani.me`
3. Verify ownership (DNS or HTML file method)
4. Submit sitemap: `https://jatinrajvani.me/sitemap.xml`
5. Request indexing for main pages

#### **Bing Webmaster Tools**
1. Go to: https://www.bing.com/webmasters
2. Add site: `jatinrajvani.me`
3. Verify ownership
4. Submit sitemap: `https://jatinrajvani.me/sitemap.xml`

---

## 🎨 Create Your OG Image

Before going live, create a social media preview image:

### Recommended Specs:
- **Size**: 1200 x 630 pixels
- **Format**: JPG or PNG
- **File name**: `og-image.jpg`
- **Location**: `public/og-image.jpg`

### What to Include:
- Your name: "Jatin Rajvani"
- Your title: "Full Stack Developer"
- Optional: Your photo, logo, or design elements
- Use your brand colors (gold/amber from your site)

### Tools to Create:
- **Canva** (Free): https://www.canva.com/
  - Search for "Open Graph Image" template
  - Customize with your info
  - Download as JPG

- **Figma** (Free): https://www.figma.com/
  - Create 1200x630 frame
  - Design your image
  - Export as JPG

---

## 🔧 Troubleshooting

### Domain not connecting?
- Check DNS records in Namecheap
- Wait longer for DNS propagation
- Clear browser cache
- Try incognito mode

### SSL certificate error?
- Vercel automatically provisions SSL
- Wait 5-10 minutes after domain connects
- Check Vercel dashboard for SSL status

### SEO not working?
- Make sure you pushed updated code to GitHub
- Check Vercel deployment logs
- Verify files are in `public` folder (robots.txt, sitemap.xml)
- Test with Lighthouse

---

## ✅ Final Checklist

Before going live:
- ✅ Domain added in Vercel
- ✅ DNS configured in Namecheap
- ✅ Code pushed to GitHub
- ✅ OG image created and uploaded
- ⬜ Social media links updated in `config/seoConfig.js`
- ⬜ Test all pages load correctly
- ⬜ Test SEO with Lighthouse
- ⬜ Submit to Google Search Console
- ⬜ Submit to Bing Webmaster Tools

---

## 📱 Update Social Links (Optional)

In `src/config/seoConfig.js`, update your social media URLs:

```javascript
social: {
  linkedin: 'https://linkedin.com/in/YOUR_PROFILE',
  github: 'https://github.com/YOUR_USERNAME',
  twitter: 'https://x.com/YOUR_HANDLE',
  email: 'your.email@example.com',
},
```

Also update in the structured data section:
```javascript
sameAs: [
  'https://linkedin.com/in/YOUR_PROFILE',
  'https://github.com/YOUR_USERNAME',
  'https://x.com/YOUR_HANDLE',
],
```

---

## 🎉 You're All Set!

Your portfolio is now SEO-ready with your custom domain **jatinrajvani.me**!

Once you connect the domain and deploy, your portfolio will:
- ✅ Rank in Google search results
- ✅ Show beautiful previews on social media
- ✅ Have professional branding
- ✅ Be discoverable by recruiters

**Good luck!** 🚀
