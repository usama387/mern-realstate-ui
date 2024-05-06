import { useContext, useState } from "react";
import "./ProfileUpdatePage.scss";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UploadWidget from "../../components/UploadWidget/UploadWidget";

const ProfileUpdatePage = () => {
  // currentUser to get details and update for updating user
  const { currentUser, updateUser } = useContext(AuthContext);

  // managing error state
  const [error, setError] = useState("");

  // managing state for avatars
  const [avatar, setAvatar] = useState(currentUser.avatar);

  // to navigate after profile update
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // to reach the inputs using their names
    const formData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await axios.put(
        `http://localhost:8700/api/users/${currentUser.id}`,
        {
          username,
          email,
          password,
          avatar: avatar[0],
        }
      );
      updateUser(res.data);
      navigate("/profile");
    } catch (err) {
      console.error("Error updating user:", err);
      setError(err.response?.data?.message || "Failed to update user.");
    }
  };

  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser.email}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button>Update</button>
          {error && <span>error</span>}
        </form>
      </div>
      <div className="sideContainer">
        <img
          src={avatar || "/noavatar.jpg"}
          alt="userAvatar"
          className="avatar"
        />
        <UploadWidget
          uwConfig={{
            cloudName: "dobx9mwft",
            uploadPreset: "mern-realstate",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatars",
          }}
          setState={setAvatar}
        />
      </div>
    </div>
  );
};

export default ProfileUpdatePage;
