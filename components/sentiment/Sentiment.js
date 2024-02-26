import Events from "./Events"
import Image from "next/image"

const Sentiment = () => {
    return (<div className="bg-white p-5 rounded-xl space-y-5">
        <p className="text-xl font-semibold mb-5">Sentiment</p>
        <section>
            <div className="flex items-center mb-4">
                <span className="text-lg font-semibold">Key Events</span>
                <Image src={'/Info.png'} alt="Info" width={20} height={20} />
            </div>
            <Events />
        </section>
        <section>
            <div className="flex items-center mb-4">
                <span className="text-lg font-semibold">Analyst Estimates</span>
                <Image src={'/Info.png'} alt="Info" width={20} height={20} />
            </div>
            <div className="flex">
                <aside className="h-28 w-28 flex justify-center items-center text-4xl font-semibold bg-[#EBF9F4] text-[#14B079] rounded-full">
                    76<span className="text-lg">%</span>
                </aside>
                <div className="flex py-3 ml-10">
                    <section className="flex flex-col space-y-3">
                        <span className="text-sm px-5">Buy</span>
                        <span className="text-sm px-5">Hold</span>
                        <span className="text-sm px-5">Sell</span>
                    </section>
                    <div className="flex flex-col space-y-4 mt-1">
                        <section className="flex items-center">
                            <div className="block h-1 bg-[#14B079] w-[300px] rounded" />
                            <span className="text-xs px-2">76%</span>
                        </section>
                        <section className="flex items-center">
                            <div className="block h-1 bg-[#C7C8CE] w-[32px] rounded" />
                            <span className="text-xs px-2">8%</span>
                        </section>
                        <section className="flex items-center">
                            <div className="block h-1 bg-[#F7324C] w-[64px] rounded" />
                            <span className="text-xs px-2">16%</span>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    </div>)
}

export default Sentiment