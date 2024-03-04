import { ReactNode } from "react"
import MaxWidthWrapper from "./MaxWidthWrapper"

const PricingBook = () => {
  const benefitsPricing = [
    "buku lengkap",
    "akses secara digital",
    "buku fisik",
    "mendapatkan pembaruan",
    "konsultasi",
    "dapat di unduh",
  ]
  return (
    <div className='w-full h-[1624px] bg-no-repeat bg-[url("/e-book/bgpricing.svg")] relative z-20'>
      <MaxWidthWrapper className="pb-[200px] pt-[250px] flex flex-col gap-20">
        <div className="flex flex-col items-center text-center w-[777px] mx-auto">
          <button className="uppercase tracking-10 font-bold text-sm px-5 py-2.5 text-ebprimary bg-[#C6F4F8]/10 mb-2.5 rounded-full">
            HARGA BUKU
          </button>
          <h1 className="font-medium text-32px leading-44 mb-5 text-white">
            Kamu dapat membeli buku fisik atau buku elektronik untuk dibaca di
            perangkat kamu
          </h1>
          <p className="text-lg leading-32 w-[577px] text-white/80">
            Dilarang memperjualbelikan atau memperbanyak tanpa seizin penulis.
            Hak cipta dilindungi undang-undang.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-30px">
          <PricingLevel label="Buku Digital" price={100000}>
            {benefitsPricing.map((item, i) => (
              <div key={i} className="flex gap-2.5">
                <img
                  src={i == 2 ? "/e-book/checkred.svg" : "/e-book/check.svg"}
                  alt="check svg image"
                  className="w-5 h-05"
                />
                <p className="text-[#001533]">{item}</p>
              </div>
            ))}
          </PricingLevel>
          <PricingLevel label="buku fisik" price={185000}>
            {benefitsPricing.map((item, i) => (
              <div key={i} className="flex gap-2.5">
                <img
                  src={
                    i === 1 || i === 3
                      ? "/e-book/checkred.svg"
                      : "/e-book/check.svg"
                  }
                  alt="check svg image"
                  className="w-5 h-05"
                />
                <p className="text-[#001533]">{item}</p>
              </div>
            ))}
          </PricingLevel>
          <PricingLevel label="buku digital + fisik" price={250000}>
            {benefitsPricing.map((item, i) => (
              <div key={i} className="flex gap-2.5">
                <img
                  src="/e-book/check.svg"
                  alt="check svg image"
                  className="w-5 h-05"
                />
                <p className="text-[#001533]">{item}</p>
              </div>
            ))}
          </PricingLevel>
        </div>
        <p className="leading-32 text-lg text-white/80 text-center">
          *Buku digital akan dikirimkan ke alamat email kamu <br />
          *Buku fisik dikirim 7 hari setelah pemesanan
        </p>
      </MaxWidthWrapper>
    </div>
  )
}

export default PricingBook

const PricingLevel = ({
  label,
  price,
  children,
}: {
  label: string
  price: number
  children?: ReactNode
}) => {
  const formattedNumber = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price)

  return (
    <div className="bg-white rounded-[10px] p-[60px] flex flex-col">
      <h6 className="font-medium text-ebprimary mb-2.5 capitalize">{label}</h6>
      <h1 className="font-medim text-32px text-[#001533] mb-[30px]">
        {formattedNumber}
      </h1>
      <div className="flex flex-col gap-5 mb-10">{children}</div>
      <button className="bg-ebprimary px-[25px] py-[15px] rounded-md shadow-lg shadow-ebprimary/20 hover:shadow-ebprimary/40 transition duration-300 font-semibold text-white hover:opacity-90">
        beli sekarang
      </button>
    </div>
  )
}
