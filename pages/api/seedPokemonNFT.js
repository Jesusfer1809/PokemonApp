import NFT from "models/NFTModel"
import db from "utils/db"

import { gql } from "@apollo/client"
import client from "apollo-client"

import axios from "axios"

export default async function handler(req, res) {
  // const fetchData = async () => {
  //   const { data: response } = await client.query({
  //     query: gql`
  //       query samplePokeAPIquery {
  //         pokemon_v2_pokemon(where: { id: { _lte: 151 } }) {
  //           id
  //           name
  //           pokemon_v2_pokemonspecy {
  //             generation_id
  //           }
  //           pokemon_v2_pokemontypes {
  //             pokemon_v2_type {
  //               name
  //             }
  //           }
  //         }
  //       }
  //     `,
  //   })

  //   return response
  // }

  // const result = await fetchData()

  // const pokemon = result.pokemon_v2_pokemon.map((object) => {
  //   return {
  //     brand: "Pokemon",
  //     name: object.name.charAt(0).toUpperCase() + object.name.slice(1),
  //     image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${object.id}.png`,
  //     NFTProps: {
  //       pokemonID: object.id,
  //       generation: object.pokemon_v2_pokemonspecy.generation_id,
  //       types: object.pokemon_v2_pokemontypes.map((type) => {
  //         return type.pokemon_v2_type.name
  //       }),
  //     },
  //     price: (Math.random() * 1000).toFixed(2),
  //     description:
  //       "1st generation of the world-famous franchise, all of them living now in the blockchain. Gotta catch 'em all!",
  //     owner:
  //       Math.random() < 0.5
  //         ? "6255d3ff04ca900b9b590d82"
  //         : "6255d44604ca900b9b590d89",

  //     creator:
  //       Math.random() < 0.5
  //         ? "6255d3ff04ca900b9b590d82"
  //         : "6255d44604ca900b9b590d89",
  //   }
  // })

  // await axios.post("http://localhost:3000/api/nft", pokemon)

  res.status(200).json({
    // pokemon,
  })
}
