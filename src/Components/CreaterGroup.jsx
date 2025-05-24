import React, { use } from "react";
import { AuthContext } from "../Auth/AuthContext";
import Swal from "sweetalert2";

const CreateGroup = () => {
  const { user } = use(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const createGroupeData = Object.fromEntries(formData.entries());
    console.log(createGroupeData);

    fetch(`http://localhost:999/create`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(createGroupeData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("after adding adding createGroup data", data);
          Swal.fire({
            title: "Group Created Successfully!",
            icon: "success",
            draggable: true,
          });
        //   form.reset();
        }
      });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-[#F3F3E0] shadow-lg rounded-lg p-6 dark:bg-[#3d365c] dark:text-black">
      <h2 className="text-3xl font-bold text-center mb-6">
        Create a Hobby Group
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="label">Group Name</label>
          <input
            name="groupName"
            placeholder="Enter group name"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label">Hobby Category</label>
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

        <div>
          <label className="label">Description</label>
          <textarea
            name="description"
            placeholder="Describe your group or activities"
            className="textarea textarea-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label">Meeting Location</label>
          <input
            name="location"
            placeholder="Enter meeting location"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label">Max Members</label>
          <input
            name="maxMembers"
            type="number"
            placeholder="e.g. 10"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label">Start Date</label>
          <input
            name="startDate"
            type="date"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label">Image URL</label>
          <input
            name="image"
            type="text"
            placeholder="https://example.com/image.jpg"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label">User Name</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={user?.displayName || ""}
            readOnly
          />
        </div>

        <div>
          <label className="label">User Email</label>
          <input
            type="email"
            className="input input-bordered w-full"
            value={user?.email || ""}
            readOnly
          />
        </div>

        <button type="submit" className="btn btn-primary w-full mt-4">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateGroup;
