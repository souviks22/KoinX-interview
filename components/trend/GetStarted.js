import { Inter } from "next/font/google"
import { AiOutlineArrowRight } from "react-icons/ai"

import Image from "next/image"

const inter_bold = Inter({ subsets: ['latin'], weight: '700' })
const inter_thin = Inter({ subsets: ['latin'], weight: '500' })

const GetStarted = () => {
    return (<div className="bg-[#0052FE] text-center flex flex-col items-center rounded-xl p-10 mb-2">
        <p className={`${inter_bold.className} text-white text-2xl mb-5`}>Get Started with KoinX for FREE</p>
        <p className={`${inter_thin.className} text-[#F2F2F2] text-xs mb-10`}>With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</p>
        <section className="mb-5">
            <Image src={'/Frame.png'} alt="Frame" width={150} height={150} priority />
        </section>
        <button className={`${inter_thin.className} flex items-center bg-white hover:bg-[#F2F2F2] rounded-lg px-5 py-3 cursor-pointer`}>
            Get Started for FREE <span className="ml-3"><AiOutlineArrowRight /></span>
        </button>
    </div>)
}

export default GetStarted