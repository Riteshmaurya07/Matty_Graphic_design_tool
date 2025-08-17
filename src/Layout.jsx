import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar always visible */}
      <Navbar />

      {/* Routed content */}
      <main className="flex-grow px-4 py-6">
        <div className="max-w-7xl mx-auto w-full">
          <Outlet />
        </div>
      </main>

      {/* Footer always visible */}
      <Footer />
    </div>
  );
}
