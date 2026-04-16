import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../ElementStyles/NoticesStyles.module.css";

const Notices = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        // ✅ Only fetch 10 latest from backend
        const res = await fetch("http://localhost:4000/api/notices?limit=10");
        const data = await res.json();

        if (res.ok) {
          // data.notices comes sorted (if your backend uses .sort({date:-1}))
          // but if not, we'll sort here too as a fallback
          const sorted = data.notices
            ? data.notices.sort(
                (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
              )
            : data.sort(
                (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
              );

          setNotices(sorted);
        } else {
          console.error("Failed to fetch notices:", data.message);
        }
      } catch (err) {
        console.error("Error fetching notices:", err);
      }
    };

    fetchNotices();
  }, []);

  return (
    <div className={styles.noticesSection}>
      <h2 className={styles.noticesTitle}>Latest Notices</h2>

      <ul className={styles.noticesList}>
        {notices.map((notice) => (
          <li key={notice._id} className={styles.noticeItem}>
            <h3 className={styles.noticeTitle}>{notice.title}</h3>
            <span className={styles.noticeDate}>
              {new Date(notice.createdAt).toLocaleDateString()}
            </span>
          </li>
        ))}
      </ul>

      <div className={styles.noticesFooter}>
        <Link to="/notices" className={styles.showAllBtn}>
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Notices;
