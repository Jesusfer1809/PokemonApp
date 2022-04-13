import db from "utils/db"

import { createNewUser } from "controllers/UserControllers"

export default async function handler(req, res) {
  await db.connect()

  switch (req.method) {
    case "POST":
      return await createNewUser(req, res)

    default:
      return res.status(500).json({
        status: "fail",
        message: "There's no response for this method, please try another",
      })
  }
}
