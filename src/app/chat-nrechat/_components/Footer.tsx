import { Facebook, Instagram, Twitter } from "lucide-react"
import MaxWidthWrapper from "./MaxWidthWrapper"
import getYear from "../../../lib/date"

const Footer = () => {
  const year = getYear()
  return (
    <MaxWidthWrapper className="p-20 bg-[#4A72FF]/10 rounded-md">
      <footer className="grid grid-cols-12 gap-[30px] w-full">
        <div className="col-span-6 flex flex-col gap-5 w-full">
          <h4 className="text-lg font-medium">👋 Chat N’ Rechat</h4>
          <p className="text-[#0C1B4D]/60 leading-[26px]">
            Sebenernya banyak banget aplikasi chatting yang lebih bagus dari
            ini, maka dari itu lebih baik pake yang lain aja deh ya daripada
            pake aplikasi yang ini.
          </p>
          <p className="text-[#0C1B4D]/60 tracking-[10%]">
            COPYRIGHT (C) {year}. DESIGN BY NAUVAL
          </p>
        </div>
        <div className="col-span-2 flex flex-col gap-5 w-full">
          <h4 className="text-lg font-medium capitalize">sitemap</h4>
          <ul className="flex flex-col gap-[10px]">
            <li className="leading-[26px] font-semibold text-[#0C1B4D]/60 capitalize">
              beranda
            </li>
            <li className="leading-[26px] font-semibold text-[#0C1B4D]/60 capitalize">
              fitur-fitur
            </li>
            <li className="leading-[26px] font-semibold text-[#0C1B4D]/60 capitalize">
              teknologi
            </li>
            <li className="leading-[26px] font-semibold text-[#0C1B4D]/60 uppercase">
              FAQ
            </li>
            <li className="leading-[26px] font-semibold text-[#0C1B4D]/60 capitalize">
              download
            </li>
          </ul>
        </div>
        <div className="col-span-3 flex flex-col gap-5 w-full">
          <h4 className="text-lg font-medium capitalize">tetap terhubung</h4>
          <p className="text-[#0C1B4D]/60 leading-[26px]">
            Lihat kami pansos di sosial media berikut:
          </p>
          <div className="flex items-center gap-[10px]">
            <div className="p-2 rounded-md bg-[#0C1B4D]/10">
              <Instagram />
            </div>
            <div className="p-2 rounded-md bg-[#0C1B4D]/10">
              <Facebook />
            </div>
            <div className="p-2 rounded-md bg-[#0C1B4D]/10">
              <Twitter />
            </div>
          </div>
        </div>
      </footer>
    </MaxWidthWrapper>
  )
}

export default Footer
