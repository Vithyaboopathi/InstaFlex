import React, { useEffect } from "react";
import { useState } from "react";

const Suggestions = () => {
  const [profile, setProfile] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);

  const handleToggle = (userId) => {
    setIsFollowing((prev) => ({
      ...prev,
      [userId]: !prev[userId],
    }));
  };

  useEffect(() => {
    fetch("http://localhost:3001/profile")
      .then((data) => data.json())
      .then((data) => setProfile(data))
      .catch((err) => console.log(err));

    // Fetching suggestions
    fetch("http://localhost:3001/suggestions")
      .then((data) => data.json())
      .then((data) => setSuggestions(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="suggestions">
        {profile ? (
          <div className="d-flex">
            <img className=" dp rounded-circle" src={profile.image} alt="" />
            <h5>{profile.username}</h5>
            <small className="ms-auto text-primary">Switch</small>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className=" d-flex">
        <h6>Suggestions for you</h6>
        <p className="ms-auto text-primary">See All</p>
      </div>
      {suggestions.length > 0 ? (
        suggestions.map((user) => (
          <div key={user.id} className="suggestion d-flex my-3">
            <img className=" dp rounded-circle" src={user.image} alt="" />
            <div>
              <h5>{user.username}</h5>
              <small>{user.name}</small>
            </div>
            <button
              className="btn  ms-auto"
              onClick={() => {
                handleToggle(user.id);
              }}
            >
              {isFollowing[user.id] ? "Following" : "Follow"}
            </button>
          </div>
        ))
      ) : (
        <p>Loading Suggestions...</p>
      )}
    </div>
  );
};

export default Suggestions;
