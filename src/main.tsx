import React from "react"
import ReactDOM from "react-dom/client"
import "./global.css"
import { Root } from "./route"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)
