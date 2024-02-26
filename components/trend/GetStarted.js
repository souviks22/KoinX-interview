import { AiOutlineArrowRight } from "react-icons/ai"

import Image from "next/image"

const GetStarted = () => {
    return (<div className="bg-[#0052FE] text-center flex flex-col items-center rounded-xl p-10">
        <p className="text-white font-semibold text-2xl px-3 mb-5">Get Started with KoinX for FREE</p>
        <p className="text-[#F2F2F2] font-thin text-xs px-5 mb-10">With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</p>
        <section className="mb-5">
            <Image src={'/Frame.png'} alt="Frame" width={150} height={150} priority />
        </section>
        <button className="flex items-center bg-white hover:bg-[#F2F2F2] rounded-lg px-5 py-3 cursor-pointer">
            <span className="font-semibold">Get Started for FREE</span>
            <span className="ml-3"><AiOutlineArrowRight /></span>
        </button>
    </div>)
}

export default GetStarted