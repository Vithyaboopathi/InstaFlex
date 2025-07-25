import React, { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  function getTimeAgo(timestamp) {
    const now = new Date();
    const postTime = new Date(timestamp);
    const diff = Math.floor((now - postTime) / 1000);

    if (diff < 10) return "Just Now";
    if (diff < 60) return `${diff} seconds ago`;
    const mins = Math.floor(diff / 60);
    if (mins < 60) return `${mins} minutes${mins > 1 ? "s" : ""} ago`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    const days = Math.floor(hours / 24);
    if (days < 7) return `${days} day${days > 1 ? "s" : ""} ago`;

    return postTime.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((data) => data.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      className="d-flex justify-content-center"
      style={{ marginLeft: "220px" }}
    >
      {posts.length > 0 ? (
        <div className="posts">
          {posts.map((post) => (
            <div key={post.post_id}>
              <div className="d-flex">
                <img className=" dp rounded-circle" src={post.image} alt="" />
                <h5>{post.username}</h5>
              </div>
              <img className="post" src={post.image} alt="" />
              <div className=" icons d-flex">
                <div className="d-flex">
                  <i class="bi bi-heart"></i>
                  <p>{post.likes}</p>
                </div>
                <div className="d-flex">
                  <i class="bi bi-chat"></i>
                  <p>{post.comments.length}</p>
                </div>

                <i class="bi bi-send"></i>
              </div>
              <div className=" d-flex caption">
                <h5>{post.username}</h5>
                <p>{post.caption}</p>
              </div>
              <p
                className="text-muted text-sm mt-1 mb-4"
                style={{ fontStyle: "italic" }}
              >
                {post.timestamp ? getTimeAgo(post.timestamp) : " "}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading Posts</div>
      )}
    </div>
  );
};

export default Posts;
