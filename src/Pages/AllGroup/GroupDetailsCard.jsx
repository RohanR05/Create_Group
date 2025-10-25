import React from 'react';

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
    userEmail
  } = group;

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
      <img src={image} alt={groupName} className="w-full h-64 object-cover" />

      <div className="p-6">
        <h2 className="text-3xl font-bold mb-2">{groupName}</h2>
        <p className="text-sm text-gray-500 mb-2">Category: {category}</p>
        <p className="text-gray-700 mb-4">{description}</p>

        <ul className="mb-4 text-gray-600 space-y-1">
          <li><strong>Location:</strong> {location}</li>
          <li><strong>Max Members:</strong> {maxMembers}</li>
          <li><strong>Start Date:</strong> {startDate}</li>
          {userName && <li><strong>Created By:</strong> {userName}</li>}
          {userEmail && <li><strong>Email:</strong> {userEmail}</li>}
        </ul>

        <button className="btn btn-primary w-full mt-4">Join Group</button>
      </div>
    </div>
  );
};

export default GroupDetailsCard;
