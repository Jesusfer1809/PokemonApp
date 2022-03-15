import React, { useState } from 'react'
import MobileMenu from './MobileMenu'

function NavBar() {
  // const [query, setQuery] = useState('')

  // const handleSubmit = (e) => {
  //   e.preventDefault()

  //   fetchPokemons(query)
  // }

  return (
    <div className="w-full bg-project_main">
      <MobileMenu />
    </div>
  )
}

export default NavBar
