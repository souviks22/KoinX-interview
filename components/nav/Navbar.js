import { useState, useEffect } from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { AnimatePresence, motion } from "framer-motion"

import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
    const [isClosed, setIsClosed] = useState(true)
    const [isMobile, setIsMobile] = useState(false)
    const toggleHandler = () => setIsClosed(isClosed => !isClosed)
    const resizeHandler = () => {
        if (window.innerWidth < 640) setIsMobile(true)
        else setIsMobile(false)
    }

    useEffect(() => {
        window.addEventListener('resize', resizeHandler)
        resizeHandler()
        return () => window.removeEventListener('resize', resizeHandler)
    }, [])

    return (<nav className="w-full fixed z-10 bg-white flex flex-col sm:flex-row justify-between items-center p-3 sm:px-10 shadow-sm">
        <div className="w-full flex justify-between">
            <Image src={'/KoinX.png'} alt="KoinX" className="h-fit" width={100} height={100} />
            {isMobile && <span className="text-xl" onClick={toggleHandler}>{isClosed ? <AiOutlineMenu /> : <AiOutlineClose />}</span>}
        </div>
        <AnimatePresence>
            {(!isMobile || !isClosed) &&
                <motion.div
                    className="text-sm font-semibold flex flex-col whitespace-nowrap sm:flex-row items-center"
                    initial={{ translateY: -50, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 100 }}
                    exit={{ opacity: 0 }}
                >
                    <Link href={'/'} className="hover:bg-slate-50 p-3 rounded-md">Crypto Taxes</Link>
                    <Link href={'/'} className="hover:bg-slate-50 p-3 rounded-md">Free Tools</Link>
                    <Link href={'/'} className="hover:bg-slate-50 p-3 rounded-md">Resource Center</Link>
                    <button className="h-fit bg-[#0052FE] text-white px-5 py-2 sm:ml-5 mt-5 sm:mt-0 rounded-md cursor-pointer">Get Started</button>
                </motion.div>
            }
        </AnimatePresence>
    </nav>)
}

export default Navbar