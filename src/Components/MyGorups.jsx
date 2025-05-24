import React, { use, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Auth/AuthContext";

const MyGroups = () => {
  const {user} = use(AuthContext)
  console.log(user)
  const allGroups = useLoaderData(); // Get all groups
  const [myGroups, setMyGroups] = useState([]);

  useEffect(() => {
    if (user?.email && allGroups?.length) {
      const filtered = allGroups.filter(
        (group) => group.userEmail === user.email
      );
      setMyGroups(filtered);
    }
  }, [user, allGroups]);


  return (
    <div className="dark:bg-[#3d365c] dark:text-[#f3f3e0]">
      <h2>My Groups</h2>
      {myGroups.length === 0 ? (
        <p>You have no groups created.</p>
      ) : (
        myGroups.map((group) => (
          <div key={group._id}>
            <h3>{group.groupName}</h3>
            <p>{group.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default MyGroups;
