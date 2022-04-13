import Image from "next/image"
import React from "react"
import { colors } from "../utils/variables"

function Details({ pokeData }) {
  const { name, brand, owner, creator, price } = pokeData
  const { pokemonID, types } = pokeData.NFTProps

  const color = colors[`${types[0]}`]
  const colorLight = colors[`${types[0]}_light`]
  const colorDark = colors[`${types[0]}_dark`]

  return (
    <div className="px-4 py-24 sz450:px-6 sm:px-8 md:grid md:grid-cols-2 md:gap-12 md:py-32 md:px-8 ">
      <div className="mb-12 flex items-center justify-between md:hidden">
        <div className="flex flex-col sm:flex-row sm:items-center  sm:space-x-2">
          <span className="text-xl text-gray-600">
            {brand} #{pokemonID.toString().padStart(3, "0")}:
          </span>
          <span className="text-4xl">{name}</span>
        </div>

        <div>Icons here...</div>
      </div>

      <div className="flex w-full flex-col items-center ">
        <div
          className="relative w-full  rounded-lg sz450:w-4/5 sm:w-3/5 md:w-full lg:w-4/5"
          style={{
            border: `4px solid ${color}`,
            backgroundImage: `linear-gradient(to bottom, ${colorDark}, ${colorLight})`,
          }}
        >
          <Image
            ng-src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonID}.png`}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonID}.png`}
            width={500}
            height={500}
            layout="responsive"
          />
        </div>
        <div className="mt-4 flex w-full items-center justify-between  text-sm sz450:w-4/5 sm:w-3/5 md:w-full lg:w-4/5">
          <div className=" text-gray-600">1024 x 1024 px. IMAGE(659KB)</div>
          <div className=" bg-neutral-200 px-2 py-1">Collectibles</div>
        </div>
      </div>

      <div>
        <div className="hidden items-center justify-between md:flex ">
          <div className="flex flex-col space-y-1">
            <span className="text-xl text-gray-600">
              {brand} #{pokemonID.toString().padStart(3, "0")}:
            </span>
            <span className="text-4xl">{name}</span>
          </div>

          <div>Icons here...</div>
        </div>
        <div className="mt-16 flex space-x-8 md:mt-12">
          <div className="flex flex-col">
            <span className="text-xs text-gray-600 md:text-sm">Creator</span>
            <span className="text-sm font-medium md:text-base">
              {creator.username}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs text-gray-600 md:text-sm">Owner</span>
            <span className="text-sm font-medium md:text-base">
              {owner.username}
            </span>
          </div>
        </div>

        <div className=" mt-12 w-full  border-t border-b border-gray-300 py-2 ">
          <div className=" h-24 w-full overflow-y-scroll text-sm text-gray-600">
            This is a collection of the first 151 Pokemon of the world famous
            franchise. By owning a Pokemon, you strenghen your membership rights
            to vote for special editions in the future.
            <br />
            <br /> All the Pokemon NFT you adquire come with the respective
            Pokemon pin, for you to aggregate it to your user profile. With
            that, everyone will see how amazing you are!
            <br /> So, enter the Pokemon NFT world. Gotta catch 'em all!
          </div>
        </div>

        <div className="mt-12 flex w-full justify-between">
          <div className="flex flex-col space-y-1">
            <span className="text-xs text-gray-600 sm:text-sm">
              Current bid
            </span>
            <span className="font-medium sm:text-lg">{price} BUSD</span>
            <span className="text-sm text-gray-600 sm:text-base">
              ≈ €{(price * 0.922972).toFixed(2)}
            </span>
          </div>

          <div className="flex flex-col items-end space-y-1">
            <span className="text-xs text-gray-600 sm:text-sm">
              Auction ends in
            </span>
            <span>10:13:14:24</span>
          </div>
        </div>

        <div className="mt-8 w-full">
          <button className="w-full rounded-md bg-yellow-400 px-4 py-2">
            Place a bid
          </button>
        </div>

        <div className="mt-16">
          <div className="font-medium">Bid history</div>

          <div className="mt-4">
            {/*here is the row component*/}
            <div className="flex items-center justify-between bg-[#fafafa] px-3 py-4">
              <div className="flex items-center space-x-2">
                <div>
                  <div className="relative h-8 w-8 rounded-full border border-slate-400">
                    <Image
                      ng-src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonID}.png`}
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonID}.png`}
                      layout="fill"
                    />
                  </div>
                </div>
                <div className="flex flex-col text-xs text-gray-600">
                  <div>
                    <span className="text-sm font-medium text-project_main">
                      Chato123
                    </span>{" "}
                    placed a bid
                  </div>
                  <div>48 min ago</div>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <span className="text-sm font-medium sm:text-base">
                  571.7 BUSD
                </span>
                <span className="text-xs text-gray-600 sm:text-sm">
                  ≈ €107.66
                </span>
              </div>
            </div>

            {/* DELETE LATER */}
            <div className="flex items-center justify-between bg-white px-3 py-4">
              <div className="flex items-center space-x-2">
                <div>
                  <div className="relative h-8 w-8 rounded-full border border-slate-400">
                    <Image
                      ng-src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonID}.png`}
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonID}.png`}
                      layout="fill"
                    />
                  </div>
                </div>
                <div className="flex flex-col text-xs text-gray-600">
                  <div>
                    <span className="text-sm font-medium text-project_main">
                      Chato123
                    </span>{" "}
                    placed a bid
                  </div>
                  <div>48 min ago</div>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <span className="text-sm font-medium sm:text-base">
                  571.7 BUSD
                </span>
                <span className="text-xs text-gray-600 sm:text-sm">
                  ≈ €107.66
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between bg-[#fafafa] px-3 py-4">
              <div className="flex items-center space-x-2">
                <div>
                  <div className="relative h-8 w-8 rounded-full border border-slate-400">
                    <Image
                      ng-src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonID}.png`}
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonID}.png`}
                      layout="fill"
                    />
                  </div>
                </div>
                <div className="flex flex-col text-xs text-gray-600">
                  <div>
                    <span className="text-sm font-medium text-project_main">
                      Chato123
                    </span>{" "}
                    placed a bid
                  </div>
                  <div>48 min ago</div>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <span className="text-sm font-medium sm:text-base">
                  571.7 BUSD
                </span>
                <span className="text-xs text-gray-600 sm:text-sm">
                  ≈ €107.66
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between bg-white px-3 py-4">
              <div className="flex items-center space-x-2">
                <div>
                  <div className="relative h-8 w-8 rounded-full border border-slate-400">
                    <Image
                      ng-src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonID}.png`}
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonID}.png`}
                      layout="fill"
                    />
                  </div>
                </div>
                <div className="flex flex-col text-xs text-gray-600">
                  <div>
                    <span className="text-sm font-medium text-project_main">
                      Chato123
                    </span>{" "}
                    placed a bid
                  </div>
                  <div>48 min ago</div>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <span className="text-sm font-medium sm:text-base">
                  571.7 BUSD
                </span>
                <span className="text-xs text-gray-600 sm:text-sm">
                  ≈ €107.66
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
