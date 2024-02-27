import { AiOutlineArrowRight } from "react-icons/ai"

import Image from "next/image"
import Wrapper from "./Wrapper"

const Bitcoin = () => {
    return (<div className="bg-white p-5 rounded-xl space-y-5">
        <p className="text-xl font-semibold mb-5">About Bitcoin</p>
        <Wrapper heading={'What is Bitcoin?'}>
            <p>Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.</p>
        </Wrapper>
        <Wrapper heading={'Lorem ipsum dolor sit amet'}>
            <p>Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.</p>
            <p>Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.</p>
            <p>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>
        </Wrapper >
        <p className="text-xl font-semibold mb-5">Already Holding Bitcoin?</p>
        <Wrapper>
            <section className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 space-x-0 sm:space-x-5">
                <div className="relative w-full flex items-center">
                    <Image src={'/Background1.png'} className="rounded-md" width={500} height={200} />
                    <div className="absolute flex">
                        <section className="w-2/5 px-2">
                            <Image src={'/Phone1.png'} className="w-full h-full rounded-md" width={150} height={150} />
                        </section>
                        <section>
                            <p className="text-white text-xl font-semibold px-5 mb-2 sm:my-2">Calculate your Profits</p>
                            <button className="flex items-center bg-white px-2 py-1 mx-5 rounded-md">
                                <span className="text-xs font-semibold">Check Now</span>
                                <span className="pl-2"><AiOutlineArrowRight /></span>
                            </button>
                        </section>
                    </div>
                </div>
                <div className="relative w-full flex items-center">
                    <Image src={'/Background2.png'} className="rounded-md" width={500} height={200} />
                    <div className="absolute flex">
                        <section className="w-2/5 px-2">
                            <Image src={'/Phone2.png'} className="w-full h-full rounded-md" width={150} height={150} />
                        </section>
                        <section>
                            <p className="text-white text-xl font-semibold px-5 mb-2 sm:my-2">Calculate your Profits</p>
                            <button className="flex items-center bg-white px-2 py-1 mx-5 rounded-md">
                                <span className="text-xs font-semibold">Check Now</span>
                                <span className="pl-2"><AiOutlineArrowRight /></span>
                            </button>
                        </section>
                    </div>
                </div>
            </section>
        </Wrapper>
        <Wrapper divider={false}>
            <p>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>
        </Wrapper>
    </div >)
}

export default Bitcoin