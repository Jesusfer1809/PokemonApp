import Image from "next/image"
import React from "react"
import { colors } from "../utils/variables"
import Link from "next/link"

function PokeCard({ pokemon }) {
  const { pokemonID, name, franchise, types, owner, creator } = pokemon

  const color = colors[`${types[0]}`]
  const colorLight = colors[`${types[0]}_light`]
  const colorDark = colors[`${types[0]}_dark`]

  console.log(creator)

  return (
    <Link href={`/nft/${pokemon._id}`}>
      <div className="flex cursor-pointer  flex-col rounded-xl bg-white p-4 text-project_main transition-all hover:-translate-y-1">
        <div
          className={`relative w-full `}
          style={{
            border: `4px solid ${color}`,
            backgroundImage: `linear-gradient(to bottom, ${colorDark}, ${colorLight})`,
          }}
        >
          <Image
            ng-src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonID}.png`}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonID}.png`}
            width={50}
            height={50}
            layout="responsive"
          />
        </div>

        <div className="mt-4 flex flex-col text-lg font-medium ">
          <span>
            {franchise} #{pokemonID.toString().padStart(3, "0")}:
          </span>
          <span className="text-2xl">{name}</span>
        </div>

        <div className="mt-8 flex flex-col">
          <div className="text-gray-600">Current Bid</div>

          <div className="font medium mt-2 flex flex-col ">
            <span className="text-xl ">118.80 BUSD </span>
            <span className="text-sm text-gray-600">≈ €107.66</span>
          </div>

          <div className="mt-8 flex flex-col space-y-2">
            <div className="  text-gray-600">Creator</div>
            <div className="flex items-center space-x-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-full  ">
                <Image
                  ng-src={creator[0].image}
                  src={creator[0].image}
                  layout="fill"
                />
              </div>
              <div className="text-sm ">{creator[0].name}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PokeCard
