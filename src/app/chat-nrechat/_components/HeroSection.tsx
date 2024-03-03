import { ArrowRightCircleIcon, Download, User } from "lucide-react"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Link } from "react-router-dom"

const HeroSection = () => {
  return (
    <MaxWidthWrapper className="flex flex-col gap-[75px] pt-[52px]">
      <Navbar />
      <Hero />
      <BrandBanner />
    </MaxWidthWrapper>
  )
}

export default HeroSection

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <Link
        to="/chat-rechat"
        className="text-4xl"
      >
        👋
      </Link>
      <ul className="flex items-center gap-16">
        <li className="capitalize hover:font-semibold text-base text-[#0C1B4D]">
          <a href="/chat-rechat">beranda</a>
        </li>
        <li className="capitalize hover:font-semibold text-base text-[#0C1B4D]">
          <a href="/chat-rechat">feature</a>
        </li>
        <li className="capitalize hover:font-semibold text-base text-[#0C1B4D]">
          <a href="/chat-rechat">teknologi</a>
        </li>
        <li className="uppercase hover:font-semibold text-base text-[#0C1B4D]">
          <a href="/chat-rechat">faq</a>
        </li>
      </ul>
      <button className="bg-[#4a72ff] shadow-xl shadow-[#4a72ff]/30 text-white capitalize text-lg font-semibold rounded-md px-3 py-1.5">
        download
      </button>
    </div>
  )
}

// [#4a72ff]
// [#0C1B4D]

const Hero = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="flex flex-col">
        <h3 className="uppercase txt-sm font-semibold tracking-[10%]">
          chat n' rechat
        </h3>
        <div className="my-2" />
        <h1 className="text-[34px] leading-[129%]">
          Sebuah aplikasi chatting yang bisa bikin kamu lupa diri, tapi tidak
          lupa jasa pahlawan!
        </h1>
        <div className="my-2" />
        <p className="text-lg text-[#0C1B4D]/60 leading-8">
          Sebenernya banyak banget aplikasi chatting yang lebih bagus dari ini,
          maka dari itu lebih baik pake yang lain aja deh ya daripada pake
          aplikasi yang ini.
        </p>
        <div className="my-4" />
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-4 capitalize font-semibold rounded-md bg-[#4a72ff] text-lg px-[45px] py-2 text-white shadow-xl shadow-[#4a72ff]/30">
            <span>register</span>
            <ArrowRightCircleIcon size={16} strokeWidth={1.5} />
          </button>
          <button className="capitalize font-semibold rounded-md bg-[#4a72ff]/10 text-[#4a72ff] text-lg px-[45px] py-2">
            <span>learn more</span>
          </button>
        </div>
        <div className="my-9" />
        <div className="flex items-center gap-10">
          <div className="flex items-start gap-8">
            <Download />
            <div className="flex flex-col">
              <p className="uppercase text-xs tracking-[10%] text-[#0C1B4D]/60">
                total don,tloud
              </p>
              <h1 className="font-semibold text-2xl">1,501,234</h1>
            </div>
          </div>
          <hr className="border-0 h-full rounded-full bg-[#0C1B4D]/10 w-px" />
          <div className="flex items-start gap-8">
            <User />
            <div className="flex flex-col">
              <p className="uppercase text-xs tracking-[10%] text-[#0C1B4D]/60">
                TOTAL USERS
              </p>
              <h1 className="font-semibold text-2xl">1,318,829</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full">
        <img src="/chat-rechat/hero-img.svg" className="w-full h-full" />
      </div>
    </div>
  )
}

const BrandBanner = () => {
  const brands = [
    "/chat-rechat/cnn.svg",
    "/chat-rechat/tirtoid.svg",
    "/chat-rechat/forbes.svg",
    "/chat-rechat/google.svg",
    "/chat-rechat/newyorktime.svg",
  ]

  return (
    <div className="bg-[#4a72ff]/10 rounded-2xl p-[60px] flex items-center w-full gap-10">
      {brands.map((brand) => (
        <img src={brand} />
      ))}
    </div>
  )
}
