import { ReactNode } from "react"
import { cn } from "@/lib/utils"

const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div className={cn("max-w-[1208px] mx-auto w-full", className)}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper
