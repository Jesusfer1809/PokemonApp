import mongoose from "mongoose"

const userInfSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, default: "NFT User" },

    email: { type: String, required: true },

    image: {
      type: String,
      required: true,
      default:
        "https://lh3.googleusercontent.com/a/AATXAJyaYCaQIN8wrqwuRU6f30cVmd6lSTu5Ov-301qP=s96-c",
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
)

const model =
  mongoose.models.UserInf || mongoose.model("UserInf", userInfSchema)

export default model
