"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  const publicMenuItems = [
    { name: "Home", path: "/" },
     { name: "See All Room", path: "/all-room" },
    { name: "Rooms", path: "/rooms" },
  ];

  const privateMenuItems = [
    { name: "Home", path: "/" },
   
    { name: "See All Room", path: "/all-room" },
    { name: "Rooms", path: "/rooms" },
    { name: "Add Room", path: "/rooms/add-room" },
    { name: "My Listings", path: "/my-listing" },
    { name: "My Bookings", path: "/my-bookings" },
  ];

  const menuItems = user ? privateMenuItems : publicMenuItems;

  const handleLogout = async () => {
    await authClient.signOut();

    router.push("/login");
    router.refresh();
  };

  return (
    <div className="navbar sticky top-0 z-50 bg-[#0f172a]/95 px-6 text-[#f5ecd7] shadow-md backdrop-blur-md lg:px-12">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} className="btn btn-ghost text-[#f5ecd7] lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 w-56 rounded-box bg-[#0f172a] p-3 text-[#f5ecd7] shadow-lg"
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

          <div className="leading-tight">
            <h1 className="text-xl font-extrabold tracking-wide text-[#f5ecd7] transition duration-300 group-hover:text-[#d8c08c] md:text-2xl">
              Smart<span className="text-[#d8c08c]">Study</span>
            </h1>
            <p className="-mt-1 text-[10px] uppercase tracking-[0.25em] text-[#dbe4ee]/80 md:text-xs">
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
                className="block py-2 text-[#f5ecd7] transition duration-200 hover:text-[#d8c08c]"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end gap-2">
        {isPending ? (
          <span className="text-sm text-[#f5ecd7]/70">Loading...</span>
        ) : user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              className="flex cursor-pointer items-center gap-3 rounded-xl border border-[#d8c08c]/30 bg-[#f8f4ea]/10 px-3 py-2 transition hover:bg-[#f8f4ea]/20"
            >
              <img
                src={
                  user.image ||
                  "https://i.ibb.co.com/5xWzYz9/user-placeholder.png"
                }
                alt={user.name || "User"}
                className="h-9 w-9 rounded-full border-2 border-[#d8c08c] object-cover"
              />

              <div className="hidden text-left sm:block">
                <p className="text-sm font-semibold text-[#f5ecd7]">
                  {user.name || "User"}
                </p>
                <p className="text-xs text-[#f5ecd7]/60">Member</p>
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 w-56 rounded-box bg-[#0f172a] p-3 text-[#f5ecd7] shadow-xl"
            >
              <li>
                <Link href="/my-listing" className="hover:text-[#d8c08c]">
                  My Listings
                </Link>
              </li>

              <li>
                <Link href="/my-bookings" className="hover:text-[#d8c08c]">
                  My Bookings
                </Link>
              </li>

              <li>
                <Link href="/rooms/add-room" className="hover:text-[#d8c08c]">
                  Add Room
                </Link>
              </li>

              <li>
                <button
                  onClick={handleLogout}
                  className="text-red-300 hover:text-red-400"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link
              href="/signup"
              className="rounded-md bg-[#d8c08c] px-4 py-2 text-sm font-medium text-[#0f172a] shadow-md transition duration-300 hover:bg-[#e7d2a3] md:px-5"
            >
              Register
            </Link>

            <Link
              href="/login"
              className="rounded-md border border-[#d8c08c] px-4 py-2 text-sm font-medium text-[#f5ecd7] transition duration-300 hover:bg-[#d8c08c] hover:text-[#0f172a] md:px-5"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;