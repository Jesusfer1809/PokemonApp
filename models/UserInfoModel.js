import mongoose from "mongoose"
import slugify from "slugify"

const userInfoSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    username: { type: String },
    email: { type: String, required: true, unique: true },
    image: {
      type: String,
      required: true,
      default:
        "https://lh3.googleusercontent.com/a/AATXAJyaYCaQIN8wrqwuRU6f30cVmd6lSTu5Ov-301qP=s96-c",
    },
    role: {
      type: String,
      enum: ["user", "creator", "admin"],
      default: "user",
    },
    description: { type: String },
    NFT: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "NFT",
      },
    ],
    socialMedia: { type: Object },
  },
  {
    timestamps: false,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
)

userInfoSchema.pre("save", function (next) {
  this.username = slugify(this.fullName, { lower: true })
  next()
})

const UserInfo =
  mongoose.models.UserInfo || mongoose.model("UserInfo", userInfoSchema)

export default UserInfo
