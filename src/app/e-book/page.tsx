import { useLocation } from "react-router-dom"
import Foreword from "./_components/Foreword"
import HeroSection from "./_components/HeroSection"
import WhoItsFor from "./_components/WhoItsFor"
import useDocumentTitle from "../../hook/use-document-title"

const EBookPage = () => {
  const { pathname } = useLocation()
  useDocumentTitle(pathname)

  return (
    <div className="font-dmsans w-full bg-white text-ebdark flex flex-col mb-40 max-w-[1440px] mx-auto">
      <HeroSection />
      <WhoItsFor />
      <Foreword />
    </div>
  )
}

export default EBookPage
