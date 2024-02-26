import { useRef } from "react"
import { AiOutlineRight } from "react-icons/ai"

import Image from "next/image"

const Events = () => {
    const ref = useRef()
    const rightScrollHandler = () => {
        if (ref.current) {
            ref.current.scrollLeft += 600
        }
    }

    return (<div className="relative">
        <section ref={ref} className="flex text-sm overflow-auto">
            <div className="min-w-[600px] bg-[#E8F4FD] flex p-3 mr-3 mb-3 rounded-xl">
                <Image src={'/Event1.png'} width={40} height={40} className="h-fit" />
                <div className="pl-5">
                    <p className="font-semibold pb-3">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</p>
                </div>
            </div>
            <div className="min-w-[600px] bg-[#EBF9F4] flex p-3 mr-3 mb-3 rounded-xl">
                <Image src={'/Event2.png'} width={40} height={40} className="h-fit" />
                <div className="pl-5">
                    <p className="font-semibold pb-3">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</p>
                </div>
            </div>
        </section>
        <button className="absolute bottom-16 sm:bottom-20 right-3 sm:right-5 bg-white p-3 rounded-full cursor-pointer" onClick={rightScrollHandler}>
            <AiOutlineRight />
        </button>
    </div>)
}

export default Events