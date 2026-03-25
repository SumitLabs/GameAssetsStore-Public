import { useState } from "react";
import "./search.css";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); 
  };

  return (
    <section className="search">
      <div className="search_bar">
        <div className="flex_box align_center">
          <input
            type="search"
            className="round search_box"
            placeholder="Search Assets..."
            value={query}
            onChange={handleChange}
          />
        </div>
      </div>
    </section>
  );
};

export default Search;