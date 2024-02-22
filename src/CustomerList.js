import React, { useState, useEffect } from "react";
import { makeApiCall } from "./utils/data";
import UserCard from "./UserCard";

function CustomerList() {
  const [allUsers, setAllUsers] = useState([]);
  const [selectedUserID, setSelectedUserID] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const allUsersResponse = await makeApiCall("/user/userInfo/allUsers");
      setAllUsers(allUsersResponse);
    };

    fetchData();
  }, []);

  const fetchUserInfo = async (userID) => {
    const userInfoResponse = await makeApiCall(`/user/userInfo/${userID}`);
    setUserInfo(userInfoResponse);
  };

  const handleRowClick = (userID) => {
    setSelectedUserID(userID);
    fetchUserInfo(userID);
  };

  const handleBack = () => {
    setSelectedUserID(null);
    setUserInfo(null);
  };

  return (
    <div className="container">
      <h2 style={{ marginLeft: "10px", paddingLeft: "18px" }}>Dashboard</h2>

      {userInfo ? (
        <div style={{ paddingLeft: "10%" }}>
          <UserCard userInfo={userInfo} onBack={handleBack} />
        </div>
      ) : (
        <div className="table_container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>FirstName</th>
                <th>MiddleName</th>
                <th>LastName</th>
              </tr>
            </thead>
            <tbody>
              {allUsers?.map((item, i) => (
                <tr key={i} onClick={() => handleRowClick(item.userId)}>
                  <td>{item?.userId}</td>
                  <td>{item?.firstName}</td>
                  <td>{item?.middleName}</td>
                  <td>{item?.lastName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CustomerList;
