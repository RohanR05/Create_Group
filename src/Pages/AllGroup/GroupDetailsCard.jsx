import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaUsers,
  FaCalendarAlt,
  FaUser,
  FaEnvelope,
  FaLayerGroup,
} from "react-icons/fa";

const GroupDetailsCard = ({ group }) => {
  const {
    groupName,
    category,
    description,
    location,
    maxMembers,
    startDate,
    image,
    userName,
    userEmail,
  } = group;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-xl mx-auto bg-primary/10 backdrop-blur-md border border-primary/20 shadow-lg shadow-primary/40 rounded-2xl hover:shadow-secondary/40 overflow-hidden md:my-12"
    >
      <motion.img
        src={image}
        alt={groupName}
        className="w-full h-64 object-cover"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      <div className="p-6">
        <h2 className="text-3xl font-bold text-primary mb-2">{groupName}</h2>

        <div className="flex items-center text-secondary gap-2 mb-3">
          <FaLayerGroup size={18} />
          <span className="text-neutral text-sm">Category: {category}</span>
        </div>

        <p className="text-neutral mb-4 leading-relaxed">{description}</p>

        <ul className="mb-4 text-neutral space-y-2">
          <li className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-secondary" size={18} />
            <span>
              <strong className="text-primary">Location:</strong> {location}
            </span>
          </li>

          <li className="flex items-center gap-2">
            <FaUsers className="text-secondary" size={18} />
            <span>
              <strong className="text-primary">Max Members:</strong>{" "}
              {maxMembers}
            </span>
          </li>

          <li className="flex items-center gap-2">
            <FaCalendarAlt className="text-secondary" size={18} />
            <span>
              <strong className="text-primary">Start Date:</strong> {startDate}
            </span>
          </li>

          {userName && (
            <li className="flex items-center gap-2">
              <FaUser className="text-secondary" size={18} />
              <span>
                <strong className="text-primary">Created By:</strong> {userName}
              </span>
            </li>
          )}

          {userEmail && (
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-secondary" size={18} />
              <span>
                <strong className="text-primary">Email:</strong> {userEmail}
              </span>
            </li>
          )}
        </ul>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="btn btn-primary w-full mt-4"
        >
          Join Group
        </motion.button>
      </div>
    </motion.div>
  );
};

export default GroupDetailsCard;
