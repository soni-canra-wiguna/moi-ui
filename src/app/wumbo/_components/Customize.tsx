import { cn } from "../../../lib/utils"
import MaxWidthWrapper from "./MaxWidthWrapper"

const Customize = () => {
  const templates = [
    {
      label: "Font Family",
      desc: "use your favorite font in the design template you choose. Figma has dozens of fonts, don't worry about font!",
    },
    {
      label: "colors",
      desc: " adjust the color of the template design with the brand you have. Set a solid color or gradient, both of which are easy to customize.",
    },
    {
      label: "much more",
      desc: "set more properties to suit your desires, all the designs own proportions optimized for social media.",
    },
  ]
  return (
    <MaxWidthWrapper className="my-[100px] grid grid-cols-2 gap-[30px]">
      <div className="flex gap-7 relative w-full h-[591px]">
        <div className="flex items-end">
          <div className="flex flex-col gap-7 items-end">
            <CustomSettingImage
              className="w-[232px] h-[205px]"
              src="/wumbo/custom-1.svg"
              alt="cutom image 1"
            />
            <CustomSettingImage
              className="w-[194px] h-[259px]"
              src="/wumbo/custom-3.svg"
              alt="cutom image 3"
            />
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex flex-col gap-7">
            <CustomSettingImage
              className="w-[243px] h-[331px]"
              src="/wumbo/custom-2.svg"
              alt="cutom image 2"
            />
            <CustomSettingImage
              className="w-[215px] h-[135px]"
              src="/wumbo/custom-4.svg"
              alt="cutom image 4"
            />
          </div>
        </div>
        {/* effect */}
        <span className="absolute -left-32 bottom-10 w-[430px] h-[430px] rounded-[40px] bg-gradient-to-b from-wprimary/10 rotate-[30deg] z-[1]" />
        <span className="absolute -left-60 -bottom-8 w-[430px] h-[430px] rounded-[40px] bg-gradient-to-b from-wprimary/10 rotate-[30deg]" />
      </div>
      <div className="flex items-center w-full h-full">
        <div className="flex flex-col gap-4">
          <h1 className="text-32px font-medium leading-44 text-wdark">
            Design Templates Are Highly <br /> Customizable,{" "}
            <span className="underline underline-offset-2">
              it's easy to use
            </span>
            !
          </h1>
          <p className="leading-30 text-wmuted">
            All design templates are ready to use, meaning you only need to
            focus on content or if necessary, adjust some properties such as
            color, font, font size and other properties to match your brand.
          </p>
          <div className="flex flex-col">
            {templates.map((template) => (
              <div key={template.label} className="flex gap-2.5">
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
    </MaxWidthWrapper>
  )
}

export default Customize

interface CustomSettingImageProps {
  className?: string
  src: string
  alt?: string
}

const CustomSettingImage = ({
  className,
  src,
  alt,
}: CustomSettingImageProps) => {
  return (
    <div
      className={cn(
        "bg-white rounded-[10px] shadow-2xl shadow-wprimary/30 z-10 relative",
        className
      )}
    >
      <img src={src} alt={alt} className="w-full h-full" />
    </div>
  )
}
