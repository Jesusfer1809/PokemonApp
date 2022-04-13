import mongoose from "mongoose"

const offerSchema = new mongoose.Schema(
  {
    NFT: {
      type: mongoose.Schema.ObjectId,
      ref: "NFT",
      required: [true, "The offer must belong to an NFT"],
    },
    owner: {
      type: mongoose.Schema.ObjectId,
      ref: "UserInfo",
      required: [true, "The offer must have the owner info"],
    },
    purchaser: {
      type: mongoose.Schema.ObjectId,
      ref: "UserInfo",
      required: [true, "The offer must have the purchasr info"],
    },
    offerAmount: {
      type: Number,
      required: [true, "The offer must have an amount"],
    },
    settedAt: { type: Date, required: true, default: Date.now },
  },
  {
    timestamps: false,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
)

const Offer = mongoose.models.Offer || mongoose.model("Offer", offerSchema)

export default Offer
