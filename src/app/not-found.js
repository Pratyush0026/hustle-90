import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
            <div className="max-w-2xl w-full text-center">
                <h1 className="text-9xl font-bold text-gray-800 mb-4">404</h1>
                <h2 className="text-3xl font-semibold text-gray-700 mb-4">
                    Page Not Found
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                    The page you're looking for doesn't exist or has been moved.
                </p>

                {/* Search Box */}
                <div className="mb-8">
                    <form action="/search" method="GET" className="max-w-md mx-auto">
                        <div className="flex gap-2">
                            <input
                                type="search"
                                name="q"
                                placeholder="Search our site..."
                                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </div>

                {/* Quick Links */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <Link
                        href="/"
                        className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                    >
                        Go Home
                    </Link>
                    <Link
                        href="/features"
                        className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        View Features
                    </Link>
                    <Link
                        href="/contact"
                        className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Popular Pages */}
                <div className="text-left max-w-md mx-auto">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">
                        Popular Pages:
                    </h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/pricing" className="text-blue-600 hover:underline">
                                → Pricing Plans
                            </Link>
                        </li>
                        <li>
                            <Link href="/blogs" className="text-blue-600 hover:underline">
                                → Blog Articles
                            </Link>
                        </li>
                        <li>
                            <Link href="/faq" className="text-blue-600 hover:underline">
                                → Frequently Asked Questions
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-blue-600 hover:underline">
                                → About Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}