import db from "../../../utils/db"
import Slide from "../../../models/Slider"

export default async function handler(req, res) {
  await db.connect()

  const slides = await Slide.find({})

  await db.disconnect()

  res.status(200).json(slides)
}
