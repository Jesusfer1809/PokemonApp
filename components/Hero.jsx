import HeroSlider from "./HeroSlider"

function Hero() {
  return (
    <div className="flex w-full flex-col items-center space-y-16 px-4 pt-40 md:space-y-28">
      <div className=" flex flex-col items-center">
        <h1 className="flex flex-col items-center font-medium">
          <span className=" text-center text-3xl md:text-4xl lg:text-5xl">
            Own an NFT of your favorite character
          </span>
          <span className="mt-6 text-center text-lg md:text-xl lg:text-2xl">
            from leading creators and brands
          </span>
        </h1>

        <div className="mt-16 flex w-full flex-col items-center space-y-6 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-6">
          <button className="  min-w-[15rem] rounded-lg border border-transparent bg-gradient-to-r from-[#119DFA] to-[#11CBFA] py-2 text-lg font-medium text-white sm:py-4 md:text-xl lg:min-w-[20rem]">
            View Marketplace
          </button>
          <button className="  min-w-[15rem] rounded-lg border border-[#119DFA] py-2 text-lg  font-medium text-[#119DFA] sm:py-4 md:text-xl lg:min-w-[20rem]">
            View Drops
          </button>
        </div>
      </div>

      <div className="relative flex w-full justify-center">
        <div className="absolute  inset-auto h-[20rem] w-full rounded-3xl bg-gradient-to-r from-[#119DFA] to-[#11CBFA] blur-lg md:h-[30rem] md:w-4/5  "></div>
        <HeroSlider />
      </div>
    </div>
  )
}

export default Hero
