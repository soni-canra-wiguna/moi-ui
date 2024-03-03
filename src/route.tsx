import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ChatFlow from "./app/chat-flow/page"
import ChatNRechat from "./app/chat-nrechat/page"
import EBookPage from "./app/e-book/page"
import HomePage from "./app/page"
import TeamFlow from "./app/team-flow/page"
import WebsiteBranding from "./app/websites-branding/page"
import ScrollToTop from "./lib/scrollToTop"

export const Root = () => {
  const root = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "website-branding",
      element: <WebsiteBranding />,
    },
    {
      path: "team-flow",
      element: <TeamFlow />,
    },
    {
      path: "chat-rechat",
      element: <ChatNRechat />,
    },
    {
      path: "chat-flow",
      element: <ChatFlow />,
    },
    {
      path: "e-book",
      element: <EBookPage />,
    },
  ]
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {root?.map(({ path, element }, i) => (
          <Route key={i} path={path} element={element} />
        ))}
      </Routes>
    </Router>
  )
}
