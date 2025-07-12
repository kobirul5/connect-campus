"use client";

import Link from "next/link";
import { FaBars } from "react-icons/fa"; // react-icons for the mobile menu
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
      <div className="navbar bg-base-100 shadow-lg px-4 sm:px-8">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Menu */}


          {/* Logo */}
          <Link
            href="/"
            className="btn btn-ghost text-xl sm:text-2xl font-bold text-primary"
          >
            ConnectCampus
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className="text-lg font-medium hover:text-primary focus:text-primary active:text-primary px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          <CollegeSearch/>
          <NavUser />
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <FaBars className="h-5 w-5" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2 right-0 top-"
            >
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-lg font-medium hover:text-primary focus:text-primary active:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={'/profile'} className="font-semibold text-lg">Profile</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
