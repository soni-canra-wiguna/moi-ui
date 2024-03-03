interface MiniLabelProps {
  color: string
  label: string
  opacity?: string
}

const MiniLabel = ({ label, color, opacity = "100" }: MiniLabelProps) => {
  return (
    <div className="flex items-center gap-2.5">
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
