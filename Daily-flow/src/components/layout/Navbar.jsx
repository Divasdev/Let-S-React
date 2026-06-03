import './Navbar.css';

export function AppLogo(){
   return(
      <div className='navbar-logo'>
         <h2 className='navbar-brand'>
            DailyFlow
         </h2>
      </div>
   )
}

const links = [
  "Home",
  "Tools",
  "About",
  "Contact"
];
export function Nav(){
   return (
      <nav className='navbar-nav'>
         {links.map((link) => (
            <span key={link}>
               <a href="#">{link}</a>
            </span>
         ))}
      </nav>
   )
}

export function Toggle(){
   return (
      <div className='navbar_actions'>
         <div className='navbar_theme-toggle'>
            <button className='navbar_theme-button'>
               ☾
            </button>
         </div>

         <div className='navbar_cta'>
            <button className='navbar_cta-button'>
               Get Started
            </button>
         </div>
      </div>
   )
}



export function Navbar(){
   return(
      <header className='navbar'>
         <AppLogo />
         <Nav />
         <Toggle />
      </header>
   )
}