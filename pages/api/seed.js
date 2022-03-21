import nc from "next-connect"
import Slide from "../../models/Slider"
import db from "../../utils/db"
import { sliderData } from "../../utils/sliderData"

const handler = nc()

handler.get(async (req, res) => {
  await db.connect()
  await Slide.deleteMany()
  await Slide.insertMany(sliderData)
  await db.disconnect()
  res.send({ message: "seeded succesfully" })
})

export default handler
