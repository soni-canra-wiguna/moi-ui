import useDocumentTitle from "@/hook/use-document-title"
import Banner from "./_components/Banner"
import CategoriesWithServices from "./_components/CategoriesWithServices"
import Header from "./_components/Header"

const TokoPediaClonePage = () => {
  useDocumentTitle("tTokopedia Clone")
  return (
    <div className="w-full min-h-screen font-openSauceRegular bg-tpbackground text-tptext">
      <Header />
      <div className="mt-[115px]">
        <Banner />
        <CategoriesWithServices />
      </div>
    </div>
  )
}

export default TokoPediaClonePage
