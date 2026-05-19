"use client";

import Link from "next/link";
import React from "react";

const Navbar = () => {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Rooms", path: "/rooms" },
    { name: "Add Room", path: "/rooms/add-room" },
    { name: "My Bookings", path: "/my-bookings" },
  ];

  return (
    <div className="navbar px-6 lg:px-12 bg-[#0f172a]/90 text-[#f5ecd7] shadow-md sticky top-0 z-50 backdrop-blur-md">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} className="btn btn-ghost lg:hidden text-[#f5ecd7]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-sm dropdown-content bg-[#0f172a] rounded-box mt-3 w-52 p-2 shadow-lg text-[#f5ecd7]"
          >
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link href={item.path} className="hover:text-[#d8c08c]">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo */}
        <Link
  href="/"
  className="group flex items-center gap-2 rounded-xl px-2 py-1 transition duration-300"
>
  {/* Logo Icon */}
  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d8c08c] text-[#0f172a] shadow-md transition duration-300 group-hover:scale-105 group-hover:bg-[#e7d2a3]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5S19.832 5.477 21 6.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253"
      />
    </svg>
  </div>

  {/* Logo Text */}
  <div className="leading-tight">
    <h1 className="text-xl md:text-2xl font-extrabold tracking-wide text-[#f5ecd7] transition duration-300 group-hover:text-[#d8c08c]">
      Smart<span className="text-[#d8c08c]">Study</span>
    </h1>
    <p className="-mt-1 text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#dbe4ee]/80">
      Nest
    </p>
  </div>
</Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-8">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className="block py-2 text-[#f5ecd7] hover:text-[#d8c08c] transition duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <Link
          href="/login"
          className="px-5 py-2 rounded-md bg-[#d8c08c] text-[#0f172a] font-medium shadow-md hover:bg-[#e7d2a3] transition duration-300"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;