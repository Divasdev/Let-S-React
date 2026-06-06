import "./ContactCard.css";

export function ContactCard({ icon, title, children }) {
   return (
      <div className="contact-card">
         <div className="contact-card__icon">{icon}</div>
         <div className="contact-card__body">
            <h3 className="contact-card__title">{title}</h3>
            {children}
         </div>
      </div>
   );
}
