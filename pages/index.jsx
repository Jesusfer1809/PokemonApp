import Head from "next/head"
import PokeCard from "../components/PokeCard"
import NavBar from "../components/NavBar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"

import { colors } from "../utils/variables"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { useSelector, useDispatch } from "react-redux"
import { getSlides } from "../store/actions/slideAction"

import Image from "next/image"
import axios from "axios"

const MAX_NUMBER_POKES = 898

export default function Home({ slides, pokemon1Gen }) {
  const [loading, setIsLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])

  const { ref, inView } = useInView()
  const dispatch = useDispatch()

  useEffect(() => {
    setPokemons(pokemon1Gen)
  }, [])

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

        <div className="my-40 flex w-full flex-col items-center">
          <div className="mb-12">
            <h2 className="text-5xl">Top Collectibles</h2>
          </div>
          <div className=" grid w-full grid-cols-1 gap-x-6 gap-y-24 px-8 sz500:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-16 ">
            {pokemons.map((pokemon, index) => {
              return (
                <div key={pokemon._id}>
                  <PokeCard pokemon={pokemon} />
                </div>
              )
            })}
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const result1 = await axios.get("http://localhost:3000/api/slides")
  const slides = result1.data

  const result2 = await axios.get("http://localhost:3000/api/pokemon")
  const pokemon1Gen = result2.data

  return {
    props: {
      slides,
      pokemon1Gen,
    },
  }
}
