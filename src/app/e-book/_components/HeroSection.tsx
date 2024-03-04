import { ArrowRightCircle, Download } from "lucide-react"
import MaxWidthWrapper from "./MaxWidthWrapper"
import MiniLabel from "./MiniLabel"

const HeroSection = () => {
  return (
    <div className='w-full h-[1074px] bg-[url("/e-book/herobg.svg")] bg-no-repeat relative'>
      <span className="absolute w-[576px] h-[576px] rounded-full bg-white/[0.02] -top-[79px] -right-[160px]" />
      <span className="w-[210px] h-[430px] rounded-[20px] absolute top-[265px] -left-[24px] bg-white/[0.02] skew-y-3 z-10" />
      <span className="w-[210px] h-[430px] rounded-[20px] absolute top-[163px] left-8 bg-white/[0.02] skew-y-6 z-[11]" />
      <MaxWidthWrapper>
        <Navbar />
        <Hero />
      </MaxWidthWrapper>
    </div>
  )
}

export default HeroSection

const Navbar = () => {
  return (
    <header className="flex items-center justify-between pt-[58px] fixed w-full max-w-[1180px] left-1/2 -translate-x-1/2 z-30">
      {/* logo */}
      <div className="flex items-center gap-[15px]">
        <div className="w-[50px] h-[50px] rounded-full bg-ebprimary flex items-center justify-center">
          <h1 className="capitalize">s</h1>
        </div>
        <h1 className="font-medium text-lg text-white">the malaka</h1>
      </div>
      {/* link */}
      <nav className="flex items-center gap-[50px]">
        <a href="/e-book" className="capitalize text-white/80 hover:text-white">
          top
        </a>
        <a href="/e-book" className="capitalize text-white/80 hover:text-white">
          for everyone
        </a>
        <a href="/e-book" className="capitalize text-white/80 hover:text-white">
          benefit
        </a>
        <a href="/e-book" className="capitalize text-white/80 hover:text-white">
          preview
        </a>
        <a href="/e-book" className="capitalize text-white/80 hover:text-white">
          penulis
        </a>
      </nav>
      <button className="px-[30px] py-[15px] rounded-full bg-white text-lg font-bold text-ebdark capitalize">
        download
      </button>
    </header>
  )
}

const Hero = () => {
  return (
    <section className="w-full grid grid-cols-2 pt-[216px] z-20 relative">
      <div className="flex flex-col">
        <h1 className="mb-[20px] font-medium text-5xl text-white">
          Sebuah framework CSS untuk developer yang memiliki phobia <br />
          terhadap CSS
        </h1>
        <p className="mb-[50px] leading-32 text-white/80">
          Buku ini akan mengajarkan kamu konsep utility-first pada CSS <br />
          dan diakhiri dengan membangun sebuah website yang <br /> responsive
          dengan Tailwind CSS.
        </p>
        <div className="flex items-center gap-10 mb-[100px]">
          <button className="px-[45px] py-[25px] flex items-center gap-[15px] text-base bg-ebprimary rounded-full shadow-xl shadow-ebprimary/30 text-white">
            <span className="capitalize font-bold">beli sekarang</span>
            <ArrowRightCircle size={16} className="mt-1" />
          </button>
          <div className="gap-[30px] flex items-start text-white">
            <Download />
            <div className="flex flex-col gap-2.5">
              <h3 className="uppercase tracking-10 font-bold text-white/60">
                sudah terjual
              </h3>
              <h1 className="text-2xl font-semibold">501,234+</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3.5">
          <MiniLabel
            color="#ffff"
            opacity="40"
            label="teknologi yang di gunakan"
          />
          <img src="/e-book/technologies.svg" className="w-[368px]" />
        </div>
      </div>
      <div className="w-full h-full relative">
        <img
          src="/e-book/book-herosection.svg"
          className="w-[522px] scale-150 absolute -bottom-56 right-5"
        />
      </div>
    </section>
  )
}
