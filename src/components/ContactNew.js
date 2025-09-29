// 'use client'

// import { useState, useEffect } from 'react'
// import Header from './Header'

// const ContactNew = () => {
//     const [currentTestimonial, setCurrentTestimonial] = useState(0)
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         message: ''
//     })

//     const testimonials = [
//         {
//             text: "hustle90 has revolutionized the way we process data. The seamless integration and advanced analytics tools have saved us countless hours and improved our decision-making",
//             author: "Sarah J.",
//             position: "Data Analyst, TechCorp"
//         },
//         {
//             text: "The platform's intuitive interface and powerful features have transformed our workflow. We've seen a 40% increase in productivity since implementation",
//             author: "Michael R.",
//             position: "Operations Manager, StartupXYZ"
//         },
//         {
//             text: "Outstanding customer support and cutting-edge technology. hustle90 has become an essential part of our business infrastructure",
//             author: "Emily K.",
//             position: "CTO, InnovateLab"
//         }
//     ]

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
//         }, 4000)
//         return () => clearInterval(interval)
//     }, [testimonials.length])

//     const handleInputChange = (e) => {
//         const { name, value } = e.target
//         setFormData(prev => ({
//             ...prev,
//             [name]: value
//         }))
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         console.log('Form submitted:', formData)
//     }

//     return (
//         <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16 bg-[#FFF8F4]">
//             <div className="max-w-7xl mx-auto">
//                 <Header />

//                 {/* Contact Us Tag */}
//                 <div className="mb-8 md:mb-12 text-center mt-14 lg:mt-20">
//                     <div
//                         className="inline-flex justify-center items-center"
//                         style={{
//                             width: '147px',
//                             height: '35px',
//                             borderRadius: '1130.08px',
//                             padding: '1.13px',
//                             background: 'linear-gradient(90deg, #E6651F 0%, #2954D1 100%)',
//                             boxShadow: '0px 2.26px 5.65px 0px rgba(0, 0, 0, 0.07), 0px 9.04px 9.04px 0px rgba(0, 0, 0, 0.06), 0px 21.47px 12.43px 0px rgba(0, 0, 0, 0.04), 0px 37.29px 14.69px 0px rgba(0, 0, 0, 0.01)'
//                         }}
//                     >
//                         <span
//                             className="inline-flex justify-center items-center w-full h-full px-[26px] py-2 text-sm font-medium bg-white"
//                             style={{
//                                 borderRadius: '1130.08px'
//                             }}
//                         >
//                             <span
//                                 style={{
//                                     background: 'linear-gradient(90deg, #E6651F 0%, #2954D1 100%)',
//                                     WebkitBackgroundClip: 'text',
//                                     WebkitTextFillColor: 'transparent',
//                                     backgroundClip: 'text'
//                                 }}
//                             >
//                                 CONTACT US
//                             </span>
//                         </span>
//                     </div>
//                 </div>

//                 {/* Get in Touch Heading */}
//                 <div className="text-center mb-12 md:mb-16 lg:mb-20">
//                     <h2
//                         className="text-[#1B0C25] text-4xl md:text-6xl lg:text-[85px] font-normal leading-tight lg:leading-[76px] mx-auto"
//                         style={{
//                             fontFamily: 'DM Sans',
//                             maxWidth: '1056px'
//                         }}
//                     >
//                         Get in touch with our team
//                     </h2>
//                 </div>

//                 {/* Main Contact Box */}
//                 <div
//                     className="bg-white rounded-[20px] p-6 md:p-8 lg:p-[50px] flex flex-col lg:flex-row items-start gap-8 lg:gap-[141px]"
//                     style={{
//                         boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)'
//                     }}
//                 >
//                     {/* Left Side - Contact Info & Testimonial */}
//                     <div className="flex-1 w-full lg:w-auto">
//                         {/* Contact Information */}
//                         <div className="mb-8 lg:mb-12">
//                             <p className="text-[#1B0C25] text-base mb-6" style={{ fontFamily: 'Inter' }}>
//                                 Feel free to reach out - we'd love to connect.
//                             </p>

