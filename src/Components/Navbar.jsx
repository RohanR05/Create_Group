import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../Auth/AuthContext";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        alert("You logged Out Successfully");
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <p className="hover:opacity-70">
        <NavLink
          className={({ isActive }) => (isActive ? "underline" : "")}
          to="/"
        >
          Home
        </NavLink>
      </p>
      <p className="hover:opacity-70">
        <NavLink
          className={({ isActive }) => (isActive ? "underline" : "")}
          to="/allgroups"
        >
          All Groups
        </NavLink>
      </p>
      <p className="hover:opacity-70">
        <NavLink
          className={({ isActive }) => (isActive ? "underline" : "")}
          to="/"
        >
          Create Group
        </NavLink>
      </p>
      <p className="hover:opacity-70">
        <NavLink
          className={({ isActive }) => (isActive ? "underline" : "")}
          to="/"
        >
          My Groups
        </NavLink>
      </p>
    </>
  );

  return (
    <div className="navbar shadow-sm bg-[#F3F3E0] text-[#3D365C]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow font-medium"
          >
            {links}
          </ul>
        </div>
        <a className="text-2xl font-bold text-[#3D365C]">
          Hubby<span className="font-extrabold">Hub</span>
        </a>
      </div>
      <div className="navbar-center hidden md:flex space-x-4 text-lg font-medium">
        {links}
      </div>
      <div className="navbar-end">
        {user ? (
          <button
            className="bg-white text-lg font-medium py-1 px-2 rounded-lg border border-[#3d365c]"
            onClick={handleLogOut}
          >
            Log Out
          </button>
        ) : (
          <button className="bg-white text-lg font-medium py-1 px-2 rounded-lg border border-[#3d365c]">
            <NavLink to="/signIn">Sign In</NavLink>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
