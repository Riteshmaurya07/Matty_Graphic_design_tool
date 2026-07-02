import React from "react";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left side */}
        <div className="footer-left">
          <p className="text-sm">
            Contact Us:{" "}
            <a href="mailto:support@matty.com">support@matty.com</a>
          </p>

          {/* Social Icons */}
          <div className="footer-socials">
            {[
              { href: "https://facebook.com", src: facebook, alt: "Facebook" },
              { href: "https://twitter.com", src: twitter, alt: "Twitter" },
              { href: "https://linkedin.com", src: linkedin, alt: "LinkedIn" },
            ].map((icon, i) => (
              <a
                key={i}
                href={icon.href}
                target="_blank"
                rel="noreferrer"
                aria-label={icon.alt}
              >
                <img src={icon.src} alt={`${icon.alt} Logo`} />
              </a>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="footer-right">
          © {new Date().getFullYear()}{" "}
          <span>DesignHub</span>. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
