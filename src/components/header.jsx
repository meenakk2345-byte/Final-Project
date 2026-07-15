import React from "react";
import "./tailwind.css";

const ContactHeader = () => {
  return (
    <section className="contact-header">
      <div className="satinder1">
        <div className="contact-content">
          <h1>Contact Us</h1>

          <p>We'd love to hear from you.</p>

          <p>Reach out to us for any queries or bookings.</p>

          <div className="satinder2">
            <span>Home</span>
            <span> &gt; </span>
            <span className="active">Contact</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeader;