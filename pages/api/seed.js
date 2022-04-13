import Slide from "models/SlideModel"
import db from "utils/db"
import { sliderData } from "utils/sliderData"

export default async function handler(req, res) {
  await db.connect()

  await Slide.deleteMany()
  await Slide.insertMany(sliderData)

  await db.disconnect()
  res.status(200).json({
    status: "seeded succesfully!",
    data: {
      sliderData,
    },
  })
}
