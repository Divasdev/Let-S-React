import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { ContactHero } from "./ContactHero";
import { ContactInfo } from "./ContactInfo";

export function Contact() {
   return (
      <>
         <Navbar />
         <ContactHero />
         <ContactInfo />
         <Footer />
      </>
   );
}
