import React, { useEffect, useState } from "react";
import styles from "../ElementStyles/WishlistPageStyles.module.css";

function WishlistPage() {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch wishlist colleges
  const fetchWishlist = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/wishlist", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      if (res.ok) {
        setWishlist(data);
      } else {
        alert("❌ " + data.message);
      }
    } catch (err) {
      console.error("Error fetching wishlist:", err);
    } finally {
      setLoading(false);
    }
  };

  // Remove from wishlist
  const removeFromWishlist = async (collegeId) => {
    try {
      const res = await fetch(
        `http://localhost:4000/api/wishlist/${collegeId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await res.json();
      if (res.ok) {
        setWishlist((prev) => prev.filter((college) => college._id !== collegeId));
      } else {
        alert("❌ " + data.message);
      }
    } catch (err) {
      console.error("Error removing from wishlist:", err);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  if (loading) return <h3>Loading wishlist...</h3>;

  return (
    <div className={styles.all}>
      <h2 className={styles.heading}>My Wishlist</h2>
      <div className={styles.collegeGrid}>
        {wishlist.length > 0 ? (
          wishlist.map((college) => (
            <div key={college._id} className={styles.collegeCard}>
              <img
                src={college.image || "https://via.placeholder.com/200x120"}
                alt={college.name}
                className={styles.collegeImage}
              />
              <div className={styles.collegeInfo}>
                <h3>{college.name}</h3>
                <p>{college.location}</p>
                <button
                  className={styles.removeButton}
                  onClick={() => removeFromWishlist(college._id)}
                >
                  Remove from Wishlist
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No colleges in your wishlist yet.</p>
        )}
      </div>
    </div>
  );
}

export default WishlistPage;
