import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../Auth/AuthContext";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaUsers,
  FaCalendarAlt,
  FaUser,
  FaEnvelope,
  FaLayerGroup,
  FaTrashAlt,
  FaEdit,
} from "react-icons/fa";

const MyGroups = () => {
  const { user } = useContext(AuthContext);
  const allGroups = useLoaderData();
  const [myGroups, setMyGroups] = useState([]);

  useEffect(() => {
    if (user?.email && allGroups?.length) {
      const filtered = allGroups.filter((group) => group.email === user.email);
      setMyGroups(filtered);
    }
  }, [user, allGroups]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This group will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0f7fbf",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-site-kappa.vercel.app/create/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setMyGroups((prev) => prev.filter((group) => group._id !== id));
              Swal.fire("Deleted!", "Your group has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="px-4 py-6">
      <h2 className="text-3xl font-bold text-center text-primary mb-8">
        My Groups
      </h2>

      {myGroups.length === 0 ? (
        <p className="text-center text-neutral text-lg">
          You haven’t created any groups yet.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {myGroups.map((group, index) => {
            const {
              _id,
              image,
              groupName,
              category,
              description,
              location,
              maxMembers,
              startDate,
              userName,
              userEmail,
            } = group;

            return (
              <motion.div
                key={_id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="bg-accent/10 border border-primary/20 backdrop-blur-md shadow-lg rounded-2xl overflow-hidden"
              >
                <motion.img
                  src={image}
                  alt={groupName}
                  className="w-full h-60 object-cover"
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                />

                <div className="p-5">
                  <h2 className="text-2xl font-bold text-primary mb-2">
                    {groupName}
                  </h2>

                  <div className="flex items-center text-secondary gap-2 mb-3">
                    <FaLayerGroup size={16} />
                    <span className="text-neutral text-sm">
                      Category: {category}
                    </span>
                  </div>

                  <p className="text-neutral mb-3">{description}</p>

                  <ul className="text-neutral text-sm space-y-2">
                    <li className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-secondary" />
                      <span>
                        <strong className="text-primary">Location:</strong>{" "}
                        {location}
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaUsers className="text-secondary" />
                      <span>
                        <strong className="text-primary">Max Members:</strong>{" "}
                        {maxMembers}
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCalendarAlt className="text-secondary" />
                      <span>
                        <strong className="text-primary">Start Date:</strong>{" "}
                        {startDate}
                      </span>
                    </li>
                    {userName && (
                      <li className="flex items-center gap-2">
                        <FaUser className="text-secondary" />
                        <span>
                          <strong className="text-primary">Created By:</strong>{" "}
                          {userName}
                        </span>
                      </li>
                    )}
                    {userEmail && (
                      <li className="flex items-center gap-2">
                        <FaEnvelope className="text-secondary" />
                        <span>
                          <strong className="text-primary">Email:</strong>{" "}
                          {userEmail}
                        </span>
                      </li>
                    )}
                  </ul>

                  <div className="flex gap-3 mt-6">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleDelete(_id)}
                      className="btn btn-error flex-1 flex items-center justify-center gap-2"
                    >
                      <FaTrashAlt /> Delete
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn btn-primary flex-1 flex items-center justify-center gap-2"
                    >
                      <FaEdit /> Update
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyGroups;
