import { useState } from "react"

import { useSelector } from "react-redux"

export default function HeroSlider() {
  const [index, setIndex] = useState(0)
  const sliderData = useSelector((state) => state.slide.slides)

  const nextSlide = () => {
    if (index < sliderData.length - 1) {
      setIndex(index + 1)
    } else if (index === sliderData.length - 1) {
      setIndex(0)
    }
  }

  return (
    <div
      className={`relative flex h-[20rem] w-full items-center justify-center  rounded-3xl  bg-cover  bg-center p-2  md:h-[30rem] md:w-4/5 `}
      style={{ backgroundImage: ` url(${sliderData?.[index]?.imgURL})` }}
    >
      <div className=" flex flex-col items-center rounded-sm bg-gray-600 bg-opacity-80 p-3 md:p-6">
        <span
          onClick={nextSlide}
          className="rounded-full bg-gradient-to-r from-[#119DFA] to-[#11CBFA] py-2 px-4 font-medium uppercase md:text-lg"
        >
          {sliderData?.[index]?.state}
        </span>
        <div className="mt-8 flex flex-col items-center space-y-2 font-medium md:space-y-3">
          <span className="md:text-lg">{sliderData?.[index]?.date}</span>
          <span className="text-center text-2xl md:text-3xl ">
            {sliderData?.[index]?.name}
          </span>
          <span className="text-blue-300 md:text-lg">
            {sliderData?.[index]?.creator}
          </span>
        </div>
      </div>
    </div>
  )
}
