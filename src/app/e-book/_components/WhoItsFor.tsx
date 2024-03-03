import MaxWidthWrapper from "./MaxWidthWrapper"
import MiniLabel from "./MiniLabel"

//shearusnya it's bukan its
const WhoItsFor = () => {
  return (
    <MaxWidthWrapper className="py-[200px] flex flex-col gap-[84px]">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2.5 w-[473px]">
          <MiniLabel color="#00BAC7" label="buku ini untuk siapa" />
          <h1 className="text-32px font-medium leading-44 text-ebdark">
            Buku yang cocok dibaca untuk front-end dan back-end, bahkan UI
            designer!
          </h1>
        </div>
        <p className="leading-32 text-lg text-ebdark/80 w-[575px]">
          Buku ini bukan hanya untuk front-end developer yang ingin meningkatkan
          skill, buku ini juga cocok untuk back-end developer dan UI designer
          agar dapat menulis style tanpa harus menulis kode CSS dan tanpa
          mengandalkan front-end developer!
        </p>
      </div>
      <GridContent />
    </MaxWidthWrapper>
  )
}

export default WhoItsFor

const GridContent = () => {
  const datas = [
    {
      image: "/e-book/utility-framework.svg",
      title: "Utility-First Framework",
      desc: "Tailwind hadir dengan konsep utility-first. Utility-first artinya banyak class-class kecil yang bisa digabung untuk menjadi sebuah UI.",
    },
    {
      image: "/e-book/jit-engine.svg",
      title: "Tailwind JIT Engine",
      desc: "JIT engine akan men-generate utility-class yang kita gunakan saja. Ini akan membuat pengalaman pengembangan semakin baik.",
    },
    {
      image: "/e-book/unopinionated-framework.svg",
      title: "Unopinionated-Framework",
      desc: "Tailwind tidak memiliki pra-desain komponen apapun, ini membuat desain website yang kita buat menjadi unik.",
    },
  ]
  return (
    <div className="grid grid-cols-3 gap-30px">
      {datas.map((data) => (
        <div key={data.title} className="flex flex-col gap-5">
          <div className="w-full h-[221px] rounded-[10px] overflow-hidden">
            <img src={data.image} alt={data.title} className="w-full h-full" />
          </div>
          <div className="flex flex-col items-center text-center gap-2.5">
            <h1 className="leading-32 font-medium text-xl">{data.title}</h1>
            <p className="text-ebdark/80 leading-32">{data.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
