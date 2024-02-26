import Head from "next/head"
import BitcoinChart from "@/components/chart/BitcoinChart"
import GetStarted from "@/components/trend/GetStarted"
import TrendingCoins from "@/components/trend/TrendingCoins"
import Topbar from "@/components/sentiment/Topbar"
import Sentiment from "@/components/sentiment/Sentiment"

export default function Home() {
  return (<main className="min-h-screen">
    <Head>
      <title>KoinX Interview</title>
    </Head>
    <div className="flex flex-col sm:flex-row p-2 sm:p-10">
      <section className="w-full sm:w-2/3 sm:pr-3">
        <BitcoinChart />
        <Topbar active={'Sentiment'} />
        <Sentiment />
      </section>
      <section className="w-full h-fit sm:w-1/3">
        <GetStarted />
        <TrendingCoins />
      </section>
    </div>
  </main>)
}
