import Image from 'next/image'
import React from 'react'

function PokeCard({ pokemon }) {
  const { id, name, pokemon_v2_pokemontypes: types } = pokemon
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative h-24 w-24">
        <Image
          ng-src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          layout="fill"
        />
      </div>

      <div className="mt-4 text-lg font-medium sm:text-xl">
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </div>

      <div className="mt-2 sm:text-lg">
        # {pokemon.id.toString().padStart(3, '0')}
      </div>
    </div>
  )
}

export default PokeCard
