import { useRef, useEffect } from "react"
export default function useDocumentTitle(
  title: string,
  prevailOnUnmount = false
) {
  const defaultTitle = useRef(document.title)

  useEffect(() => {
    document.title = `${title.replace(/-/g, " ").slice(1)} - MOI UI`
  }, [title])

  useEffect(
    () => () => {
      if (!prevailOnUnmount) {
        document.title = defaultTitle.current
      }
    },
    []
  )
}
