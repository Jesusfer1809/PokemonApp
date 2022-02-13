import Head from 'next/head'

import { composeWithDevTools } from '@redux-devtools/extension'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { gql } from '@apollo/client'
import client from '../apollo-client'

const letters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]

const MAX_NUMBER_POKES = 898

export default function Home() {
  const [limit, setLimit] = useState(20)
  const [offset, setOffset] = useState(0)
  const [loading, setIsLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])
  console.log(pokemons)
  console.log(offset)
  console.log(limit)

  const { ref, inView } = useInView()

  const renderLetters = () => {
    return letters
      .slice(0, limit - 1)
      .map((l) => <div className=" text-[500px] text-black">{l}</div>)
  }

  const fetchPokemons = () => {
    try {
      setIsLoading(true)

      const fetchData = async () => {
        const { data: response } = await client.query({
          query: gql`
            query MyQuery {
              pokemon_v2_pokemon(
                where: { id: { _lte: ${
                  limit < MAX_NUMBER_POKES ? limit : MAX_NUMBER_POKES
                }, _gt: ${offset} } },
                
              ) {
                name
                id
                pokemon_v2_pokemonstats {
                  pokemon_v2_stat {
                    name
                  }
                  base_stat
                }
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
      fetchData()
    } catch (err) {
    } finally {
      setLimit((prev) => prev + 20)
      setOffset((prev) => prev + 20)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchPokemons()
  }, [])

  useEffect(() => {
    if (inView && pokemons.length < MAX_NUMBER_POKES) {
      fetchPokemons()
    }
  }, [inView])

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col">
        {pokemons.map((pokemon, index) => {
          if (pokemons.length === index + 1) {
            return (
              <div ref={ref} className=" text-[100px] text-red-500">
                {pokemon.name}
              </div>
            )
          }

          return <div className=" text-[100px] text-black">{pokemon.name}</div>
        })}

        {loading && (
          <div className=" text-[100px] text-blue-700">Loading...</div>
        )}
      </div>
    </div>
  )
}
