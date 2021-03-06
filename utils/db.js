/* This is a database connection function*/
import mongoose from "mongoose"

const connection = {} /* creating connection object*/

async function connect() {
  /* check if we have connection to our databse*/
  if (connection.isConnected) {
    console.log("already connected")
    return
  }
  // if (mongoose.connections.length > 0) {
  //   connection.isConnected = mongoose.connections[0].readyState
  //   if (connection.isConnected === 1) {
  //     console.log("use previous connection")
  //   }
  //   await mongoose.disconnect()
  // }

  /* connecting to our database */
  const db = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log("new connection")
  connection.isConnected = db.connections[0].readyState
  return db
}

const disconnect = async () => {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect()
      connection.isConnected = false
    } else {
      console.log("not disconnect")
    }
  }
}

const db = { connect, disconnect }

export default db
