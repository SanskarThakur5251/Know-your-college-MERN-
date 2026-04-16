import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../ElementStyles/SearchPageStyles.module.css"; // using module.css

function SearchPage() {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch all colleges or filtered
  const fetchColleges = (query = "") => {
    setLoading(true);
    fetch(`http://localhost:4000/api/colleges?search=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setColleges(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching colleges:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchColleges(); // load all colleges initially
  }, []);

  // Add to wishlist
  const addToWishlist = async (collegeId) => {
    try {
      const res = await fetch(
        `http://localhost:4000/api/wishlist/add/${collegeId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const data = await res.json();
      if (res.ok) {
        alert("✅ Added to wishlist");
      } else {
        alert("❌ " + data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Handle search
  const handleSearch = () => {
    fetchColleges(searchTerm);
  };

  if (loading) return <h3>Loading colleges...</h3>;

  return (
    <div className={styles.all}>
      <div className={styles.wishlistPage}>
        <h2 className={styles.heading}>All Colleges</h2>

        {/* 🔎 Search Bar */}
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search colleges..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className={styles.searchInput}
          />
          <button onClick={handleSearch} className={styles.searchButton}>
            Search
          </button>
        </div>

        {/* Colleges Grid */}
        <div className={styles.collegeGrid}>
          {colleges.length > 0 ? (
            colleges.map((college) => (
              <div key={college._id} className={styles.collegeCard}>
                <Link
                  to={`/college/${college._id}`}
                  className={styles.collegeLink}
                >
                  <img
                    src={college.image || "https://via.placeholder.com/200x120"}
                    alt={college.name}
                    className={styles.collegeImage}
                  />
                  <div className={styles.collegeInfo}>
                    <h3>{college.name}</h3>
                    <p>{college.location}</p>
                  </div>
                </Link>
                <button
                  className={styles.addBtn}
                  onClick={() => addToWishlist(college._id)} // ✅ pass only ID
                >
                  Add to Wishlist
                </button>
              </div>
            ))
          ) : (
            <p>No colleges found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