//                             {/* Email */}
//                             <div className="flex items-center gap-3 mb-4">
//                                 <div className="w-6 h-6 bg-[#FF5A00] rounded flex items-center justify-center">
//                                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                                         <polyline points="22,6 12,13 2,6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                                     </svg>
//                                 </div>
//                                 <div>
//                                     <p className="text-[#1B0C25] font-medium text-sm mb-1">Email us</p>
//                                     <p className="text-[#1B0C25] text-sm">hello@hustle90.com</p>
//                                 </div>
//                             </div>

//                             {/* Phone */}
//                             <div className="flex items-center gap-3">
//                                 <div className="w-6 h-6 bg-[#FF5A00] rounded flex items-center justify-center">
//                                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                                     </svg>
//                                 </div>
//                                 <div>
//                                     <p className="text-[#1B0C25] font-medium text-sm mb-1">Get support</p>
//                                     <p className="text-[#1B0C25] text-sm">Chat with us</p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Testimonial Section */}
//                         <div className="bg-gray-50 p-6 rounded-lg">
//                             <div className="transition-all duration-500 ease-in-out">
//                                 <blockquote className="text-[#1B0C25] text-base mb-4 leading-relaxed" style={{ fontFamily: 'Inter' }}>
//                                     "{testimonials[currentTestimonial].text}"
//                                 </blockquote>

//                                 <div className="flex items-center gap-3">
//                                     <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
//                                         <span className="text-[#1B0C25] font-medium text-sm">
//                                             {testimonials[currentTestimonial].author.charAt(0)}
//                                         </span>
//                                     </div>
//                                     <div>
//                                         <p className="text-[#1B0C25] font-medium text-sm">{testimonials[currentTestimonial].author}</p>
//                                         <p className="text-gray-600 text-sm">{testimonials[currentTestimonial].position}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right Side - Contact Form */}
//                     <div className="flex-1 w-full lg:w-auto bg-[#F7F6F7] py-4 px-6 rounded-[20px]">
//                         <form onSubmit={handleSubmit} className="space-y-6">
//                             {/* Name Fields */}
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                 <div>
//                                     <label className="block text-[#1B0C25] text-sm font-medium mb-2" style={{ fontFamily: 'Inter' }}>
//                                         First Name
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="firstName"
//                                         value={formData.firstName}
//                                         onChange={handleInputChange}
//                                         placeholder="First Name"
//                                         className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A00] focus:border-transparent text-[#1B0C25]"
//                                         style={{ fontFamily: 'Inter' }}
//                                     />
//                                 </div>
//                                 <div>
//                                     <label className="block text-[#1B0C25] text-sm font-medium mb-2" style={{ fontFamily: 'Inter' }}>
//                                         Last Name
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="lastName"
//                                         value={formData.lastName}
//                                         onChange={handleInputChange}
//                                         placeholder="Last Name"
//                                         className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A00] focus:border-transparent text-[#1B0C25]"
//                                         style={{ fontFamily: 'Inter' }}
//                                     />
//                                 </div>
//                             </div>

//                             {/* Email and Phone */}
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                 <div>
//                                     <label className="block text-[#1B0C25] text-sm font-medium mb-2" style={{ fontFamily: 'Inter' }}>
//                                         Email
//                                     </label>
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         value={formData.email}
//                                         onChange={handleInputChange}
//                                         placeholder="Your email"
//                                         className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A00] focus:border-transparent text-[#1B0C25]"
//                                         style={{ fontFamily: 'Inter' }}
//                                     />
//                                 </div>
//                                 <div>
//                                     <label className="block text-[#1B0C25] text-sm font-medium mb-2" style={{ fontFamily: 'Inter' }}>
//                                         Phone Number
//                                     </label>
//                                     <input
//                                         type="tel"
//                                         name="phone"
//                                         value={formData.phone}
//                                         onChange={handleInputChange}
//                                         placeholder="Your phone"
//                                         className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A00] focus:border-transparent text-[#1B0C25]"
//                                         style={{ fontFamily: 'Inter' }}
//                                     />
//                                 </div>
//                             </div>

