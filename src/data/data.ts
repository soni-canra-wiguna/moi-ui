export interface DataProps {
  image: string
  title: string
  slug: string
  desc?: string
  responsive?: string[]
}

export const datas = [
  {
    image: "/thumbnails/tokopedia.png",
    title: "Tokopedia Clone",
    slug: "/tokopedia-clone",
    desc: "tokopedia clone",
    responsive: ["desktop"],
  },
  {
    image: "/thumbnails/wb.png",
    title: "Website and Brands",
    slug: "website-branding",
    desc: "w&B adalah aplikasi pengantar pesan",
    responsive: ["mobile", "tablet", "desktop"],
  },
  {
    image: "/thumbnails/team-flow.png",
    title: "Team Flow",
    slug: "/team-flow",
    desc: "team flow adalah aplikasi yang di gunakan untuk mempermudah developer untuk berkolaborasi dengan tim",
    responsive: ["desktop"],
  },
  {
    image: "/thumbnails/chat-rechat.png",
    title: "Chat n' Rechat",
    slug: "/chat-rechat",
    desc: "chart n' rechat adalah aplikasi chat yang penuh bug, lebih baik pake WA aja",
    responsive: ["desktop"],
  },
  {
    image: "/thumbnails/chat-flow.png",
    title: "Chat Flow",
    slug: "/chat-flow",
    desc: "chart flow adalah aplikasi pinjol berkedok chat, jadi jangan di pake.",
    responsive: ["desktop"],
  },
  {
    image: "/thumbnails/e-book.png",
    title: "E-book Tailwind CSS",
    slug: "/e-book",
    desc: "e book ini berguna untuk kamu yang dengki dan lelah dengan css murni, jadi pakelah tailwind",
    responsive: ["desktop"],
  },
  {
    image: "/thumbnails/wumbo.png",
    title: "Wumbo",
    slug: "/wumbo",
    desc: "Figma social media content templates for branding, marketing, insights, and more. Free for personal and commercial use!",
    responsive: ["desktop"],
  },
  {
    image: "/thumbnails/random-shapes.png",
    title: "Random Shapes",
    slug: "/random-shapes",
    desc: "hanya kegabutan pribadi",
    responsive: ["mobile", "tablet", "desktop"],
  },
]
