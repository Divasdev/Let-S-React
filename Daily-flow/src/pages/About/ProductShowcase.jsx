import "./ProductShowcase.css";
import focusImg from '../../assets/focus.png';
import analyticsImg from "../../assets/analytics.png"
export function ProductShowcase() {
   return (
      <>
         <div className="product-showcase">

            <h2 className="showcase-title">
               Meet the Product
            </h2>
            <h4 className="showcase-subtitle">
               Designed to get out of your way
            </h4>

            <ProductCards />

         </div>
      </>
   )
}
const product = [
   {
      path:focusImg,
      title: "Focus Mode",
      text: "clear the canvas and mute the notifications with a single click to enter deep work"
   },
   {
      path:analyticsImg,
      title: "Smart Analytics",
      text: "Visualize your productivity trends without the anxiety of aggressive metrics"
   }
]


export function ProductCards() {
   return (
      <>
        
         {product.map((desc) => {

            return (
               <>
                  <div className="product-card" key={desc.title} >
                     <img src={desc.path}></img>
                  
                     <h4 className="card-head">
                        {desc.title}
                     </h4>

                     <p className="card-para">
                        {desc.text}
                     </p>
                  </div>
               </>
            );
         })}
      </>
   )
}