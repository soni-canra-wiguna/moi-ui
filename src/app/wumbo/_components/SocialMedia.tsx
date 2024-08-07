import * as React from "react"
import { ArrowRight } from "lucide-react"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { useState } from "react"
import { cn } from "@/lib/utils"

const SocialMedia = () => {
  const [tabs, setTabs] = useState(1)

  const tabscontent = [
    {
      title: "instagram",
      image: "/wumbo/social-ig.svg",
    },
    {
      title: "facebook",
      image: "/wumbo/designer-learn-code.svg",
    },
    {
      title: "Twitter",
      image: "/wumbo/hero-4.svg",
    },
  ]

  return (
    <MaxWidthWrapper className="py-[100px] flex gap-[160px] w-full max-w-[1100px]">
      <div className="flex flex-col w-[574px]">
        <h1 className="leading-44 font-medium text-32px text-wdark mb-4">
          Optimized For Posts on{" "}
          <span className="underline underline-offset-2">
            All Social <br /> Media
          </span>
          : Facebook, Instagram & Twitter
        </h1>
        <p className="leading-30 text-wmuted mb-10">
          The design has an aspect ratio of 1:1 which the majority of social
          media recommends. The image quality is also high (1080 * 1080), you
          can further increase the image quality to 2x or more so that the
          design looks sharper.
        </p>
        <div className="flex flex-col gap-2">
          {tabscontent.map((tab, index) => (
            <TabsTrigger
              key={index + 1}
              tabs={tabs}
              setTabs={setTabs}
              index={index + 1}
            >
              {tab.title}
            </TabsTrigger>
          ))}
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center relative">
        {tabscontent.map((tab, index) => (
          <TabsContent
            key={index + 1}
            tabs={tabs}
            index={index + 1}
            image={tab.image}
            title={tab.title}
          />
        ))}

        <span className="absolute top-12 left-20 w-[542px] h-[542px] rounded-full bg-gradient-to-r from-wprimary/10" />
      </div>
    </MaxWidthWrapper>
  )
}

export default SocialMedia

interface TabsTriggerProps {
  children: React.ReactNode
  index: number
  tabs?: number
  setTabs: (tabs: number) => void
  className?: string
}

const TabsTrigger = ({
  children,
  tabs,
  setTabs,
  index,
  className,
}: TabsTriggerProps) => {
  return (
    <button
      onClick={() => setTabs(index)}
      className={cn(
        `w-full text-wdark px-[35px] py-[25px] hover:bg-wprimary/10 rounded-[10px]  flex items-center justify-between leading-30 font-bold ${
          tabs === index &&
          "bg-wprimary text-white shadow-lg shadow-wprimary/30 hover:bg-wprimary"
        }`,
        className
      )}
    >
      <p>
        preview for <span className="capitalize">{children}</span>
      </p>
      <ArrowRight size={24} />
    </button>
  )
}

interface TabsContent {
  tabs: number
  index: number
  image: string
  title: string
}

const TabsContent = ({ tabs, index, image, title }: TabsContent) => {
  return (
    <>
      {tabs === index && (
        <div className="w-[366px] h-[456px] rounded-[27px] shadow-2xl shadow-wprimary/40 z-20 bg-white">
          <img src={image} alt={title} className="w-full h-full" />
        </div>
      )}
    </>
  )
}
