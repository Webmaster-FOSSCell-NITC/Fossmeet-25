'use client'

import Dot from "./Dot";
import { zenTokyoZoo, alexandria } from "@/fonts";
import FastMarquee from 'react-fast-marquee'
import { JSX } from 'react'
import { useScroll, motion, useTransform } from "framer-motion";


/**
 * marquee element for home page
 * @returns {JSX.Element} the component to be rendered
 * 
 * @author Diljith P D
 */
const Marquee = (): JSX.Element => {

    const { scrollYProgress } = useScroll();

    const firstMarqueeOffset = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
    const secondMarqueeOffset = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);


    return (
        <div className="w-full flex flex-col">
            <div className="w-full bg-primary text-secondary">
                <div className="flex items-center justify-center">
                    <motion.div
                        className="flex items-center h-full gap-3 lg:gap-8 justify-center pe-3 lg:pe-8 py-0 lg:py-3"
                        style={{
                            x: firstMarqueeOffset,
                        }}
                    >
                        <span className={`${zenTokyoZoo.className} text-nowrap font-bold text-2xl lg:text-[64px] h-[64px] flex items-center justify-center`}> OPEN SOURCE </span>
                        <Dot fill="primary" outline="secondary" />
                        <span className={`${alexandria.className} text-nowrap font-bold text-3xl lg:text-7xl h-[64px] flex items-center justify-center`}> LINUX </span>
                        <Dot fill="secondary" outline="secondary" />
                        <span className={`${zenTokyoZoo.className} text-nowrap font-bold text-2xl lg:text-[64px] h-[64px] flex items-center justify-center`}> FOSS </span>
                        <Dot fill="primary" outline="secondary" />
                        <span className={`${alexandria.className} text-nowrap font-bold text-3xl lg:text-7xl h-[64px] flex items-center justify-center`}> GNU </span>
                        <Dot fill="secondary" outline="secondary" />
                        <span className={`${zenTokyoZoo.className} text-nowrap font-bold text-2xl lg:text-[64px] h-[64px] flex items-center justify-center`}> OPEN SOURCE </span>
                        <Dot fill="primary" outline="secondary" />
                        <span className={`${alexandria.className} text-nowrap font-bold text-3xl lg:text-7xl h-[64px] flex items-center justify-center`}> CONTRIBUTE </span>
                    </motion.div>
                </div>
            </div>
            <div className="w-full bg-secondary text-white">
                <div className="flex items-center justify-center">
                    <motion.div
                        className="flex items-center h-full gap-3 lg:gap-8 justify-center pe-3 lg:pe-8 py-0 lg:py-3"
                        style={{
                            x: secondMarqueeOffset
                        }}
                    >
                        <span className={`${zenTokyoZoo.className} text-nowrap font-bold text-2xl lg:text-[64px] h-[64px] flex items-center justify-center`}> APACHE </span>
                        <Dot fill="secondary" outline="white" />
                        <span className={`${alexandria.className} text-nowrap font-bold text-3xl lg:text-7xl h-[64px] flex items-center justify-center`}> FOSSMEET&apos;25 </span>
                        <Dot fill="white" outline="white" />
                        <span className={`${zenTokyoZoo.className} text-nowrap font-bold text-2xl lg:text-[64px] h-[64px] flex items-center justify-center`}> BUILD </span>
                        <Dot fill="secondary" outline="white" />
                        <span className={`${alexandria.className} text-nowrap font-bold text-3xl lg:text-7xl h-[64px] flex items-center justify-center`}> GIT </span>
                        <Dot fill="white" outline="white" />
                        <span className={`${zenTokyoZoo.className} text-nowrap font-bold text-2xl lg:text-[64px] h-[64px] flex items-center justify-center`}> GIMP </span>
                        <Dot fill="secondary" outline="white" />
                        <span className={`${alexandria.className} text-nowrap font-bold text-2xl lg:text-[64px] h-[64px] flex items-center justify-center`}> APACHE </span>
                        <Dot fill="white" outline="white" />
                        <span className={`${zenTokyoZoo.className} text-nowrap font-bold text-3xl lg:text-7xl h-[64px] flex items-center justify-center`}> FOSSMEET&apos;25 </span>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Marquee;