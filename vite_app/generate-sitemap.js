import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const DOMAIN = 'https://jatinrajvani.me';
const OUTPUT_PATH = path.join(__dirname, 'public', 'sitemap.xml');

// Define your routes with their properties
const routes = [
    {
        path: '/',
        changefreq: 'weekly',
        priority: 1.0,
        lastmod: new Date().toISOString().split('T')[0]
    },
    {
        path: '/about',
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString().split('T')[0]
    },
    {
        path: '/projects',
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString().split('T')[0]
    },
    {
        path: '/certificates',
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString().split('T')[0]
    },
    {
        path: '/resume',
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString().split('T')[0]
    },
    {
        path: '/contact',
        changefreq: 'yearly',
        priority: 0.6,
        lastmod: new Date().toISOString().split('T')[0]
    }
];

// Generate sitemap XML
function generateSitemap() {
    const urls = routes.map(route => `  <url>
    <loc>${DOMAIN}${route.path}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n  \n');

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  
${urls}
  
</urlset>`;

    return sitemap;
}

// Write sitemap to file
function writeSitemap() {
    try {
        const sitemap = generateSitemap();
        fs.writeFileSync(OUTPUT_PATH, sitemap, 'utf8');
        console.log('✅ Sitemap generated successfully at:', OUTPUT_PATH);
        console.log(`📍 Total URLs: ${routes.length}`);
        console.log('\nGenerated URLs:');
        routes.forEach(route => {
            console.log(`  - ${DOMAIN}${route.path} (priority: ${route.priority})`);
        });
    } catch (error) {
        console.error('❌ Error generating sitemap:', error);
        process.exit(1);
    }
}

// Run the generator
writeSitemap();
