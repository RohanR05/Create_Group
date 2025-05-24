import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Auth/AuthContext";
import Swal from "sweetalert2";

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
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
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
    <div className="dark:bg-[#3d365c] dark:text-[#f3f3e0] px-4 py-6">
      <h2 className="text-2xl font-bold mb-4 text-center">My Groups</h2>

      {myGroups.length === 0 ? (
        <p className="text-center">You have no groups created.</p>
      ) : (
        myGroups.map((group) => {
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
            <div
              key={_id}
              className="max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10"
            >
              <img
                src={image}
                alt={groupName}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-3xl font-bold mb-2">{groupName}</h2>
                <p className="text-sm text-gray-500 mb-2">
                  Category: {category}
                </p>
                <p className="text-gray-700 mb-4">{description}</p>

                <ul className="mb-4 text-gray-600 space-y-1">
                  <li>
                    <strong>Location:</strong> {location}
                  </li>
                  <li>
                    <strong>Max Members:</strong> {maxMembers}
                  </li>
                  <li>
                    <strong>Start Date:</strong> {startDate}
                  </li>
                  {userName && (
                    <li>
                      <strong>Created By:</strong> {userName}
                    </li>
                  )}
                  {userEmail && (
                    <li>
                      <strong>Email:</strong> {userEmail}
                    </li>
                  )}
                </ul>

                <button
                  onClick={() => handleDelete(_id)}
                  className="btn btn-primary w-full mt-4"
                >
                  Delele
                </button>
                <button className="btn btn-primary w-full mt-4">Update</button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default MyGroups;
