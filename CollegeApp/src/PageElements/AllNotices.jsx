import React, { useEffect, useState } from "react";
import styles from "../ElementStyles/NoticesStyles.module.css"; // ✅ Reuse the same CSS as Notices Section

function AllNotices() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 25; // per page

  const fetchNotices = async (page = 1) => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:4000/api/notices?limit=${limit}&page=${page}`
      );
      const data = await res.json();
      if (res.ok) {
        setNotices(data.notices);
        setTotalPages(data.totalPages);
        setCurrentPage(data.currentPage);
      } else {
        console.error("Failed to fetch notices:", data.message);
      }
    } catch (err) {
      console.error("Error fetching notices:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    fetchNotices(page);
  };

  if (loading) return <h3 className={styles.loading}>Loading notices...</h3>;

  return (
    <div className={styles.noticesall}>
    <div className={styles.noticesSection}>
      <h2 className={styles.noticesTitle}>All Notices</h2>

      <ul className={styles.noticesList}>
        {notices.map((notice) => (
          <li key={notice._id} className={styles.noticeItem}>
            <div>
              <h3 className={styles.noticeTitle}>{notice.title}</h3>
              {notice.content && (
                <p className={styles.noticeContent}>{notice.content}</p>
              )}
            </div>
            <span className={styles.noticeDate}>
              {new Date(notice.createdAt || notice.date).toLocaleDateString()}
            </span>
          </li>
        ))}
      </ul>

      {/* ✅ Pagination below list */}
      <div className={styles.pagination}>
        <button
          className={styles.pageBtn}
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ⬅ Prev
        </button>
        <span className={styles.pageInfo}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className={styles.pageBtn}
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next ➡
        </button>
      </div>
    </div>
    </div>
  );
}

export default AllNotices;
