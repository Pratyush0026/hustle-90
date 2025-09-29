// import MVPComponent from '@/components/MVPComponent';
// import Header from '../components/Header';
// import Hero from '../components/Hero';
// import MVPComponent2 from '@/components/MVPComponent2';
// import PricingComponent from '@/components/PricingComponent';
// import TestimonialsSection from '@/components/Testimonials';
// import FAQSection from '@/components/FAQSection';
// import MarqueeSection from '@/components/MarqueeSection';
// import "./globals.css";
// import Footer from '@/components/Footer';
// import FeaturesSection from '@/components/FeaturesSection';
// import KeyBenefitsSection from '@/components/KeyBenefitsSection';
// import AboutSection from '@/components/AboutSection';
// // import HowItWorksSection from '@/components/HowItWorkssection';
// import BlogSection from '@/components/BlogSection';


// export default function Home() {
//   return (
//     <main>
//       <Header />
//       <Hero />
//       <MVPComponent />
//       {/* <MVPComponent2/> */}
//       <FeaturesSection />

//       <KeyBenefitsSection />
//       <AboutSection />
//       {/* <HowItWorksSection/> */}
//       <BlogSection />
//       <PricingComponent />
//       <TestimonialsSection />
//       <FAQSection />
//       <MarqueeSection />
//       <Footer />
//     </main>
//   );
// }


import MVPComponent from '@/components/MVPComponent';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MVPComponent2 from '@/components/MVPComponent2';
import PricingComponent from '@/components/PricingComponent';
import TestimonialsSection from '@/components/Testimonials';
import FAQSection from '@/components/FAQSection';
import MarqueeSection from '@/components/MarqueeSection';
import "./globals.css";
import Footer from '@/components/Footer';
import FeaturesSection from '@/components/FeaturesSection';
import KeyBenefitsSection from '@/components/KeyBenefitsSection';
import AboutSection from '@/components/AboutSection';
// import HowItWorksSection from '@/components/HowItWorkssection';
import BlogSection from '@/components/BlogSection';

export const metadata = {
  title: "Hustle90 - Build Your MVP with AI-Powered Tools",
  description: "Transform your startup idea into reality with Hustle90's AI-powered MVP development platform. Connect data, validate product-market fit, and track investment progress.",
  openGraph: {
    title: "Hustle90 - Build Your MVP with AI-Powered Tools",
    description: "Transform your startup idea into reality with AI-powered MVP development tools.",
    url: "https://hustle90.com",
    images: [
      {
        url: "https://hustle90.com/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "Hustle90 Platform",
      },
    ],
  },
};

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <MVPComponent />
      {/* <MVPComponent2/> */}
      <FeaturesSection />
      <KeyBenefitsSection />
      <AboutSection />
      {/* <HowItWorksSection/> */}
      <BlogSection />
      <PricingComponent />
      <TestimonialsSection />
      <FAQSection />
      <MarqueeSection />
      <Footer />
    </main>
  );
}