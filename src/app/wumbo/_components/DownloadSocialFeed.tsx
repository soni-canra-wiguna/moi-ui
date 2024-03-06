import MaxWidthWrapper from "./MaxWidthWrapper"
import { Download, Twitter } from "lucide-react"

const DownloadSocialFeed = () => {
  return (
    <MaxWidthWrapper className="py-[100px] flex flex-col items-center justify-center">
      <button className="font-bold text-wprimary tracking-10 px-5 py-2.5 rounded-full bg-wprimary/10 mb-4 uppercase">
        download
      </button>
      <h1 className="text-center capitalize font-medium leading-44 text-wdark text-32px mb-4">
        download figma{" "}
        <span className="text-wprimary underline underline-offset-2">
          social feed
        </span>{" "}
        now
      </h1>
      <p className="leading-30 text-muted mb-10 text-center">
        Figma Social Feeds is free for everyone, create content for promotion,
        share <br /> insights and get creative on the internet.
      </p>
      <div className="flex items-center gap-4">
        <button className="px-[30px] py-[15px] bg-wprimary rounded-md text-white font-bold flex items-center gap-4 capitalize shadow-xl shadow-wprimary/30">
          <Download size={24} />
          <span>download</span>
        </button>
        <button className="px-[30px] py-[15px] relative bg-[#1DA1F2] rounded-md text-white font-bold flex items-center gap-4 capitalize shadow-xl shadow-[#1DA1F2]/30">
          <span>say thanks</span>
          <Twitter size={24} />

          {/* tweet arrow */}
          <img
            src="/wumbo/arrow-circle.svg"
            alt="arrow cirlce"
            className="absolute -right-[70px] -bottom-8"
          />
          <img
            src="/wumbo/tweet-now.svg"
            alt="text tweet now"
            className="absolute -right-28 -bottom-16"
          />
        </button>
      </div>
    </MaxWidthWrapper>
  )
}

export default DownloadSocialFeed
