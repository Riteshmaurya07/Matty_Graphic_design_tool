import express from "express";
import { register, login, logout } from "../controller/usercontroller.js";
import { isAuthenticated } from "../middleware/authUser.js";
import upload from "../middleware/upload.js";
import passport from "passport";
import {User} from "../models/usermodel.js";


const router = express.Router();

// ================= Update Profile =================

router.put("/me", isAuthenticated, upload.single("avatar"), async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update username if provided
    if (req.body.username) {
      user.username = req.body.username;
    }

    // Remove avatar if requested
    if (req.body.removeAvatar === "true") {
      user.avatarUrl = "";
    }

    // Upload new avatar if provided
    if (req.file) {
      // Use Cloudinary upload_stream because we are using memoryStorage
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "avatars",
          public_id: `${req.user._id}_avatar`,
          overwrite: true,
        },
        async (error, result) => {
          if (error) {
            console.error("Cloudinary error:", error);
            return res.status(500).json({ message: "Cloudinary upload failed" });
          }
          user.avatarUrl = result.secure_url;
          await user.save();
          return res.json({ success: true, user });
        }
      );

      // Pipe buffer into Cloudinary
      uploadStream.end(req.file.buffer);
      return; // prevent further execution
    }

    await user.save();
    res.json({ success: true, user });
  } catch (err) {
    console.error("Profile update error:", err);
    res.status(500).json({ message: "Server error" });
  }
});


// ================= Google Auth =================

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login", session: false }),
  (req, res) => {
    res.send(`
      <html>
        <body>
          <script>
            window.opener.postMessage(
              {
                token: "${req.user.token}",
                user: ${JSON.stringify(req.user)}
              },
              "${process.env.FRONTEND_URL || "http://localhost:5173"}"
            );
            window.close();
          </script>
        </body>
      </html>
    `);
  }
);

// ================= Auth Routes =================

router.post("/register", upload.single("photo"), register);
router.post("/login", login);
router.get("/logout", isAuthenticated, logout);

export default router;