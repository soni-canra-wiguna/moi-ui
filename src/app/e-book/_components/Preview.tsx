import { ArrowRight } from "lucide-react"
import MaxWidthWrapper from "./MaxWidthWrapper"

const Preview = () => {
  return (
    <div className="w-full bg-[#EDFCFD] relative">
      <MaxWidthWrapper className="pb-[200px] flex flex-col gap-[100px]">
        <div className="flex flex-col items-center text-center w-[777px] mx-auto">
          <button className="uppercase tracking-10 font-bold text-sm px-5 py-2.5 text-ebprimary bg-[#C6F4F8] mb-2.5 rounded-full">
            pratinjau
          </button>
          <h1 className="font-medium text-32px leading-44 mb-5">
            Sebelum membeli, kamu dapat melihat beberapa halaman pratinjau isi
            di dalam buku ini
          </h1>
          <p className="text-lg leading-32 text-ebdark/80 w-[577px]">
            Klik pada gambar halaman di sebelah kanan buku untuk melihat lebih
            detail halaman buku tersebut dan membaca isinya.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex w-full gap-6 relative">
            <span className="w-[352px] left-2 h-[200px] absolute bottom-0 blur-md skew-y-6 bg-black/10" />
            <img
              src="/e-book/preview.svg"
              alt="preview book"
              className="h-[579px] z-20"
            />
            <ListPage />
          </div>
          <p className="font-medium leading-32 text-center">
            Halaman 1 dari 257
          </p>
        </div>
      </MaxWidthWrapper>

      <div className="absolute -bottom-40 w-full bg-[#EDFCFD] h-[300px] z-[1]"></div>
    </div>
  )
}

export default Preview

const ListPage = () => {
  return (
    <div className="flex-1 relative flex items-center">
      <span className="absolute left-[315px] z-20 text-white shadow-lg shadow-ebprimary/40 w-[60px] h-[60px] rounded-full bg-ebprimary flex items-center justify-center">
        <ArrowRight size={24} strokeWidth={1.5} />
      </span>
      <div className="relative w-max h-max rounded-[10px] overflow-hidden shadow-eb-btm z-10">
        <img src="/e-book/pre-page.jpg" alt="preview page book" />
      </div>
      <div className="relative w-max h-max rounded-[10px] overflow-hidden shadow-eb-btm scale-90 -translate-x-[200px] z-[9]">
        <img
          src="/e-book/pre-page.jpg"
          alt="preview page book"
          className="blur-sm"
        />
      </div>
      <div className="relative w-max h-max rounded-[10px] overflow-hidden shadow-eb-btm scale-[.8] -translate-x-[420px] z-[8]">
        <img
          src="/e-book/pre-page.jpg"
          alt="preview page book"
          className="blur-sm"
        />
      </div>
      <div className="relative w-max h-max rounded-[10px] overflow-hidden shadow-eb-btm scale-[.7] -translate-x-[640px] z-[7]">
        <img
          src="/e-book/pre-page.jpg"
          alt="preview page book"
          className="blur-sm"
        />
      </div>
      <div className="relative w-max h-max rounded-[10px] overflow-hidden shadow-eb-btm scale-[.6] -translate-x-[875px] z-[6]">
        <img
          src="/e-book/pre-page.jpg"
          alt="preview page book"
          className="blur-sm"
        />
      </div>
    </div>
  )
}
