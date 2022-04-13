import NextAuth from "next-auth"

import EmailProvider from "next-auth/providers/email"
import GoogleProvider from "next-auth/providers/google"

import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "lib/mongodb"

import UserInfo from "models/UserInfoModel"
import db from "utils/db"

import axios from "axios"

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
  events: {
    signIn: async (message) => {
      console.log("sign in!!")
    },
    createUser: async (user) => {
      console.log("USER CREATED!!")
      console.log(user)

      await axios.post("http://localhost:3000/api/newUser", {
        _id: user.user.id,
        fullName: user.user.name,
        email: user.user.email,
        image: user.user.image,
      })
    },
  },
})
