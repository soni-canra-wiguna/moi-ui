import {
  Bell,
  ChevronDown,
  Mail,
  MapPin,
  ShoppingCart,
  Smartphone,
} from "lucide-react"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { NavLink } from "react-router-dom"
import { cn } from "@/lib/utils"
import { GoSearch } from "react-icons/go"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

const TopBar = () => {
  const topbarItem = [
    {
      label: "about tokopedia",
      href: "/",
    },
    {
      label: "mitra tokopedia",
      href: "/",
    },
    {
      label: "pusat edukasi seller",
      href: "/",
    },
    {
      label: "promo",
      href: "/",
    },
    {
      label: "tokopedia care",
      href: "/",
    },
  ]

  return (
    <div className="bg-tpsecondary text-tpparagraph text-xs">
      <MaxWidthWrapper className="flex items-center justify-between max-w-full px-8">
        <div className="flex items-center gap-2">
          <Smartphone className="size-5 stroke-[1.5]" />
          <p className="leading-8 hover:text-tpphover cursor-pointer">
            Download Tokopedia App
          </p>
        </div>
        <nav className="flex items-center gap-8">
          {topbarItem.map((item, i) => (
            <NavLink to={item.href} key={i}>
              <p className="leading-8 hover:text-tpphover cursor-pointer capitalize ml-1">
                {item.label}
              </p>
            </NavLink>
          ))}
        </nav>
      </MaxWidthWrapper>
    </div>
  )
}

const Navbar = () => {
  function Logo() {
    return (
      <NavLink to="/" className="ml-1 mt-1">
        <img
          src="/tokopedia-clone/tokopedia-logo.png"
          className="w-[150px] h-full"
          alt="logo tokopedia"
        />
      </NavLink>
    )
  }

  function TpInput() {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [isFocusInput, setIsFocusInput] = useState(false)

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.addEventListener("focus", () => setIsFocusInput(true))
        inputRef.current.addEventListener("blur", () => setIsFocusInput(false))
      }

      return () => {
        if (inputRef.current) {
          inputRef.current.removeEventListener("focus", () =>
            setIsFocusInput(true)
          )
          inputRef.current.removeEventListener("blur", () =>
            setIsFocusInput(false)
          )
        }
      }
    }, [])

    return (
      <div
        className={cn(
          "w-[49%] h-[40px] flex items-center gap-2 px-2 border border-tpinput rounded-lg",
          isFocusInput && "border-tpprimary"
        )}
      >
        <GoSearch className="text-tpparagraph text-2xl" />
        <input
          ref={inputRef}
          className="h-full w-full focus:outline-none focus:ring-none outline-none py-2 text-sm leading-5 text-tptext placeholder:capitalize placeholder:text-tpparagraph"
          placeholder="cari di tokopedia"
        />
      </div>
    )
  }

  function Menu() {
    return (
      <nav className="flex items-center ml-10">
        <Button
          className="size-12 hover:bg-tpsecondary text-tptext shadow-none rounded-lg"
          size="icon"
        >
          <ShoppingCart className="size-6 stroke-[1.5]" />
        </Button>
        <Button
          className="size-12 hover:bg-tpsecondary text-tptext shadow-none rounded-lg"
          size="icon"
        >
          <Bell className="size-6 stroke-[1.5]" />
        </Button>
        <Button
          className="size-12 hover:bg-tpsecondary text-tptext shadow-none rounded-lg"
          size="icon"
        >
          <Mail className="size-6 stroke-[1.5]" />
        </Button>
      </nav>
    )
  }

  function RigthBar() {
    function Store() {
      return (
        <button className="ml-[22px] w-[10%]">
          <div className="flex items-center gap-2 rounded-lg hover:bg-tpsecondary w-[98%] px-1.5 h-10">
            <div className="size-8 rounded-full overflow-hidden">
              <img src="/tokopedia-clone/store.png" className="size-full" />
            </div>
            <p className="text-sm text-tptext capitalize">Toko</p>
          </div>
        </button>
      )
    }

    function Account() {
      return (
        <button className="w-[10%]">
          <div className="flex items-center gap-2 rounded-lg hover:bg-tpsecondary w-[98%] px-1.5 h-10">
            <div className="size-8 rounded-full overflow-hidden">
              <img
                src="/tokopedia-clone/default-image-account.png"
                className="size-full"
              />
            </div>
            <p className="text-sm text-tptext capitalize">You Deer</p>
          </div>
        </button>
      )
    }

    return (
      <>
        <Store />
        <Account />
      </>
    )
  }

  const bottomNavItems = [
    {
      label: "keyboard gaming",
      href: "/",
    },
    {
      label: "kabel type c",
      href: "/",
    },
    {
      label: "sepatu roda",
      href: "/",
    },
    {
      label: "monitor",
      href: "/",
    },
    {
      label: "setrika uap",
      href: "/",
    },
    {
      label: "laptop second",
      href: "/",
    },
  ]

  return (
    <div className="w-full bg-tpbackground border-b border-tpsecondary">
      <div className="w-full items-start px-8">
        <div className="h-16 flex items-center">
          <Logo />
          <button
            className={cn(
              "text-tptext text-sm capitalize leading-[18px] ml-6 mt-px mr-2 p-2 "
            )}
          >
            Category
          </button>
          <TpInput />
          <Menu />
          <div className="h-6 w-[1.5px] bg-tpsecondary ml-6" />
          <RigthBar />
        </div>
      </div>
      <MaxWidthWrapper className="max-w-full px-8">
        <div className="w-full pl-[260px] flex items-center justify-between pb-1.5">
          <nav className="flex items-center">
            {bottomNavItems.map((item, i) => (
              <NavLink to={item.href} key={i}>
                <p className="leading-4 text-tpparagraph hover:text-tpphover cursor-pointer capitalize mr-3 text-xs">
                  {item.label}
                </p>
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center text-tptext text-sm">
            <MapPin className="size-5 stroke-[1.5] mr-1" />
            <div className="leading-4 w-max flex items-center gap-1.5">
              Dikirim ke
              <div className="font-bold flex items-center gap-1">
                Jakarta Utara <ChevronDown className="size-4 mt-[2px]" />
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default function Header() {
  return (
    <header className="w-full flex flex-col fixed top-0 left-0 z-50">
      <TopBar />
      <Navbar />
    </header>
  )
}
