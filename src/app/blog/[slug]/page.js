import { createClient } from 'contentful'
import Image from 'next/image'
import Link from 'next/link'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

async function getBlogPost(slug) {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1,
    })

    if (response.items.length === 0) {
      return null
    }

    return response.items[0]
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

export default async function BlogPost({ params }) {
  const resolvedParams = await params
  const blog = await getBlogPost(resolvedParams.slug)

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1B0C25] mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-[#FF5A00] rounded-lg hover:bg-[#E6651F] transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  const { title, category, featuredImage, publishedDate, content } = blog.fields
  const imageUrl = featuredImage?.fields?.file?.url

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    })
  }

  let h3Counter = 0 
  
  const renderOptions = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 
          className="text-left mb-8 md:mb-12 mt-16 md:mt-20 lg:mt-24 first:mt-0"
          style={{ 
            fontFamily: 'DM Sans',
            fontSize: '65px',
            fontWeight: '600',
            lineHeight: '75px',
            color: '#1B0C25'
          }}
        >
          {children}
        </h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => {
        h3Counter++
        const isEven = h3Counter % 2 === 0
        
        return (
          <h3 
            className={`text-left mb-4 md:mb-6 ${isEven ? 'pl-4 md:pl-6 lg:pl-8' : ''}`}
            style={{ 
              fontFamily: 'Poppins',
              fontSize: '21px',
              fontWeight: '500',
              lineHeight: 'normal',
              textTransform: 'capitalize',
              color: '#FF5A00'
            }}
          >
            {children}
          </h3>
        )
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        const isAfterEvenH3 = h3Counter % 2 === 0
        
        return (
          <p 
            className={`text-left mb-8 md:mb-12 ${isAfterEvenH3 ? 'pl-4 md:pl-6 lg:pl-8' : ''}`}
            style={{ 
              fontFamily: 'Poppins',
              fontSize: '21px',
              fontWeight: '400',
              lineHeight: 'normal',
              textTransform: 'capitalize',
              color: '#000'
            }}
          >
            {children}
          </p>
        )
      },
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="pt-8 md:pt-12 lg:pt-16 mb-6 md:mb-8 text-center">
          {category && (
            <span 
              className="inline-flex justify-center items-center px-6 md:px-8 lg:px-[26px] py-2 md:py-3 lg:py-[8px] text-sm md:text-base font-medium text-[#E6651F] bg-white rounded-full"
              style={{
                border: '1.13px solid #E6651F',
                borderRadius: '1130.077px',
                boxShadow: '0 2.26px 5.65px 0 rgba(0, 0, 0, 0.07), 0 9.041px 9.041px 0 rgba(0, 0, 0, 0.06), 0 21.471px 12.431px 0 rgba(0, 0, 0, 0.04), 0 37.293px 14.691px 0 rgba(0, 0, 0, 0.01)'
              }}
            >
              {category.toUpperCase()}
            </span>
          )}
        </div>

        <div className="mb-6 md:mb-8 lg:mb-10">
          <h1 
            className="text-[#1B0C25] text-center text-3xl md:text-5xl lg:text-[85px] font-semibold leading-tight md:leading-[1.2] lg:leading-[79px] max-w-5xl mx-auto px-4"
            style={{ fontFamily: 'DM Sans' }}
          >
            {title}
          </h1>
        </div>

        <div className="mb-8 md:mb-12 lg:mb-16 text-center">
          <p 
            className="text-[#757474] text-base md:text-lg lg:text-[18px] font-semibold"
            style={{ fontFamily: 'DM Sans' }}
          >
            {formatDate(publishedDate || blog.sys.createdAt)}
          </p>
        </div>

        {imageUrl && (
          <div className="mb-12 md:mb-16 lg:mb-20 flex justify-center">
            <div className="relative w-full max-w-[1064px] h-64 md:h-96 lg:h-[600px] rounded-xl overflow-hidden">
              <Image
                src={`https:${imageUrl}`}
                alt={title}
                fill
                className="object-cover"
                style={{ borderRadius: '12px' }}
                priority
              />
            </div>
          </div>
        )}

        <div className="max-w-5xl mx-auto pb-16 md:pb-20 lg:pb-24">
          
          {content ? (
            <div className="space-y-0">
              {documentToReactComponents(content, renderOptions)}
            </div>
          ) : (
            <div className="space-y-8 md:space-y-12 animate-pulse">
              
              <div className="mb-8 md:mb-12">
                <div className="h-12 md:h-16 lg:h-20 bg-gray-200 rounded-lg w-3/4"></div>
              </div>

              <div className="space-y-8 md:space-y-12">
                
                <div className="space-y-4 md:space-y-6">
                  <div className="h-6 md:h-7 lg:h-8 bg-gray-200 rounded w-1/3"></div>
                  <div className="space-y-3">
                    <div className="h-5 md:h-6 lg:h-7 bg-gray-200 rounded w-full"></div>
                    <div className="h-5 md:h-6 lg:h-7 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-5 md:h-6 lg:h-7 bg-gray-200 rounded w-4/5"></div>
                  </div>
                </div>

                <div className="space-y-4 md:space-y-6 pl-4 md:pl-6 lg:pl-8">
                  <div className="h-6 md:h-7 lg:h-8 bg-gray-200 rounded w-1/2"></div>
                  <div className="space-y-3">
                    <div className="h-5 md:h-6 lg:h-7 bg-gray-200 rounded w-full"></div>
                    <div className="h-5 md:h-6 lg:h-7 bg-gray-200 rounded w-4/5"></div>
                    <div className="h-5 md:h-6 lg:h-7 bg-gray-200 rounded w-5/6"></div>
                  </div>
                </div>

                <div className="space-y-4 md:space-y-6">
                  <div className="h-6 md:h-7 lg:h-8 bg-gray-200 rounded w-2/5"></div>
                  <div className="space-y-3">
                    <div className="h-5 md:h-6 lg:h-7 bg-gray-200 rounded w-full"></div>
                    <div className="h-5 md:h-6 lg:h-7 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </div>

                <div className="space-y-4 md:space-y-6 pl-4 md:pl-6 lg:pl-8">
                  <div className="h-6 md:h-7 lg:h-8 bg-gray-200 rounded w-1/3"></div>
                  <div className="space-y-3">
                    <div className="h-5 md:h-6 lg:h-7 bg-gray-200 rounded w-full"></div>
                    <div className="h-5 md:h-6 lg:h-7 bg-gray-200 rounded w-5/6"></div>
                  </div>
                </div>

              </div>

              <div className="mt-16 md:mt-20 lg:mt-24">
                <div className="mb-8 md:mb-12">
                  <div className="h-12 md:h-16 lg:h-20 bg-gray-200 rounded-lg w-4/5"></div>
                </div>

                <div className="space-y-8 md:space-y-12">
                  
                  <div className="space-y-4 md:space-y-6">
                    <div className="h-6 md:h-7 lg:h-8 bg-gray-200 rounded w-1/4"></div>
                    <div className="space-y-3">
                      <div className="h-5 md:h-6 lg:h-7 bg-gray-200 rounded w-full"></div>
                      <div className="h-5 md:h-6 lg:h-7 bg-gray-200 rounded w-4/5"></div>
                    </div>
                  </div>

                  <div className="space-y-4 md:space-y-6 pl-4 md:pl-6 lg:pl-8">
                    <div className="h-6 md:h-7 lg:h-8 bg-gray-200 rounded w-1/3"></div>
                    <div className="space-y-3">
                      <div className="h-5 md:h-6 lg:h-7 bg-gray-200 rounded w-full"></div>
                      <div className="h-5 md:h-6 lg:h-7 bg-gray-200 rounded w-5/6"></div>
                    </div>
                  </div>

                </div>
              </div>
              
            </div>
          )}

          <div className="mt-16 md:mt-20 lg:mt-24 text-center">
            <Link
              href="/"
              className="inline-flex items-center px-8 md:px-10 lg:px-12 py-3 md:py-4 text-base md:text-lg font-medium text-white bg-[#FF5A00] rounded-lg hover:bg-[#E6651F] transition-colors"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}