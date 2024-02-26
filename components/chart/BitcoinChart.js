import { useState, useEffect } from "react"
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai"
import { BsCurrencyRupee } from "react-icons/bs"

import Image from "next/image";
import TradingViewWidget from "./TradingViewWidget"

const BitcoinChart = () => {
    const [price, setPrice] = useState({ inr: 0, usd: 0, chang24: 0 })
    const fetchCurrentPrice = async () => {
        const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true', {
            headers: { accept: 'application/json' }
        })
        const { bitcoin } = await res.json()
        setPrice({ inr: bitcoin.inr, usd: bitcoin.usd, chang24: bitcoin.usd_24h_change })
    }

    useEffect(() => {
        fetchCurrentPrice().catch(console.error)
    }, [])

    return (<div className="bg-white p-5 rounded-xl">
        <div className="flex items-center mb-10">
            <span>
                <Image src={'/Bitcoin.png'} alt="Bitcoin" height={30} width={30} />
            </span>
            <span className="text-xl font-semibold px-2">Bitcoin</span>
            <span className="text-sm text-gray-500">BTC</span>
            <span className="bg-gray-500 text-white text-xs p-2 ml-10 rounded-md">Rank #1</span>
        </div>
        <div className="flex items-center mb-2">
            <p className="text-2xl font-semibold">{`$${price.usd.toLocaleString()}`}</p>
            <section className="flex items-center text-xs">
                <div className={`flex items-center p-0.5 ml-5 mr-2 rounded ${price.chang24 < 0 ? 'bg-red-200 text-[#F7324C]' : 'bg-[#EBF9F4] text-[#14B079]'}`}>
                    <span className="px-1">{price.chang24 < 0 ? <AiFillCaretDown /> : <AiFillCaretUp />}</span>
                    <span>{`${price.chang24.toFixed(2)}%`}</span>
                </div>
                <span>(24h)</span>
            </section>
        </div>
        <div className="flex items-center text-sm">
            <BsCurrencyRupee />
            <p>{price.inr.toLocaleString()}</p>
        </div>
        <div className="w-full h-px bg-gray-300 block my-5" />
        <TradingViewWidget />
    </div>)
}

export default BitcoinChart