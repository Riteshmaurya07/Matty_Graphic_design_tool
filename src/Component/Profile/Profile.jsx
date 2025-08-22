import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Modal from "react-modal";
import "./Profile.css";

Modal.setAppElement("#root");

function Profile() {
  const [user, setUser] = useState(null);
  const [editOpen, setEditOpen] = useState(false);
  const [editName, setEditName] = useState("");
  const [editPhoto, setEditPhoto] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setEditName(parsedUser.name);
      setEditPhoto(parsedUser.photo?.url || "https://via.placeholder.com/150");
    }
  }, []);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setEditPhoto(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const updatedUser = {
      ...user,
      name: editName,
      photo: { url: editPhoto },
    };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setEditOpen(false);
  };

  if (!user) {
    return <p className="no-user-msg">Please log in first.</p>;
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          src={user.photo?.url || "https://via.placeholder.com/150"}
          alt="profile"
        />
        <h2>{user.name}</h2>
        <p>{user.email}</p>

        <div className="profile-buttons">
          <button className="edit-btn" onClick={() => setEditOpen(true)}>
            Edit Profile
          </button>

          <NavLink to="/home">
            <button
              className="logout-btn"
              onClick={() => {
                localStorage.removeItem("user");
                localStorage.removeItem("jwt");
                setUser(null);
              }}
            >
              Logout
            </button>
          </NavLink>
        </div>
      </div>

      {/* Edit Profile Modal */}
      <Modal
        isOpen={editOpen}
        onRequestClose={() => setEditOpen(false)}
        contentLabel="Edit Profile"
        className="ReactModal__Content"
        overlayClassName="ReactModal__Overlay"
      >
        <h2 className="modal-title">Edit Profile</h2>
        <div className="modal-body">
          <div className="edit-photo-wrapper">
            <img src={editPhoto} alt="preview" />
            <label htmlFor="fileInput">✎</label>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="hidden-input"
            />
          </div>

          <input
            type="text"
            className="modal-input"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />

          <div className="modal-buttons">
            <button className="save-btn" onClick={handleSave}>
              Save
            </button>
            <button className="cancel-btn" onClick={() => setEditOpen(false)}>
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Profile;
