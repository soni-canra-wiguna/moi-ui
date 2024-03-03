import MaxWidthWrapper from "./MaxWidthWrapper"

const Reason = () => {
  return (
    <MaxWidthWrapper className="py-[100px] flex flex-col">
      <div className="flex flex-col text-center items-center">
        <h3 className="font-semibold text-sm tracking-[10%] mb-[15px]">
          NGGAK HARUS SIH SEBENERNYA
        </h3>
        <h1 className="text-[28px] leading-10 mb-[10px]">
          Kenapa Harus Pakai Chat N’ Rechat?
        </h1>
        <p className="text-[#0C1B4D]/60 leading-6 w-[493px] mb-[70px]">
          Sebenernya yang bagus itu sih WhatsApp loh, mending pake WhatsApp aja
          deh. Yaudah berikut ini adalah fitur-fitur WhatsApp.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-[30px]">
        <div className="flex flex-col gap-10 items-center">
          <div className="w-[170px] height-[170px]">
            <img
              src="/chat-rechat/keeptouch1.svg"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-[10px] items-center text-center">
            <h4 className="text-lg leading-[26px]">Groups to keep in touch</h4>
            <p className="leading-[26px] text-[#0C1B4D]/60">
              Keep in touch with the groups of people that matter the most, like
              your family or coworkers. With group chats, you can share
              messages, photos, and videos.
            </p>
          </div>
        </div>
        {/*  */}

        {/*  */}
        <div className="flex flex-col gap-10 items-center">
          <img
            src="/chat-rechat/reliablemessaging.svg"
            alt=""
            className="w-[250px] height-[170px]"
          />
          <div className="flex flex-col gap-[10px] items-center text-center">
            <h4 className="text-lg leading-[26px]">
              Simple, Reliable Messaging
            </h4>
            <p className="leading-[26px] text-[#0C1B4D]/60">
              Message your friends and family for free*. WhatsApp uses your
              phone's Internet connection to send messages so you can avoid SMS
              fees.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10 items-center">
          <div className="w-[170px] height-[170px]">
            <img
              src="/chat-rechat/speakfreakly.svg"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-[10px] items-center text-center">
            <h4 className="text-lg leading-[26px]">Speak Freely</h4>
            <p className="leading-[26px] text-[#0C1B4D]/60">
              With voice calls, you can talk to your friends and family for
              free*, even if they're in another country. And with free* video
              calls, you can have face-to-face conversations.
            </p>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default Reason
