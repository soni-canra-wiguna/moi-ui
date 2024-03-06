import { useLocation } from "react-router-dom"
import HeroSection from "./_components/HeroSection"
import useDocumentTitle from "../../hook/use-document-title"
import Template from "./_components/Template"
import Customize from "./_components/Customize"
import Preview from "./_components/Preview"
import SocialMedia from "./_components/SocialMedia"
import FigmaSocialFeed from "./_components/FigmaSocialFeed"
import DownloadSocialFeed from "./_components/DownloadSocialFeed"
import Footer from "./_components/Footer"

const WumboPage = () => {
  const { pathname } = useLocation()
  useDocumentTitle(pathname)

  return (
    <div className="font-dmsans w-full bg-white text-wdark flex flex-col max-w-[1440px] mx-auto overflow-hidden">
      <HeroSection />
      <Template />
      <Customize />
      <Preview />
      <SocialMedia />
      <FigmaSocialFeed />
      <DownloadSocialFeed />
      <Footer />
    </div>
  )
}

export default WumboPage
