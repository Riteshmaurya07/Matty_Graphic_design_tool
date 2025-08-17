import React from "react";
import ai_image_head from "../../assets/creative.png";
import Choose_designHub from "../../assets/Choose_designHub.png";
import front_page_image from "../../assets/front_page_image.png";
import { NavLink } from "react-router-dom";

function FrontPage() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white">
        <h1 className="text-5xl font-extrabold drop-shadow-lg">
          Welcome to <span className="text-yellow-300">DesignHub</span>
        </h1>
        <p className="mt-6 text-lg leading-relaxed max-w-3xl mx-auto">
          A browser-based design tool to easily create posters, banners, and
          social media images. <br />
          Features drag-and-drop editing, ready templates, cloud saving, and
          quick PNG/PDF exports — no installation needed.
        </p>
        <div className="mt-8 flex justify-center space-x-6">
          <NavLink
            to="/signup"
            className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-300 transition"
          >
            Get Started
          </NavLink>
          <NavLink
            to="/feature"
            className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Explore Features
          </NavLink>
        </div>
        <img
          className="mx-auto mt-12 w-3/5 max-w-2xl rounded-xl shadow-2xl"
          src={front_page_image}
          alt="DesignHub Preview"
        />
      </section>

      {/* Build Business Section */}
      <section className="bg-gray-50 py-20 px-6 md:px-20 text-center space-y-6">
        <h2 className="text-2xl font-bold text-indigo-600 uppercase tracking-wide">
          Build Your AI Business
        </h2>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-snug">
          Experience the future of creative design <br /> with generative AI
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Convert your ideas into reality with AI-powered design. Create stunning
          visuals online for free — perfect for marketing, branding, and
          businesses of any size.
        </p>
      </section>

      {/* Why Choose Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20 py-20">
        <div className="space-y-5 max-w-lg">
          <h1 className="text-4xl font-bold text-gray-800">
            Why Choose DesignHub?
          </h1>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Effortless online & offline design creation</li>
            <li>Free logo generator with professional results</li>
            <li>Simple, intuitive workflow to save time & costs</li>
            <li>Consistent, brand-ready output every time</li>
          </ul>
        </div>
        <div>
          <img
            className="h-80 rounded-xl shadow-lg border border-gray-200"
            src={Choose_designHub}
            alt="Why Choose DesignHub"
          />
        </div>
      </section>

      {/* Creativity Section */}
      <section className="bg-gray-100 flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20 py-20">
        <div>
          <img
            className="h-80 rounded-xl shadow-lg border border-gray-200"
            src={ai_image_head}
            alt="Creativity"
          />
        </div>
        <div className="space-y-5 max-w-lg text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800">Creativity</h1>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
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
