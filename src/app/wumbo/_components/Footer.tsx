import { Link } from "react-router-dom"
import MaxWidthWrapper from "./MaxWidthWrapper"
import getYear from "../../../lib/date"

const Footer = () => {
  const date = getYear()
  return (
    <footer className='w-full bg-[url("/wumbo/bg-footer.svg")] h-[680px] flex items-center justify-center text-white'>
      <MaxWidthWrapper className="flex flex-col justify-center h-full pt-[110px] pb-[50px]">
        <div className="flex items-center gap-6 w-full">
          <div className="w-[575px] flex flex-col">
            <div className="w-[50px] h-[50px] rounded-full bg-[#6EA4FC] text-white uppercase mb-[15px] flex items-center justify-center">
              w
            </div>
            <h1 className="capitalize font-bold text-lg mb-[10px]">wumbo</h1>
            <p className="text-white/80 leading-7">
              Wumbo is a team of creative developers who have an interest in
              design. We create design templates, UI kits and other products
              that make people's work easier and faster.
            </p>
          </div>
          <div className="flex-1 flex justify-between pl-10">
            <div className="flex flex-col gap-5">
              <h1 className="font-bold text-white/60 text-sm tracking-10 uppercase">
                products
              </h1>
              <div className="flex flex-col gap-4">
                <Link
                  to="/wumbo"
                  className="capitalize leading-7 text-white/80 hover:text-white"
                >
                  social feed
                </Link>
                <Link
                  to="/wumbo"
                  className="capitalize leading-7 text-white/80 hover:text-white"
                >
                  React UI Kit
                </Link>
                <Link
                  to="/wumbo"
                  className="capitalize leading-7 text-white/80 hover:text-white"
                >
                  Stisla Design
                </Link>
                <Link
                  to="/wumbo"
                  className="capitalize leading-7 text-white/80 hover:text-white"
                >
                  More Products
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="font-bold text-white/60 text-sm tracking-10">
                COMPANY
              </h1>
              <div className="flex flex-col gap-4">
                <Link
                  to="/wumbo"
                  className="capitalize leading-7 text-white/80 hover:text-white"
                >
                  About Us
                </Link>
                <Link
                  to="/wumbo"
                  className="capitalize leading-7 text-white/80 hover:text-white"
                >
                  Contact
                </Link>
                <Link
                  to="/wumbo"
                  className="capitalize leading-7 text-white/80 hover:text-white"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/wumbo"
                  className="capitalize leading-7 text-white/80 hover:text-white"
                >
                  Terms of Service
                </Link>
                <Link
                  to="/wumbo"
                  className="capitalize leading-7 text-white/80 hover:text-white"
                >
                  Help
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="font-bold text-white/60 text-sm tracking-10">
                GET IN TOUCH
              </h1>
              <div className="flex flex-col gap-4">
                <Link
                  to="/wumbo"
                  className="capitalize leading-7 text-white/80 hover:text-white"
                >
                  Twitter
                </Link>
                <Link
                  to="/wumbo"
                  className="capitalize leading-7 text-white/80 hover:text-white"
                >
                  Facebook
                </Link>
                <Link
                  to="/wumbo"
                  className="capitalize leading-7 text-white/80 hover:text-white"
                >
                  Dribbble
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="bg-white/[0.5] border-0 w-full mt-20 mb-10 h-px" />
        <h3 className="text-white/40 font-bold text-sm tracking-10">
          COPYRIGHT © {date} — DESIGN BY NAUVAL
        </h3>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer
