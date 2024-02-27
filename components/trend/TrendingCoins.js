import { useState, useEffect } from "react"
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai"

import Image from "next/image"

const TrendingCoins = () => {
    const [trendingCoins, setTrendingCoins] = useState([])
    const fetchTrendingCoins = async () => {
        const res = await fetch('https://api.coingecko.com/api/v3/search/trending', {
            headers: { accept: 'application/json' }
        })
        const { coins } = await res.json()
        coins.sort((a, b) => b.item.data.price_change_percentage_24h.usd - a.item.data.price_change_percentage_24h.usd)
        setTrendingCoins(coins.slice(0, 3))
    }

    useEffect(() => {
        fetchTrendingCoins().catch(console.error)
    }, [])

    return (<div className="bg-white rounded-md space-y-5 p-5">
        <p className="text-xl font-semibold mb-5">Trending Coins (24h)</p>
        {trendingCoins.map((coin, i) =>
            <div key={i} className="w-full flex justify-between">
                <section className="text-sm flex items-center">
                    <Image src={coin.item.thumb} alt="coin" width={20} height={20} />
                    <span className="px-2">{`${coin.item.name} (${coin.item.symbol})`}</span>
                </section>
                <div className={`h-fit text-xs flex items-center p-0.5 ml-5 mr-2 rounded ${coin.item.data.price_change_percentage_24h.usd < 0 ? 'bg-red-200 text-[#F7324C]' : 'bg-[#EBF9F4] text-[#14B079]'}`}>
                    <span className="px-1">{coin.item.data.price_change_percentage_24h.usd < 0 ? <AiFillCaretDown /> : <AiFillCaretUp />}</span>
                    <span>{`${coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%`}</span>
                </div>
            </div>
        )}
    </div>)
}

export default TrendingCoins