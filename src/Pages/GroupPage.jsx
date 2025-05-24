import React from "react";
import { Link } from "react-router";

const GroupPage = ({ data }) => {
  const { _id, image, groupName, description } = data;

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl my-10 dark:bg-[#3d365c] dark:text-[#f3f3e0]">
        <figure className="w-full md:w-8/12">
          <img className="w-fit" src={image} alt="Group Photo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{groupName}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary"><Link to={`/groupDetails/${_id}`}>Group Details</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupPage;
