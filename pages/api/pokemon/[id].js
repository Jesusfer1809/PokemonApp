import db from "../../../utils/db"
import PokemonNFT from "../../../models/PokemonNFT"

export default async function handler(req, res) {
  try {
    const { id } = req.query
    await db.connect()
    const pokemon = await PokemonNFT.find({ _id: id })
    await db.disconnect()

    res.status(200).json(pokemon)
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    })
  }
}
