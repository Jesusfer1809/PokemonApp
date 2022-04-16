import db from "utils/db"

import { getMe } from "controllers/UserControllers"
import { getSession } from "next-auth/react"

export default async function handler(req, res) {
  await db.connect()

  const session = await getSession({ req })

  switch (req.method) {
    case "GET":
      return await getMe(req, res, session)
  }
}
