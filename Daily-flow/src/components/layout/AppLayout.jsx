import './AppLayout.css';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CallToAction } from '../../pages/Home/CTABanner';
import { StatsSection } from '../../pages/Home/StatsSection';
import { TestimonialsSection } from '../../pages/Home/TestimonialsSection';
import { FeaturesGrid } from '../../pages/Home/FeaturesGrid';
import { HeroSection } from '../../pages/Home/HeroSection';

export function AppLayout() {


   return (
      <>
         <section className="app-layout">
            <Navbar />
            <HeroSection />
            <FeaturesGrid />
            <StatsSection />
            
            <TestimonialsSection />
            <CallToAction />
           
            <Footer />
         </section>


      </>
   )
}