import mongoose from "mongoose"

const slideSchema = new mongoose.Schema(
  {
    state: { type: String, required: true },
    date: { type: String, required: true, default: "Wed, Sep 18" },
    name: { type: String, required: true },
    creator: { type: String, required: true },
    imgURL: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const model = mongoose.models.Slide || mongoose.model("Slide", slideSchema)

export default model
