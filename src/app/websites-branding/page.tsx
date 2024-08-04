import { Menu, ArrowRight, ArrowDown, ArrowUpRight } from "lucide-react"
import { ReactNode } from "react"
import { Link, useLocation } from "react-router-dom"
import useDocumentTitle from "../../hook/use-document-title"

const MaxWidthWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-5 lg:px-[110px] h-auto font-grostekMd">
      {children}
    </div>
  )
}

const Navbar = () => {
  return (
    <header className="h-[72px] w-full flex justify-between items-center md:flex-col md:items-center md:my-10 md:gap-5">
      <div>
        <img src="/wb/Logo.svg" alt="this is logo" />
      </div>
      <div className="p-2 rounded-full bg-black text-white md:hidden">
        <Menu />
      </div>
      {/* tablet */}
      <div className="w-max gap-4 hidden md:flex flex-row bg-black rounded-full items-center p-1.5">
        <div className="text-xl cursor-pointer bg-white text-black font-medium hover:text-black hover:bg-white transition-all px-4 py-2 rounded-[80px]">
          Home
        </div>
        <Link
          to="/website-branding#project"
          className="text-xl hover:text-black hover:bg-white transition-all gap-1 flex flex-row items-center font-medium text-gray-500 px-4 py-2 rounded-[80px]"
        >
          <span className="bg-gray-500 p-0.5 w-5 h-5 text-black rounded-full text-[11.5px] flex items-center justify-center">
            20
          </span>
          <span>Project</span>
        </Link>
        <Link
          to="/website-branding#about"
          className="text-xl hover:text-black hover:bg-white transition-all font-medium text-gray-500 px-2 py-2 rounded-[80px]"
        >
          About
        </Link>
        <Link
          to="/website-branding#contact"
          className="text-xl hover:text-black hover:bg-white transition-all font-medium text-gray-500 px-2 py-2 rounded-[80px]"
        >
          Contact
        </Link>
      </div>
    </header>
  )
}

const Hero = () => {
  const transition = "transition duration-500 ease-in-out"
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center my-10 gap-5 md:mt-28">
      <h1 className="text-[48px] md:text-[84px] lg:text-[227px] font-bold font-grostekBold flex flex-col leading-none -tracking-[1px]">
        <span>Websites&</span> <span>Branding</span>
      </h1>
      <button
        className={`${transition} hover:bg-[#e4e4e4] lg:absolute group lg:-right-5 flex items-center rounded-[144px] justify-center p-3 md:p-6 text-sm gap-2 lg:text-xl self-end bg-[#F9F9F9]`}
      >
        <span className="uppercase font-medium">scroll down</span>
        <ArrowDown className={`${transition} group-hover:translate-y-1`} />
      </button>
    </section>
  )
}

const About = () => {
  return (
    <section
      id="about"
      className="my-5 flex flex-row gap-[48px] md:gap-[194px] lg:my-20 lg:gap-[662px]"
    >
      <div className="flex flex-col w-max">
        <h5 className="text-lg lg:text-2xl font-bold capitalize">let's talk</h5>
        <p className="text-sm lg:text-xl">hello@co.id</p>
      </div>
      <p className="text-sm lg:text-xl flex-1">
        Hey there, I'm Canra, a digital product designer specializing in
        branding, marketing, and full code intstrument.
      </p>
    </section>
  )
}

const Projects = () => {
  return (
    <>
      <section
        id="project"
        className="mb-10 mt-16 flex flex-col gap-4 relative"
      >
        <div className="flex flex-row justify-between items-center md:flex-1">
          <h5 className="text-2xl md:text-3xl lg:text-5xl font-bold capitalize">
            Projects
          </h5>
          <div className="flex gap-2 text-sm md:text-xl items-center md:absolute right-0 bottom-0 cursor-pointer">
            <h5 className="font-semibold">More</h5>
            <ArrowRight width={20} />
          </div>
        </div>
        <p className="text-sm md:text-base lg:text-xl md:w-6/12">
          As an experienced developer of modern, intuitive websites and digital
          products, I want to help you build the brand of your dreams.
        </p>
      </section>
      {/* card section */}
      <section className="my-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 lg:gap-y-12">
        <div className="flex flex-col gap-4">
          <div className="relative overflow-hidden flex items-end justify-center w-full h-[290px] lg:h-[500px] rounded-2xl bg-gradient-to-br from-[#7A19F3] to-[#A952F3]">
            <img src="/wb/phonee.svg" className=" lg:w-[500px] lg:h-[500px]" />
          </div>
          <div className="flex flex-col gap-1">
            <h5 className="capitalize leading-none text-lg md:text-2xl font-bold">
              Crtly
            </h5>
            <h6 className="capitalize leading-none text-lg md:text-2xl font-medium">
              mobile app
            </h6>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="overflow-hidden w-full h-[290px] lg:h-[500px] rounded-2xl">
            <img
              src="/wb/card2.png"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h5 className="capitalize leading-none text-lg md:text-2xl font-bold">
              dashboard
            </h5>
            <h6 className="capitalize leading-none text-lg md:text-2xl font-medium">
              web app
            </h6>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="overflow-hidden flex-1 h-[290px] lg:h-[500px] rounded-2xl">
            <img src="/wb/card3.svg" className="w-full h-full" />
          </div>
          <div className="flex flex-col gap-1">
            <h5 className="capitalize leading-none text-lg md:text-2xl font-bold">
              dynamic island
            </h5>
            <h6 className="capitalize leading-none text-lg md:text-2xl font-medium">
              apple app
            </h6>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="relative overflow-hidden flex items-center justify-center  w-full h-[290px] lg:h-[500px] rounded-2xl bg-gradient-to-br from-[#f39819] to-[#f7b05a]">
            <h2 className="font-bold tracking-wide text-4xl text-white">
              Sprint
            </h2>
          </div>
          <div className="flex flex-col gap-1">
            <h5 className="capitalize leading-none text-lg md:text-2xl font-bold">
              sprint
            </h5>
            <h6 className="capitalize leading-none text-lg md:text-2xl font-medium">
              agile methode
            </h6>
          </div>
        </div>
      </section>
    </>
  )
}

