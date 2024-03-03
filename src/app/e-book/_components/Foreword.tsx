import MaxWidthWrapper from "./MaxWidthWrapper"
import MiniLabel from "./MiniLabel"

const Foreword = () => {
  return (
    <div className="bg-ebprimary w-full h-full">
      <MaxWidthWrapper className="py-[100px] flex justify-between gap-[134px]">
        <div className="flex flex-col">
          <div className="flex flex-col gap-2.5">
            <MiniLabel color="#ffff" label="penulis buku ini" />
            <h1 className="text-white text-32px leading-44">
              Kata Pengantar Dari Penulis Buku
            </h1>
          </div>
          <hr className="border-0 bg-white/30 w-full h-px my-10" />
          <div className="flex gap-5">
            <div className="w-[50px] h-[50px] rounded-full">
              <img
                src="e-book/foreword.svg"
                className="w-full h-full object-center"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="font-medium text-white capitalize">
                Muhamad nauval azhar
              </h5>
              <p className="text-white/80 text-sm">mhdnauvalazhar</p>
            </div>
          </div>
        </div>
        <p className="text-lg leading-40 w-[674px] text-white">
          "Tailwind sangat memungkinkan kamu untuk membangun sebuah desain
          website yang unik dan tanpa kamu perlu menulis kode CSS sedikitpun.
          Mungkin kamu akan berpikir bahwa kamu akan membutuhkan waktu yang
          lebih lama ketika membangun sebuah website dengan utility-first
          framework ketimbang dengan framework UIkit. Ya, benar. Karena kamu
          harus memikirkan desain dan mengimplementasikan desain tersebut dari
          awal sendiri. Namun, kamu perlu ingat manfaat-manfaat yang diberikan
          oleh utility-first framework, sehingga kamu dapat mempertimbangkannya.
          Dalam buku ini, kita akan mempelajari framework Tailwind CSS. Mulai
          dari konsep, workflow, hingga membuat sebuah website responsive dengan
          TailwindCSS. Buku ini tidak untuk semua orang, setidaknya kamu
          memahami cara mengoperasikan komputer, memahami HTML, memahami CSS,
          atau bisa dibilang kamu sudah pernah membangun website sebelumnya dan
          ingin mempelajari hal baru untuk meningkatkan skill."
        </p>
      </MaxWidthWrapper>
    </div>
  )
}

export default Foreword
