import logoImg from '../../assets/logo.png';
export function Footer(){
   return(
      <>
         <div>
               <div className='flex items-center gap-2'>
                     <img src={logoImg} className='size-8 rounded-full' />
                     <h2 className='font-semibold text-charcoal'>AeroRadar</h2>
               </div>

               <p>© 2026 AeroRadar Aviation Systems.Precision engineered for the skies</p>

               <p>Build v1.0.0 BETA RELEASE</p>

         </div>

         <div>
            <a href="#">
               Product
            </a>
            <a href="#">
               Airport
            </a>
            
            <a href="#">
               Flights
            </a>
            <a href="#">
               Analytics
            </a>
            <a href="#">
               Privacy 
            </a>
            <a href="#">
                Contact
            </a>
            
            
         </div>
      
      </>
   )
}