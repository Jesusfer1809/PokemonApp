import MobileMenu from "./MobileMenu"
import DesktopMenu from "./DesktopMenu"
import { useEffect, useState } from "react"
import { useSession, signIn } from "next-auth/react"
import axios from "axios"

function NavBar() {
  const { data: session } = useSession()
  const [user, setUser] = useState(null)

  useEffect(async () => {
    try {
      const fetchNFT = async () => {
        const result = await axios.get("http://localhost:3000/api/user/me")
        return result.data.data.me[0]
      }

      if (session) {
        const user = await fetchNFT()
        setUser(user)
      } else {
        setUser(null)
      }
    } catch (e) {}
  }, [session])

  return (
    <div className="fixed z-50 w-full bg-project_main text-white">
      <MobileMenu user={user} />
      <DesktopMenu user={user} />
    </div>
  )
}

export default NavBar
