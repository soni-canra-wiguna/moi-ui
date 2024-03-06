import { ArrowUpRightFromSquare } from "lucide-react"
import MaxWidthWrapper from "./MaxWidthWrapper"

const FigmaSocialFeed = () => {
  const figmaFeeds = [
    "Design content for products to be sold",
    "Design content to offer services",
    "Create product that include Social Feeds as features in it",
    "Resell it without making significant changes",
    "Create design generator tool that include Social Feeds",
  ]

  return (
    <MaxWidthWrapper className="py-[100px] grid grid-cols-2 gap-[85px]">
      <div className="flex items-center justify-center relative">
        <div className="w-[579px] h-[323px] rounded-[10px] bg-white overflow-hidden relative z-10 shadow-2xl shadow-wprimary/30">
          <img
            src="/wumbo/socialfeed-img.svg"
            alt="social feed image"
            className="w-full h-full"
          />
        </div>

        <img
          src="/wumbo/socialfeed-bg.svg"
          alt="social feed image"
          className="absolute w-[540px] h-full -left-32 top-4 z-[1]"
        />
      </div>
      <div className="flex items-center w-full h-full">
        <div className="flex flex-col gap-4">
          <h1 className="text-32px font-medium leading-44 text-wdark">
            Figma Social Feeds is Free For <br />{" "}
            <span className="text-wprimary underline underline-offset-2">
              personal
            </span>{" "}
            or{" "}
            <span className="text-wprimary underline underline-offset-2">
              Commercial
            </span>{" "}
            Use
          </h1>
          <p className="leading-30 text-wmuted mb-4">
            Figma Social Feeds is licensed under CC BY 4.0, which means you are
            free to use template designs for personal or commercial purposes
            with attribution to the template design creator.
          </p>
          <div className="flex flex-col gap-2.5 mb-[30px]">
            {figmaFeeds.map((feed, i) => (
              <div key={i} className="flex items-center gap-4">
                <img
                  src={
                    i === 3 || i === 4
                      ? "/wumbo/feed-close.svg"
                      : "/wumbo/feed-check.svg"
                  }
                  alt={feed}
                  className="w-6 h-6"
                />
                <p className="text-wdark leading-30">{feed}</p>
              </div>
            ))}
          </div>
          <button className="flex items-center gap-[15px] px-[25px] py-[15px] rounded-md border-2 border-wprimary font-bold text-wprimary hover:bg-wprimary hover:text-white wtransition w-max">
            <span className="capitalize">Read License</span>
            <ArrowUpRightFromSquare size={24} />
          </button>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default FigmaSocialFeed
