import { CheckCircle2 } from "lucide-react"
import MaxWidthWrapper from "./MaxWidthWrapper"

interface PlanProps {
  level_plan: string
  price: number
  profits: string[]
  color: string
}

const Pricing = () => {
  const plans = [
    {
      level_plan: "Starter",
      price: 9.99,
      profits: [
        "Real-time chat",
        "Customization options",
        "File sharing",
        "Visitoring tracking",
      ],
      color: "#4635F3",
    },
    {
      level_plan: "professional",
      price: 29.99,
      profits: [
        "All features in the 'Starter plan'",
        "Mobile app",
        "Integration with other tools",
        "Multilingual support",
      ],
      color: "#F5AC76",
    },
    {
      level_plan: "enterprise",
      price: 99.99,
      profits: [
        "All features in the 'Professional plan",
        "Dedicated account manager",
        "Premium support",
        "Custom integration options",
      ],
      color: "#FF5391",
    },
  ]

  return (
    <MaxWidthWrapper className="py-[100px] flex flex-col gap-20">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold font-grostekBold leading-[54px] w-[742px] mb-[10px]">
          Affordable Plans for Any Business
        </h1>
        <p className="w-[556px] leading-[26px] text-[#0D082C]/60">
          Our pricing plans are designed to be affordable for businesses of all
          sizes. From our "Starter" plan to our "Enterprise" option, we have a
          plan that will fit your budget and meet your live chat needs.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-x-[30px]">
        {plans.map((plan) => (
          <PlanItem {...plan} key={plan.level_plan} />
        ))}
      </div>
    </MaxWidthWrapper>
  )
}

export default Pricing

const PlanItem = ({ level_plan, price, profits, color }: PlanProps) => {
  return (
    <div className="rounded-md flex flex-col w-full overflow-hidden bg-white shadow-lg shadow-black/20">
      <div
        style={{ background: color }}
        className={`text-center rounded-none px-2.5 py-[15px] text-sm font-bold text-white tracking-wider uppercase`}
      >
        {level_plan}
      </div>
      <div className="p-[30px]">
        <h1 className="mt-[10px] text-[32px] font-bold font-grostekBold">
          ${price}/month
        </h1>
        <hr className="border-0 w-full h-px bg-black/[5%] my-5" />
        <div className="flex flex-col gap-[15px] mb-5">
          {profits.map((profit) => (
            <div key={profit} className="flex items-center gap-[10px]">
              <CheckCircle2 color={color} size={16} />
              <p className="font-medium leading-[22px] text-[#0D082C]/60">
                {profit}
              </p>
            </div>
          ))}
        </div>
        <button
          style={{ background: color }}
          className="p-[10px] font-medium leading-[22px] text-white capitalize rounded-md w-full text-center hover:brightness-90 transition-color duration-300 ease-in-out"
        >
          choose
        </button>
      </div>
    </div>
  )
}
