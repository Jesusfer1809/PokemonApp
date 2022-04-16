import React, { useState } from "react"
import {
  SearchIcon,
  MenuIcon,
  UserIcon,
  ChevronDownIcon,
  XIcon,
} from "@heroicons/react/solid"
import Image from "next/image"
import Link from "next/link"
import UserDropdownMenu from "./UserDropdownMenu"

import { useSession, signIn } from "next-auth/react"

function MobileMenu({ user }) {
  const { data: session } = useSession()

  const [menuOpen, setMenuOpen] = useState(false)
  const [userOpen, setUserOpen] = useState(false)
  const [brandsOpen, setBrandsOpen] = useState(false)

  const toggleMenu = () => {
    setUserOpen(false)
    setMenuOpen(!menuOpen)
  }

  const toggleUser = () => {
    setUserOpen(!userOpen)
  }

  const toggleBrands = () => {
    setBrandsOpen(!brandsOpen)
  }

  return (
    <div className="  flex  w-full p-4 lg:hidden">
      <div className="relative flex w-full items-center justify-between">
        <div className="flex items-center space-x-4">
          {menuOpen ? (
            <XIcon className="h-8 w-8 cursor-pointer" onClick={toggleMenu} />
          ) : (
            <MenuIcon className="h-8 w-8 cursor-pointer" onClick={toggleMenu} />
          )}

          <Link href="/">
            <div className="font-medium">TRADECAVE | NFT</div>
          </Link>
        </div>

        <div className="flex space-x-4">
          <SearchIcon className="h-8 w-8" />
          <div className="relative flex items-center">
            {!session ? (
              <div className="relative flex  items-center">
                <span href="#" className="cursor-pointer" onClick={signIn}>
                  Sign In
                </span>
              </div>
            ) : (
              <div
                className="relative flex cursor-pointer items-center"
                onClick={toggleUser}
              >
                <UserIcon className="h-8 w-8" />
                <ChevronDownIcon className="h-6 w-6" />
              </div>
            )}

            <UserDropdownMenu userOpen={userOpen} user={user} />
          </div>
        </div>
      </div>

      <ul
        className={`absolute top-0 left-0 z-50 mt-[4rem]  w-full   bg-project_main text-lg font-medium text-white ${
          menuOpen ? "flex flex-col" : "hidden"
        } `}
      >
        <li className="p-4">
          <a href="#">Marketplace</a>
        </li>

        <li className="p-4">
          <a href="#">Drops</a>
        </li>

        <li className="p-4">
          <a href="#" className="flex items-center" onClick={toggleBrands}>
            Brands <ChevronDownIcon className="h-6 w-6" />{" "}
          </a>

          <ul className={`${brandsOpen ? "flex flex-col" : "hidden"} `}>
            <li className="p-4">
              <a href="#">Pokemon</a>
            </li>
            <li className="p-4">
              <a href="#">Genshin Impact</a>
            </li>
            <li className="p-4">
              <a href="#">Jojo's Bizarre Adventure</a>
            </li>
          </ul>
        </li>

        <li className=" m-4 mb-0 border-b border-blue-400 pb-4">
          <button className="rounded-lg bg-gradient-to-r from-[#119DFA] to-[#11CBFA] px-6 py-2 font-medium text-white">
            Create
          </button>
        </li>
      </ul>
    </div>
  )
}

export default MobileMenu
