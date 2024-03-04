import { ArrowRightCircle, Download } from "lucide-react"
import MaxWidthWrapper from "./MaxWidthWrapper"

const Order = () => {
  return (
    <MaxWidthWrapper className="py-[150px] flex flex-col gap-10 justify-center items-center">
      <div className="flex flex-col items-center text-center w-[777px] mx-auto">
        <button className="uppercase tracking-10 font-bold text-sm px-5 py-2.5 text-ebprimary bg-[#EDFCFD] mb-2.5 rounded-full">
          BELI BUKU
        </button>
        <h1 className="font-medium text-32px leading-44 mb-5">
          Anda ingin segera memesan buku ini?
        </h1>
        <p className="text-lg leading-32 text-ebdark/80 w-[375px]">
          Otak Kita butuh asupan nutrisi juga, tidak hanya perut saja.
        </p>
      </div>
      <div className="flex flex-row-reverse items-center gap-10 mb-[100px]">
        <button className="px-[45px] py-[25px] flex items-center gap-[15px] text-base bg-ebprimary rounded-full shadow-xl shadow-ebprimary/30 text-white">
          <span className="capitalize font-bold">beli sekarang</span>
          <ArrowRightCircle size={16} className="mt-1" />
        </button>
        <div className="gap-[30px] flex items-start text-ebdark">
          <Download />
          <div className="flex flex-col gap-2.5">
            <h3 className="uppercase tracking-10 font-bold text-ebdark/60">
              sudah terjual
            </h3>
            <h1 className="text-2xl font-semibold text-ebdark">501,234+</h1>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default Order
