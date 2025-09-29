export async function GET() {
  // List all your important images
  const images = [
    {
      loc: 'https://hustle90.com/assets/logo.png',
      title: 'Company Logo',
      caption: 'Official company logo',
    },
    {
      loc: 'https://hustle90.com/assets/herobg.mp4',
      title: 'Hero Background Video',
      caption: 'Homepage hero section background',
    },
    {
      loc: 'https://hustle90.com/assets/ai-work.png',
      title: 'AI Work Feature',
      caption: 'AI-powered work automation feature',
    },
    {
      loc: 'https://hustle90.com/assets/investment-tracker.png',
      title: 'Investment Tracker',
      caption: 'Track your investments in real-time',
    },
    // Add more images from your /public/assets folder
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${images
    .map(
      (img) => `
  <url>
    <loc>https://hustle90.com/</loc>
    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>
  </url>`
    )
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}