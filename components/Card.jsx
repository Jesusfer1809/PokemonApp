import Image from "next/image"
import React from "react"
import { colors } from "../utils/variables"
import Link from "next/link"

function Card({ pokemon }) {
  const { pokemonID, types } = pokemon.NFTProps
  const { name, brand, owner, creator, price } = pokemon

  const color = colors[`${types[0]}`]
  const colorLight = colors[`${types[0]}_light`]
  const colorDark = colors[`${types[0]}_dark`]

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
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonID}.png`}
            ng-src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonID}.png`}
            width={50}
            height={50}
            layout="responsive"
          />
        </div>

        <div className="mt-4 flex flex-col text-lg font-medium ">
          <span>
            {brand} #{pokemonID.toString().padStart(3, "0")}:
          </span>
          <span className="text-2xl">{name}</span>
        </div>

        <div className="mt-8 flex flex-col">
          <div className="text-gray-600">Current Bid</div>

          <div className="font medium mt-2 flex flex-col ">
            <span className="text-xl ">{price} BUSD </span>
            <span className="text-sm text-gray-600">
              ≈ €{(price * 0.922972).toFixed(2)}
            </span>
          </div>

          <div className="mt-8 flex flex-col space-y-2">
            <div className="  text-gray-600">Creator</div>
            <div className="flex items-center space-x-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-full  ">
                <Image
                  ng-src={creator.image}
                  src={creator.image}
                  layout="fill"
                />
              </div>
              <div className="text-sm ">{creator.username}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card
