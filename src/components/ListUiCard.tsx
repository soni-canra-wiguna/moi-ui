import { Link } from "react-router-dom"
import { datas, type DataProps } from "../data/data"
import { ArrowUpRight } from "lucide-react"

const ListUiCard = () => {
  return (
    <div className="xl:py-20 py-14 w-full h-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {datas.map((data) => {
        const { desc, ...dataWithoutDesc } = data
        return <Card key={data.title} {...dataWithoutDesc} />
      })}
    </div>
  )
}

export default ListUiCard

const Card = ({ slug, title, image }: DataProps) => {
  return (
    <Link
      to={slug}
      className="border-2 border-black rounded-lg transition-colors duration-300 ease-in-out overflow-hidden flex flex-col relative p-3 hover:bg-black hover:shadow-md group"
    >
      <div className="w-full h-[250px] overflow-hidden border-gray-300/60 rounded-lg border group-hover:border-black transition-colors duration-300 ease-in-out mb-3">
        <img
          src={image}
          alt={title}
          className="w-full h-full rounded-md object-cover"
        />
      </div>

      <div className="text-2xl w-full font-bold font-grostekBold text-black group-hover:text-white transition-colors duration-300 ease-in-out flex items-center justify-between">
        <h1 className="">{title}</h1>
        <ArrowUpRight className="mt-1" />
      </div>
    </Link>
  )
}
