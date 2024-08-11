import { getAllUsers } from "@/app/actions/memberActions";
import React from "react";

const UserDashboard = async () => {
  // Await the asynchronous function
  const allusers = await getAllUsers();
  console.log(allusers);

  return (
    <div>
      {allusers.map((user) => (
        // Return the JSX element
        <span key={user.id}>{user.username}</span>
      ))}
    </div>
  );
};

export default UserDashboard;
