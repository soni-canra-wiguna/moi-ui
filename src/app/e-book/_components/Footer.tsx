import getYear from "@/lib/date"
import MaxWidthWrapper from "./MaxWidthWrapper"

const Footer = () => {
  const date = getYear()
  return (
    <footer className="w-full rounded-tr-[60px] bg-ebdark">
      <MaxWidthWrapper className="flex flex-col">
        <div className="py-[50px] flex items-center justify-between">
          <div className="w-[575px] flex flex-col gap-2.5">
            <h1 className="font-medium leading-44 text-[26px] text-white">
              Sudah siap meningkatkan skill kamu?
            </h1>
            <p className="text-lg leadin-32 text-white/80">
              Mulai belajar hari ini di Multinity, atau dapatkan jawaban atas
              pertanyaan kamu di halaman bantuan.
            </p>
          </div>
          <div className="flex items-center gap-[30px]">
            <button className="bg-white/[0.05] hover:bg-white/10 rounded-[10px] text-white px-[45px] py-[25px] capitalize">
              pusat bantuan
            </button>
            <button className="bg-ebprimary rounded-[10px] text-white px-[45px] py-[25px] shadow-lg shadow-ebprimary/20 hover:shadow-ebprimary/40 capitalize">
              mendaftar
            </button>
          </div>
        </div>
        <hr className="h-px w-full border-0 bg-white/[0.03]" />
        <div className="py-[50px] gap-[31px] flex items-center w-full">
          <div className="flex flex-col gap-3.5 w-[575px]">
            <span className="w-[50px] h-[50px] bg-ebprimary rounded-full flex items-center justify-center text-white">
              M
            </span>
            <h4 className="font-bold text-white text-lg">The Malaka</h4>
            <p className="text-white/80 leading-7">
              Malaka adalah situs penyedia kursus ilmu komputer berbahasa
              Indonesia, mulai dari pengembangan hingga desain grafis.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-3 gap-x-[30px]">
            <div className="flex flex-col gap-5">
              <h4 className="text-sm text-white/60 tracking-10 font-bold uppercase">
                PRODUCTS
              </h4>
              <ul className="flex flex-col gap-2">
                <li className="leading-7 text-white/80 capitalize">
                  <a href="/e-book">Courses</a>
                </li>
                <li className="leading-7 text-white/80 capitalize">
                  <a href="/e-book">books</a>
                </li>
                <li className="leading-7 text-white/80 capitalize">
                  <a href="/e-book">freebies</a>
                </li>
                <li className="leading-7 text-white/80 capitalize">
                  <a href="/e-book">classes</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h4 className="text-sm text-white/60 tracking-10 font-bold uppercase">
                company
              </h4>
              <ul className="flex flex-col gap-2">
                <li className="leading-7 text-white/80 capitalize">
                  <a href="/e-book">about us</a>
                </li>
                <li className="leading-7 text-white/80 capitalize">
                  <a href="/e-book">contact</a>
                </li>
                <li className="leading-7 text-white/80 capitalize">
                  <a href="/e-book">privacy policy</a>
                </li>
                <li className="leading-7 text-white/80 capitalize">
                  <a href="/e-book">term of services</a>
                </li>
                <li className="leading-7 text-white/80 capitalize">
                  <a href="/e-book">help</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h4 className="text-sm text-white/60 tracking-10 font-bold uppercase">
                get in touch
              </h4>
              <ul className="flex flex-col gap-2">
                <li className="leading-7 text-white/80 capitalize">
                  <a href="/e-book">twitter</a>
                </li>
                <li className="leading-7 text-white/80 capitalize">
                  <a href="/e-book">facebook</a>
                </li>
                <li className="leading-7 text-white/80 capitalize">
                  <a href="/e-book">dribbble</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="h-px w-full border-0 bg-white/[0.03]" />
        <div className="uppercase text-center py-[50px] text-white/40 tracking-10 text-xs">
          COPYRIGHT © {date} — DESIGN NAUVAL
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer
