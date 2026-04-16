import React, { useState } from "react";
import styles from "../ElementStyles/FAQStyles.module.css";
import faqData from "../../public/FAQs.js";

function FAQSection() {
  const [activeId, setActiveId] = useState(null);

  const toggle = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
     <div className={styles.all}>

    <div className={styles.faqContainer}>
      <h2 className={styles.title}>Frequently Asked Questions</h2>

      {faqData.map((faq) => (
        <div
          key={faq.id}
          className={`${styles.faqItem} ${
            activeId === faq.id ? styles.active : ""
          }`}
        >
          <div className={styles.faqQuestion} onClick={() => toggle(faq.id)}>
            <span>{faq.question}</span>
            <span className={styles.arrow}>
              {activeId === faq.id ? "▲" : "▼"}
            </span>
          </div>
          {activeId === faq.id && (
            <div className={styles.faqAnswer}>{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
    </div>
  );
}

export default FAQSection;
