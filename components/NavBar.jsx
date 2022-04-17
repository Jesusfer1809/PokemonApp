import MobileMenu from "./MobileMenu"
import DesktopMenu from "./DesktopMenu"
import { useEffect, useState } from "react"
import { useSession, signIn } from "next-auth/react"
import axios from "axios"

import { useSelector, useDispatch } from "react-redux"

function NavBar() {
  const { data: session } = useSession()
  const [user, setUser] = useState(null)

  const AXIOS_URL = useSelector((state) => state.url.url)

  useEffect(async () => {
    try {
      const fetchNFT = async () => {
        const result = await axios.get(`${AXIOS_URL}/api/user/me`)
        return result.data.data.me[0]
      }

      if (session) {
        const user = await fetchNFT()
        setUser(user)
      } else {
        setUser(null)
      }
    } catch (e) {
      setUser(null)
    }
  }, [session])

  return (
    <div className="fixed z-50 w-full bg-project_main text-white">
      <MobileMenu user={user} />
      <DesktopMenu user={user} />
    </div>
  )
}

export default NavBar
