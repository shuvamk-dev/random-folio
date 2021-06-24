import React from "react";
import "./contact.css";
function Contact() {
  return (
    <div className="contact">
      <label>Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? Contact me on any of the platform</p>
        </div>
        <div className="download">
          <a download href={require("../../../assets/resume.pdf").default}>
            <i class="fi-rr-cloud-download download-icon" />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
