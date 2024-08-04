import React from "react"
import { useLocation } from "react-router-dom"
import useDocumentTitle from "../../hook/use-document-title"

const TokoPediaClonePage = () => {
  const { pathname } = useLocation()
  useDocumentTitle(pathname)
  // add clasName: font, bg color, text folor, dan lain lain
  return <div></div>
}

export default TokoPediaClonePage
