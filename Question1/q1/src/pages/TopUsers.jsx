import React, { useEffect, useState } from "react";
import apiService from "../api/apiService";

const TopUsers = () => {
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    apiService.getTopUsers().then(setTopUsers);
  }, []);

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold">Top 5 Users</h2>
      <ul className="mt-4">
        {topUsers.map((user) => (
          <li key={user.id} className="p-2 border-b">{user.name} - {user.postsCount} posts</li>
        ))}
      </ul>
    </div>
  );
};
export default TopUsers;