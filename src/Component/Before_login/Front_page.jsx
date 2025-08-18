import React from "react";
import ai_image_head from "../../assets/creative.png";
import Choose_designHub from "../../assets/Choose_designHub.png";
import front_page_image from "../../assets/front_page_image.png";
import { NavLink } from "react-router-dom";
import "./FrontPage.css"; // import css

function FrontPage() {
  return (
    <div className="frontpage">
      {/* Hero Section */}
      <section className="hero">
        <h1>
          Welcome to <span>DesignHub</span>
        </h1>
        <p>
          A browser-based design tool to easily create posters, banners, and
          social media images. <br />
          Features drag-and-drop editing, ready templates, cloud saving, and
          quick PNG/PDF exports — no installation needed.
        </p>
        <div className="hero-buttons">
          <NavLink to="/signup" className="get-started">
            Get Started
          </NavLink>
          <NavLink to="/feature" className="explore">
            Explore Features
          </NavLink>
        </div>
        <img src={front_page_image} alt="DesignHub Preview" />
      </section>

      {/* Build Business Section */}
      <section className="business">
        <h2>Build Your AI Business</h2>
        <h1>
          Experience the future of creative design <br /> with generative AI
        </h1>
        <p>
          Convert your ideas into reality with AI-powered design. Create stunning
          visuals online for free — perfect for marketing, branding, and
          businesses of any size.
        </p>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose">
        <div className="why-choose-content">
          <h1>Why Choose DesignHub?</h1>
          <ul>
            <li>Effortless online & offline design creation</li>
            <li>Free logo generator with professional results</li>
            <li>Simple, intuitive workflow to save time & costs</li>
            <li>Consistent, brand-ready output every time</li>
          </ul>
        </div>
        <div>
          <img src={Choose_designHub} alt="Why Choose DesignHub" />
        </div>
      </section>

      {/* Creativity Section */}
      <section className="creativity">
        <div>
          <img src={ai_image_head} alt="Creativity" />
        </div>
        <div className="creativity-content">
          <h1>Creativity</h1>
          <ul>
            <li>Craft captivating designs with AI-powered tools</li>
            <li>No prior design experience needed</li>
            <li>Streamlined workflow for efficiency</li>
            <li>Unlock endless design possibilities</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default FrontPage;
