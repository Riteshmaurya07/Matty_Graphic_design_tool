import { createBrowserRouter } from "react-router-dom";
import React from "react";

import { Layout } from "@/components/layout";
import FrontPage from "@/pages/FrontPage.jsx";
import AboutPage from "@/pages/AboutPage.jsx";
import { ContactForm } from "@/features/contact";
import { Profile } from "@/features/profile";
import { Administration } from "@/features/admin";
import FinancePage from "@/pages/FinancePage.jsx";
import FeaturePage from "@/pages/FeaturePage.jsx";
import SettingPage from "@/pages/SettingPage.jsx";
import ChatbotPage from "@/pages/ChatbotPage.jsx";
import { Canvas, ExcalidrawEditor } from "@/features/canvas";
import { FeedbackForm } from "@/features/feedback";
import { Dashboard } from "@/features/dashboard";
import { Signup, Login } from "@/features/auth";
import { PaymentSection } from "@/features/billing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <FrontPage /> },
      { path: "signup", element: <Signup /> },
      { path: "login", element: <Login /> },
      { path: "about", element: <AboutPage /> },
      { path: "home", element: <FrontPage /> },
      { path: "contact", element: <ContactForm /> },
      { path: "profile", element: <Profile /> },
      { path: "administration", element: <Administration /> },
      { path: "finance", element: <FinancePage /> },
      { path: "feature", element: <FeaturePage /> },
      { path: "setting", element: <SettingPage /> },
      { path: "chatbot", element: <ChatbotPage /> },
      { path: "canvas", element: <Canvas /> },
      { path: "feedback", element: <FeedbackForm /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "editor", element: <ExcalidrawEditor /> },
      { path: "payment/*", element: <PaymentSection /> }, // Note: wildcard route added for nested sub-routes
    ],
  },
]);
