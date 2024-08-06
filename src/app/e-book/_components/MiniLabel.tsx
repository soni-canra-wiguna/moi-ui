import { cn } from "@/lib/utils"

interface MiniLabelProps {
  color: string
  label: string
  opacity?: string
  className?: string
}

const MiniLabel = ({
  label,
  color,
  opacity = "100",
  className,
}: MiniLabelProps) => {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <hr
        style={{ background: color, opacity: `${opacity}%` }}
        className={`w-[30px] h-[2px] border-0`}
      />
      <h5
        style={{ color: color, opacity: `${opacity}%` }}
        className={`text-sm font-bold tracking-10 uppercase`}
      >
        {label}
      </h5>
    </div>
  )
}

export default MiniLabel
