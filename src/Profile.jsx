import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState();
  const [followers, setFollowers] = useState([]);
  const [unfollowed, setUnfollowed] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3001/profile")
      .then((data) => {
        setProfile(data.data);
      })
      .catch((err) => console.log("Error:", err));

    axios
      .get("http://Localhost:3001/followers")
      .then((data) => {
        setFollowers(data.data);
      })
      .catch((err) => console.log("Error:", err));
  }, [unfollowed]);

  function handleInputChange(e) {
    setProfile((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  const handleUpdate = async () => {
    axios
      .put("http://Localhost:3001/profile", profile)
      .then(() => console.log("profile Updated"))
      .catch((err) => console.log("Error:", err));
  };
  const handleUnFollow = async (id) => {
    axios
      .delete(`http://Localhost:3001/followers/${id}`)
      .then(() => setUnfollowed(!unfollowed))
      .catch((err) => console.log("Error :", err));
  };

  return (
    <div className="m-5">
      {profile ? (
        <div>
          <img src={profile.image} alt="" className="profile rounded-circle" />
          <h5>{profile.username}</h5>
          <h6>{profile.bio}</h6>

          <input
            type="text"
            value={profile.username}
            name="username"
            placeholder="Update your username"
            className="form-control  my-4"
            onChange={handleInputChange}
          />
          <input
            type="text"
            value={profile.image}
            name="image"
            placeholder="Update your image URL"
            className="form-control my-4"
            onChange={handleInputChange}
          />
          <input
            type="text"
            value={profile.bio}
            name="bio"
            placeholder="Update your bio"
            className="form-control  my-4"
            onChange={handleInputChange}
          />
          <button className="btn btn-primary my-4" onClick={handleUpdate}>
            Update
          </button>
        </div>
      ) : (
        <p>Loading Profile...</p>
      )}

      {followers.length > 0
        ? followers.map((follower) => (
            <div key={follower.id} className="d-flex my-3">
              {follower.username}
              <button
                className="btn btn-secondary ms-auto"
                onClick={() => {
                  handleUnFollow(follower.id);
                }}
              >
                Unfollow
              </button>
            </div>
          ))
        : null}
    </div>
  );
};

export default Profile;
