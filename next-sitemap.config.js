/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://hustle90.com',
  generateRobotsTxt: false, // We already have robots.txt
  generateIndexSitemap: false,
  exclude: ['/coming-soon', '/admin/*', '/*.vercel.app/*'],
  
  // Generate additional sitemaps
  additionalPaths: async (config) => {
    const result = [];

    // Add your dynamic blog posts here
    // Example: const posts = await fetchBlogPosts();
    // posts.forEach(post => {
    //   result.push({
    //     loc: `/blog/${post.slug}`,
    //     lastmod: post.updatedAt,
    //     changefreq: 'weekly',
    //     priority: 0.8,
    //   });
    // });

    return result;
  },

  transform: async (config, path) => {
    // Custom priority for different pages
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.startsWith('/blog/')) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path.startsWith('/features') || path.startsWith('/pricing')) {
      priority = 0.9;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};