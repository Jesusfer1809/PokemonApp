function Footer() {
  return (
    <div className="flex w-full flex-col space-y-4 bg-project_main p-6 text-sm text-white md:flex-row md:items-center md:justify-between md:space-y-0">
      <div>Icons here...</div>

      <div>Copyright &copy; 2022 TradeCave.com. All rights reserved</div>

      <div>
        <ul className="flex flex-col space-y-1 text-gray-300 md:flex-row md:space-y-0 md:space-x-6">
          <li>
            <a href="#">Help center</a>
          </li>

          <li>
            <a href="#">T&C</a>
          </li>

          <li>
            <a href="#">Privacy note</a>
          </li>

          <li>
            <a href="#">Cookies preference</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
