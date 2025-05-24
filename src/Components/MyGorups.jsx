import { use } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Auth/AuthContext";

const MyGroups = () => {
  const {user} = use(AuthContext)
  console.log(user)
  const data = useLoaderData();

  const userEmail = user?.email;

  const myGroups = data.filter((group) => group.userEmail === userEmail);

  if (!userEmail) return <p>Please log in to see your groups.</p>;

  return (
    <div>
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
