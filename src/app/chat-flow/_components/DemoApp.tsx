import MaxWidthWrapper from "./MaxWidthWrapper"

const DemoApp = () => {
  return (
    <div className="py-[50px] w-full h-full bg-[#f8b479] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[480px] h-full bg-gradient-to-t from-[#fdc87e]" />
      <MaxWidthWrapper>
        <div className="grid grid-cols-2 h-[728px] w-full gap-16">
          <div className="flex flex-col gap-10 justify-center">
            <div className="flex flex-col gap-[10px]">
              <h1 className="font-bold font-grostekBold leading-[56px] text-[38px] ">
                Experience the Power of Our Live Chat
              </h1>
              <p className="text-[#0D082C]/60 leading-[26px]">
                See for yourself how our live chat can help you connect with
                your customers and improve their experience on your website.
                Check out a screenshot of our live chat in action.
              </p>
            </div>
            <button className="bg-[#0D082C] rounded-full text-white leading-[30px] text-lg  px-9 py-4 w-max">
              Book a Demo
            </button>
            <div className="grid grid-cols-2 gap-[30px]">
              <div className="flex flex-col">
                <h4 className="leading-[30px] font-semibold">
                  Improving Customer Support
                </h4>
                <p className="text-[#0D082C]/60 leading-6 text-sm">
                  A small e-commerce company implemented a live chat feature on
                  their website and saw an improvement in customer satisfaction
                  and an increase in sales.
                </p>
              </div>
              <div className="flex flex-col">
                <h4 className="leading-[30px] font-semibold">Boosting Sales</h4>
                <p className="text-[#0D082C]/60 leading-6 text-sm">
                  A small e-commerce company implemented a live chat feature on
                  their website and saw an improvement in customer satisfaction
                  and an increase in sales.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src="/chat-flow/demoimage.svg" className="z-20" />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default DemoApp

// #f7b248
// #fdc87e
