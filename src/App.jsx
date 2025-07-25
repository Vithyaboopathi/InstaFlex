import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Suggestions from "./Suggestions";
import Stories from "./Stories";

const App = () => {
  return (
    <div className="d-flex vh-100 ">
      <Sidebar />
      <Stories />
      <Feed />
      <Suggestions />
    </div>
  );
};

export default App;