const Expertise = () => {
  const expertise = [
    {
      label: "branding",
      description:
        "I work with you to craft a meaningful brand experience for your new business. I cover the entire brand research and design experience to create an eye-catching, timeless logo design.",
    },
    {
      label: "UI design",
      description:
        "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
    },
    {
      label: "UX design",
      description:
        "I comprehend and resolve digital product issues using a user-focused methodology. Investigation, compassion, and visual conveyance are a few techniques I apply to captivate and involve your users while fulfilling your business requirements.",
    },
    {
      label: "development",
      description:
        "I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome, complex coding. Webflow forms the foundation of my web development approach. I employ it to produce safe, top-notch personalized websites.",
    },
  ]
  return (
    <section className="pt-10 pb-5 w-full">
      <h5 className="text-2xl md:text-3xl lg:text-5xl font-bold capitalize">
        Expertise
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-x-[7.5rem]">
        {expertise.map(({ label, description }, index) => (
          <div
            key={label + index}
            className="flex flex-col gap-4 md:gap-8 lg:gap-6 flex-1 "
          >
            <li
              className={`${
                index === 0 && "mt-5 "
              } md:mt-10 capitalize text-xl md:text-2xl font-semibold list-disc`}
            >
              {label}
            </li>
            <p className="text-sm md:text-base lg:text-xl lg:w-10/12">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

const BannerText = () => {
  return (
    <section className="bg-black text-white py-12 overflow-hidden my-10 md:my-12 lg:my-16">
      <h2 className="capitalize font-bold font-grostekBold text-5xl md:text-[84px] lg:text-[140px] whitespace-nowrap text-center">
        Visual design for digital experiences
      </h2>
    </section>
  )
}

const Testimonial = () => {
  return (
    <section className="my-10 flex flex-col gap-8">
      <h5 className="text-2xl md:text-5xl lg:text-6xl font-bold capitalize">
        Testimonial
      </h5>
      <div className="flex flex-col gap-3 md:flex-row relative">
        <p className="text-sm md:text-xl lg:text-5xl font-medium md:w-8/12">
          “Joey is a remarkable artist. He grasps abstract ideas and transforms
          them into exceptional visuals. Throughout the years, I've witnessed
          him produce everything from small symbols to comprehensive adaptive
          web pages. He has crafted clothing items like tees and caps,
          promotional products, and professional literature.”
        </p>
        <div className="flex flex-col gap-3 md:flex-1 md:absolute md:bottom-0 md:right-0">
          <h5 className="text-sm md:text-xl font-bold capitalize">
            Chris Ellington
          </h5>
          <p className="text-sm md:text-base lg:text-xl font-medium capitalize">
            product lead, gatha.
          </p>
        </div>
      </div>
    </section>
  )
}

const Contact = () => {
  return (
    <section className="my-10 md:my-16 flex flex-col items-center gap-12 md:gap-14">
      <h1 className="capitalize text-4xl md:text-7xl font-bold">let's talk</h1>
      <button className="flex items-center gap-2 text-3xl font-bold px-5 py-4 rounded-[144px] bg-black text-white hover:opacity-80">
        <span>hello@can.co</span>
        <ArrowUpRight size={30} />
      </button>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className="mb-28 flex flex-col gap-6 md:flex-row md:justify-between">
      <h5 className="flex items-center text-sm md:text-base lg:text-xl font-medium">
        2024&copy;
        <hr className="w-5 h-[2px] bg-black mx-2 rounded-md" />
        Made by SoniStudio
      </h5>
      <ul className="flex gap-4">
        <li className="capitalize text-sm md:text-base lg:text-xl font-medium">
          dribble
        </li>
        <li className="capitalize text-sm md:text-base lg:text-xl font-medium">
          Instagram
        </li>
        <li className="capitalize text-sm md:text-base lg:text-xl font-medium">
          LinkedIn
        </li>
      </ul>
    </footer>
  )
}

const WebsiteBranding = () => {
  const { pathname } = useLocation()
  useDocumentTitle(pathname)
  return (
    <>
      <MaxWidthWrapper>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Expertise />
      </MaxWidthWrapper>
      <BannerText />
      <MaxWidthWrapper>
        <Testimonial />
        <Contact />
        <Footer />
      </MaxWidthWrapper>
    </>
  )
}

export default WebsiteBranding
