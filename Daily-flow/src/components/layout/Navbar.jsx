import './Navbar.css';
import { Link } from "react-router-dom";

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
  { name: "Home", path: "/" },
  { name: "Tools", path: "/tools" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" }
];
export function Nav(){
   return (
      <nav className='navbar-nav'>
         {links.map((link) => (
            <span key={link.name}>
              <Link to={link.path}>
                  {link.name}
              </Link>
            </span>
         ))}
      </nav>
   );
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