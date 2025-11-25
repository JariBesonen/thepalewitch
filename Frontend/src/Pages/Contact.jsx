import React from "react";
import "../Styles/Contact.css";
function Contact() {
  return (
    <div className="contact-page-wrapper">
      <form className="contact-form">
        <h2>Contact the Developer</h2>
        <label htmlFor="email">your email address</label>
        <input type="text" id="email" />
        <button id="send-message-btn">Send</button>
      </form>
      <h3>TPW</h3>
    </div>
  );
}

export default Contact;
