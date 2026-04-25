import { useState } from "react";
import "./searchBar.scss";
import { Link } from "react-router-dom";

const defaultCity = "Downtown San Diego";

function SearchBar() {
  const [query, setQuery] = useState({
    minPrice: "",
    maxPrice: "",
  });

  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="searchBar">
      <div className="location">
        <span>Properties in {defaultCity} only</span>
      </div>
      <form>
        <input
          type="text"
          name="city"
          value={defaultCity}
          disabled
        />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
          onChange={handleChange}
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
          onChange={handleChange}
        />
        <Link
          to={`/properties?type=rent&city=${encodeURIComponent(
            defaultCity
          )}&minPrice=${query.minPrice || ""}&maxPrice=${query.maxPrice || ""}`}
        >
          <button type="button">
            <img src="/search.png" alt="" />
          </button>
        </Link>
      </form>
    </div>
  );
}

export default SearchBar;
