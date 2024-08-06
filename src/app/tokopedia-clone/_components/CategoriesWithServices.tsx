import { useState } from "react"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Card } from "../../../components/ui/card"
import { Title } from "./Title"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs"
import { HiOutlineDotsVertical } from "react-icons/hi"
import { Input } from "../../../components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select"
import { Button } from "../../../components/ui/button"

const Categories = () => {
  return (
    <section className="w-1/2">
      <Title className="min-h-[30px] mb-4">Kategori Pilihan</Title>
    </section>
  )
}

const Services = () => {
  const [activeTab, setActiveTab] = useState<number>(0)

  const tablists = [
    {
      id: 0,
      label: "Pulsa",
      value: "pulsa",
    },
    {
      id: 1,
      label: "Paket Data",
      value: "paketdata",
    },
    {
      id: 2,
      label: "Flight",
      value: "flight",
    },
    {
      id: 3,
      label: "Listrik PLN",
      value: "listrikpln",
    },
  ]
  return (
    <section className="w-1/2 ml-2">
      <div className="flex items-center gap-2 min-h-[30px] mb-4">
        <Title className="">Top Up & Bills</Title>
        <Title className="text-sm leading-[18px] font-openSauceBold capitalize text-tpprimary hover:text-primary-hover cursor-pointer">
          view all
        </Title>
      </div>
      <Tabs
        defaultValue="pulsa"
        className="w-full border border-tpsecondary rounded-xl"
      >
        <TabsList className="p-0 h-10 min-h-10 border-b-[1.5px] border-b-tpsecondary rounded-none w-full">
          {tablists.map((tab, i) => (
            <TabsTrigger
              value={tab.value}
              key={i}
              onClick={() => setActiveTab(i)}
              className="data-[state=active]:text-tpprimary rounded-none min-h-11 font-openSauceBold text-tpparagraph leading-6 px-6 py-0 text-sm flex-1 relative"
            >
              {tab.label}
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-tpprimary transform ${
                  activeTab == i ? "opacity-100" : "opacity-0"
                }`}
              />
            </TabsTrigger>
          ))}
          <button className="w-max px-2 border-l border-tpsecondary h-full">
            <HiOutlineDotsVertical className="text-xl text-tpparagraph" />
          </button>
        </TabsList>
        <TabsContent value="pulsa">
          <div className="flex p-1.5 flex-1">
            <div className="flex flex-1 flex-col p-1.5">
              <Title className="font-openSauceBold text-tpparagraph capitalize mb-2 leading-[18px] text-xs">
                Phone Number
              </Title>
              <Input
                className="border-tpsecondary focus-visible:ring-tpprimary/50 shadow-none h-10 rounded-2 text-[11px]"
                placeholder="Input the Number"
              />
            </div>
            <div className="flex flex-1 flex-col p-1.5">
              <Title className="font-openSauceBold text-tpparagraph capitalize mb-2 leading-[18px] text-xs">
                Nominal
              </Title>
              <Select>
                <SelectTrigger className="flex-1 focus:ring-tpprimary/50 shadow-none border-tpsecondary">
                  <SelectValue placeholder="Pick" />
                </SelectTrigger>
                <SelectContent className="bg-tpbackground font-openSauceRegular">
                  <SelectGroup>
                    <SelectItem value="1">5.000 - Rp7.000</SelectItem>
                    <SelectItem value="2">10.000 - Rp11.700</SelectItem>
                    <SelectItem value="3">15.000 - Rp15.150</SelectItem>
                    <SelectItem value="4">25.000 - Rp26.400</SelectItem>
                    <SelectItem value="5">30.000 - Rp31.000</SelectItem>
                    <SelectItem value="6">50.000 - Rp51.700</SelectItem>
                    <SelectItem value="7">100.000 - Rp102.300</SelectItem>
                    <SelectItem value="8">200.000 - Rp201.500</SelectItem>
                    <SelectItem value="9">300.000 - Rp300.500</SelectItem>
                    <SelectItem value="10">500.000 - Rp500.000</SelectItem>
                    <SelectItem value="11">1.000.000 - Rp1.000.000</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col p-1.5">
              <Title className="font-openSauceBold text-tpparagraph capitalize mb-2 leading-[18px] text-xs opacity-0">
                buy
              </Title>
              <Button className="font-openSauceExtraBold bg-tpprimary hover:bg-tpprimary h-10 leading-6 text-sm px-6 py-0 rounded-lg text-tpbackground w-max">
                Buy
              </Button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="paketdata">
          <div className="flex p-1.5 flex-1">
            <div className="flex flex-1 flex-col p-1.5">
              <Title className="font-openSauceBold text-tpparagraph capitalize mb-2 leading-[18px] text-xs">
                Phone Number
              </Title>
              <Input
                className="border-tpsecondary focus-visible:ring-tpprimary/50 shadow-none h-10 rounded-2 text-[11px]"
                placeholder="Input the Number"
              />
            </div>
            <div className="flex flex-1 flex-col p-1.5">
              <Title className="font-openSauceBold text-tpparagraph capitalize mb-2 leading-[18px] text-xs">
                Nominal
              </Title>
              <Select>
                <SelectTrigger className="flex-1 focus:ring-tpprimary/50 shadow-none border-tpsecondary">
                  <SelectValue placeholder="Pick" />
                </SelectTrigger>
                <SelectContent className="bg-tpbackground font-openSauceRegular">
                  <SelectGroup>
                    <SelectItem value="1">5.000 - Rp7.000</SelectItem>
                    <SelectItem value="2">10.000 - Rp11.700</SelectItem>
                    <SelectItem value="3">15.000 - Rp15.150</SelectItem>
                    <SelectItem value="4">25.000 - Rp26.400</SelectItem>
                    <SelectItem value="5">30.000 - Rp31.000</SelectItem>
                    <SelectItem value="6">50.000 - Rp51.700</SelectItem>
                    <SelectItem value="7">100.000 - Rp102.300</SelectItem>
                    <SelectItem value="8">200.000 - Rp201.500</SelectItem>
                    <SelectItem value="9">300.000 - Rp300.500</SelectItem>
                    <SelectItem value="10">500.000 - Rp500.000</SelectItem>
                    <SelectItem value="11">1.000.000 - Rp1.000.000</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col p-1.5">
              <Title className="font-openSauceBold text-tpparagraph capitalize mb-2 leading-[18px] text-xs opacity-0">
                buy
              </Title>
              <Button className="font-openSauceExtraBold bg-tpprimary hover:bg-tpprimary h-10 leading-6 text-sm px-6 py-0 rounded-lg text-tpbackground w-max">
                Buy
              </Button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="listrikpln">
          <div className="flex p-1.5 flex-1">
            <div className="flex flex-1 flex-col p-1.5">
              <Title className="font-openSauceBold text-tpparagraph capitalize mb-2 leading-[18px] text-xs">
                Bill Type
              </Title>
              <Select>
                <SelectTrigger className="flex-1 focus:ring-tpprimary/50 shadow-none border-tpsecondary">
                  <SelectValue placeholder="Pick" />
                </SelectTrigger>
                <SelectContent className="bg-tpbackground font-openSauceRegular">
                  <SelectGroup>
                    <SelectItem value="1">Token Listrik</SelectItem>
                    <SelectItem value="2">Tagihan Listrik</SelectItem>
                    <SelectItem value="3">PLN non-Taglis</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-1 flex-col p-1.5">
              <Title className="font-openSauceBold text-tpparagraph capitalize mb-2 leading-[18px] text-xs">
                Phone Number
              </Title>
              <Input
                className="border-tpsecondary focus-visible:ring-tpprimary/50 shadow-none h-10 rounded-2 text-[11px]"
                placeholder="Input the Number"
              />
            </div>
            <div className="flex flex-1 flex-col p-1.5">
              <Title className="font-openSauceBold text-tpparagraph capitalize mb-2 leading-[18px] text-xs">
                Nominal
              </Title>
              <Select>
                <SelectTrigger className="flex-1 focus:ring-tpprimary/50 shadow-none border-tpsecondary">
                  <SelectValue placeholder="Pick" />
                </SelectTrigger>
                <SelectContent className="bg-tpbackground font-openSauceRegular">
                  <SelectGroup>
                    <SelectItem value="1">5.000 - Rp7.000</SelectItem>
                    <SelectItem value="2">10.000 - Rp11.700</SelectItem>
                    <SelectItem value="3">15.000 - Rp15.150</SelectItem>
                    <SelectItem value="4">25.000 - Rp26.400</SelectItem>
                    <SelectItem value="5">30.000 - Rp31.000</SelectItem>
                    <SelectItem value="6">50.000 - Rp51.700</SelectItem>
                    <SelectItem value="7">100.000 - Rp102.300</SelectItem>
                    <SelectItem value="8">200.000 - Rp201.500</SelectItem>
                    <SelectItem value="9">300.000 - Rp300.500</SelectItem>
                    <SelectItem value="10">500.000 - Rp500.000</SelectItem>
                    <SelectItem value="11">1.000.000 - Rp1.000.000</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col p-1.5">
              <Title className="font-openSauceBold text-tpparagraph capitalize mb-2 leading-[18px] text-xs opacity-0">
                pay
              </Title>
              <Button className="font-openSauceExtraBold bg-tpprimary hover:bg-tpprimary h-10 leading-6 text-sm px-6 py-0 rounded-lg text-tpbackground w-max">
                Pay
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}

const CategoriesWithServices = () => {
  return (
    <MaxWidthWrapper className="mb-6">
      <Card className="w-full shadow-sm p-4 rounded-xl">
        <div className="flex w-full mb-6 justify-between">
          <Categories />
          <Services />
        </div>
      </Card>
    </MaxWidthWrapper>
  )
}

export default CategoriesWithServices
