import React, { useState } from "react"
import MobileMenu from "./MobileMenu"
import DesktopMenu from "./DesktopMenu"
import { useSession, signIn, signOut } from "next-auth/react"

function NavBar() {
  const { data: session } = useSession()
  console.log(session)
  // const [query, setQuery] = useState('')

  // const handleSubmit = (e) => {
  //   e.preventDefault()

  //   fetchPokemons(query)
  // }

  return (
    <div className="fixed z-50 w-full bg-project_main text-white">
      <MobileMenu />
      <DesktopMenu />
    </div>
  )
}

export default NavBar
