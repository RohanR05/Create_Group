import React from "react";
import { useLoaderData, useParams } from "react-router";
import GroupDetailsCard from "./GroupDetailsCard";

const GroupDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  console.log("Data:", data);
  console.log("ID from params:", id);

  const group = data.find((item) => item._id === id);

  return (
    <div className="m-2">
      {group ? <GroupDetailsCard group={group} /> : <p>Group not found</p>}
    </div>
  );
};

export default GroupDetails;
