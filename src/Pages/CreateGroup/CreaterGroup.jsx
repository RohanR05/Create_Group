import React, { useContext } from "react";
import { AuthContext } from "../../Auth/AuthContext";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaImage,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaInfoCircle,
  FaListUl,
  FaUser,
  FaEnvelope,
} from "react-icons/fa";

const CreateGroup = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const createGroupData = Object.fromEntries(formData.entries());

    fetch(`https://server-site-kappa.vercel.app/create`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(createGroupData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Group Created Successfully!",
            icon: "success",
            draggable: true,
          });
          form.reset();
        }
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-xl mx-auto mt-10 bg-accent/10 border border-primary/20 backdrop-blur-md shadow-lg rounded-2xl p-6"
    >
      <h2 className="text-3xl font-bold text-center text-primary mb-6">
        Create a Hobby Group
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 text-neutral">
        {/* Group Name */}
        <div>
          <label className="label text-primary flex items-center gap-2">
            <FaListUl className="text-secondary" /> Group Name
          </label>
          <input
            name="groupName"
            placeholder="Enter group name"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Hobby Category */}
        <div>
          <label className="label text-primary flex items-center gap-2">
            <FaInfoCircle className="text-secondary" /> Hobby Category
          </label>
          <select
            name="category"
            className="select select-bordered w-full"
            required
          >
            <option value="">Select a category</option>
            <option>Drawing & Painting</option>
            <option>Photography</option>
            <option>Sports</option>
            <option>Fishing</option>
            <option>Running</option>
            <option>Cooking</option>
            <option>Reading</option>
            <option>Writing</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="label text-primary flex items-center gap-2">
            <FaInfoCircle className="text-secondary" /> Description
          </label>
          <textarea
            name="description"
            placeholder="Describe your group or activities"
            className="textarea textarea-bordered w-full"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label className="label text-primary flex items-center gap-2">
            <FaMapMarkerAlt className="text-secondary" /> Meeting Location
          </label>
          <input
            name="location"
            placeholder="Enter meeting location"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Max Members */}
        <div>
          <label className="label text-primary flex items-center gap-2">
            <FaUsers className="text-secondary" /> Max Members
          </label>
          <input
            name="maxMembers"
            type="number"
            placeholder="e.g. 10"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Start Date */}
        <div>
          <label className="label text-primary flex items-center gap-2">
            <FaCalendarAlt className="text-secondary" /> Start Date
          </label>
          <input
            name="startDate"
            type="date"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="label text-primary flex items-center gap-2">
            <FaImage className="text-secondary" /> Image URL
          </label>
          <input
            name="image"
            type="text"
            placeholder="https://example.com/image.jpg"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* User Name */}
        <div>
          <label className="label text-primary flex items-center gap-2">
            <FaUser className="text-secondary" /> User Name
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={user?.displayName || ""}
            readOnly
          />
        </div>

        {/* User Email */}
        <div>
          <label className="label text-primary flex items-center gap-2">
            <FaEnvelope className="text-secondary" /> User Email
          </label>
          <input
            name="email"
            type="email"
            className="input input-bordered w-full"
            value={user?.email || ""}
            readOnly
          />
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="btn btn-primary w-full mt-4"
        >
          Create Group
        </motion.button>
      </form>
    </motion.div>
  );
};

export default CreateGroup;
