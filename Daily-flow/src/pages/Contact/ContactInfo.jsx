import "./ContactInfo.css";
import { ContactCard } from "./ContactCard";
import { ContactForm } from "./ContactForm";

export function ContactInfo() {
   return (
      <section className="contact-info">
         <div className="contact-cards__stack">
            <ContactCard icon="✉" title="Email Us">
               <p>Our team is ready to assist you with any inquiries.</p>
               <a href="mailto:hello@dailyflow.com">hello@dailyflow.com</a>
            </ContactCard>

            <ContactCard icon="📍" title="Visit Headquarters">
               <p>Come say hi at our tech hub in the city center.</p>
               <address className="contact-card__address">
                  100 Innovation Drive<br />
                  Tech District, CA 94103
               </address>
            </ContactCard>

            <ContactCard icon="🔗" title="Connect">
               <div className="contact-card__socials">
                  <span>🌐</span>
                  <span>📁</span>
                  <span>💬</span>
               </div>
            </ContactCard>
         </div>

         <div className="contact-form__wrapper">
            <ContactForm />
         </div>
      </section>
   );
}
