import mongoose from "mongoose"

const NFTSchema = new mongoose.Schema(
  {
    brand: { type: String, required: [true, "The NFT must belong to a brand"] },
    name: { type: String, required: [true, "The NFT must have a name"] },
    image: { type: String, required: [true, "The NFT must have an image"] },
    NFTProps: { type: Object },
    price: { type: Number, required: [true, "The NFT must have a price"] },
    likes: { type: Number, required: true, default: 0 },
    description: {
      type: String,
      required: [true, "The NFT must have a description"],
    },
    createdAt: { type: Date, required: true, default: Date.now },

    owner: {
      type: mongoose.Schema.ObjectId,
      ref: "UserInfo",
      required: [true, "The NFT must have an owner"],
    },

    creator: {
      type: mongoose.Schema.ObjectId,
      ref: "UserInfo",
      required: [true, "The NFT must have a creator"],
    },

    offers: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Offer",
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

NFTSchema.pre(/^find/, function (next) {
  this.populate({
    path: "owner",
  }).populate({
    path: "creator",
  })

  next()
})

const NFT = mongoose.models.NFT || mongoose.model("NFT", NFTSchema)
export default NFT
