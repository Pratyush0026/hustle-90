'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { createClient } from 'contentful'

const BlogSection = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  // Initialize Contentful client
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  })

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'blogPost',
          limit: 3,
          order: '-sys.createdAt'
        })
        setBlogs(response.items)
      } catch (error) {
        console.error('Error fetching blogs:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    })
  }

  if (loading) {
    return (
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex animate-pulse">
            <div className="h-20 bg-gray-200 rounded w-32 mb-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-64 bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Blog Tag */}
        <div className="mb-8 md:mb-12">
          <span 
            className="inline-flex justify-center items-center px-5 py-2 text-sm font-medium text-[#E6651F] bg-white border border-[#E6651F] rounded-full"
            style={{
              boxShadow: '0 2.26px 5.65px 0 rgba(0, 0, 0, 0.07), 0 9.041px 9.041px 0 rgba(0, 0, 0, 0.06), 0 21.471px 12.431px 0 rgba(0, 0, 0, 0.04), 0 37.293px 14.691px 0 rgba(0, 0, 0, 0.01)'
            }}
          >
            BLOG
          </span>
        </div>

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-12 md:mb-16 lg:mb-20">
          <h2 
            className="text-[#1B0C25] mb-6 lg:mb-0 text-4xl md:text-5xl lg:text-[69px] font-semibold leading-tight lg:leading-[74px]"
            style={{ fontFamily: 'DM Sans' }}
          >
            Explore Our Blog And<br />
            Stay Updated
          </h2>
          
          <Link
            href="/blog"
            className="inline-flex justify-center items-center px-8 md:px-12 lg:px-[52px] py-3 md:py-4 lg:py-[18px] text-sm md:text-base font-medium text-gray-700 bg-white border border-[#E6E6E6] rounded-lg hover:bg-gray-50 transition-colors self-start lg:self-center"
          >
            Explore All
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogs.map((blog) => {
            const { title, slug, category, featuredImage, publishedDate } = blog.fields
            const imageUrl = featuredImage?.fields?.file?.url

            return (
              <Link key={blog.sys.id} href={`/blog/${slug}`}>
                <article 
                  className="bg-white border border-[#FF5A00] rounded-2xl p-3 pb-12 md:pb-15 lg:pb-[60px] hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  style={{
                    boxShadow: '0 1px 2px 0 #DA5208'
                  }}
                >
                  {/* Blog Image */}
                  <div className="relative w-full h-48 md:h-56 lg:h-64 mb-5 md:mb-6 lg:mb-[21px] rounded-xl overflow-hidden">
                    {imageUrl ? (
                      <Image
                        src={`https:${imageUrl}`}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div 
                        className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-orange-400 flex items-center justify-center"
                        style={{
                          background: 'url(/api/placeholder/400/300) lightgray 50% / cover no-repeat'
                        }}
                      >
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                          <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Category Tag and Date */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4 md:mb-5 lg:mb-6">
                    <span 
                      className="inline-flex justify-center items-center px-4 md:px-5 py-2 text-xs md:text-sm font-medium text-[#E6651F] bg-white border border-[#E6651F] rounded-full self-start"
                      style={{
                        boxShadow: '0 2.26px 5.65px 0 rgba(0, 0, 0, 0.07), 0 9.041px 9.041px 0 rgba(0, 0, 0, 0.06), 0 21.471px 12.431px 0 rgba(0, 0, 0, 0.04), 0 37.293px 14.691px 0 rgba(0, 0, 0, 0.01)'
                      }}
                    >
                      {category?.toUpperCase() || 'STARTUP'}
                    </span>
                    
                    <span 
                      className="text-[rgba(27,12,37,0.60)] text-sm md:text-[15px] font-normal self-start sm:self-center"
                      style={{ fontFamily: 'Inter' }}
                    >
                      {formatDate(publishedDate || blog.sys.createdAt)}
                    </span>
                  </div>

                  {/* Blog Title */}
                  <h3 
                    className="text-[#1B0C25] text-xl md:text-2xl lg:text-[28px] font-medium leading-tight group-hover:text-[#FF5A00] transition-colors"
                    style={{ fontFamily: 'Inter' }}
                  >
                    {title}
                  </h3>
                </article>
              </Link>
            )
          })}
        </div>

        {/* Fallback for no blogs */}
        {blogs.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No blog posts available yet.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default BlogSection