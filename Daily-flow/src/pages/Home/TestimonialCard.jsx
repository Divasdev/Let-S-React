import './TestimonialsCard.css';

export function TestimonialCard({testimonial}){
   const { name,role,review,avatar}=testimonial

   return (
      <div className="testimonial-card">
         <div className="testimonial-header">
            {avatar && (
               <div className="reviewer-avatar">
                  <img src={avatar} alt={name} />
               </div>
            )}
            <div className="reviewer-info">
               <p className="reviewer-name">
                  {name}
               </p>
               <p className="reviewer-role">
                  {role}
               </p>
            </div>
            <div className="quote-icon">99</div>
         </div>
         <div className="testimonial-body">
            <p className="review">
               "{review}"
            </p>
         </div>
      </div>
   )
}