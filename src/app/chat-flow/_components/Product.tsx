import { MessageSquare, Locate } from "lucide-react"
import MaxWidthWrapper from "./MaxWidthWrapper"

interface ProductProps {
  icon: JSX.Element
  label: string
  desc: string
}

const Product = () => {
  const products = [
    {
      icon: <MessageSquare strokeWidth={1.5} />,
      label: "Real-time chat",
      desc: "Our live chat feature allows users to communicate with website visitors in real-time through a chat window. This enables users to provide immediate support and assistance to their customers, improving their experience on the website.",
    },
    {
      icon: <MessageSquare strokeWidth={1.5} />,
      label: "Customization options",
      desc: "Our live chat product offers a range of customization options to allow users to tailor the appearance of the chat window to match their website's branding. Users can choose from a variety of color schemes and chat bubble designs to create a cohesive look and feel.",
    },
    {
      icon: <Locate strokeWidth={1.5} />,
      label: "Visitor tracking",
      desc: "Our live chat product includes visitor tracking capabilities, allowing users to see who is on their website and what pages they are viewing. This can help users understand the needs and interests of their visitors and provide more targeted support.",
    },
    {
      icon: <MessageSquare strokeWidth={1.5} />,
      label: "Automated chat responses",
      desc: "Our live chat product allows users to set up automated responses to common questions or queries. This can help users handle frequently asked questions more efficiently and free up time to focus on more complex or specific issues.",
    },
    {
      icon: <MessageSquare strokeWidth={1.5} />,
      label: "Mobile app",
      desc: "Our live chat product includes a mobile app, allowing users to access and manage their live chat service on the go. This makes it easy for users to stay connected with their customers and provide support no matter where they are.",
    },
    {
      icon: <MessageSquare strokeWidth={1.5} />,
      label: "Integration with other tools",
      desc: "Our live chat product can be integrated with other tools that users may be using, such as a customer relationship management (CRM) system. This allows users to manage their customer interactions and data from a single platform.",
    },
  ]
  return (
    <MaxWidthWrapper className="py-[100px] flex flex-col gap-20">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold font-grostekBold leading-[54px] w-[742px] mb-[10px]">
          Powerful Features to Enhance Your Live Chat Experience
        </h1>
        <p className="w-[556px] leading-[26px] text-[#0D082C]/60">
          Our live chat product is packed with features to help you connect with
          your customers and provide them with the support they need.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-x-[30px] gap-y-10">
        {products.map((product) => (
          <ProductItem key={product.label} {...product} />
        ))}
      </div>
    </MaxWidthWrapper>
  )
}

export default Product

const ProductItem = ({ icon, label, desc }: ProductProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-[50px] h-[50px] text-white flex items-center justify-center rounded-md bg-[#4635F3]">
        {icon}
      </div>
      <h3 className="text-[#0D082C] font-bold text-xl">{label}</h3>
      <p className="leading-[26px] text-[#0D082C]/60">{desc}</p>
    </div>
  )
}
