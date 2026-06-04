import { TestimonialCard } from "./TestimonialCard"
import './TestimonialsSection.css'

const testimonials=[
   {
      id:1,
      name:"Sarah J.",
      role:"Product Manager",
      review:"DailyFlow stripped away the anxiety of my endless backlogs. The ethereal interface makes logging in feel like taking a deep breath before diving into work.",
      avatar:"https://i.pravatar.cc/150?u=sarah"
   },
   {
       id:2,
      name:"Marcus T.",
      role:"Startup Founder",
      review:"I've tried every tool. This is the only one that respects my focus. The glassmorphism design isn't just pretty; it actively reduces visual clutter.",
      avatar:"https://i.pravatar.cc/150?u=marcus"

   },
   {
       id:3,
      name:"Elena R.",
      role:"Lead Designer",
      review:"A masterclass in UI design. It gets out of the way when you need to work, but provides incredibly powerful features just beneath the surface.",
      avatar:"https://i.pravatar.cc/150?u=elena"
   }
]

export function TestimonialsSection(){
   return (
   <section className="testimonials-section">
      <h2 className="section-header">Trusted by Professionals</h2>
      <div className="testimonials-grid">
         {testimonials.map((testimonial) => (
            <TestimonialCard
               key={testimonial.id}
               testimonial={testimonial}
            />
         ))}
      </div>
   </section>
);
}
