import axios from "axios"
import React, { useEffect, useState } from "react"
import Card from "./Card"
import mongoose from "mongoose"

function NFTShowcase() {
  const [nft, setNFT] = useState([])

  useEffect(async () => {
    try {
      const fetchNFT = async () => {
        try {
          const result = await axios.get(`${process.env.NEXTAUTH_URL}/api/nft`)
          console.log(result)
          const pokemon1Gen = result.data.data.nft

          setNFT(pokemon1Gen)
        } catch (e) {
          console.log(e)
        }
      }

      fetchNFT()
    } catch (e) {
      console.log(e)
    }
  }, [])

  return (
    <div className="my-40 flex w-full flex-col items-center">
      <div className="mb-12">
        <h2 className="text-5xl">Top Collectibles</h2>
      </div>
      <div className=" grid w-full grid-cols-1 gap-x-6 gap-y-24 px-8 sz500:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-16 ">
        {nft?.map((pokemon, index) => {
          return (
            <div key={pokemon._id}>
              <Card pokemon={pokemon} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default NFTShowcase
