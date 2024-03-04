import { useLocation } from "react-router-dom"
import Foreword from "./_components/Foreword"
import HeroSection from "./_components/HeroSection"
import WhoItsFor from "./_components/WhoItsFor"
import useDocumentTitle from "../../hook/use-document-title"
import Benefit from "./_components/Benefit"
import StudyCase from "./_components/StudyCase"
import Preview from "./_components/Preview"
import PricingBook from "./_components/PricingBook"
import Writer from "./_components/Writer"
import Testimonial from "./_components/Testimonial"
import Order from "./_components/Order"
import Footer from "./_components/Footer"

const EBookPage = () => {
  const { pathname } = useLocation()
  useDocumentTitle(pathname)

  return (
    <div className="font-dmsans w-full bg-white text-ebdark flex flex-col max-w-[1440px] mx-auto">
      <HeroSection />
      <WhoItsFor />
      <Foreword />
      <Benefit />
      <StudyCase />
      <Preview />
      <PricingBook />
      <Writer />
      <Testimonial />
      <Order />
      <Footer />
    </div>
  )
}

export default EBookPage
