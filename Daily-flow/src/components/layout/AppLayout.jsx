import './AppLayout.css';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CallToAction } from '../../pages/Home/CTABanner';
import { StatsSection } from '../../pages/Home/StatsSection';
import { TestimonialsSection } from '../../pages/Home/TestimonialsSection';
export function AppLayout() {


   return (
      <>
         <section className="app-layout">
            <Navbar />
            <StatsSection />
            
            <TestimonialsSection />
            <CallToAction />
           
            <Footer />
         </section>


      </>
   )
}