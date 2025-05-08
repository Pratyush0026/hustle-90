// app/page.js
import MVPComponent from '@/components/MVPComponent';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MVPComponent2 from '@/components/MVPComponent2';
import PricingComponent from '@/components/PricingComponent';
import TestimonialsSection from '@/components/Testimonials';
import FAQSection from '@/components/FAQSection';
import MarqueeSection from '@/components/MarqueeSection';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <MVPComponent/>
      <MVPComponent2/>
      <PricingComponent/>
      <TestimonialsSection/>
      <FAQSection/>
      <MarqueeSection/>
    </main>
  );
}