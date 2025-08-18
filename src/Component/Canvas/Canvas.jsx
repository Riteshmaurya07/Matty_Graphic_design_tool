import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Canvas.css";

function Canvas() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/editor");
    }, 800); // small delay for loader animation

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="canvas-container">
      <div className="loader"></div>
    </div>
  );
}

export default Canvas;
