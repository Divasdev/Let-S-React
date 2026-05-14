import "./SearchBar.css";
export function SearchBar(){
   return(
         <div className="search-bar">
            <div className="search-input">
                  <button className="search-btn">
                     🔎
                  </button>
                  <input type="text" className="location-input" placeholder="Search"></input>

                  <button className="live-location">
                     ⌖
                  </button>
            </div>
         </div>
   );
}