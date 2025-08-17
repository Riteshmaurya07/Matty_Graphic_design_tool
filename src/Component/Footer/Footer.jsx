import React from "react";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        
        {/* Left side */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">
            Contact Us:{" "}
            <a
              href="mailto:support@matty.com"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              support@matty.com
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-4 mt-3">
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
                className="hover:opacity-80 transition"
              >
                <img src={icon.src} alt={`${icon.alt} Logo`} className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="text-sm text-center md:text-right">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">DesignHub</span>. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
