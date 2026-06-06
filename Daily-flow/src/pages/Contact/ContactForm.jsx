import "./ContactForm.css";

export function ContactForm() {
   return (
      <form className="contact-form" autoComplete="off">
         <div className="contact-form__row">
            <div className="contact-form__field">
               <label className="contact-form__label" htmlFor="fullName">
                  Full Name
               </label>
               <input
                  className="contact-form__input"
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Jane Doe"
               />
            </div>

            <div className="contact-form__field">
               <label className="contact-form__label" htmlFor="email">
                  Email Address
               </label>
               <input
                  className="contact-form__input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="jane@example.com"
               />
            </div>
         </div>

         <div className="contact-form__field">
            <label className="contact-form__label" htmlFor="subject">
               Subject
            </label>
            <input
               className="contact-form__input"
               type="text"
               id="subject"
               name="subject"
               placeholder="How can we help?"
            />
         </div>

         <div className="contact-form__field">
            <label className="contact-form__label" htmlFor="message">
               Message
            </label>
            <textarea
               className="contact-form__textarea"
               id="message"
               name="message"
               rows="5"
               placeholder="Write your message here..."
            ></textarea>
         </div>

         <button className="contact-form__submit" type="submit">
            Send Message ▶
         </button>
      </form>
   );
}
