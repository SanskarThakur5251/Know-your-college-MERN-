import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../ElementStyles/CollegePageStyles.module.css";
import Table from "../PageElements/Table";

function CollegePage() {
  const { id } = useParams();
  const [college, setCollege] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/api/colleges/${id}`)
      .then((res) => res.json())
      .then((data) => setCollege(data))
      .catch((err) => console.error("Error fetching college:", err));
  }, [id]);

  if (!college) return <p className={styles.loading}>Loading...</p>;

  return (
    <div className={styles.collegePageall}>
    <div className={styles.collegePage}>
      <div className={styles.headerSection}>
        <h1 className={styles.collegeName}>{college.name}</h1>
        <p className={styles.location}>
          <strong>📍 Location:</strong> {college.location}
        </p>
      </div>

      {/* Images Section */}
      {college.imageUrls && college.imageUrls.length > 0 && (
        <div className={styles.imageGallery}>
          {college.imageUrls.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={college.name}
              className={styles.collegeImage}
            />
          ))}
        </div>
      )}

      {/* Details Table */}
      <div className={styles.detailsSection}>
        <h2 className={styles.sectionTitle}>College Details</h2>
        <Table details={college.details} />
      </div>
    </div>
    </div>
  );
}

export default CollegePage;
