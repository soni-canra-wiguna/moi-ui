import useDocumentTitle from "../../hook/use-document-title"
import Header from "./_components/Header"

const TokoPediaClonePage = () => {
  useDocumentTitle("situs jual beli online terlengkap")
  // add clasName: font, bg color, text folor, dan lain lain
  return (
    <div className="w-full min-h-screen font-openSauceRegular bg-tpbackground text-tptext">
      <Header />
    </div>
  )
}

export default TokoPediaClonePage
