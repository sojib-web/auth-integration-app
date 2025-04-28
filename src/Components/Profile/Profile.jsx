// @ts-nocheck
import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext";

const Profile = () => {
  const { user } = use(AuthContext);
  return (
    <div>
      <h1>{user.email}</h1>
    </div>
  );
};

export default Profile;
