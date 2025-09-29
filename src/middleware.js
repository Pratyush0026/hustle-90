import { NextResponse } from 'next/server';

// List of retired URLs that should return 410 Gone
const retiredUrls = [
  '/old-page',
  '/deprecated-feature',
  '/retired-blog-post',
  // Add your retired URLs here
];

export function middleware(request) {
  const url = request.nextUrl;
  const hostname = request.headers.get('host') || '';

  // Block Vercel preview URLs from being indexed
  if (hostname.includes('vercel.app')) {
    const response = NextResponse.next();
    response.headers.set('X-Robots-Tag', 'noindex');
    return response;
  }

  // Handle retired URLs - return 410 Gone
  if (retiredUrls.includes(url.pathname)) {
    return new NextResponse(
      'This page has been permanently removed.',
      {
        status: 410,
        headers: {
          'Content-Type': 'text/plain',
        },
      }
    );
  }

  return NextResponse.next();
}

// Configure which routes use this middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};