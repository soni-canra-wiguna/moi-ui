import useDocumentTitle from "../../hook/use-document-title"
import Banner from "./_components/Banner"
import Header from "./_components/Header"

const TokoPediaClonePage = () => {
  useDocumentTitle("situs jual beli online terlengkap")
  return (
    <div className="w-full min-h-screen font-openSauceRegular bg-tpbackground text-tptext">
      <Header />
      <div className="mt-[115px]">
        <Banner />
      </div>
    </div>
  )
}

export default TokoPediaClonePage
