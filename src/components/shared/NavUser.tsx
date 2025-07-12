'use client'

import { useAuth } from "@/hooks/useAuth"
import Image from "next/image"
import Link from "next/link"

export default function NavUser() {
    const { user, logOut } = useAuth()


    return (
        <>
            {user ? (
                <div className="dropdown dropdown-end flex justify-center items-center">
                    <span className="text-xl mr-2 hidden md:flex">{user.displayName}</span>
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full overflow-hidden">
                            <Image
                                alt="User Avatar"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                width={40}
                                height={40}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow top-10"
                    >
                        <li>

                            <Link href={'/profile'} className="text-lg">Profile</Link>
                        </li>
                        <li><button className="text-lg" onClick={logOut}>Logout</button></li>
                    </ul>
                </div>
            ) : (
                <Link href="/login" className="btn btn-primary">
                    Login
                </Link>
            )}
        </>
    )
}
