import React from "react"
import { useLocation } from "react-router-dom"
import useDocumentTitle from "../../hook/use-document-title"

const RandomShapes = () => {
  const { pathname } = useLocation()
  useDocumentTitle(pathname)

  return (
    <div className="w-full min-h-screen bg-black">
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-b-full"></div>
        <div className="w-full aspect-square bg-white rounded-t-full"></div>
        <div className="w-full aspect-square bg-white rounded-b-full"></div>
        <div className="w-full aspect-square bg-white rounded-t-full"></div>
      </div>
      <br />
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-l-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full"></div>
        <div className="w-full aspect-square bg-white rounded-r-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-l-full"></div>
        <div className="w-full aspect-square bg-white rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-r-full"></div>
      </div>
      <br />
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-l-full"></div>
        <div className="w-full aspect-square bg-white rounded-r-full"></div>
        <div className="w-full aspect-square bg-white rounded-l-full"></div>
        <div className="w-full aspect-square bg-white rounded-r-full"></div>
      </div>
      <br />
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-r-full"></div>
        <div className="w-full aspect-square bg-white rounded-l-full"></div>
        <div className="w-full aspect-square bg-white rounded-r-full"></div>
        <div className="w-full aspect-square bg-white rounded-l-full"></div>
      </div>
      <br />
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-full"></div>
        <div className="w-full aspect-square bg-white rounded-full"></div>
        <div className="w-full aspect-square bg-white rounded-full"></div>
        <div className="w-full aspect-square bg-white rounded-full"></div>
      </div>
      <br />
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full"></div>
        <div className="w-full aspect-square bg-white rounded-br-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tl-full"></div>
        <div className="w-full aspect-square bg-white rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full"></div>
      </div>
      <br />
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-r-full"></div>
        <div className="w-full aspect-square bg-white rounded-r-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-l-full rounded-tr-full"></div>
        <div className="w-full aspect-square bg-white rounded-l-full"></div>
      </div>
      <br />
      {/*  */}
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
        <div className="w-full aspect-square bg-white rounded-tl-full rounded-br-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
      </div>{" "}
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
      </div>{" "}
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
      </div>{" "}
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
      </div>{" "}
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
      </div>{" "}
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-tr-full rounded-bl-full"></div>
      </div>
      {/*  */}
      <br />
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-l-full rounded-tr-full"></div>
        <div className="w-full aspect-square bg-white rounded-r-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-l-full rounded-tr-full"></div>
        <div className="w-full aspect-square bg-white rounded-r-full rounded-bl-full"></div>
      </div>
      <div className="w-full bg-black grid grid-cols-4">
        <div className="w-full aspect-square bg-white rounded-r-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-l-full rounded-tr-full"></div>
        <div className="w-full aspect-square bg-white rounded-r-full rounded-bl-full"></div>
        <div className="w-full aspect-square bg-white rounded-l-full rounded-tr-full"></div>
      </div>
    </div>
  )
}

export default RandomShapes
