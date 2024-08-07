import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carousel"
import MaxWidthWrapper from "./MaxWidthWrapper"
import MiniLabel from "./MiniLabel"

const Testimonial = () => {
  const testimonials = [
    {
      img_profile: "/e-book/saugi.jpg",
      name: "ahmad saugi",
      position: "Mahasiswa",
      kata_mereka:
        "“Buku ini membantu banget buat kalian yang mau cobain tailwind, lengkap mulai dari instalasi sampai ke penggunaannya. Penjelasannya lengkap & enak dibaca kok :)”",
    },
    {
      img_profile: "/e-book/writer.jpg",
      name: "Dedik Sugiharto",
      position: "Front-end Engineer",
      kata_mereka:
        "Terimakasih atas bukunya mas. Sangat membantu saya yang masih pemula dalam proses memahami taildwindcss. Isinya cukup lengkap dan detail.",
    },
    {
      img_profile: "/e-book/lutfhi.jpg",
      name: "Lutfi Hanafiah Ramadhan",
      position: "IT Support",
      kata_mereka:
        "Sebagai pemula yang tidak memiliki latar belakang pemrograman, buku ini sangat cocok untuk dijadikan referensi belajar. Penjelasannya ringkas tapi mudah dipahami.",
    },
    {
      img_profile: "/e-book/soni.png",
      name: "soni canra wiguna",
      position: "Fullstack Engineer",
      kata_mereka:
        "Dengan adanya buku ini saya bisa lebih memperdalam ilmu tailwind CSS saya dan membuat saya lebih membenci CSS murni, terimakasih banyak.",
    },
  ]
  return (
    <MaxWidthWrapper className="rounded-[20px] bg-[#EDFCFD] py-[100px] w-full flex flex-col">
      <div className="w-full justify-between flex items-center gap-9 mb-[60px] px-[100px]">
        <div className="flex flex-col w-[473px]">
          <MiniLabel color="#00BAC7" label="testimonial" className="mb-2.5" />
          <h1 className="font-medium text-32px leading-44 mb-5">
            Apa kata orang-orang yang membaca buku ini?
          </h1>
        </div>
        <div className="text-lg text-ebdark/80 leading-32 w-[470px]">
          Kalo seandainya kamu belum percaya dengan buku ini maka tidak apa-apa,
          karena yang patut kamu percayai adalah Tuhan. Tapi, mungkin beberapa
          ulasan ini bisa membangkitkan hasratmu untuk membeli buku ini.
        </div>
      </div>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="px-4"
      >
        <CarouselContent className="-ml-4">
          {testimonials.map((item) => (
            <CarouselItem key={item.name} className="pl-4 basis-1/3">
              <div className="flex flex-col gap-30px p-5 rounded-[10px] bg-white">
                <p className="w-[347px] leading-[30px] text-[#272D3E]">
                  {item.kata_mereka}
                </p>
                <div className="flex gap-4">
                  <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                    <img
                      src={item.img_profile}
                      alt=""
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <h4 className="leading-4 font-medium">{item.name}</h4>
                    <p className="text-sm leading-4 text-ebdark/80">
                      {item.position}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-6 w-[50px] h-[50px] bg-ebprimary text-white shadow-lg shadow-ebprimary/40" />
        <CarouselNext className="-right-6 w-[50px] h-[50px] bg-ebprimary text-white shadow-lg shadow-ebprimary/40" />
      </Carousel>
    </MaxWidthWrapper>
  )
}

export default Testimonial
