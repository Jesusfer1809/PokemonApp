import Head from "next/head"
import axios from "axios"
import mongoose from "mongoose"

import UserInfo from "models/UserInfoModel"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { useSelector, useDispatch } from "react-redux"
import { getSlides } from "store/actions/slideAction"
import { getUrl } from "store/actions/urlAction"

import db from "utils/db"

import Card from "components/Card"
import NavBar from "components/NavBar"
import Hero from "components/Hero"
import Footer from "components/Footer"
import NFTShowcase from "components/NFTShowcase"

const MAX_NUMBER_POKES = 898

export default function Home({ slides, AXIOS_URL }) {
  const [loading, setIsLoading] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSlides(slides))
    dispatch(getUrl(AXIOS_URL))
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
  const uwu = await UserInfo.find({})

  const result1 = await axios.get(`${process.env.AXIOS_URL}/api/slides`)
  const slides = result1.data

  const AXIOS_URL = process.env.AXIOS_URL
  return {
    props: {
      slides,
      AXIOS_URL,
    },
  }
}
