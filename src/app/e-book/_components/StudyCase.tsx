import { ArrowRight, Layout, MessageSquare } from "lucide-react"
import MaxWidthWrapper from "./MaxWidthWrapper"
import MiniLabel from "./MiniLabel"

const StudyCase = () => {
  return (
    <div className="w-full bg-[#EDFCFD]">
      <MaxWidthWrapper className="pb-[200px] grid grid-cols-2">
        <div className="w-full h-full flex items-center jusitfy-end">
          <img src="/e-book/studycase.svg" alt="study case image" />
        </div>
        <div className="flex flex-col">
          <MiniLabel color="#00BAC7" label="selain itu" className="mb-2.5" />
          <h1 className="font-medium leading-44 text-32px mb-4">
            Buku dengan studi kasus nyata, juga komunitas yang ramah
          </h1>
          <p className="text-ebdark/80 leading-32 mb-10">
            Buku ini diakhiri dengan membangun website yang responsive dengan
            Tailwind. Selain itu kamu juga kamu dapat bergabung ke komunitas
            untuk bertanya ketika mengalami kesulitan.
          </p>
          <div className="flex flex-col gap-[30px]">
            <Card
              icon={<Layout size={30} strokeWidth={1.5} />}
              label="Live Demo Project"
              desc="Lihat live demo project yang akan kamu buat di akhir buku ini."
            />
            <Card
              icon={<MessageSquare size={30} strokeWidth={1.5} />}
              label="Dukungan Komunitas"
              desc="Sebuah server Discord berisi teman-teman yang akan membantu kamu."
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default StudyCase

const Card = ({
  icon,
  label,
  desc,
}: {
  icon: JSX.Element
  label: string
  desc: string
}) => {
  return (
    <div className="flex gap-[25px] px-[30px] py-[20px] rounded-2xl bg-white shadow-lg shadow-black/20">
      <span className="text-ebprimary">{icon}</span>
      <div className="flex items-center w-full justify-between">
        <div className="flex flex-col w-[405px]">
          <h3 className="leading-32 font-medium text-lg text-primary capitalize">
            {label}
          </h3>
          <p className="leading-[30px] text-ebdark/80">{desc}</p>
        </div>
        <button className="w-10 h-10 rounded-full text-ebprimary bg-ebprimary/10 hover:bg-ebprimary/30 flex items-center justify-center">
          <ArrowRight size={24} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  )
}
