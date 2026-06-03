import { AppLogo } from "./Navbar";
import "./Footer.css";
 export function Footer(){
   return(
      <footer className='footer'>
         <div className='footer__brand-section'>
            <AppLogo />
            <Tagline />
         </div>

         <FooterLinks />
      </footer>
   )
}

export function Tagline(){
   return(
      <div className='footer__tagline'>
         <p className='footer__description'>
            Sophisticated productivity tool for modern professionals.
         </p>

         <p className='footer__copyright'>
            © 2024 DailyFlow Inc. All rights reserved.
         </p>
      </div>
   )
}


const Product=["Products","Features","pricing","integrations","Changelog"]
const Company=["About us","Careers","Privacy Policy","Terms of Service"]

const Connect=["Instagram","Newsletter Signup","Twitter","LinkedIn"]


export function FooterLinks(){
   return (
      <div className='footer__links'>

         <div className='footer__menu'>
            <h4 className='footer__menu-title'>Product</h4>
            {Product.map((product) => (
               <span className='footer__link-item' key={product}>
                  <a href="#">{product}</a>
               </span>
            ))}
         </div>

         <div className='footer__menu'>
            <h4 className='footer__menu-title'>Company</h4>
            {Company.map((company) => (
               <span className='footer__link-item' key={company}>
                  <a href="#">{company}</a>
               </span>
            ))}
         </div>

         <div className='footer__menu'>
            <h4 className='footer__menu-title'>Connect</h4>
            {Connect.map((connect) => (
               <span className='footer__link-item' key={connect}>
                  <a href="#">{connect}</a>
               </span>
            ))}
         </div>

      </div>
   )
}




