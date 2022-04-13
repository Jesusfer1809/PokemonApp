import MobileMenu from "./MobileMenu"
import DesktopMenu from "./DesktopMenu"

function NavBar() {
  return (
    <div className="fixed z-50 w-full bg-project_main text-white">
      <MobileMenu />
      <DesktopMenu />
    </div>
  )
}

export default NavBar
