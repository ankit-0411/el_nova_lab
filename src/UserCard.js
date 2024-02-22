import React from "react";
import "./App.css";

function UserCard({ userInfo, onBack }) {
  return (
    <div className="user-card">
      <span onClick={onBack}> ◀ All User</span>
      <h3>User Details</h3>
      <p>ID: {userInfo.userId}</p>
      <p>First Name: {userInfo.firstName}</p>
      <p>
        Middle Name:{" "}
        {userInfo.middleName ? userInfo.middleName : "Not Available"}{" "}
      </p>
      <p>Last Name: {userInfo.lastName ? userInfo.lastName : "null"}</p>
    </div>
  );
}

export default UserCard;
