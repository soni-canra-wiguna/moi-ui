import MaxWidthWrapper from "./MaxWidthWrapper"

const Template = () => {
  const templates = [
    {
      label: "Insights",
      desc: "create content that contains insights on design, coding, or recommendations for the best tourist attractions.",
    },
    {
      label: "promotions",
      desc: "get more potential customers by making product or service promotions in a more attractive way.",
    },
    {
      label: "much more",
      desc: "design more types of content with Social Feeds and increase followers on your social media accounts.",
    },
  ]
  return (
    <MaxWidthWrapper className="my-[100px] grid grid-cols-2 gap-11">
      <div className="flex items-center w-full h-full">
        <div className="flex flex-col gap-4">
          <h1 className="text-32px font-medium leading-44 text-wdark">
            There are{" "}
            <span className="underline underline-offset-2">
              80+ Pre-Designed
            </span>{" "}
            <br /> Templates Ready to Use
          </h1>
          <p className="leading-30 text-wmuted">
            Many design choices make it free for you to make a different design
            every time you post. There are 80+ designs with 10+ different
            layouts. Each layout has several designs with the same theme, just
            need to focus on the content!
          </p>
          <div className="flex flex-col w-full">
            {templates.map((template) => (
              <div key={template.label} className="flex gap-2.5 w-full">
                <span className="w-6 h-4 bg-wprimary mt-2.5" />
                <p className="text-wdark leading-30">
                  <span className="font-bold text-wprimary capitalize">
                    {template.label} :{" "}
                  </span>
                  {template.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 relative">
        <div className="flex gap-8 items-end z-10">
          <img
            src="/wumbo/hero-1.svg"
            alt="hero 1"
            className="w-[146px] h-[146px] shadow-lg shadow-wprimary/30"
          />
          <img
            src="/wumbo/hero-2.svg"
            alt="hero 2"
            className="w-[227px] h-[227px] shadow-lg shadow-wprimary/30"
          />
          <img
            src="/wumbo/hero-5.svg"
            alt="hero 5"
            className="w-[191px] h-[191px] shadow-lg shadow-wprimary/30"
          />
        </div>
        <div className="flex items-center justify-center z-10">
          <img
            src="/wumbo/designer-learn-code.svg"
            alt="designer learn code"
            className="w-[343px] h-[343px] shadow-lg shadow-wprimary/30"
          />
        </div>

        <span className="absolute -top-8 -right-96 w-[457px] aspect-square rounded-full bg-gradient-to-r from-wprimary/10 via-wprimary/[0.03]" />
        <span className="absolute -bottom-20 -right-96 w-[612px] aspect-square rounded-[257px] bg-gradient-to-r from-wprimary/10 via-wprimary/[0.03]" />
      </div>
    </MaxWidthWrapper>
  )
}

export default Template
