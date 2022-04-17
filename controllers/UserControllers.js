import UserInfo from "models/UserInfoModel"
import db from "utils/db"

export const createNewUser = async (req, res) => {
  try {
    const newUser = await UserInfo.create(req.body)

    await db.disconnect()

    return res.status(200).json({
      status: "success",

      data: {
        user: newUser,
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

export const getMe = async (req, res, session) => {
  try {
    const { email } = session.user
    const me = await UserInfo.find({ email })

    await db.disconnect()

    return res.status(200).json({
      status: "success",

      data: {
        me,
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
