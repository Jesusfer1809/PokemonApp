import NextAuth from "next-auth"

import EmailProvider from "next-auth/providers/email"
import GoogleProvider from "next-auth/providers/google"

import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../lib/mongodb"

import UserInf from "../../../models/UserInf"
import db from "../../../utils/db"

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  // Configure one or more authentication providers
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  callbacks: {
    async signIn(user, account, profile) {
      await db.connect()

      const prevUser = await UserInf.findOne({ _id: user.user.id })

      if (!prevUser) {
        await UserInf.create({
          _id: user.user.id,
          name: user.user.name,
          email: user.user.email,
          image: user.user.image,
        })
      }

      if (prevUser && prevUser.image !== user.user.image) {
        await UserInf.findByIdAndUpdate(
          prevUser._id,
          {
            ...prevUser,
            image: user.user.image,
          },
          {
            new: true,
            runValidators: true,
          }
        )
      }

      await db.disconnect()

      return true
    },
  },
})
