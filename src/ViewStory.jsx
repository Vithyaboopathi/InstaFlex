import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ViewStory = () => {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  // const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3001/story/${id}`)
      .then((data) => data.json())
      .then((data) => {
        setStory(data);
      })

      .catch((error) => console.error("Error fetching story:", error));
  }, [id]);

  const currentId = Number(id);
  const prevId = currentId - 1;
  const nextId = currentId + 1;

  return (
    <div>
      {story ? (
        <div className="d-flex justify-content-center align-items-center">
          <Link to={`/story/${prevId}`}>
            <i class="bi bi-arrow-left-circle-fill"></i>
          </Link>

          <img className="vh-100" src={story.profileImage} alt="" />

          <Link to={`/story/${nextId}`}>
            <i class="bi bi-arrow-right-circle-fill"></i>
          </Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ViewStory;
