import { BrandLogo } from "./BrandLogo";
import { LocationDisplay } from "./LocationDisplay";
import { SearchBar } from "./SearchBar";
import { ThemeToggle } from "./ThemeToggle";
import { UserProfile } from "./UserProfile";

import "./Navbar.css";
export function NavBar(){
   return(
      <>
      <BrandLogo />
      <LocationDisplay />
       <SearchBar />
       <ThemeToggle />
       <UserProfile />

      </>


   );
}