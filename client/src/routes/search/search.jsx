import "./search.scss";
import SearchBar from "../../components/searchBar/SearchBar";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchIntro">
        <h1>Search Downtown San Diego Properties</h1>
        <p>
          Enter your price range below to explore curated downtown condo listings
          and find the perfect match for your budget.
        </p>
      </div>
      <SearchBar />
    </div>
  );
}

export default SearchPage;
