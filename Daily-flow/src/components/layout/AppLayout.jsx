import './AppLayout.css';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CallToAction } from '../../pages/Home/CTABanner';
import { StatsSection } from '../../pages/Home/StatsSection';
export function AppLayout() {


   return (
      <>
         <section className="app-layout">
            <Navbar />
            <StatsSection />
            <CallToAction />
            <Footer />


         </section>


      </>
   )
}