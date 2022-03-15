import React, { useState } from 'react'
import MobileMenu from './MobileMenu'
import DesktopMenu from './DesktopMenu'

function NavBar() {
  // const [query, setQuery] = useState('')

  // const handleSubmit = (e) => {
  //   e.preventDefault()

  //   fetchPokemons(query)
  // }

  return (
    <div className="fixed z-50 w-full bg-project_main">
      <MobileMenu />
      <DesktopMenu />
    </div>
  )
}

export default NavBar
