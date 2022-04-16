import NFT from "models/NFTModel"
import db from "utils/db"

export const getAllNFT = async (req, res) => {
  try {
    const nft = await NFT.find()

    return res.status(200).json({
      status: "success",

      docs: nft.length,
      data: {
        nft,
      },
    })
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      message: error.message,
    })
  }
}

export const createNFT = async (req, res) => {
  try {
    const newNFT = await NFT.create(req.body)

    await db.disconnect()

    return res.status(200).json({
      status: "success",

      data: {
        nft: newNFT,
      },
    })
  } catch (error) {
    await db.disconnect()
    return res.status(400).json({
      status: "fail",
      message: error.message,
    })
  }
}

export const getOneNFT = async (req, res, id) => {
  try {
    const nft = await NFT.findById(id)

    if (!nft) {
      await db.disconnect()
      return res.status(404).json({ status: "404 Not Found" })
    }

    await db.disconnect()

    return res.status(200).json({
      status: "success",

      data: {
        nft,
      },
    })
  } catch (error) {
    await db.disconnect()
    return res.status(400).json({
      status: "fail",
      message: error.message,
    })
  }
}

export const updateNFT = async (req, res, id) => {
  try {
    const updatedNFT = await NFT.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    })

    if (!updatedNFT) {
      await db.disconnect()
      return res.status(404).json({ status: "404 NFT Not Found" })
    }

    await db.disconnect()

    return res.status(200).json({
      status: "success",

      data: {
        nft: updatedNFT,
      },
    })
  } catch (error) {
    await db.disconnect()
    return res.status(400).json({
      status: "fail",
      message: error.message,
    })
  }
}

export const deleteNFT = async (req, res, id) => {
  try {
    const deletedNFT = await NFT.findByIdAndDelete(id)
    if (!deletedNFT) {
      await db.disconnect()
      return res
        .status(404)
        .json({ status: 404, message: "NFT not found or already deleted" })
    }

    await db.disconnect()

    return res.status(204).json()
  } catch (error) {
    await db.disconnect()
    return res.status(400).json({
      status: "fail",
      message: error.message,
    })
  }
}
