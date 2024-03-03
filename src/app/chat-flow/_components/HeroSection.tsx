import { Play } from "lucide-react"
import MaxWidthWrapper from "./MaxWidthWrapper"

const HeroSection = () => {
  return (
    <section className="w-full h-[777px] relative overflow-hidden">
      <div className="w-full h-full absolute">
        <img
          src="/chat-flow/mainbg.svg"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="w-full h-full absolute top-0 left-0 bg-black/10 backdrop-blur-lg" />
      <MaxWidthWrapper className="pt-14 z-20 relative">
        <Navbar />
        <Hero />
      </MaxWidthWrapper>
    </section>
  )
}

export default HeroSection

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="text-lg font-bold text-white w-[171px]">ChatFlow</h1>
        <ul className="flex items-center gap-12">
          <li className="text-white/80 hover:text-white capitalize">
            <a href="/chat-flow">home</a>
          </li>
          <li className="text-white/80 hover:text-white capitalize">
            <a href="/chat-flow">pricing</a>
          </li>
          <li className="text-white/80 hover:text-white capitalize">
            <a href="/chat-flow">support</a>
          </li>
          <li className="text-white/80 hover:text-white capitalize">
            <a href="/chat-flow">contact us</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <button className="px-2.5 py-2 rounded-md hover:bg-white/20 text-white capitalize">
          login
        </button>
        <button className="px-2.5 py-2 rounded-md bg-white/50 hover:white/70 capitalize font-medium">
          register
        </button>
      </div>
    </div>
  )
}
// #0D082C

const Hero = () => {
  return (
    <div className="grid grid-cols-12 w-full items-center pt-24">
      <div className="col-span-8 flex flex-col">
        <h1 className="text-white font-semibold text-[56px] font-grostekMd leading-[70px] mb-10">
          Improve your customer experience with real-time assistance
        </h1>
        <p className="text-white/60 leading-8 text-lg mb-[30px] w-[552px]">
          Our live chat software helps you connect with your customers
          instantly, boosting sales and improving customer satisfaction. Try it
          out today and see the difference it can make for your business.
        </p>
        <div className="flex items-center gap-4">
          <button className="capitalize rounded-full px-9 py-4 bg-[#0D082C] text-lg text-white">
            get started
          </button>
          <button className="capitalize rounded-full px-9 py-4 bg-white/10 text-lg text-white flex items-center gap-2">
            <Play size={18} />
            <span>see in action</span>
          </button>
        </div>
      </div>
      <div className="col-span-4 w-full flex items-center justify-end">
        <img
          src="/chat-flow/heroimage.svg"
          alt=""
          className="w-[450px] h-full"
        />
      </div>
    </div>
  )
}
