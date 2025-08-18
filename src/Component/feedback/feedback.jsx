import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FeedbackForm.css"; // Import CSS file

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comments, setComments] = useState("");
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => {
        setAlertMessage("");
        setAlertType("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [alertMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!rating) {
      setAlertMessage("Please select a rating before submitting.");
      setAlertType("error");
      return;
    }
    setLoading(true);
    try {
      await axios.post("http://localhost:4001/api/feedback", { rating, comments });
      setAlertMessage("Thank you for your feedback!");
      setAlertType("success");
      setRating(0);
      setComments("");
    } catch (error) {
      setAlertMessage(error.response?.data?.message || "Failed to submit feedback.");
      setAlertType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="feedback-page">
      <div className="feedback-container">
        <div className="feedback-card">
          <h2 className="feedback-title">Share Your Feedback</h2>

          {alertMessage && (
            <div className={`alert ${alertType}`}>
              {alertMessage}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <label className="rating-label">Rate Your Experience:</label>
            <div className="rating-stars">
              {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                  <svg
                    key={index}
                    onClick={() => setRating(starValue)}
                    onMouseEnter={() => setHover(starValue)}
                    onMouseLeave={() => setHover(0)}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={(hover || rating) >= starValue ? "#facc15" : "none"}
                    stroke="#facc15"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 17.75l-6.172 3.245 1.18-6.877-5-4.873 6.9-1.003L12 2.75l3.092 6.292 6.9 1.003-5 4.873 1.18 6.877z"
                    />
                  </svg>
                );
              })}
            </div>

            <label className="rating-label">Your Comments:</label>
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              placeholder="Let us know your thoughts..."
              className="feedback-textarea"
              rows="4"
            />

            <button
              type="submit"
              disabled={loading}
              className="feedback-button"
            >
              {loading ? "Submitting..." : "Submit Feedback"}
            </button>
          </form>

          <p className="feedback-footer">
            We appreciate your time and thoughts — they help us make Matty even better.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
