import MaxWidthWrapper from "./MaxWidthWrapper"
import MiniLabel from "./MiniLabel"

const Benefit = () => {
  const benefits = [
    "Buku ini cocok untuk seorang yang ingin memperdalam front-end development agar tidak hanya sekadar Bootstrap",
    "Buku ini ditulis berdasarkan dari dokumentasi Tailwind CSS langsung, agar meminimalisir terjadinya miskonsepsi",
    "Sangat ramah untuk back-end developer yang phobia terhadap CSS dan mudah dipahami bagi UI designer",
    "Studi kasus membangun sebuah website responsive dengan Tailwind CSS tanpa ngoding CSS",
  ]
  return (
    <div className="w-full bg-[#EDFCFD]">
      <MaxWidthWrapper className="py-[200px] grid grid-cols-2 gap-30px">
        <div className="flex flex-col">
          <MiniLabel color="#00BAC7" label="manfaat buku" className="mb-10" />
          <h1 className="text-32px font-medium leading-44 mb-5">
            Manfaat yang kamu dapatkan ketika membeli buku Tailwind CSS ini
          </h1>
          <p className="text-lg leading-32 text-ebdark/80 mb-10">
            "Buku itu seperti cermin: kalau yang berkaca padanya adalah seorang
            yang bodoh, engkau tak bisa berharap yang terpantul adalah seorang
            yang jenius." - J.K Rowling
          </p>
          <div className="flex flex-col gap-5 w-full">
            {benefits.map((benefit) => (
              <BenefitItem benefit={benefit} />
            ))}
          </div>
        </div>
        <div className="w-full h-full flex items-end relative">
          <div className="flex items-center bg-ebprimary p-[30px] rounded-[20px] shadow-xl shadow-ebprimary/30 w-full relative z-[2]">
            <div className="flex flex-col gap-px">
              <h1 className="text-white font-bold text-[30px]">19</h1>
              <p className="text-white capitalize text-sm">jumlah chapter</p>
            </div>
            <div className="w-px h-[50px] bg-white/30 mx-[49px]" />
            <div className="flex flex-col gap-px">
              <h1 className="text-white font-bold text-[30px]">253</h1>
              <p className="text-white capitalize text-sm">jumlah halaman</p>
            </div>
            <div className="w-px h-[50px] bg-white/30 mx-[49px]" />
            <div className="flex flex-col gap-px">
              <h1 className="text-white font-bold text-[30px]">60</h1>
              <p className="text-white capitalize text-sm">hari menulis</p>
            </div>
          </div>

          <img
            src="/e-book/benefit.svg"
            alt="benefit book"
            className="absolute left-1/2 -translate-x-1/2 z-[1]"
          />
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default Benefit

const BenefitItem = ({ benefit }: { benefit: string }) => {
  return (
    <div className="flex gap-5">
      <img
        src="/e-book/check.svg"
        className="size-7 mt-2"
        alt="check image svg"
      />
      <p className="leading-[30px] text-ebdark/80">{benefit}</p>
    </div>
  )
}
