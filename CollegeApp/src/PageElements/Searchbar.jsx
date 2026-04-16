import React, { useState } from "react";
import "../ElementStyles/SearchbarStyles.css";

function Searchbar({ setColleges }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    try {
      const res = await fetch(
        `http://localhost:4000/api/colleges?search=${searchTerm}`
      );
      const data = await res.json();
      setColleges(data); // update parent state
    } catch (err) {
      console.error("Error fetching search results:", err);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search colleges..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Searchbar;
