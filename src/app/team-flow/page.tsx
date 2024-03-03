import { ChevronDown, MailIcon, Send } from "lucide-react"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import useDocumentTitle from "../../hook/use-document-title"

const Navbar = () => {
  const [product, setProduct] = useState(false)
  const [solution, setSolution] = useState(false)

  const navs = {
    product: {
      title: "product",
      url: [
        "Product",
        "Pricing",
        "enterprise",
        "affiliate",
        "partners",
        "integrations",
        "developers",
        "students",
        "works",
      ],
    },
    solutions: {
      title: "solutions",
      url: [
        "project management",
        "marketing",
        "crm and sales",
        "software development",
        "constructions",
        "creative producntion",
        "remote work",
        "hr",
        "it",
        "see more solutions",
      ],
    },
  }
  return (
    <header className="pt-10 flex items-center justify-between relative z-50">
      <div className="flex items-center gap-[10px]">
        <img src="/flow/logoo.svg" className="w-6 h-6" />
        <h1 className="text-[20px] font-semibold text-white">TeamFlow</h1>
      </div>
      <nav className="flex items-center gap-4">
        <div
          onClick={() => {
            setSolution(!solution)
            setProduct(false)
          }}
          className="flex items-center gap-1 capitalize font-medium text-white cursor-pointer hover:text-black hover:bg-white rounded-lg px-3 py-2 relative"
        >
          <div className="capitalize font-medium selection:bg-transparent">
            {navs.product.title}
          </div>
          <ChevronDown className="text-base" />
          {solution && (
            <ul className="absolute bg-white w-max h-max p-4 rounded-lg left-0 top-12 flex flex-col gap-4 z-[60]">
              {navs.product.url.map((url) => (
                <li
                  key={url}
                  className=" text-sm text-[#4A4A4A] pGrostek capitalize cursor-pointer hover:text-yellow-400 selection:bg-transparent"
                >
                  <Link to="/">{url}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div
          onClick={() => {
            setProduct(!product)
            setSolution(false)
          }}
          className="flex items-center gap-1 capitalize font-medium text-white cursor-pointer hover:text-black hover:bg-white rounded-lg px-3 py-2 relative "
        >
          <div className="capitalize font-medium selection:bg-transparent">
            {navs.solutions.title}
          </div>
          <ChevronDown className="text-base" />
          {product && (
            <ul className="absolute bg-white w-max h-max p-4 rounded-lg left-0 top-12 flex flex-col gap-4 z-[60]">
              {navs.solutions.url.map((url) => (
                <li
                  key={url}
                  className=" text-sm text-[#4A4A4A] pGrostek capitalize cursor-pointer hover:text-yellow-400 selection:bg-transparent"
                >
                  {url}
                </li>
              ))}
            </ul>
          )}
        </div>
        {/*  */}
        <div className="capitalize font-medium text-white cursor-pointer hover:text-black hover:bg-white rounded-lg px-3 py-2">
          enterprise
        </div>
        <div className="capitalize font-medium text-white cursor-pointer hover:text-black hover:bg-white rounded-lg px-3 py-2">
          pricing
        </div>
      </nav>
      <div className="flex items-center gap-4">
        <button className="px-3 py-2 rounded-md font-medium hover:bg-gray-100">
          Login
        </button>
        <button className="px-4 py-2 rounded-md capitalize bg-yellow-400 hover:bg-yellow-500 font-medium">
          Sign Up
        </button>
      </div>
    </header>
  )
}

const GridContent = () => {
  return (
    <div className="grid grid-cols-12 w-full z-40 relative py-20 pt-28">
      <div className="col-span-6 w-full flex flex-col gap-4 relative">
        <button className="bg-white px-3 py-2 rounded-md w-max">
          👋Welcome to TeamFlow
        </button>
        <h1 className="font-medium text-6xl text-white font-grostekBold">
          Work the way that works for you
        </h1>
        <hr className="border-0 my-4 w-[60px] h-[2px] rounded-full bg-[#3ADAD9] tracking-wide" />
        <p className="text-gray-200 mb-4 tracking-wide font-grostekNormal">
          Create, Build, Collaborate and ship products very faster
        </p>
        <button className="bg-yellow-400 px-4 py-2.5 rounded-md w-max capitalize font-medium hover:bg-yellow-500">
          get started
        </button>
        {/* detail */}
        <div className="absolute -top-10 w-3 h-3 left-64 rounded-full bg-[#B16EE5]" />
        <img
          src="/flow/detail-rect.svg"
          alt="detail cursor"
          className="w-8 h-8 absolute z-20 top-0 right-10"
        />
        <img
          src="/flow/detail-cursor.svg"
          alt="detail cursor"
          className="w-12 h-12 absolute z-20 top-1/2 -translate-y-1/2 right-40"
        />
        <img
          src="/flow/detail-polygon.svg"
          alt="detail cursor"
          className="w-6 h-6 absolute z-20 right-64 bottom-6"
        />
      </div>
      <div className="col-span-6 w-full flex flex-col relative">
        <img className="w-80 absolute -left-16" src="/flow/lucy.svg" />
        <img
          className="w-[400px] absolute right-0 top-10"
          src="/flow/comunity.svg"
        />
        <img
          className="w-[500px] absolute -left-28 top-52"
          src="/flow/pending.svg"
        />
        <img
          className="w-[150px] absolute right-36 top-60"
          src="/flow/mark.svg"
        />
      </div>
    </div>
  )
}

const HeroSection = () => {
  return (
    <div className="mt-8 w-full h-[calc(773px-62px)] bg-[#FAFAFF] relative px-20 z-20 rounded-lg border overflow-hidden">
      <Navbar />
      <GridContent />
      <div className="absolute top-0 left-0 h-full z-[1]">
        <img src="/flow/svg-bg.svg" className="w-full h-full" />
      </div>
    </div>
  )
}

//top is hero content

const ListBrand = () => {
  const brandLogo = [
    "/flow/hulu.svg",
    "/flow/universal.svg",
    "/flow/universal.svg",
    "/flow/adobe.svg",
  ] as const
  return (
    <div className="flex items-center justify-between my-20 px-20 w-full">
      <p className="relative text-xl text-black py-4 pGrostek">
        See why over 100,000 teams choose TeamFlow.com{" "}
        <hr className="absolute top-0 left-0 border-0  w-[60px] h-[4px] rounded-full bg-yellow-400 tracking-wide" />
      </p>
      <div className="flex items-center gap-10">
        {brandLogo.map((logo, i) => (
          <img key={i} src={logo} className="w-20" />
        ))}
      </div>
    </div>
  )
}

const WhatUCanDo = () => {
  const icon = [
    {
      icon: "/flow/chart.svg",
      title: "Business Planning",
      desc: "Our Business Plan is a written document describing a company’s core business activities.",
      bgColor: "#3ADAD9",
    },
    {
      icon: "/flow/lamp.svg",
      title: "Financial Planning",
      desc: "Our expert team sensible decision about their money, to ensure they achieve the life goals. A financial plan.",
      bgColor: "#3ADAD9",
    },
    {
      icon: "/flow/bar-chart.svg",
      title: "Market Analysis",
      desc: "A market analysis is a quantitative and qualitative assessment of a market. It looks into the size of the market.",
      bgColor: "#3ADAD9",
    },
  ]

  return (
    <section className="my-20 px-20 w-full flex flex-col gap-20">
      <h3 className="text-[#4A4A4A] font-semibold text-3xl text-center tracking-[0.030em]">
        what you <span className="text-yellow-400">can do?</span>
      </h3>
      <div className="grid grid-cols-3 w-full gap-28">
        {icon.map(({ icon, title, desc, bgColor }) => (
          <div
            key={title}
            className="flex flex-col items-center jusitify-center w-full h-max gap-8"
          >
            <div className={`rounded-xl bg-[${bgColor}] p-4`}>
              <img className="w-8 h-8" src={icon} />
            </div>
            <div className="text-center flex flex-col gap-4 pGrostek">
              <h4 className="text-[#4A4A4A] text-lg font-medium">{title}</h4>
              <p className="text-sm text-[#585858] text-center pGrostek">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const OurFeature = () => {
  return (
    <section className="my-20 px-20 w-full flex flex-col gap-20">
      <h3 className="text-[#4A4A4A] font-semibold text-3xl text-center tracking-[0.030em] capitalize">
        our <span className="text-yellow-400">features</span>
      </h3>
      <div className="grid grid-cols-2 w-full">
        <div className="w-full pl-10 flex items-center justify-center">
          <img className="h-80" src="/flow/boost.svg" />
        </div>
        <div className="w-full flex flex-col pr-10 justify-center">
          <h1 className="text-2xl font-medium text-[#4a4a4a] font-grostekMd">
            Manage everything in one workspace
          </h1>
          <hr className="my-4 border-0  w-[60px] h-[4px] rounded-full bg-yellow-400 tracking-wide" />
          <p className="text-sm text-[#585858] pGrostek">
            Planning, tracking and delivering your team’s best work has never
            been easier. An integrated workspace that’s simple to use, TeamFlow
            lets you spend less time managing your work and more time actually
            doing it.
          </p>
        </div>
      </div>
    </section>
  )
}

const SetUpSection = () => {
  return (
    <section className="w-full grid grid-cols-2 px-20 my-20 h-[650px] rounded-lg bg-[#FAFAFF] border overflow-hidden">
      <div className="w-full flex flex-col pr-10 justify-center">
        <h1 className="text-2xl font-medium text-[#4a4a4a] font-grostekMd">
          Set up in minutes
        </h1>
        <hr className="my-4 border-0  w-[60px] h-[4px] rounded-full bg-yellow-400 tracking-wide" />
        <p className="text-sm text-[#585858] pGrostek pr-10">
          Get started fast with hundreds of visual and customizable templates -
          or create your own. Use our free online template maker to create
          beautiful template in minutes. Choose from hundreds of pre-made
          templates and tell stories with data with our easy drag-and-drop
          infographic creator.
        </p>
      </div>
      <div className="w-full flex items-center justify-center overflow-hidden relative">
        <img
          className="h-[550px] absolute bottom-0 left-0"
          src="/flow/setup.svg"
        />
      </div>
    </section>
  )
}

const Tools = () => {
  const tools = [
    "/flow/zoom.svg",
    "/flow/infinity.svg",
    "/flow/4color.svg",
    "/flow/infinity.svg",
    "/flow/gdrive.svg",
  ]
  return (
    <section className="w-full my-20 px-20 flex flex-col items-center gap-20">
      <h3 className="text-[#4A4A4A] font-semibold text-3xl text-center tracking-[0.030em]">
        <span className="text-yellow-400">Integrate</span> with your existing
        tools
        <br />
        in a few clicks
      </h3>
      <div className="flex items-center justify-center gap-10">
        {tools.map((tool, i) => (
          <img src={tool} className="w-32" key={i} />
        ))}
      </div>
      <button className="px-6 py-2 rounded-md capitalize bg-yellow-400 hover:bg-yellow-500 font-medium w-max">
        view all
      </button>
    </section>
  )
}

const Automations = () => {
  return (
    <section className="my-20 px-20 w-full">
      <div className="grid grid-cols-2 w-full">
        <div className="w-full pl-10 flex items-center justify-center">
          <img className="h-80" src="/flow/automations.svg" />
        </div>
        <div className="w-full flex flex-col pr-10 justify-center">
          <h1 className="text-2xl font-medium text-[#4a4a4a] font-grostekMd">
            Save time with Automations
          </h1>
          <hr className="my-4 border-0  w-[60px] h-[4px] rounded-full bg-yellow-400 tracking-wide" />
          <p className="text-sm text-[#585858] pGrostek">
            Automate the repetitive work in seconds so you can avoid human error
            and focus on what matters. It gives the impression of software that
            its highly automated which implies that it is good for client for
            who want to save time and manage team members easily.
          </p>
        </div>
      </div>
    </section>
  )
}

const VisualizeWork = () => {
  return (
    <section className="w-full grid grid-cols-2 px-20 my-20 h-[650px] rounded-lg bg-[#FAFAFF] border overflow-hidden">
      <div className="w-full flex flex-col pr-10 justify-center">
        <h1 className="text-2xl font-medium text-[#4a4a4a] font-grostekMd">
          Visualize work with Views
        </h1>
        <hr className="my-4 border-0 w-[60px] h-[4px] rounded-full bg-[#686DF1] tracking-wide" />
        <p className="text-sm text-[#585858] pGrostek pr-10">
          View data as a map, calendar, timeline, kanban, and more The
          easy-to-use, visual interface lets any team member jump in and get
          started, no training required.
        </p>
      </div>
      <div className="w-full flex items-center justify-center overflow-hidden relative">
        <img className="h-[500px]" src="/flow/visualwork.svg" />
      </div>
    </section>
  )
}

const CustomerSupport = () => {
  return (
    <section className="my-20 px-20 w-full">
      <div className="grid grid-cols-2 w-full">
        <div className="w-full pl-10 flex items-center justify-center relative pt-20">
          <img className="h-[600px]" src="/flow/cs.svg" />
        </div>
        <div className="w-full flex flex-col pr-10 justify-center">
          <h1 className="text-2xl font-medium text-[#4a4a4a] font-grostekMd">
            24/7 Customer Support
          </h1>
          <hr className="my-4 border-0  w-[60px] h-[4px] rounded-full bg-yellow-400 tracking-wide" />
          <p className="text-sm text-[#585858] pGrostek">
            Our team is here to give you personalized support within the hour
            available 24/7. In accordance with our commitment to providing
            superior and professional service. Join daily live webinars, watch
            our tutorials, or browse through our knowledge base
          </p>
        </div>
      </div>
    </section>
  )
}

const NewsLetter = () => {
  return (
    <div className="w-full px-20 my-20 bg-[#FAFAFF] h-[450px] rounded-lg border flex flex-col items-center  justify-center gap-4">
      <h5 className="text-[#EB801D] pGrostek capitalize text-xl">support</h5>
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-medium pGrostek">
          Subscribe Newsletter & get
        </h1>
        <p className="capitalize font-grostekNormal tracking-[0.030em] text-2xl">
          Company News
        </p>
      </div>
      <div className="relative flex items-center justify-center my-8">
        <input
          type="email"
          placeholder="Your email"
          className="rounded-lg border-none outline-none w-[450px] pl-10 py-2.5 pr-[7.8rem] shadow-lg"
        />
        <MailIcon
          className="absolute top-3 left-3 text-gray-400 size-5"
          strokeWidth={1.5}
        />
        <button className="flex gap-1 items-center absolute right-2 top-1.5 bg-[#686DF1] hover:brightness-90 text-white font-grostekNormal text-base px-2 py-1 rounded-lg">
          <Send className="size-4" strokeWidth={1.5} />
          Subscribe
        </button>
      </div>
    </div>
  )
}

const Footer = () => {
  const urlFooter = {
    product: {
      title: "product",
      url: [
        "Product",
        "Pricing",
        "enterprise",
        "affiliate",
        "partners",
        "integrations",
        "developers",
        "students",
        "works",
      ],
    },
    team: {
      title: "team",
      url: [
        "abous us",
        "contact us",
        "careers",
        "find a partner",
        "in the news",
      ],
    },
    solutions: {
      title: "solutions",
      url: [
        "project management",
        "marketing",
        "crm and sales",
        "software development",
        "constructions",
        "creative producntion",
        "remote work",
        "hr",
        "it",
        "see more solutions",
      ],
    },
    resource: {
      title: "resource",
      url: [
        "knowledge base",
        "guides",
        "daily webinars",
        "comunity",
        "customer stories",
        "templates",
        "professionals services",
        "video tutorials",
        "blog",
        "podcast",
      ],
    },
  } as const

  const socials = [
    "/flow/facebook.svg",
    "/flow/ig.svg",
    "/flow/yt.svg",
    "/flow/yt.svg",
  ] as const

  return (
    <footer className="my-20 px-20 w-full grid grid-cols-12">
      <div className="col-span-4 flex flex-col gap-4">
        <div className="flex items-center gap-[10px]">
          <img src="/flow/logoo.svg" className="w-6 h-6" />
          <h1 className="text-[20px] font-semibold text-black">TeamFlow</h1>
        </div>
        <p className="text-sm text-[#4A4A4A] my-6">
          All Rights Reserved © teamflow.com
        </p>
        <div className="flex flex-col gap-2 mb-6">
          <h6 className="text-base text-black pGrostek capitalize">address</h6>
          <p className="text-sm text-[#4A4A4A]">
            26 W 12th St. New York, NY 10342, NYC
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h6 className="text-base text-black pGrostek capitalize">
            social media
          </h6>
          <div className="flex gap-3.5 items-center">
            {socials.map((social) => (
              <img key={social} src={social} className="w-7" />
            ))}
          </div>
        </div>
      </div>

      <div className="col-span-2 w-full">
        <h6 className="text-base text-black pGrostek mb-6 capitalize">
          {urlFooter.product.title}
        </h6>
        <ul className="flex flex-col gap-4">
          {urlFooter.product.url.map((url) => (
            <li
              key={url}
              className="w-max text-sm text-[#4A4A4A] pGrostek capitalize cursor-pointer hover:text-yellow-400"
            >
              {url}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-2 w-full">
        <h6 className="text-base text-black pGrostek mb-6 capitalize">
          {urlFooter.team.title}
        </h6>
        <ul className="flex flex-col gap-4">
          {urlFooter.team.url.map((url) => (
            <li
              key={url}
              className="w-max text-sm text-[#4A4A4A] pGrostek capitalize cursor-pointer hover:text-yellow-400"
            >
              {url}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-2 w-full">
        <h6 className="text-base text-black pGrostek mb-6 capitalize">
          {urlFooter.solutions.title}
        </h6>
        <ul className="flex flex-col gap-4">
          {urlFooter.solutions.url.map((url) => (
            <li
              key={url}
              className="w-max text-sm text-[#4A4A4A] pGrostek capitalize cursor-pointer hover:text-yellow-400"
            >
              {url}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-2 w-full">
        <h6 className="text-base text-black pGrostek mb-6 capitalize">
          {urlFooter.resource.title}
        </h6>
        <ul className="flex flex-col gap-4">
          {urlFooter.resource.url.map((url) => (
            <li
              key={url}
              className="w-max text-sm text-[#4A4A4A] pGrostek capitalize cursor-pointer hover:text-yellow-400"
            >
              {url}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

const TeamFlow = () => {
  const { pathname } = useLocation()
  useDocumentTitle(pathname)
  return (
    <div className="max-w-[1920px] px-8 mx-auto min-h-screen w-full scrollbar-hide font-grostekMd selection:bg-yellow-400/20">
      <HeroSection />
      <ListBrand />
      <WhatUCanDo />
      <OurFeature />
      <SetUpSection />
      <Tools />
      <Automations />
      <VisualizeWork />
      <CustomerSupport />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default TeamFlow
