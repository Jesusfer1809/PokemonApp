import React from "react"

import NavBar from "../../components/NavBar"
import DetailsMobile from "../../components/DetailsMobile"
import DetailsDesktop from "../../components/DetailsDesktop"
import Footer from "../../components/Footer"

import { useRouter } from "next/router"
import axios from "axios"
import Head from "next/head"
import Image from "next/image"

function DetailPage({ pokeData }) {
  return (
    <>
      <Head>
        <title>NFT | {pokeData[0].name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white font-rubik ">
        <NavBar />

        <DetailsMobile pokeData={pokeData} />

        <Footer />
      </div>
    </>
  )
}

export default DetailPage

export async function getServerSideProps(ctx) {
  const { id } = ctx.params

  const result1 = await axios.get(`http://localhost:3000/api/pokemon/${id}`)
  const pokeData = result1.data

  return {
    props: {
      pokeData,
    },
  }
}
