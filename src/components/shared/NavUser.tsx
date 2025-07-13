"use client";

import useAxiosPublic from "@/hooks/axiosPublic";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { useEffect } from "react";

export default function NavUser() {
  const { user, logOut, setUserDB, userDB } = useAuth();
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    if (!user?.email) return;

    const fetchUserData = async () => {
      try {
        const res = await axiosPublic.get(`/api/user/${user.email}`);
        setUserDB(res.data.data);
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };

    fetchUserData();
  }, [user, axiosPublic]);

  return (
    <>
      {user ? (
        <div className="dropdown dropdown-end flex items-center">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-9 h-9 rounded-full overflow-hidden">
              <img
                alt="User Avatar"
                src={userDB?.picture}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-44 p-2 shadow top-10"
          >
            {user.displayName && (
              <li className="px-2 py-1 text-sm font-semibold text-gray-700">
                {user.displayName}
              </li>
            )}
            <li>
              <Link href="/profile" className="text-base">
                Profile
              </Link>
            </li>
            <li>
              <button onClick={logOut} className="text-base">
                Logout
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <Link href="/login" className="btn bg-emerald btn-sm">
          Login
        </Link>
      )}
    </>
  );
}
