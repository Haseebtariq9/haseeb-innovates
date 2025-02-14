import { RiReactjsLine } from "react-icons/ri"
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si"
import { SiMysql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa"
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { animate, motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: { 
        y: [10, -10], 
        transition: { 
            duration: duration,
            ease: "linear", 
            repeat: Infinity,
            repeatType: "reverse",
         },
    },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-4xl md:text-5xl lg:text-6xl">
            Technologies
        </motion.h1>    
        <motion.div
         whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1.5}}

        
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-6xl md:text-7xl lg:text-8xl text-cyan-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiExpress className="text-6xl md:text-7xl lg:text-8xl"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill className="text-6xl md:text-7xl lg:text-8xl text-cyan-500"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(8)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandFramerMotion className="text-6xl md:text-7xl lg:text-8xl"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-6xl md:text-7xl lg:text-8xl text-green-500"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
            style={{
                background: '', // MySQL blue background
                color: '#F29111', // MySQL orange icon color
            }}>
                <SiMysql className="text-6xl md:text-7xl lg:text-8xl"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-6xl md:text-7xl lg:text-8xl text-green-500"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies
