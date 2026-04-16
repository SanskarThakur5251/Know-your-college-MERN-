import React, { useState } from "react";
import styles from "../ElementStyles/contactSectionStyles.module.css";

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredDate: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        alert("✅ Contact request submitted successfully!");
        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
          preferredDate: "",
        });
      } else {
        alert(`❌ Error: ${data.message}`);
      }
    } catch (err) {
      console.error(err);
      alert("Server error, please try again later.");
    }
  };

  return (
    <div className={styles.contactPage}>
      <h2 className={styles.heading}> Book a Call With Us</h2>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          value={form.phone}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          className={styles.textarea}
        />
        <input
          type="date"
          name="preferredDate"
          value={form.preferredDate}
          onChange={handleChange}
          className={styles.input}
        />

        <button type="submit" className={styles.button}>
          Submit Request
        </button>
      </form>
    </div>
  );
}

export default ContactPage;
