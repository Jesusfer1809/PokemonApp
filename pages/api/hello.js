// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mongoose from "mongoose"
import db from "../../utils/db"

export default async function handler(req, res) {
  console.log(mongoose)
  await db.connect()
  const collections = Object.keys(mongoose.connection.collections)
  await db.disconnect()
  res.status(200).json({
    collections,
  })
}
