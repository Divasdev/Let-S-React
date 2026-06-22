import './NavBar.css';
import logoImg from '../assets/logo.png';
export  function NavBar(){

   return (
   <nav className="max-w-6xl mx-auto mt-6 px-6 ">
   <div className="flex items-center justify-between px-8 py-4 bg-white border border-gray-200 rounded-full shadow-sm">
      <Logo />
      <NavLinks />
      <CTAButton />
   </div>
</nav>
    
   )
}

export function Logo(){
   return(
      <div className='flex items-center gap-2'>
         <img src={logoImg} className='size-8 rounded-full' />
         <h2 className='font-semibold text-gray-900'>AeroRadar</h2>
      </div>
   )
}
export function NavLinks(){
   return(
      <div className='flex items-center gap-8 text-sm font-medium text-gray-600'>
         <a href='#' className='text-blue-600'>Features</a>
         <a href='#'>Airport</a>
         <a href='#'>Flights</a>
         <a href='#'>Analytics</a>
      </div>
   )
}
export function CTAButton(){
   return (
      <button className='bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition'>
         Launch app
      </button>
   )
}
