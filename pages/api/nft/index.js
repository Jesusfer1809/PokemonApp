import db from "utils/db"

import { getAllNFT, createNFT } from "controllers/NFTControllers"

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getAllNFT(req, res)

    case "POST":
      return await createNFT(req, res)

    default:
      return res.status(500).json({
        status: "fail",
        message: "There's no response for this method, please try another",
      })
  }
}
