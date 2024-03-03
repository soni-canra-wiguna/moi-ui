import { Link } from "react-router-dom"
import { datas } from "../data/data"
import { ArrowUpRight } from "lucide-react"

const HomePage = () => {
  return (
    <div className="w-full min-h-screen text-black bg-[#F3EEEA] relative font-grostekMd">
      <div
        style={{ opacity: "0.5" }}
        className="absolute bottom-64 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
      ></div>
      <div className="max-w-7xl w-full h-full mx-auto px-4 md:px-8 lg:px-14 2xl:px-0">
        <div className="flex flex-col gap-10 items-center justify-center pb-20 pt-32">
          <img src="/moi.png" alt="" className="selection:bg-transparent" />
          <div className="flex flex-col gap-4 items-center z-40">
            <h1 className="text-2xl font-bold font-grostekBold flex flex-col leading-none tracking-32">
              MOI UI
            </h1>
            <p className="max-w-xl text-center w-full text-black/60">
              Sempurna dalam Sederhana: Moi UI, Membuat Elegan dari Setiap
              Slicing.
            </p>
          </div>
        </div>
        <div className="xl:py-20 py-14 w-full h-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {datas.map((data) => (
            <Link
              to={data.slug}
              key={data.title}
              className="border-2 border-black rounded-lg transition-colors duration-300 ease-in-out overflow-hidden flex flex-col relative p-3 hover:bg-black hover:shadow-md group"
            >
              <div className="w-full h-[250px] overflow-hidden border-gray-300/60 rounded-lg border group-hover:border-black transition-colors duration-300 ease-in-out mb-3">
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full h-full rounded-md object-cover"
                />
              </div>

              <div className="text-2xl w-full font-bold font-grostekBold text-black group-hover:text-white transition-colors duration-300 ease-in-out flex items-center justify-between">
                <h1 className="">{data.title}</h1>
                <ArrowUpRight className="mt-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage
