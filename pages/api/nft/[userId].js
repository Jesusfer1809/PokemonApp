import NFT from "models/NFTModel"

import db from "utils/db"

import { getOneNFT, updateNFT, deleteNFT } from "controllers/NFTControllers"

export default async function handler(req, res) {
  await db.connect()

  const {
    query: { userId },
  } = req

  switch (req.method) {
    case "GET":
      return await getOneNFT(req, res, userId)

    case "PATCH":
      return await updateNFT(req, res, userId)

    case "DELETE":
      return await deleteNFT(req, res, userId)

    default:
      return res.status(500).json({
        status: "fail",
        message: "There's no response for this method, please try another",
      })
  }
}
