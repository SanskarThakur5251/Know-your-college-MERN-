// src/pages/CompareToolPage.jsx
import React, { useState } from "react";
import styles from "../ElementStyles/CompareToolPageStyles.module.css";

function CompareToolPage() {
  const [college1, setCollege1] = useState(null);
  const [college2, setCollege2] = useState(null);
  const [search1, setSearch1] = useState("");
  const [search2, setSearch2] = useState("");
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [error, setError] = useState("");

  const searchCollege = async (searchTerm, setCollege, setLoading) => {
    setError("");
    if (!searchTerm || !searchTerm.trim()) {
      setError("Please enter a college name");
      setCollege(null);
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(
        `http://localhost:4000/api/tools/search?name=${encodeURIComponent(
          searchTerm.trim()
        )}`
      );
      const data = await res.json();
      if (res.ok) {
        setCollege(data);
      } else {
        setCollege(null);
        setError(data.message || "College not found");
      }
    } catch (err) {
      console.error("Search error:", err);
      setError("Server error — check console");
      setCollege(null);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e, searchTerm, setCollege, setLoading) => {
    if (e.key === "Enter") {
      e.preventDefault();
      searchCollege(searchTerm, setCollege, setLoading);
    }
  };

  const renderCollegeDetails = (college, label) => {
    if (!college) {
      return <p className={styles.noCollege}>No {label} selected</p>;
    }

    return (
      <div className={styles.collegeDetails}>
        <h3 className={styles.collegeName}>{college.name}</h3>
        <p className={styles.collegeLocation}>{college.location}</p>
        {college.image && (
          <img
            src={college.image}
            alt={college.name}
            className={styles.collegeImage}
          />
        )}
        {college.details && (
          <table className={styles.collegeTable}>
            <tbody>
              {Object.entries(college.details).map(([key, value]) => (
                <tr key={key}>
                  <td className={styles.detailKey}>{key}</td>
                  <td className={styles.detailValue}>
                    {Array.isArray(value) ? value.join(", ") : String(value)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  };

  return (
    <div className={styles.all}>
      <h2 className={styles.title}>College Comparison Tool</h2>

      {/* Search Section */}
      <div className={styles.searchSection}>
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Search College 1..."
            value={search1}
            onChange={(e) => setSearch1(e.target.value)}
            onKeyDown={(e) =>
              handleKeyDown(e, search1, setCollege1, setLoading1)
            }
            className={styles.searchInput}
          />
          <button
            type="button"
            className={styles.searchButton}
            onClick={() => searchCollege(search1, setCollege1, setLoading1)}
            disabled={loading1}
          >
            {loading1 ? "Searching..." : "Search"}
          </button>
        </div>

        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Search College 2..."
            value={search2}
            onChange={(e) => setSearch2(e.target.value)}
            onKeyDown={(e) =>
              handleKeyDown(e, search2, setCollege2, setLoading2)
            }
            className={styles.searchInput}
          />
          <button
            type="button"
            className={styles.searchButton}
            onClick={() => searchCollege(search2, setCollege2, setLoading2)}
            disabled={loading2}
          >
            {loading2 ? "Searching..." : "Search"}
          </button>
        </div>
      </div>

      {/* Two side-by-side tables */}
      <div className={styles.compareSection}>
        <div className={styles.collegeBox}>{renderCollegeDetails(college1, "College 1")}</div>
        <div className={styles.collegeBox}>{renderCollegeDetails(college2, "College 2")}</div>
      </div>

      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
}

export default CompareToolPage;
