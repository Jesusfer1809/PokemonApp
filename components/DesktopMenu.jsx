import { ChevronDownIcon, SearchIcon } from "@heroicons/react/solid"
import React, { useState } from "react"
import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"

function DesktopMenu() {
  const { data: session } = useSession()
  const [brandsOpen, setBrandsOpen] = useState(false)

  const toggleBrands = () => {
    setBrandsOpen(!brandsOpen)
  }
  return (
    <div className="hidden w-full items-center justify-between space-x-4 p-4 lg:flex">
      <Link href="/">
        <div className="relative min-w-fit cursor-pointer font-medium">
          TRADECAVE | NFT
        </div>
      </Link>
      <div className="relative flex grow items-center">
        <SearchIcon className="absolute top-2 left-3  z-50 h-6 w-6 text-project_main" />
        <input
          type="text"
          placeholder="Search collectibles and collections"
          className="flex w-full rounded-full py-2 px-12 text-project_main "
        />
      </div>

      <ul className="flex font-medium text-white">
        <li className="flex items-center p-4">
          <a href="#">Marketplace</a>
        </li>

        <li className="flex items-center p-4">
          <a href="#">Drops</a>
        </li>

        <li className="relative flex items-center p-4">
          <a href="#" className="flex items-center" onClick={toggleBrands}>
            Brands <ChevronDownIcon className="h-6 w-6" />{" "}
          </a>

          <ul
            className={`${
              brandsOpen
                ? "absolute top-0 left-0 mt-16 flex w-72 flex-col rounded-lg bg-white text-project_main"
                : "hidden"
            } `}
          >
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

        <li className="flex items-center p-4">
          <a href="#">My NFTs</a>
        </li>

        <li className="flex items-center">
          <button className="rounded-lg bg-gradient-to-r from-[#119DFA] to-[#11CBFA] px-6 py-2 font-medium text-white">
            Create
          </button>
        </li>

        {!session ? (
          <>
            <li className="flex items-center p-4">
              <a href="#" onClick={() => signIn()}>
                Sign In
              </a>
            </li>
          </>
        ) : (
          <li className="flex items-center p-4">
            <a href="#" onClick={() => signOut()}>
              {session.user.name}
            </a>
          </li>
        )}
      </ul>
    </div>
  )
}

export default DesktopMenu
