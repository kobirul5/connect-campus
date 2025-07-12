"use client";

import Link from "next/link";
import { FaBars } from "react-icons/fa";
import NavUser from "./NavUser";
import CollegeSearch from "./CollegeSearch";

interface NavLink {
  name: string;
  path: string;
}

const navLinks: NavLink[] = [
  { name: "Home", path: "/" },
  { name: "Colleges", path: "/colleges" },
  { name: "Admission", path: "/admission" },
  { name: "My College", path: "/my-college" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <div className="navbar bg-base-100 shadow px-4 sm:px-8">
        {/* Navbar Start */}
        <div className="navbar-start">
          <Link
            href="/"
            className="btn btn-ghost text-lg sm:text-xl font-bold text-primary"
          >
            ConnectCampus
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className="text-base font-medium hover:text-primary px-3 py-1 rounded transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end gap-2">
          <CollegeSearch />
          <NavUser />
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <FaBars className="h-5 w-5" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-44 right-0 space-y-1"
            >
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-base font-medium hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/profile"
                  className="font-semibold text-base"
                >
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
