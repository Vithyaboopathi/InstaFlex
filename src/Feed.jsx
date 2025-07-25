import React from "react";
import Stories from "./Stories";
import Posts from "./Posts";

const Feed = () => {
  return (
    <div className="feed">
      <Stories />
      <Posts />
    </div>
  );
};

export default Feed;
