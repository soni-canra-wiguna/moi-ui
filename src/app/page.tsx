import { Github, Instagram } from "lucide-react"
import ListUiCard from "../components/ListUiCard"

const HomePage = () => {
  return (
    <div className="w-full min-h-screen text-black bg-[#F3EEEA] relative font-grostekMd">
      <div
        style={{ opacity: "0.5" }}
        className="absolute bottom-64 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
      ></div>
      <div className="max-w-7xl w-full h-full mx-auto px-4 md:px-8 lg:px-14 2xl:px-0">
        <div className="flex flex-col gap-10 items-center justify-center pb-16 pt-32">
          <img
            src="/moi.png"
            alt=""
            className="selection:bg-transparent w-[200px] lg:w-[300px]"
          />
          <div className="flex flex-col gap-4 items-center z-40">
            <h1 className="text-2xl font-bold font-grostekBold flex flex-col leading-none tracking-32 relative">
              MOI UI
            </h1>
            <p className="max-w-xl text-center w-full text-black/60 mb-4 md:mb-6 lg:mb-10">
              Sempurna dalam Sederhana: Moi UI, Membuat Elegan dari Setiap
              Slicing.
            </p>
            <SocialMedia />
          </div>
        </div>
        <ListUiCard />
      </div>
    </div>
  )
}

export default HomePage

const SocialMedia = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:justify-center gap-6 w-full">
      <a
        target="_blank"
        href="https://instagram.com"
        className="flex items-center gap-2.5 rounded-full hover:bg-black/[0.05] text-black font-medium px-[18px] py-[9px] md:px-[22px] md:py-[12px] text-lg wtransition w-full justify-center sm:w-max border border-black shimmer"
      >
        <Instagram className="w-[18px] h-[18px]" />
        <span className="tracking-wide">Instagram</span>
      </a>
      <a
        target="_blank"
        href="https://github.com/soni-canra-wiguna"
        className="flex items-center gap-2.5 rounded-full bg-black text-white font-medium px-[18px] py-[9px] md:px-[22px] md:py-[12px] text-lg hover:bg-opacity-85 wtransition w-full justify-center sm:w-max shimmer"
      >
        <Github className="w-[18px] h-[18px]" />
        <span className="tracking-wide">Github</span>
      </a>
    </div>
  )
}
