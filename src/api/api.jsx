import React from "react";
import UserPost from "./andpoints/UserPost";
import TokenPost from "./andpoints/TokenPost";

const api = () => {
  return <div>
    <h2>USER POST</h2>
    <UserPost />
    <h2>TOKEN POST</h2>
    <TokenPost />
  </div>;
};

export default api;