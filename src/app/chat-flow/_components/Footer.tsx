import getYear from "../../../lib/date"
import MaxWidthWrapper from "./MaxWidthWrapper"

const Footer = () => {
  const year = getYear()

  const items = [
    {
      title: "products",
      urls: ["download app", "integrations", "case studies", "api"],
    },
    {
      title: "COMPANY",
      urls: [
        "About Us",
        "Contact",
        "Privacy Policy",
        "Terms of Service",
        "help",
      ],
    },
    {
      title: "ESSENTIALS",
      urls: ["Documentation", "Playground", "Sandbox", "Source Code"],
    },
    {
      title: "GET IN TOUCH",
      urls: ["Twitter", "facebook", "dribble"],
    },
  ]
  return (
    <MaxWidthWrapper className="flex flex-col">
      <div className="py-[50px] flex items-center justify-between">
        <div className="flex flex-col gap-[10px]">
          <h1 className="leading-[54px] font-bold text-2xl">
            Sign Up and Start Chatting Today
          </h1>
          <p className="text-[#]/60 leading-[26px] w-[742px]">
            Don't wait any longer to start improving the user experience on your
            website. Sign up for our live chat product and start connecting with
            your customers in real-time.
          </p>
        </div>
        <button className="bg-[#0D082C] rounded-full text-white leading-[30px] text-lg px-9 py-4 w-max capitalize">
          sign up now
        </button>
      </div>
      <hr className="border-0 h-px bg-[#0D082C]/10 rounded-full" />
      <div className="py-[50px] flex flex-col w-full">
        <div className="grid grid-cols-4 w-full">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col gap-5">
              <h3 className="font-bold tracking-[10%] text-sm">{item.title}</h3>
              <ul className="flex flex-col gap-2">
                {item.urls.map((url) => (
                  <li
                    key={url}
                    className="leading-[28px] text-[#0D082C]/80 hover:text-[#4635F3]"
                  >
                    <a href="/chat-flow">{url}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className="border-0 h-px bg-[#0D082C]/10 my-5 rounded-full" />
        <h6 className="text-xs font-bold text-center text-[#0D082C]/40">
          COPYRIGHT © {year} — DESIGN BY NAUVAL
        </h6>
      </div>
    </MaxWidthWrapper>
  )
}

export default Footer
