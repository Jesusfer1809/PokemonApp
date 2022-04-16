import React from "react"

import Image from "next/image"
import { useSession, signOut } from "next-auth/react"

function UserDropdownMenu({ userOpen, user }) {
  const { data: session } = useSession()

  return (
    <div
      className={`absolute top-0 right-0 mt-[4rem] w-64 rounded-lg bg-white py-4 px-2 font-medium  text-black ${
        userOpen ? "block" : "hidden"
      } `}
    >
      <div className="flex items-center space-x-4">
        <div className="relative h-12 w-12 overflow-hidden rounded-full border border-project_main">
          <Image
            ng-src={user?.image || "https://i.imgur.com/62MNvNU.png"}
            src={user?.image || "https://i.imgur.com/62MNvNU.png"}
            layout="fill"
          />
        </div>

        <div className="flex flex-col">
          <span className="text-sm text-gray-600">{user?.username}</span>
          <span className="text-lg">My Profile</span>
        </div>
      </div>

      <ul className="mt-4 ">
        <li className="p-2">
          <a href="#" className="cursor-pointer">
            Edit Profile
          </a>
        </li>

        <li className="p-2">
          <a href="#" className="cursor-pointer">
            Account Activity
          </a>
        </li>

        <li className="p-2">
          <span onClick={signOut} className="cursor-pointer">
            Log Out
          </span>
        </li>
      </ul>
    </div>
  )
}

export default UserDropdownMenu
