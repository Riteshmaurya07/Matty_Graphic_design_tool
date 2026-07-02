import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./Contact.css";

const ContactForm = () => {
  const initialValues = { name: "", email: "", message: "" };

  // Yup Validation Schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  // Get API base URL from .env (with fallback)
  const API_BASE =
    import.meta.env.VITE_BACKEND_URI || "http://localhost:4000";

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      await axios.post(`${API_BASE}/api/contact`, values);

      alert("Message sent successfully!");
      resetForm();
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2 className="contact-title">Contact Us</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              {/* Name Field */}
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <Field
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="form-input"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="error-text"
                />
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label className="form-label">Your Email</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="form-input"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-text"
                />
              </div>

              {/* Message Field */}
              <div className="form-group">
                <label className="form-label">Your Message</label>
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Write your message..."
                  rows="4"
                  className="form-textarea"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="error-text"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-btn"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;
