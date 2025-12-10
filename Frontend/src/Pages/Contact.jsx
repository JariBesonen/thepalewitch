import React, { useState } from "react";
import "../Styles/Contact.css";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch( `${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message sent successfully.");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Failed to send message.");
    }
  };

  return (
    <div className="contact-page-wrapper">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contact the Developer</h2>

        <label htmlFor="email">your email address</label>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="you@example.com"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="message">your message</label>
        <textarea
          id="message"
          value={message}
          placeholder="Type your message here..."
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button id="send-message-btn" type="submit">
          Send
        </button>

        <p className="status-text">{status}</p>
      </form>

      <h3>TPW</h3>
    </div>
  );
}

export default Contact;
