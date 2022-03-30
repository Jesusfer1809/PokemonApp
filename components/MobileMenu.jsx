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

function MobileMenu() {
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
            <div
              className="relative flex cursor-pointer items-center"
              onClick={toggleUser}
            >
              <UserIcon className="h-8 w-8" />
              <ChevronDownIcon className="h-6 w-6" />
            </div>

            <div
              className={`absolute top-0 right-0 mt-[4rem] w-64 rounded-lg bg-white p-4 font-medium text-black ${
                userOpen ? "block" : "hidden"
              } `}
            >
              <div className="flex items-center space-x-4">
                <div className="relative h-12 w-12 rounded-full border border-project_main">
                  <Image
                    ng-src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png`}
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png`}
                    layout="fill"
                  />
                </div>

                <div className="flex flex-col">
                  <span className="text-sm text-gray-600">Jesusfer1809</span>
                  <span className="text-lg">My Profile</span>
                </div>
              </div>

              <ul className="mt-4 ">
                <li className="p-2">
                  <a href="#">Edit Profile</a>
                </li>

                <li className="p-2">
                  <a href="#">Account Activity</a>
                </li>

                <li className="p-2">
                  <a href="#">Log Out</a>
                </li>
              </ul>
            </div>
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

        <li className="p-4">
          <a href="#">Sign In</a>
        </li>
        <li className="p-4">Sign Up</li>
      </ul>
    </div>
  )
}

export default MobileMenu
