import logoImg from '../../assets/logo.png';
export function Footer() {
   return (
      <footer className='flex justify-between max-w-7xl  mx-auto px-6 py-12'>
         <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-2'>
               <img src={logoImg} className='size-8 rounded-full' />
               <h2 className='font-semibold text-charcoal'>AeroRadar</h2>
            </div>

            <p>© 2026 AeroRadar Aviation Systems.Precision engineered for the skies</p>

            <p>Build v1.0.0 BETA RELEASE</p>

         </div>

         <nav className='grid grid-cols-3 gap-12 '>

            <div className='flex flex-col gap-5 '>
               <a href="#" className='text-sm text-outline hover:text-blue-300 transition'>
                  Product
               </a>
               <a href="#" className='text-sm text-outline hover:text-blue-300 transition'>
                  Airport
               </a>


            </div>


            <div className='flex flex-col gap-5'>

               <a href="#" className='text-sm text-outline hover:text-blue-300 transition'>
                  Flights
               </a>
               <a href="#" className='text-sm text-outline hover:text-blue-300 transition'>
                  Analytics
               </a>
            </div>

            <div className='flex flex-col gap-5'>

               <a href="#" className='text-sm text-outline hover:text-blue-300 transition'>
                  Privacy
               </a>
               <a href="#" className='text-sm text-outline hover:text-blue-300 transition'>
                  Contact
               </a>
            </div>



         </nav>

      </footer>
   )
}