import React from "react";
import { useLoaderData } from "react-router";
import GroupPage from "../Pages/groupPage";

const AllGroup = () => {
  const groupData = useLoaderData();

  return (
    <div>
      <div className="my-10 md:w-8/12 mx-auto p-2">
        {groupData.map((data) => (
          <GroupPage data={data} key={data._id}></GroupPage>
        ))}
      </div>
    </div>
  );
};

export default AllGroup;
