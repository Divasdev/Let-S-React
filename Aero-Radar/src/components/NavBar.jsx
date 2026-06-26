import './NavBar.css';
import logoImg from '../assets/logo.png';
export function NavBar() {

   return (
      <nav className="max-w-6xl mx-auto mt-6 px-6 sticky top-6 z-50">
         <div className="bg-white/50 backdrop-blur-md flex items-center justify-between px-8 py-4 border border-outline-variant rounded-pill shadow-sm">
            <Logo />
            <NavLinks />
            <CTAButton />
         </div>
      </nav>
   )
}

export function Logo() {
   return (
      <div className='flex items-center gap-2'>
         <img src={logoImg} className='size-8 rounded-full' />
         <h2 className='font-semibold text-charcoal text-xl'>AeroRadar</h2>
      </div>
   )
}
export function NavLinks() {
   return (
      <div className='flex items-center gap-8 text-sm font-medium text-outline'>
         <a href='#' className='text-primary'>Features</a>
         <a href='#'>Airport</a>
         <a href='#'>Flights</a>
         <a href='#'>Analytics</a>
      </div>
   )
}
export function CTAButton() {
   return (
      <button className='bg-primary text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-primary-dark transition'>
         Launch app
      </button>
   )
}
