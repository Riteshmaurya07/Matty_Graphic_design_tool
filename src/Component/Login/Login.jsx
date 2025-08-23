import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "./Login.css";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  // ✅ Use backend URL from env with fallback
  const backendUrl =
    import.meta.env.VITE_BACKEND_URI || "http://localhost:4000";

  useEffect(() => {
    setIsVisible(true);

    // ✅ Redirect if already logged in
    const token = localStorage.getItem("jwt");
    if (token) {
      navigate("/administration");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/users/login`,
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      const userData = {
        _id: data.user._id,
        name: data.user.name,
        email: data.user.email,
        photo: data.user.photo,
        token: data.token,
      };

      localStorage.setItem("jwt", data.token);
      localStorage.setItem("user", JSON.stringify(userData));

      toast.success(data.message || "Login successful");
      setFormData({ email: "", password: "" });
      navigate("/administration");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  const handleGoogleSignup = () => {
    const width = 500,
      height = 600;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;

    // ✅ Open Google OAuth popup
    const popup = window.open(
      `${backendUrl}/api/users/google`,
      "Google Signup",
      `width=${width},height=${height},top=${top},left=${left}`
    );

    const messageHandler = (event) => {
      // ✅ Allow both localhost and production origin
      if (
        event.origin !== "http://localhost:4000" &&
        event.origin !== new URL(backendUrl).origin
      ) {
        return;
      }

      const { token, user } = event.data;
      if (token && user) {
        localStorage.setItem("jwt", token);
        localStorage.setItem("user", JSON.stringify(user));
        toast.success("Google login successful!");
        navigate("/administration");
        popup.close();
      }

      window.removeEventListener("message", messageHandler);
    };

    window.addEventListener("message", messageHandler);
  };

  return (
    <div className="login-container">
      <main className="login-main">
        <form
          onSubmit={handleSubmit}
          className={`login-form ${isVisible ? "show" : ""}`}
        >
          <h2>Welcome Back</h2>
          <p>Login to continue where you left off.</p>

          <div className="mb-4">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your registered email"
              required
            />
          </div>

          <div className="mb-6">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

          <button
            type="button"
            onClick={handleGoogleSignup}
            className="google-btn"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
            />
            <span>Continue with Google</span>
          </button>

          <div className="login-links">
            <a href="#">Forgot Password?</a>
            <br />
            <Link to="/signup">Don’t have an account? Sign Up</Link>
          </div>
        </form>
      </main>
    </div>
  );
}
