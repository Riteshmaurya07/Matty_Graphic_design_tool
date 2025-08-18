import React from "react";
import "./about.css"; // ✅ Import CSS

const About = () => {
  return (
    <div className="about-container">
      <main className="about-main">
        <div className="about-card animate-slideUpFade">
          {/* Title */}
          <h2 className="about-title animate-fadeIn">
            About <span>Matty</span>
          </h2>
          <p
            className="about-text animate-fadeIn"
            style={{ animationDelay: "0.2s" }}
          >
            Matty is an innovative online platform designed to make your
            project management experience smooth and collaborative.
          </p>

          {/* Mission */}
          <div
            className="about-section animate-fadeIn"
            style={{ animationDelay: "0.4s" }}
          >
            <h3 className="about-subtitle">Our Mission</h3>
            <p>
              Our mission is to simplify the way people collaborate on creative
              and technical projects by providing a clean, user-friendly, and
              feature-rich environment.
            </p>
          </div>

          {/* Why Choose Us */}
          <div
            className="about-section animate-fadeIn why-choose"
            style={{ animationDelay: "0.6s" }}
          >
            <h3 className="about-subtitle">Why Choose Us?</h3>

            <div className="why-choose-container">
              {[
                {
                  icon: "https://img.icons8.com/ios-filled/100/easy.png",
                  text: "Simple and intuitive interface",
                },
                {
                  icon: "https://img.icons8.com/ios-filled/100/collaboration.png",
                  text: "Seamless real-time collaboration",
                },
                {
                  icon: "https://img.icons8.com/ios-filled/100/lock--v1.png",
                  text: "Secure and reliable infrastructure",
                },
                {
                  icon: "https://img.icons8.com/ios-filled/100/settings.png",
                  text: "Customizable tools to fit your workflow",
                },
              ].map((item, index) => (
                <div className="why-choose-item" key={index}>
                  <img src={item.icon} alt="icon" />
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
