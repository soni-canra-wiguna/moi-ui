import MaxWidthWrapper from "./MaxWidthWrapper"

const DownloadBanner = () => {
  return (
    <MaxWidthWrapper className="py-[100px]">
      <div className="grid grid-cols-2 h-[538px] overflow-hidden rounded-[20px] bg-[#4a72ff] shadow-xl shadow-[#4a72ff]/30 w-full">
        <div className="flex flex-col pl-20 py-[100px]">
          <div className="flex flex-col text-white">
            <h3 className="font-semibold text-sm tracking-[10%] mb-[15px]">
              TEKNOLOGI YANG DIGUNAKAN
            </h3>
            <h1 className="text-[28px] leading-10 mb-[10px]">
              Teknologi Yang Kami Gunakan Di Dalam Aplikasi Ini Akan Membuat DHH
              Dan Jason Fried Pensiun! 😱
            </h1>
            <ul className="text-white/60 mb-[40px] pl-5">
              <li className="leading-6 list-disc">Android Version: Mojave+</li>
              <li className="leading-6 list-disc">iOS Version: Lolipop+</li>
              <li className="leading-6 list-disc">Symbian: 20.04+</li>
            </ul>
            <div className="flex items-center gap-4">
              <img
                src="/chat-rechat/appstore.svg"
                alt=""
                className="w-[150px]"
              />
              <img
                src="/chat-rechat/googleplayicon.svg"
                alt=""
                className="w-[150px]"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-full">
          <img src="/chat-rechat/downloadbanner.svg" className="h-full" />
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default DownloadBanner
