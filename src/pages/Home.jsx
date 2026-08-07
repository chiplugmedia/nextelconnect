import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Plans from '@/components/Plans';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import Cta from '@/components/Cta';

export default function Home() {
  return (
    <div className="bg-paper text-ink antialiased">
      <Header />
      <Hero />
      <HowItWorks />
      <Plans />
      <Features />
      <Testimonials />
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
}
