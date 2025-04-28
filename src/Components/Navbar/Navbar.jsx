// @ts-nocheck
import React, { use } from "react";
import { Link, NavLink } from "react-router";
import "./navbar.css";
import { AuthContext } from "../../Context/AuthContext";

const Navbar = () => {
  const { user, singOutUser } = use(AuthContext);
  console.log(user);

  const handleSingOut = () => {
    singOutUser()
      .then(() => {
        // Sign-out successful.
        console.log(" Sign-out successful.");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  const links = (
    <>
      <li className="btn btn-ghost text-xl">
        <NavLink to="">Home</NavLink>
      </li>
      <li className="btn btn-ghost text-xl">
        <NavLink to="/login">Login</NavLink>
      </li>
      <li className="btn btn-ghost text-xl">
        <NavLink to="/register">Register</NavLink>
      </li>
      <li className="btn btn-ghost text-xl">
        <NavLink to="/signup">SignUp</NavLink>
      </li>
      <li className="btn btn-ghost text-xl">
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      {user && (
        <>
          <li className="btn btn-ghost text-xl">
            <NavLink to="/orders">Orders</NavLink>
          </li>
          <li className="btn btn-ghost text-xl">
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm p-2 mt-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
                d="M4 6h16M4 12h16M4 18h7"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="flex gap-5 ">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <p>{user.email}</p>
            <a onClick={handleSingOut} className="btn">
              Sign Out
            </a>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