//                             {/* Message */}
//                             <div>
//                                 <label className="block text-[#1B0C25] text-sm font-medium mb-2" style={{ fontFamily: 'Inter' }}>
//                                     Message
//                                 </label>
//                                 <textarea
//                                     name="message"
//                                     value={formData.message}
//                                     onChange={handleInputChange}
//                                     placeholder="Write your message"
//                                     rows="6"
//                                     className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A00] focus:border-transparent text-[#1B0C25] resize-none"
//                                     style={{ fontFamily: 'Inter' }}
//                                 />
//                             </div>

//                             {/* Submit Button */}
//                             <button
//                                 type="submit"
//                                 className="w-full bg-[#1B0C25] text-white py-4 px-6 rounded-lg font-medium hover:bg-[#2a1435] transition-colors duration-200"
//                                 style={{ fontFamily: 'Inter' }}
//                             >
//                                 Submit
//                             </button>

//                             {/* Privacy Policy Text */}
//                             <p className="text-gray-500 text-sm text-center" style={{ fontFamily: 'Inter' }}>
//                                 By submitting this form you agree to our friendly{' '}
//                                 <a href="/privacy-policy" className="text-[#FF5A00] hover:underline">
//                                     Privacy Policy
//                                 </a>
//                             </p>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default ContactNew


'use client'

import { useState, useEffect } from 'react'
import Header from './Header'

