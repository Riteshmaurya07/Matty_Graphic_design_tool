import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import { router } from "@/routes/router.jsx";
import { F_chat } from "@/components/common";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Floating Chatbot always visible */}
    <F_chat />
    <RouterProvider router={router} />
  </StrictMode>
);
