import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/carousel"
import MaxWidthWrapper from "./MaxWidthWrapper"
import Autoplay from "embla-carousel-autoplay"
import { Link } from "react-router-dom"

const carouselItems = [
  {
    image: "/tokopedia-clone/banner4.webp",
    href: "/",
  },
  {
    image: "/tokopedia-clone/banner1.webp",
    href: "/",
  },
  {
    image: "/tokopedia-clone/banner2.webp",
    href: "/",
  },
  {
    image: "/tokopedia-clone/banner3.webp",
    href: "/",
  },
  {
    image: "/tokopedia-clone/banner5.webp",
    href: "/",
  },
  {
    image: "/tokopedia-clone/banner6.webp",
    href: "/",
  },
]

export default function Banner() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const handleDotClick = (index: number) => {
    if (api) {
      api.scrollTo(index)
    }
  }

  return (
    <MaxWidthWrapper className="py-6">
      <Carousel
        className="w-full max-w-full group"
        opts={{ align: "center", loop: true }}
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent>
          {carouselItems.map((item, i) => (
            <CarouselItem key={i}>
              <section className="h-[302px] bg-tpsecondary w-full rounded-xl overflow-hidden">
                <img src={item.image} />
              </section>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className="size-10 bg-white shadow-lg hover:size-11 transition-all duration-300 border-none -left-[1.3rem]  translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
          icon={
            <ChevronLeft className="size-6 stroke-[1.5] text-tpparagraph" />
          }
        />
        <CarouselNext
          className="size-10 bg-white shadow-lg hover:size-11 transition-all duration-300 border-none -right-[1.3rem] -translate-x-6 opacity-0 group-hover:-translate-x-0 group-hover:opacity-100"
          icon={
            <ChevronRight className="size-6 stroke-[1.5] text-tpparagraph" />
          }
        />
        {/* // dots */}
        <div className="flex items-center gap-1.5 absolute bottom-4 left-4 z-30">
          {Array.from({ length: count }, (_, i) => {
            return (
              <span
                key={i}
                onClick={() => handleDotClick(i)}
                className={`size-[6px] rounded-full cursor-pointer ${
                  current === i + 1 ? "bg-tpbackground" : "bg-tpbackground/60"
                }`}
              />
            )
          })}
        </div>
        <Link
          className="absolute bottom-4 right-4 capitalize text-[10px] leading-4 text-tpbackground bg-tpforeground rounded-md py-1 px-2"
          to="/"
        >
          View all promos
        </Link>
      </Carousel>
    </MaxWidthWrapper>
  )
}
