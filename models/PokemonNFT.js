import mongoose from "mongoose"

const pokemonNFTSchema = new mongoose.Schema(
  {
    franchise: { type: String, required: true },
    name: { type: String, required: true },
    pokemonID: { type: Number, required: true },
    generation: { type: Number, required: true },
    types: { type: Array, required: true },
  },
  {
    timestamps: false,
    versionKey: false,
  }
)

const model =
  mongoose.models.PokemonNFT || mongoose.model("PokemonNFT", pokemonNFTSchema)

export default model
