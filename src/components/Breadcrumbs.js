'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Breadcrumbs() {
    const pathname = usePathname();
    const [breadcrumbItems, setBreadcrumbItems] = useState([]);

    useEffect(() => {
        // Generate breadcrumb items from pathname
        const pathSegments = pathname.split('/').filter(Boolean);

        const items = [
            { name: 'Home', url: '/' },
            ...pathSegments.map((segment, index) => {
                const url = '/' + pathSegments.slice(0, index + 1).join('/');
                const name = segment
                    .split('-')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ');
                return { name, url };
            }),
        ];

        setBreadcrumbItems(items);

        // Generate JSON-LD structured data
        const jsonLd = {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            'itemListElement': items.map((item, index) => ({
                '@type': 'ListItem',
                'position': index + 1,
                'name': item.name,
                'item': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://hustle90.com'}${item.url}`,
            })),
        };

        // Add or update the JSON-LD script
        let script = document.getElementById('breadcrumb-schema');
        if (!script) {
            script = document.createElement('script');
            script.id = 'breadcrumb-schema';
            script.type = 'application/ld+json';
            document.head.appendChild(script);
        }
        script.textContent = JSON.stringify(jsonLd);

        return () => {
            // Cleanup on unmount
            const existingScript = document.getElementById('breadcrumb-schema');
            if (existingScript) {
                existingScript.remove();
            }
        };
    }, [pathname]);

    // Don't show breadcrumbs on home page
    if (pathname === '/') return null;

    return (
        <nav aria-label="Breadcrumb" className="py-3 px-4 bg-gray-50 border-b border-gray-200">
            <div className="max-w-7xl mx-auto">
                <ol className="flex flex-wrap items-center gap-2 text-sm">
                    {breadcrumbItems.map((item, index) => (
                        <li key={item.url} className="flex items-center gap-2">
                            {index > 0 && (
                                <svg
                                    className="w-4 h-4 text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            )}
                            {index === breadcrumbItems.length - 1 ? (
                                <span className="text-gray-600 font-medium" aria-current="page">
                                    {item.name}
                                </span>
                            ) : (
                                <Link
                                    href={item.url}
                                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                                >
                                    {item.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        </nav>
    );
}