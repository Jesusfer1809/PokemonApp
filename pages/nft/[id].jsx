import React from "react"

import NavBar from "../../components/NavBar"
import Details from "../../components/Details"

import Footer from "../../components/Footer"

import { useRouter } from "next/router"
import axios from "axios"
import Head from "next/head"
import Image from "next/image"

function DetailPage({ pokeData }) {
  return (
    <>
      <Head>
        <title>NFT | {pokeData.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white font-rubik ">
        <NavBar />

        <Details pokeData={pokeData} />

        <Footer />
      </div>
    </>
  )
}

export default DetailPage

export async function getServerSideProps(ctx) {
  const { id } = ctx.params

  const result1 = await axios.get(`${process.env.AXIOS_URL}/api/nft/${id}`)
  const pokeData = result1.data.data.nft

  return {
    props: {
      pokeData,
    },
  }
}
