import Head from "next/head"
import axios from "axios"
import mongoose from "mongoose"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { useSelector, useDispatch } from "react-redux"
import { getSlides } from "store/actions/slideAction"

import db from "utils/db"

import Card from "components/Card"
import NavBar from "components/NavBar"
import Hero from "components/Hero"
import Footer from "components/Footer"
import NFTShowcase from "components/NFTShowcase"

const MAX_NUMBER_POKES = 898

export default function Home({ slides }) {
  console.log(mongoose.models)
  const [loading, setIsLoading] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSlides(slides))
  }, [])

  return (
    <>
      <Head>
        <title>TradeCave</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center  bg-project_main  font-rubik text-white">
        <NavBar />

        <Hero />

        <NFTShowcase />

        <Footer />
      </div>
    </>
  )
}

export async function getServerSideProps() {
  await db.connect()
  const result1 = await axios.get(`${process.env.NEXTAUTH_URL}/api/slides`)
  const slides = result1.data

  // const result2 = await axios.get("http://localhost:3000/api/nft")
  // const nft = result2.data.data.nft

  return {
    props: {
      slides,
    },
  }
}
