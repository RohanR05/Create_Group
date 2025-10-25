import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../Auth/AuthContext";
import ThemeToggle from "../Components/Theme";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  // console.log(user.diaplayName);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("You logged Out Successfully");
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
      {user && (
        <>
          {" "}
          <p className="hover:opacity-70">
            <NavLink
              className={({ isActive }) => (isActive ? "underline" : "")}
              to="/allGroups"
            >
              All Groups
            </NavLink>
          </p>
          <p className="hover:opacity-70">
            <NavLink
              className={({ isActive }) => (isActive ? "underline" : "")}
              to="/createGroup"
            >
              Create Group
            </NavLink>
          </p>
          <p className="hover:opacity-70">
            <NavLink
              className={({ isActive }) => (isActive ? "underline" : "")}
              to="/myGroups"
            >
              My Groups
            </NavLink>
          </p>
        </>
      )}
    </>
  );

  return (
    <div className="navbar shadow-sm bg-primary text-secondary">
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
            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow font-medium bg-[#3d365c] text-white"
          >
            {links}
          </ul>
        </div>
        <a className="text-2xl font-bold text-[#3D365C] dark:bg-[#3d365c] dark:text-[#f3f3e0]">
          Hobby<span className="font-extrabold">Hub</span>
        </a>
      </div>
      <div className="navbar-center hidden md:flex space-x-4 text-lg font-medium">
        {links}
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="relative">
            <img
              className="w-12 h-12 rounded-2xl hover:opacity-100 cursor-pointer peer"
              src={user?.photoURL || "https://via.placeholder.com/150"}
              alt="Profile"
            />

            <div className="absolute right-0 top-14 bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg rounded-lg p-2 opacity-0 peer-hover:opacity-100 hover:opacity-100 transition-opacity z-10 min-w-[200px] pointer-events-auto">
              <p className="text-md font-semibold mb-2">
                Name: {user?.displayName || "User"}
              </p>
              <p className="text-md font-semibold mb-2">
                Email: {user?.email || "user"}
              </p>
              <button
                onClick={handleLogOut}
                className="bg-red-500 text-white px-3 py-1 rounded text-md hover:bg-[#f3f3e0] hover:text-red-500 w-full"
              >
                Log Out
              </button>
            </div>
          </div>
        ) : (
          <div>
            <ThemeToggle></ThemeToggle>
            <button className="bg-white text-lg font-medium py-1 px-2 rounded-lg border border-[#3d365c]">
              <NavLink to="/signIn">Sign In</NavLink>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