const ContactNew = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)

    const testimonials = [
        {
            text: "hustle90 has revolutionized the way we process data. The seamless integration and advanced analytics tools have saved us countless hours and improved our decision-making",
            author: "Sarah J.",
            position: "Data Analyst, TechCorp"
        },
        {
            text: "The platform's intuitive interface and powerful features have transformed our workflow. We've seen a 40% increase in productivity since implementation",
            author: "Michael R.",
            position: "Operations Manager, StartupXYZ"
        },
        {
            text: "Outstanding customer support and cutting-edge technology. hustle90 has become an essential part of our business infrastructure",
            author: "Emily K.",
            position: "CTO, InnovateLab"
        }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [testimonials.length])

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus(null)

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: 'fa9173b6-fc02-4b48-8772-46e8d7d13893',
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                    subject: 'New Contact Form Submission from hustle90'
                })
            })

            const result = await response.json()

            if (result.success) {
                setSubmitStatus('success')
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: ''
                })
                setTimeout(() => setSubmitStatus(null), 5000)
            } else {
                setSubmitStatus('error')
            }
        } catch (error) {
            console.error('Form submission error:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16 bg-[#FFF8F4]">
            <div className="max-w-7xl mx-auto">
                <Header />

                {/* Contact Us Tag */}
                <div className="mb-8 md:mb-12 text-center mt-14 lg:mt-20">
                    <div
                        className="inline-flex justify-center items-center"
                        style={{
                            width: '147px',
                            height: '35px',
                            borderRadius: '1130.08px',
                            padding: '1.13px',
                            background: 'linear-gradient(90deg, #E6651F 0%, #2954D1 100%)',
                            boxShadow: '0px 2.26px 5.65px 0px rgba(0, 0, 0, 0.07), 0px 9.04px 9.04px 0px rgba(0, 0, 0, 0.06), 0px 21.47px 12.43px 0px rgba(0, 0, 0, 0.04), 0px 37.29px 14.69px 0px rgba(0, 0, 0, 0.01)'
                        }}
                    >
                        <span
                            className="inline-flex justify-center items-center w-full h-full px-[26px] py-2 text-sm font-medium bg-white"
                            style={{
                                borderRadius: '1130.08px'
                            }}
                        >
                            <span
                                style={{
                                    background: 'linear-gradient(90deg, #E6651F 0%, #2954D1 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}
                            >
                                CONTACT US
                            </span>
                        </span>
                    </div>
                </div>

                {/* Get in Touch Heading */}
                <div className="text-center mb-12 md:mb-16 lg:mb-20">
                    <h2
                        className="text-[#1B0C25] text-4xl md:text-6xl lg:text-[85px] font-normal leading-tight lg:leading-[76px] mx-auto"
                        style={{
                            fontFamily: 'DM Sans',
                            maxWidth: '1056px'
                        }}
                    >
                        Get in touch with our team
                    </h2>
                </div>

                {/* Main Contact Box */}
                <div
                    className="bg-white rounded-[20px] p-6 md:p-8 lg:p-[50px] flex flex-col lg:flex-row items-start gap-8 lg:gap-[141px]"
                    style={{
                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)'
                    }}
                >
                    {/* Left Side - Contact Info & Testimonial */}
                    <div className="flex-1 w-full lg:w-auto">
                        {/* Contact Information */}
                        <div className="mb-8 lg:mb-12">
                            <p className="text-[#1B0C25] text-base mb-6" style={{ fontFamily: 'Inter' }}>
                                Feel free to reach out - we'd love to connect.
                            </p>

                            {/* Email */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-6 h-6 bg-[#FF5A00] rounded flex items-center justify-center">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <polyline points="22,6 12,13 2,6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[#1B0C25] font-medium text-sm mb-1">Email us</p>
                                    <p className="text-[#1B0C25] text-sm">hello@hustle90.com</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 bg-[#FF5A00] rounded flex items-center justify-center">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[#1B0C25] font-medium text-sm mb-1">Get support</p>
                                    <p className="text-[#1B0C25] text-sm">Chat with us</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial Section */}
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <div className="transition-all duration-500 ease-in-out">
                                <blockquote className="text-[#1B0C25] text-base mb-4 leading-relaxed" style={{ fontFamily: 'Inter' }}>
                                    "{testimonials[currentTestimonial].text}"
                                </blockquote>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                                        <span className="text-[#1B0C25] font-medium text-sm">
                                            {testimonials[currentTestimonial].author.charAt(0)}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-[#1B0C25] font-medium text-sm">{testimonials[currentTestimonial].author}</p>
                                        <p className="text-gray-600 text-sm">{testimonials[currentTestimonial].position}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="flex-1 w-full lg:w-auto bg-[#F7F6F7] py-4 px-6 rounded-[20px]">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Success/Error Messages */}
                            {submitStatus === 'success' && (
                                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-sm" style={{ fontFamily: 'Inter' }}>
                                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm" style={{ fontFamily: 'Inter' }}>
                                    Oops! Something went wrong. Please try again.
                                </div>
                            )}

                            {/* Name Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[#1B0C25] text-sm font-medium mb-2" style={{ fontFamily: 'Inter' }}>
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        placeholder="First Name"
                                        required
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A00] focus:border-transparent text-[#1B0C25]"
                                        style={{ fontFamily: 'Inter' }}
                                    />
                                </div>
                                <div>
                                    <label className="block text-[#1B0C25] text-sm font-medium mb-2" style={{ fontFamily: 'Inter' }}>
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        placeholder="Last Name"
                                        required
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A00] focus:border-transparent text-[#1B0C25]"
                                        style={{ fontFamily: 'Inter' }}
                                    />
                                </div>
                            </div>

                            {/* Email and Phone */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[#1B0C25] text-sm font-medium mb-2" style={{ fontFamily: 'Inter' }}>
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Your email"
                                        required
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A00] focus:border-transparent text-[#1B0C25]"
                                        style={{ fontFamily: 'Inter' }}
                                    />
                                </div>
                                <div>
                                    <label className="block text-[#1B0C25] text-sm font-medium mb-2" style={{ fontFamily: 'Inter' }}>
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Your phone"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A00] focus:border-transparent text-[#1B0C25]"
                                        style={{ fontFamily: 'Inter' }}
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-[#1B0C25] text-sm font-medium mb-2" style={{ fontFamily: 'Inter' }}>
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Write your message"
                                    rows="6"
                                    required
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A00] focus:border-transparent text-[#1B0C25] resize-none"
                                    style={{ fontFamily: 'Inter' }}
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#1B0C25] text-white py-4 px-6 rounded-lg font-medium hover:bg-[#2a1435] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                style={{ fontFamily: 'Inter' }}
                            >
                                {isSubmitting ? 'Sending...' : 'Submit'}
                            </button>

                            {/* Privacy Policy Text */}
                            <p className="text-gray-500 text-sm text-center" style={{ fontFamily: 'Inter' }}>
                                By submitting this form you agree to our friendly{' '}
                                <a href="/privacy-policy" className="text-[#FF5A00] hover:underline">
                                    Privacy Policy
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactNew