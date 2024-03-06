import { Link } from "react-router-dom"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Download, PlayCircle } from "lucide-react"

const HeroSection = () => {
  return (
    <div className="w-full h-[1749px] mx-auto bg-gradient-to-b from-[#E4EFFF] via-[#E4EFFF] relative overflow-x-hidden">
      <img
        src="/wumbo/herobg.svg"
        alt="hero wumbo"
        className="absolute top-0 -right-5 z-[1]"
      />
      <MaxWidthWrapper className="pt-[66px] flex flex-col">
        <div className="flex flex-col gap-[65px] h-[697px] w-full z-10">
          <Navbar />
          <Hero />
        </div>
        <ForEveryone />
      </MaxWidthWrapper>
    </div>
  )
}

export default HeroSection

const Logo = () => {
  return (
    <div className="flex items-center gap-4">
      <span className="w-[50px] text-white font-bold flex items-center justify-center h-[50px] rounded-full bg-[#6EA4FC] uppercase">
        w
      </span>
      <h3 className="capitalize font-bold text-lg text-wdark">wumbo</h3>
    </div>
  )
}

const Navbar = () => {
  const navlinks = [
    {
      url: "/wumbo",
      title: "top",
    },
    {
      url: "/wumbo",
      title: "for everyone",
    },
    {
      url: "/wumbo",
      title: "feature",
    },
    {
      url: "/wumbo",
      title: "preview",
    },
    {
      url: "/wumbo",
      title: "lisence",
    },
  ]
  return (
    <header className="flex items-center justify-between">
      <Logo />
      <nav className="flex items-center gap-[50px]">
        {navlinks.map((nav) => (
          <Link
            to={nav.url}
            className="text-wdark/60 hover:text-wdark capitalize"
          >
            {nav.title}
          </Link>
        ))}
      </nav>
      <button className="px-6 py-2.5 rounded-md capitalize bg-white text-wprimary font-bold text-lg">
        download
      </button>
    </header>
  )
}

const Hero = () => {
  return (
    <section className="grid grid-cols-2 w-full gap-[52px]">
      <div className="flex flex-col justify-center w-full">
        <h1 className="leading-74 text-[64px] text-wprimary mb-5">
          Beautiful Design <br />
          For <span className="font-bold underline">Social Media</span>
          <br />
          Content
        </h1>
        <p className="text-[22px] leading-36 text-wmuted mb-10">
          Figma social media content templates for branding, marketing,
          insights, and more. Free for personal and commercial use!
        </p>
        <div className="flex items-center gap-4">
          <button className="bg-wprimary rounded-md px-[30px] py-5 flex items-center gap-4 text-[#F4F7FF] shadow-xl shadow-wprimary/20">
            <Download size={24} strokeWidth={1.5} />
            <h4 className="capitalize font-bold">Download Now</h4>
          </button>
          <button className="bg-wprimarylight rounded-md px-[30px] py-5 flex items-center gap-4 text-wprimary">
            <PlayCircle size={24} strokeWidth={1.5} />
            <h4 className="capitalize font-bold">Download Now</h4>
          </button>
        </div>
      </div>
      {/* img content */}
      <div className="flex flex-col gap-8">
        <div className="flex gap-8 items-end">
          <img
            src="/wumbo/hero-1.svg"
            alt="hero 1"
            className="w-[146px] h-[146px] shadow-lg shadow-wprimary/30"
          />
          <img
            src="/wumbo/hero-2.svg"
            alt="hero 2"
            className="w-[227px] h-[227px] shadow-lg shadow-wprimary/30"
          />
          <div className="flex flex-col justify-between h-full">
            <div className="w-[89px] h-[89px] rounded-lg bg-white/10 border-2 border-dashed border-white/20 flex items-center justify-center gap-2 shadow-lg shadow-wprimary/30">
              <div className="flex flex-col gap-2">
                <span className="w-[45px] h-5 rounded-full bg-white/10"></span>
                <span className="w-[57px] h-5 rounded-full bg-white/10"></span>
              </div>
            </div>
            <img
              src="/wumbo/hero-3.svg"
              alt="hero 3"
              className="w-[117px] h-[117px] shadow-lg shadow-wprimary/30"
            />
          </div>
        </div>
        <div className="flex gap-8">
          <img
            src="/wumbo/hero-4.svg"
            alt="hero 4"
            className="w-[312px] h-[312px] shadow-lg shadow-wdark/30"
          />
          <div className="flex flex-col justify-between">
            <img
              src="/wumbo/hero-5.svg"
              alt="hero 5"
              className="w-[191px] h-[191px] shadow-lg shadow-wdark/20"
            />
            <div className="w-[89px] h-[89px] rounded-lg bg-white/10 border-2 border-dashed border-white/20 flex items-center justify-center gap-2 shadow-lg shadow-wprimary/30">
              <div className="flex flex-col gap-2">
                <span className="w-[45px] h-5 rounded-full bg-white/10"></span>
                <span className="w-[57px] h-5 rounded-full bg-white/10"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const ForEveryone = () => {
  const datas = [
    {
      icon: "/wumbo/designer-icon.svg",
      label: "for desginer",
      desc: "Busy designers want to share insights, such as tips, tricks or other types of insights. Focus on content not on design.",
    },
    {
      icon: "/wumbo/coder-icon.svg",
      label: "for coder",
      desc: "Coders who want to share snippets, tools, or tips and tricks. No design skills required: just duplicate, edit and export!",
    },
    {
      icon: "/wumbo/marketer-icon.svg",
      label: "for marketer",
      desc: "Promote the product in an elegant and attractive way to get more attention from potential customers. Just duplicate and export!",
    },
  ]
  return (
    <section className="py-[100px] w-full flex flex-col gap-[87px] items-center mt-[124px] relative">
      <span className="absolute -left-36 top-10 skew-y-[9deg] h-[475px] w-[229px] rounded-[40px] bg-gradient-to-l from-wprimary/10 z-[1]" />
      <h1 className="text-32px leading-44 font-medium w-[574px] text-wdark text-center">
        Figma Social Feeds is designed for everyone. Use for whatever you want,
        it’s completely free!
      </h1>
      <div className="grid grid-cols-3 gap-x-[30px] z-10">
        {datas.map((data) => (
          <div
            key={data.label}
            className="flex flex-col p-[50px] rounded-[10px] hover:bg-wdark wtransition group"
          >
            <div className="flex items-center justify-center p-2.5 rounded-md group-hover:bg-white/10 bg-wdark shadow-lg shadow-wdark/10 group-hover:shadow-none mb-5 w-max wtransition">
              <img src={data.icon} alt={data.label} className="size-[30px]" />
            </div>
            <h2 className="text-wdark group-hover:text-white leading-44 font-bold text-2xl mb-2.5 wtransition">
              {data.label}
            </h2>
            <p className="text-wmuted group-hover:text-white/80 leading-30 wtransition">
              {data.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
