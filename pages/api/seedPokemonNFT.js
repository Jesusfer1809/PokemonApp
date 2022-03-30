import nc from "next-connect"
import Slide from "../../models/Slider"
import PokemonNFT from "../../models/PokemonNFT"
import db from "../../utils/db"
import { sliderData } from "../../utils/sliderData"
import { gql } from "@apollo/client"
import client from "../../apollo-client"

const handler = nc()

handler.get(async (req, res) => {
  await db.connect()
  const fetchData = async () => {
    const { data: response } = await client.query({
      query: gql`
        query samplePokeAPIquery {
          pokemon_v2_pokemon(where: { id: { _lte: 898 } }) {
            id
            name
            pokemon_v2_pokemonspecy {
              generation_id
            }
            pokemon_v2_pokemontypes {
              pokemon_v2_type {
                name
              }
            }
          }
        }
      `,
    })

    return response
  }

  const result = await fetchData()
  const pokemon = result.pokemon_v2_pokemon.map((object) => {
    return {
      franchise: "Pokemon",
      name: object.name.charAt(0).toUpperCase() + object.name.slice(1),
      pokemonID: object.id,
      generation: object.pokemon_v2_pokemonspecy.generation_id,
      types: object.pokemon_v2_pokemontypes.map((type) => {
        return type.pokemon_v2_type.name
      }),
      owner:
        Math.random() < 0.5
          ? "62447191356c3fb7514b465f"
          : "62446f9d356c3fb7514b4658",

      creator:
        Math.random() < 0.5
          ? "62447191356c3fb7514b465f"
          : "62446f9d356c3fb7514b4658",
    }
  })

  await PokemonNFT.deleteMany()
  await PokemonNFT.insertMany(pokemon)
  await db.disconnect()
  res.send({ data: pokemon })
})

export default handler
