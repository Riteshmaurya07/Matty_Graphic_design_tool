import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout.jsx";
import Front_page from "./Component/Before_login/Front_page.jsx";
import About from "./Component/About/About.jsx";
import Contact from "./Component/Contact/Contact.jsx";
import Profile from "./Component/Profile/Profile.jsx";
import Administration from "./Component/Administration/Administration.jsx";
import Finance from "./Component/Finance/Finance.jsx";
import Feature from "./Component/Feature/Feature.jsx";
import Setting from "./Component/Setting/Setting.jsx";
import Chatbot from "./Component/Chatbot/Chatbot.jsx";
import Canvas from "./Component/Canvas/Canvas.jsx";
import Signup from "./Component/Signup/Signup.jsx";
import Login from "./Component/Login/Login.jsx";
import FeedbackForm from "./Component/Feedback/Feedback.jsx";
import F_chat from "./Component/Floating_chatbot/F_chat.jsx";
import Dashboard from "./Component/Dashboard/Dashboard.jsx";
import HistorySection from "./Component/HistorySection/HistorySection.jsx";
import ExcalidrawEditor from "./ExcalidrawEditor.jsx";
import PaymentSection from "./Component/Payment/PaymentSection.jsx";

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Front_page /> }, // ✅ index route instead of path:""
      { path: "signup", element: <Signup /> },
      { path: "login", element: <Login /> },
      { path: "about", element: <About /> },
      { path: "home", element: <Front_page /> },
      { path: "contact", element: <Contact /> },
      { path: "profile", element: <Profile /> },
      { path: "administration", element: <Administration /> },
      { path: "finance", element: <Finance /> },
      { path: "feature", element: <Feature /> },
      { path: "setting", element: <Setting /> },
      { path: "chatbot", element: <Chatbot /> },
      { path: "canvas", element: <Canvas /> },
      { path: "feedback", element: <FeedbackForm /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "history", element: <HistorySection /> },
      { path: "editor", element: <ExcalidrawEditor /> },
      { path: "payment", element: <PaymentSection /> },
    ],
  },
]);

// Render
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Floating Chatbot always visible */}
    <F_chat />
    <RouterProvider router={router} />
  </StrictMode>
);
