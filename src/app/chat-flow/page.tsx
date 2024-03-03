import DemoApp from "./_components/DemoApp"
import HeroSection from "./_components/HeroSection"
import Product from "./_components/Product"
import Pricing from "./_components/Pricing"
import Footer from "./_components/Footer"
import { useLocation } from "react-router-dom"
import useDocumentTitle from "../../hook/use-document-title"

const ChatFlow = () => {
  const { pathname } = useLocation()
  useDocumentTitle(pathname)
  return (
    <div className="w-full bg-white h-full text-[#0D082C] font-grostekMd selection:bg-[#fdc87e]/20">
      <HeroSection />
      <Product />
      <DemoApp />
      <Pricing />
      <Footer />
    </div>
  )
}

export default ChatFlow
