import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Stories = () => {
  const [Stories, setStories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/story")
      .then((data) => data.json())
      .then((data) => setStories(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="story d-flex mx-1">
      {Stories && Stories.length > 0 ? (
        Stories.map((story) => (
          <Link key={story.id} to={`/story/${story.id}`} className="story-link">
            <div className="gradient-border">
              <img
                src={story.profileImage}
                alt=""
                className="story-dp rounded-circle "
              />
            </div>
            <p className="text-truncate" style={{ width: "50px" }}>
              {story.username}
            </p>
          </Link>
        ))
      ) : (
        <div>No stories available</div>
      )}
    </div>
  );
};

export default Stories;
