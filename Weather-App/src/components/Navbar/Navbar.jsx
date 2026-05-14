import { BrandLogo } from "./BrandLogo";
import { LocationDisplay } from "./LocationDIsplay";
import { SearchBar } from "./SearchBar";
import { ThemeToggle } from "./ThemeToggle";
import { UserProfile } from "./UserProfile";

import "./Navbar.css";

export function NavBar() {
  return (
    <nav className="navbar">

      {/* Left Group: Brand + Location */}
      <div className="navbar-left">
        <BrandLogo />
        <LocationDisplay />
      </div>

      {/* Center: Search */}
      <div className="navbar-center">
        <SearchBar />
      </div>

      {/* Right Group: Theme + Notifications + Profile */}
      <div className="navbar-right">
        <ThemeToggle />
        <UserProfile />
      </div>

    </nav>
  );
}