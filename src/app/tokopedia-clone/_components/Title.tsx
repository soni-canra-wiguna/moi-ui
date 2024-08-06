import React from "react"
import { cn } from "@/lib/utils"

export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode
  className?: string
}

export const Title = ({ children, className, ...rest }: TitleProps) => {
  return (
    <h2
      className={cn(
        "leading-[26px] text-xl tracking-[-0.1px] text-tptext font-openSauceExtraBold",
        className
      )}
      {...rest}
    >
      {children}
    </h2>
  )
}
