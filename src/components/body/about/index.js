import React from "react";
import "./about.css";
function About() {
  return (
    <div className="about">
      <div className="about-info">
        Hello There 👋, I am <br />
        <span className="info-name">Shuvam Kumar</span>.<br /> I love
        experimenting with the web.
      </div>
      <div className="about-photo">
        <img
          src={require("../../../assets/image/coding.png").default}
          className="picture"
        />
      </div>
    </div>
  );
}

export default About;
