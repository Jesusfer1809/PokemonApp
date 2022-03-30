import mongoose from "mongoose"

const pokemonNFTSchema = new mongoose.Schema(
  {
    franchise: { type: String, required: true },
    name: { type: String, required: true },
    pokemonID: { type: Number, required: true },
    generation: { type: Number, required: true },
    types: { type: Array, required: true },
    owner: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "UserInf",
        required: true,
      },
    ],
    creator: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "UserInf",
        required: true,
      },
    ],
  },
  {
    timestamps: false,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
)

pokemonNFTSchema.pre(/^find/, function (next) {
  this.populate({
    path: "owner",
  }).populate({
    path: "creator",
  })

  next()
})

const model =
  mongoose.models.PokemonNFT || mongoose.model("PokemonNFT", pokemonNFTSchema)

export default model
