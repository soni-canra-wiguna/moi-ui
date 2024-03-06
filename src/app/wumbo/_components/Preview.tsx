const Preview = () => {
  return (
    <div className='w-full bg-[url("/wumbo/bg-preview.svg")] h-[1306px]'>
      <div className="flex flex-col mt-[83px] mb-[49px] py-[100px] items-center justify-center">
        <button className="px-5 py-2.5 rounded-full bg-wprimary/10 text-wprimary font-bold tracking-10 mb-4 uppercase">
          preview
        </button>
        <h1 className="text-center leading-44 font-medium text-32px text-white mb-[60px]">
          Social Feeds is a Figma design template, and <br /> everyone can use
          Figma!
        </h1>
        <div className="w-max h-full px-8 bg-white/10 rounded-[30px] pb-[40px] pt-[70px] relative mb-[60px]">
          {/* 3 dots apple navigation */}
          <div className="flex items-center gap-3 absolute left-8 top-7">
            <span className="w-[18.74px] aspect-square rounded-full bg-[#FC1F6F]" />
            <span className="w-[18.74px] aspect-square rounded-full bg-[#FFCC18]" />
            <span className="w-[18.74px] aspect-square rounded-full bg-[#1DF359]" />
          </div>
          {/* figma text */}
          <div className="absolute left-1/2 -translate-x-1/2 top-7 text-white/60 leading-30 font-medium text-[22px]">
            Figma
          </div>
          {/* play pause button */}
          <button className="flex items-center justify-center w-[150px] aspect-square rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white">
            <img
              src="/wumbo/play-button.svg"
              alt="play pause button"
              className="ml-2.5"
            />
          </button>
          {/*  */}
          <img
            src="/wumbo/img-preview.svg"
            alt="preview image"
            className="w-[928px] h-full"
          />
        </div>
        <p className="text-white/80 leading-30 font-medium text-center">
          Like the demo above, you can use Social Feeds with ease, just need to
          duplicate the template design <br /> you want, design the content, and
          export!
        </p>
      </div>
    </div>
  )
}

export default Preview
