import { Collapse } from "react-collapse"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const Faq = () => {
  const [isOpen, setIsOpen] = useState<any>(false)

  function toggle(id: number) {
    if (isOpen === id) {
      return setIsOpen(null)
    } else {
      setIsOpen(id)
    }
  }

  const _accordionData = [
    {
      title: "bisa pake git?",
      desc: "bisa kalo untuk sekedar bikin repo, commit dan mengerti best best practice message commit, pull and push request.",
    },
    {
      title: "beneran bisa next js sama typescript?",
      desc: "bisa sampe mana pengennya? kalo sampe bikin full stack gabisa,soalnya saya focus di frontend, tapi saya tertarik ke full stack dev sih",
    },
    {
      title: "pernah kerja gak?",
      desc: "belum pernah, kalo pengen hire saya open banget sih.",
    },
    {
      title: "berapa project yang pernah kamu selesaikan?",
      desc: "untuk sekarang baru 3, tapi banyak feature yang saya adopt di project pertama saya",
    },
    {
      title: "udah berapa lama ngoding?",
      desc: "sekitar 1 tahun lebih mungkin, saya kurang inget.",
    },
    {
      title: "berapa kecepatan kamu mengetik?",
      desc: "untuk sekarang yang paling tinggi itu 50wpm",
    },
    {
      title: "punya setifikat yang berhubungan dengan front end?",
      desc: "saya punya serfitikat css(basic) dari hackerrank",
    },
  ]
  return (
    <MaxWidthWrapper className="py-[100px] flex flex-col">
      <div className="flex flex-col text-center items-center mb-[100px]">
        <h3 className="font-semibold text-sm tracking-[10%] mb-[15px]">
          BANYAK YANG NANYA
        </h3>
        <h1 className="text-[28px] leading-10 mb-[10px]">
          Pertanyaan Yang Sering Ditanyain
        </h1>
        <p className="text-[#0C1B4D]/60 leading-6 w-[493px]">
          Sebenernya pertanyaan-pertanyaan ini kagak ada yang nanya sih, tapi ya
          ditaruh sini aja siapa tau lo mau baca ‘kan.
        </p>
      </div>
      <div className="relative max-w-[673px] w-full mx-auto">
        {_accordionData?.map(({ title, desc }, index) => (
          <Accordion
            key={index}
            title={title}
            desc={desc}
            isOpen={index === isOpen}
            toggle={() => toggle(index)}
          />
        ))}
      </div>
    </MaxWidthWrapper>
  )
}

export default Faq

interface AccordionType {
  isOpen: boolean
  toggle: () => void
  title: string
  desc: string
}

const Accordion = ({ isOpen, toggle, title, desc }: AccordionType) => {
  return (
    <div
      className={` ${
        isOpen && "bg-[#4A72FF] rounded-md shadow-xl shadow-[#4a72ff]/30"
      }`}
    >
      <div
        onClick={toggle}
        className={`flex ${
          isOpen
            ? "border-b border-white/20 text-white"
            : "border-b border-[#0C1B4D]/10"
        } cursor-pointer justify-between selection:bg-transparent items-center md:px-8 md:py-6 px-4 py-3 sm:px-6 sm:py-4`}
      >
        <h1 className="text-lg font-medium tracking-wide">{title}</h1>
        <h2 className="text-lg transition duration-300 eas-in">
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </h2>
      </div>
      <Collapse isOpened={isOpen}>
        <p className="md:px-8 text-paragraf tracking-wide md:py-6 px-4 py-3 sm:px-6 sm:py-4 text-white/80">
          {desc}
        </p>
      </Collapse>
    </div>
  )
}
