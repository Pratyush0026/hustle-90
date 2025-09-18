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
import HowItWorksSection from '@/components/HowItWorkssection';
import BlogSection from '@/components/BlogSection';


export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <MVPComponent/>
      {/* <MVPComponent2/> */}
      <FeaturesSection/>

      <KeyBenefitsSection/>
      <AboutSection/>
      <HowItWorksSection/>
      <BlogSection/>
      <PricingComponent/>
      <TestimonialsSection/>
      <FAQSection/>
      <MarqueeSection/>
      <Footer/>
    </main>
  );
}