import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import GroupPage from "./GroupPage";
import { FaSpinner } from "react-icons/fa";

const AllGroup = () => {
  const groupData = useLoaderData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate short loading delay for UX polish
    const timeout = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <FaSpinner className="animate-spin text-primary text-5xl" />
      </div>
    );
  }

  if (!groupData || groupData.length === 0) {
    return (
      <div className="text-center text-info mt-20 text-lg">
        No groups available right now. Please check back later.
      </div>
    );
  }

  return (
    <div className="mx-auto mt-6 md:mt-10 px-3">
      <h2 className="text-xl md:text-3xl font-semibold text-primary text-center mb-8">
        Here are all the <span className="text-secondary">Groups</span> shared by users
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10">
        {groupData.map((data) => (
          <GroupPage data={data} key={data._id} />
        ))}
      </div>
    </div>
  );
};

export default AllGroup;
