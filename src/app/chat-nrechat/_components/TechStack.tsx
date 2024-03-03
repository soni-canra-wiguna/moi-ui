import MaxWidthWrapper from "./MaxWidthWrapper"

// [#4a72ff]
// [#0C1B4D]
// [#0C1B4D]/60
// /chat-rechat/

const TechStack = () => {
  const lists = [
    {
      icon: "😠",
      label: "Kamu Adalah Beban Kami",
      desc: "Semakin banyak kamu yang mendaftar di aplikasi ini, artinya semakin banyak data yang perlu disimpan, nah kan jadi perlu server gede tuh. Makanya kamu beban!",
    },
    {
      icon: "🐨",
      label: "Males Buat Ngembangin",
      desc: "Lo bakal nemu bug, entah pesan yang mau dikirim gak bisa dikirim padahal lo belom pencet tombol enter atau masalah lainnya. Nah soal itu kita males buat benerin.",
    },
    {
      icon: "😴",
      label: "Pokoknya Males Aja Lah",
      desc: "Nggak tau lagi harus ngomong apa, pokoknya males aja sih kita bikin aplikasi chat kek gini. Makannya mending lo pake WhatsApp aja udah.",
    },
  ]
  return (
    <MaxWidthWrapper className="py-[100px] grid grid-cols-2 gap-[30px] items-center">
      <div className="h-[767px] w-full">
        <img
          src="/chat-rechat/techstack.svg"
          alt="teck stack image"
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col mb-10">
        <div className="flex flex-col">
          <h3 className="font-semibold text-sm tracking-[10%] mb-[15px]">
            TEKNOLOGI YANG DIGUNAKAN
          </h3>
          <h1 className="text-[28px] leading-10 mb-[10px]">
            Teknologi Yang Kami Gunakan Di Dalam Aplikasi Ini Akan Membuat DHH
            Dan Jason Fried Pensiun! 😱
          </h1>
          <p className="text-[#0C1B4D]/60 leading-6 w-[493px] mb-[70px]">
            Lo bisa bayangin DHH sama Jason Fried aja jadi pensiun gegara
            aplikasi ini, apalagi lo yang cuma user dan beban kami, gegara lo
            pake dan daftar di aplikasi ini jadi kita harus bayar server DO tiap
            bulan, mana pas bayar harus tunjuk-tunjukan. Inilah alasan kenapa
            gak usah daftar:
          </p>
        </div>
        <div className="flex flex-col gap-[30px]">
          {lists.map((list) => (
            <div key={list.label} className="flex items-start gap-[25px]">
              <h4 className="text-[28px] p-[8px] rounded-md bg-[#0C1B4D]/10">
                {list.icon}
              </h4>
              <div className="flex flex-col gap-[10px]">
                <h5 className="font-medium text-lg">{list.label}</h5>
                <p className="text-sm text-[#0C1B4D]/60">{list.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default TechStack
