import MaxWidthWrapper from "./MaxWidthWrapper"
import MiniLabel from "./MiniLabel"

const Writer = () => {
  return (
    <MaxWidthWrapper className="py-[200px] grid grid-cols-2 gap-x-6">
      <div className="w-full relative flex items-center justify-center">
        <div className="w-[522px] rounded-2xl h-[628px] overflow-hidden -skew-y-6 z-[2]">
          <img
            className="w-full h-full"
            src="/e-book/writer.jpg"
            alt="writer this book - nauval"
          />
        </div>
        <div className="absolute py-[25px] px-[35px] rounded-md bg-ebprimary z-[3] flex flex-col gap-[2px] bottom-12 left-20">
          <h3 className="capitalize font-medium text-white text-xl">
            Muhamad Nauval Azhar
          </h3>
          <p className="text-lg text-white/80">@mhdnauvalazhar</p>
        </div>
        <span className="w-[522px] h-[628px] bg-ebdark rounded-2xl absolute z-[1] -skew-y-6 -rotate-3 shadow-2xl shadow-ebdark" />
      </div>
      <div className="flex flex-col">
        <MiniLabel color="#00BAC7" label="penulis buku" className="mb-2.5" />
        <h1 className="font-medium text-32px leading-44 mb-5">
          Tak kenal maka tak kenal. Berkenalan dengan penulis buku ini
        </h1>
        <p className="leading-32 text-ebdark/80">
          “Halo, saya Nauval. Mungkin nama ini terdengar asing di telinga kamu.
          Namun, kedepannya saya berharap nama ini tidak lagi terdengar asing di
          telinga kamu sebagai orang yang rajin berbagi hal-hal baik untuk
          masyarakat, khususnya dalam ilmu komputer. Saya seorang web developer
          yang masuk kategori apa-aja-dikerjain-selagi-ada-manfaat-nya. Meski
          begitu, saya lebih senang fokus di front-end development, karena
          --menurut saya-- ini lebih sederhana saja. Di front-end development
          pada dasarnya hanya perlu menguasai tiga bahasa: HTML, CSS, dan
          JavaScript. Sudah jelas ini sederhana, yang bikin ribet itu kamu
          sendiri, sudah tau kamu cocoknya pake jQuery, malah maksa pake React.”
        </p>
      </div>
    </MaxWidthWrapper>
  )
}

export default Writer
