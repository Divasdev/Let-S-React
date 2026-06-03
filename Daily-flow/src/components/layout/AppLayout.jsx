import './AppLayout.css';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CallToAction } from '../../pages/Home/CTABanner';
export function AppLayout() {


   return (
      <>
         <section className="app-layout">
            <Navbar />
            <CallToAction />
            <Footer />


         </section>


      </>
   )
}