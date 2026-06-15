import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

function Profile() {
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    const savedProfile = JSON.parse(
      localStorage.getItem("pulseProfile")
    );

    if (savedProfile) {
      setUsername(savedProfile.username || "");
      setBio(savedProfile.bio || "");
      setPhoto(savedProfile.photo || "");
    }
  }, []);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setPhoto(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const saveProfile = () => {
    const profileData = {
      username,
      bio,
      photo,
    };

    localStorage.setItem(
      "pulseProfile",
      JSON.stringify(profileData)
    );

    alert("Profile Saved Successfully!");
  };

  return (
    <>
      <Navbar />

      <div className="profile-page">
        <div className="profile-card">

          <label htmlFor="profileImage">
            {photo ? (
              <img
                src={photo}
                alt="profile"
                className="profile-avatar-img"
              />
            ) : (
              <div className="profile-avatar">
                +
              </div>
            )}
          </label>

          <input
            id="profileImage"
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            hidden
          />

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
          />

          <textarea
            placeholder="Write your bio..."
            value={bio}
            onChange={(e) =>
              setBio(e.target.value)
            }
          />

          <button onClick={saveProfile}>
            Save Profile
          </button>

          <div className="profile-preview">
            <h2>{username || "Username"}</h2>
            <p>{bio || "Your bio appears here"}</p>
          </div>

        </div>
      </div>
    </>
  );
}

export default Profile;