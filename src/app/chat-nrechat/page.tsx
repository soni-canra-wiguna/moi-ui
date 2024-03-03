import { useLocation } from "react-router-dom"
import DownloadBanner from "./_components/DownloadBanner"
import Faq from "./_components/Faq"
import Footer from "./_components/Footer"
import HeroSection from "./_components/HeroSection"
import Reason from "./_components/Reason"
import TechStack from "./_components/TechStack"
import useDocumentTitle from "../../hook/use-document-title"

const ChatNRechat = () => {
  const { pathname } = useLocation()
  useDocumentTitle(pathname)

  return (
    <div className="w-full bg-[#f4f7ff] text-[#0C1B4D] font-grostekMd">
      <HeroSection />
      <Reason />
      <hr className="border-0 h-px bg-[#0C1B4D]/10 w-full max-w-5xl mx-auto" />
      <TechStack />
      <DownloadBanner />
      <Faq />
      <Footer />
    </div>
  )
}

export default ChatNRechat
