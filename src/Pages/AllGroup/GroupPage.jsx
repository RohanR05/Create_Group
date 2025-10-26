import React from "react";
import { Link } from "react-router";
import {
  FaUsers,
  FaInfoCircle,
  FaArrowRight,
  FaImage,
  FaQuoteRight,
} from "react-icons/fa";

const GroupPage = ({ data, loading }) => {
  if (loading) {
    return (
      <div className="my-10 animate-pulse">
        <div
          className="
            card bg-primary/10 
            shadow-xl shadow-primary/40 
            rounded-2xl overflow-hidden
          "
        >
          {/* Image Skeleton */}
          <div className="h-64 bg-primary/20 w-full"></div>

          {/* Content Skeleton */}
          <div className="p-6 space-y-3">
            <div className="h-6 bg-primary/20 w-3/4 rounded"></div>
            <div className="h-4 bg-primary/20 w-full rounded"></div>
            <div className="h-4 bg-primary/20 w-5/6 rounded"></div>

            <div className="flex gap-5 mt-3">
              <div className="h-4 w-24 bg-primary/20 rounded"></div>
              <div className="h-4 w-24 bg-primary/20 rounded"></div>
            </div>

            <div className="h-10 w-32 bg-primary/20 rounded mt-4"></div>
          </div>
        </div>
      </div>
    );
  }

  // If not loading → show normal card
  const { _id, image, groupName, description } = data || {};

  return (
    <div className="my-10">
      <div
        className="
          card bg-primary/10 
          shadow-xl shadow-primary/40 
          transition-all duration-300 
          hover:shadow-2xl hover:shadow-secondary/40 
          hover:-translate-y-1 hover:scale-[1.02]
          rounded-2xl overflow-hidden
        "
      >
        {/* Image Section */}
        <figure className="relative overflow-hidden h-64">
          <img
            src={image}
            alt="Group"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-3 left-3 bg-black/40 text-white px-3 py-1 rounded-full flex items-center gap-2 text-sm">
            <FaImage className="text-secondary" /> Group Cover
          </div>
        </figure>

        {/* Content Section */}
        <div className="card-body p-6 space-y-3">
          {/* Title */}
          <h2 className="card-title text-primary text-2xl flex items-center gap-2">
            <FaUsers className="text-secondary text-xl" />
            {groupName}
          </h2>

          {/* Description */}
          <p className="text-neutral flex items-start gap-2 leading-relaxed">
            <FaQuoteRight className="text-secondary mt-1" />
            {description?.length > 150
              ? `${description.slice(0, 150)}...`
              : description}
          </p>

          {/* Info Icons Row */}
          <div className="flex items-center gap-5 text-neutral mt-2">
            <div className="flex items-center gap-2">
              <FaUsers className="text-secondary" />
              <span>Active Members</span>
            </div>
            <div className="flex items-center gap-2">
              <FaInfoCircle className="text-secondary" />
              <span>Group Insights</span>
            </div>
          </div>

          {/* Button */}
          <div className="card-actions justify-end mt-4">
            <Link to={`/groupDetails/${_id}`}>
              <button
                className="
                  btn btn-primary flex text-accent items-center gap-2 text-lg 
                  transition-all duration-300 
                  hover:scale-105 hover:brightness-110
                "
              >
                Explore
                <FaArrowRight className="text-secondary text-lg" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupPage;
