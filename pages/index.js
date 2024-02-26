import { AiOutlineDoubleRight } from "react-icons/ai"

import Head from "next/head"
import BitcoinChart from "@/components/chart/BitcoinChart"
import GetStarted from "@/components/trend/GetStarted"
import TrendingCoins from "@/components/trend/TrendingCoins"
import Topbar from "@/components/sentiment/Topbar"
import Sentiment from "@/components/sentiment/Sentiment"
import Bitcoin from "@/components/about/Bitcoin"

export default function Home() {
  return (<main className="min-h-screen p-2 sm:p-10">
    <Head>
      <title>KoinX Interview</title>
    </Head>
    <p className="text-xs flex items-center mb-5">
      <span>Cryptocurrencies</span>
      <span className="px-2"><AiOutlineDoubleRight /></span>
      <span className="font-semibold">Bitcoin</span>
    </p>
    <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0">
      <section className="w-full sm:w-2/3 sm:pr-3 space-y-5">
        <BitcoinChart />
        <Topbar active={'Sentiment'} />
        <Sentiment />
        <Bitcoin />
      </section>
      <section className="w-full h-fit sm:w-1/3 space-y-5">
        <GetStarted />
        <TrendingCoins />
      </section>
    </div>
  </main>)
}
