import React from "react";
import text from "./assets/text.png";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className=" sidebar m-3 position-fixed w-20 ">
      <div className="upper d-flex flex-column gap-3">
        <img className="logo-text" src={text} alt="" />
        <div>
          <i className="bi bi-house"></i> Home
        </div>
        <div>
          <i className="bi bi-gear"></i> Search
        </div>
        <div>
          <i className="bi bi-gear"></i> Explore
        </div>
        <div>
          <i className="bi bi-play-circle"></i> Reels
        </div>
        <div>
          <i className="bi bi-chat"></i> Messages
        </div>
        <div>
          <i className="bi bi-bell"></i> Notifications
        </div>
        <div>
          <i className="bi bi-plus"></i> Create
        </div>
        <div onClick={() => navigate("/profile")}>
          <i className="bi bi-person"></i> Profile
        </div>
      </div>
      <div className="lower position-fixed bottom-0 d-flex flex-column gap-3">
        <div>
          <i className="bi bi-threads"></i> Threads
        </div>
        <div>
          <i className="bi bi-gear"></i> More
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
