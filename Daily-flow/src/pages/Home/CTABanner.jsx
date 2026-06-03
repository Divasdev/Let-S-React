import "./CTABanner.css";
export function CallToAction() {
   return (
      <>
         <CallToActionTag />

      </>
   )
}


export function CallToActionTag() {

   return (
      <div className="cta-banner">
         <h2 className="cta-title">
            <strong>
               Build a better day, one task at a time
            </strong>
         </h2>

         <p className="cta-description">
            Join thousands of professionals who have already reclaimed their focus and momentum
         </p>

         <div className="cta-button-container">
            <button className="cta-button">
               Get Started Now
            </button>
         </div>
      </div>
   )
}