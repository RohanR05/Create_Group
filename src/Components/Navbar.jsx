import React, { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../Auth/AuthContext";
import ThemeToggle from "../Components/Theme";
import Logo from "./Logo";
import {
  FaHome,
  FaUsers,
  FaPlusCircle,
  FaUserFriends,
  FaSignInAlt,
  FaSignOutAlt,
  FaEnvelope,
  FaUser,
} from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("You logged out successfully");
      })
      .catch((error) => console.error(error));
  };

  const links = (
    <>
      <p className="hover:opacity-70">
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-2 text-primary ${
              isActive ? "underline" : ""
            }`
          }
          to="/"
        >
          <FaHome className="text-secondary" /> Home
        </NavLink>
      </p>

      {user && (
        <>
          <p className="hover:opacity-70">
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-2 text-primary ${
                  isActive ? "underline" : ""
                }`
              }
              to="/allGroups"
            >
              <FaUsers className="text-secondary" /> All Groups
            </NavLink>
          </p>

          <p className="hover:opacity-70">
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-2 text-primary ${
                  isActive ? "underline" : ""
                }`
              }
              to="/createGroup"
            >
              <FaPlusCircle className="text-secondary" /> Create Group
            </NavLink>
          </p>

          <p className="hover:opacity-70">
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-2 text-primary ${
                  isActive ? "underline" : ""
                }`
              }
              to="/myGroups"
            >
              <FaUserFriends className="text-secondary" /> My Groups
            </NavLink>
          </p>
        </>
      )}
    </>
  );

  return (<div className="navbar fixed top-0 w-full z-50 bg-accent/10 backdrop-blur-md shadow-xl shadow-primary/30 transition-colors duration-300">

      {/* Left */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-10 mt-3 w-52 p-2 shadow bg-base-100"
          >
            {links}
          </ul>
        </div>
        <Logo />
      </div>

      {/* Center */}
      <div className="navbar-center hidden md:flex space-x-4 text-lg">
        {links}
      </div>

      {/* Right */}
      <div className="navbar-end flex items-center gap-3">
        <ThemeToggle />

        {user ? (
          <div className="relative">
            <img
              className="w-12 h-12 rounded-2xl hover:opacity-90 cursor-pointer peer"
              src={user?.photoURL || "https://via.placeholder.com/150"}
              alt="Profile"
            />

            {/* Hover Card */}
            <div className="absolute right-0 top-14 bg-base-100 text-primary shadow-lg rounded-lg p-3 opacity-0 peer-hover:opacity-100 hover:opacity-100 transition-opacity z-10 min-w-[220px]">
              <p className="text-md font-semibold flex items-center gap-2 mb-2">
                <FaUser className="text-secondary" />{" "}
                {user?.displayName || "User"}
              </p>
              <p className="text-md font-semibold flex items-center gap-2 mb-2">
                <FaEnvelope className="text-secondary" /> {user?.email || "N/A"}
              </p>
              <button
                onClick={handleLogOut}
                className="flex items-center justify-center gap-2 bg-red-500 text-white px-3 py-1 rounded text-md hover:bg-red-600 w-full"
              >
                <FaSignOutAlt /> Log Out
              </button>
            </div>
          </div>
        ) : (
          <button className="flex items-center gap-2 bg-base-100 border border-primary text-primary text-lg font-medium py-1 px-3 rounded-lg hover:bg-primary hover:text-white transition">
            <FaSignInAlt className="text-secondary" />
            <NavLink to="/signIn">Sign In</NavLink>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
