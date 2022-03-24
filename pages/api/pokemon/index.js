import db from "../../../utils/db"
import PokemonNFT from "../../../models/PokemonNFT"

export default async function handler(req, res) {
  await db.connect()
  const pokemon = await PokemonNFT.find({ generation: 1 })
  await db.disconnect()

  res.status(200).json(pokemon)
}
