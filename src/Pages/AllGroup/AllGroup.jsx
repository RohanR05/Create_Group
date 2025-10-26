import React from "react";
import { useLoaderData } from "react-router";
import GroupPage from "./GroupPage";

const AllGroup = () => {
  const groupData = useLoaderData();

  return (
    <div className="mx-auto mt-6 md:mt-10">
      <h2
        className="text-xl md:text-3xl font-semibold
       text-primary text-center"
      >
        Here is all <span className="text-secondary">Article</span> posted by
        all
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10">
        {groupData.map((data) => (
          <GroupPage data={data} key={data._id}></GroupPage>
        ))}
      </div>
    </div>
  );
};

export default AllGroup;
