# 📝 Quick SEO Reference Card

## 🎯 How to Add SEO to Any Page

### Template:
```jsx
import SEO from '../../Components/SEO';
import { seoConfig } from '../../config/seoConfig';

const YourPage = () => {
  const { title, description, keywords, canonicalUrl } = seoConfig.pages.PAGENAME;
  
  return (
    <>
      <SEO 
        title={title}
        description={description}
        keywords={keywords}
        canonicalUrl={`${seoConfig.default.siteUrl}${canonicalUrl}`}
      />
      {/* Your page content */}
    </>
  );
};
```

## 📄 Pages Status

- ✅ **Home** - SEO Added
- ✅ **About** - SEO Added
- ⬜ **Projects** - Needs SEO
- ⬜ **Certificates** - Needs SEO
- ⬜ **Contact** - Needs SEO
- ⬜ **Resume** - Needs SEO

## 🔧 Quick Actions Needed

1. **Update URLs** in:
   - `index.html`
   - `config/seoConfig.js`
   - `public/robots.txt`
   - `public/sitemap.xml`

2. **Create OG Image**:
   - Size: 1200x630px
   - Save as: `public/og-image.jpg`

3. **Update Social Links** in `config/seoConfig.js`

4. **Add SEO to remaining pages** (see template above)

## 🧪 Testing Tools

- **Lighthouse**: Chrome DevTools → Lighthouse tab
- **Google Rich Results**: https://search.google.com/test/rich-results
- **Facebook Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Validator**: https://cards-dev.twitter.com/validator

## 📊 After Deployment

1. Submit to Google Search Console
2. Submit to Bing Webmaster Tools
3. Monitor with Google Analytics
4. Regular Lighthouse audits

---

**Full Guide**: See `SEO_GUIDE.md` for complete documentation
