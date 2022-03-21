import Head from "next/head"
import PokeCard from "../components/PokeCard"
import NavBar from "../components/NavBar"
import Hero from "../components/Hero"

import { colors } from "../utils/variables"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { useSelector, useDispatch } from "react-redux"
import { getSlides } from "../store/actions/slideAction"

import { gql } from "@apollo/client"
import client from "../apollo-client"
import Image from "next/image"
import axios from "axios"

const MAX_NUMBER_POKES = 898

export default function Home({ slides }) {
  const [limit, setLimit] = useState(20)
  const [offset, setOffset] = useState(0)
  const [loading, setIsLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])

  const { ref, inView } = useInView()
  const dispatch = useDispatch()

  const fetchPokemons = async (query) => {
    try {
      await setIsLoading(true)
      await setPokemons([])

      const fetchData = async (query) => {
        const { data: response } = await client.query({
          query: gql`
            query MyQuery {
              pokemon_v2_pokemon(
                where: {name: {_regex: ${
                  query || '""'
                }}, id: { _lte: ${MAX_NUMBER_POKES} }}
                
              ) {
                name
                id
                
                pokemon_v2_pokemontypes {
                  pokemon_v2_type {
                    name
                  }
                }
              }
            }
          `,
        })

        setPokemons((prevPokemons) => {
          return [...new Set([...prevPokemons, ...response.pokemon_v2_pokemon])]
        })
      }
      await fetchData(query)
    } catch (err) {
    } finally {
      setLimit((prev) => prev + 20)
      setOffset((prev) => prev + 20)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    dispatch(getSlides(slides))
  }, [])

  useEffect(() => {
    fetchPokemons()
  }, [])

  useEffect(() => {
    if (inView && pokemons.length < MAX_NUMBER_POKES) {
    }
  }, [inView])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center  bg-project_main pb-32 font-rubik text-white">
        <NavBar fetchPokemons={fetchPokemons} />

        <Hero />

        <div className="relative my-20 rounded-xl">
          <div className="absolute inset-0 h-72 w-72 rounded-xl bg-[#a945c7] blur-lg "></div>
          <div
            className={`relative h-72 w-72 rounded-xl border-4 bg-project_main  border-[${colors.dark}]  `}
          >
            <Image
              ng-src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/491.png`}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/491.png`}
              layout="fill"
            />
          </div>
        </div>

        <div className="grid w-full grid-cols-2 gap-x-4 gap-y-24 sm:grid-cols-3 lg:w-4/5 lg:grid-cols-4">
          {pokemons.map((pokemon, index) => {
            if (pokemons.length === index + 1) {
              return (
                <div key={pokemon.id} ref={ref}>
                  <PokeCard pokemon={pokemon} />
                </div>
              )
            }

            return (
              <div key={pokemon.id}>
                <PokeCard pokemon={pokemon} />
              </div>
            )
          })}
        </div>

        {loading && <div className=" mt-16 text-7xl">Loading...</div>}
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const result = await axios.get("http://localhost:3000/api/slides")
  const slides = result.data

  return {
    props: {
      slides,
    },
  }
}
