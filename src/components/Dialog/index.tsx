'use client';

import { useCallback, useMemo, useState } from "react";
import { AnimatePresence, motion } from 'framer-motion'

const Dialog = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDialog = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    const text = useMemo(() =>
        "Linus, Richard and Dennis walk into a bar, but it's a Microsoft bar, so it's closed. Leaving our three characters with nothing to do but have fun together and develop their own network of open source bars and give out free beers."
        , []);


    return (
        <div className="w-full lg:w-1/3 border border-0 lg:border-e-[1px] border-e-secondary/25 lg:min-h-[75dvh] h-full relative">
            <motion.div className="w-full h-full" layoutId={isOpen ? 'background-container' : 'foreground-container'}>
                <button onClick={toggleDialog} className="hidden lg:block">
                    <span className="text-base font-normal p-2 w-[25px] h-[25px] absolute top-10 left-10 rounded-full border border-px border-secondary/25 flex items-center justify-center"> i </span>
                </button>
                <motion.img layoutId={isOpen ? 'background' : 'foreground'} src="/landing-page/about-us-image.png" alt="about-us-image" className="w-full h-full object-fit-cover bg-white" />
            </motion.div>

            <AnimatePresence>
                {
                    isOpen && (
                        <motion.div
                            className="fixed top-0 left-0 w-full h-full z-[1000] flex items-center justify-center"
                            onClick={toggleDialog}
                            initial={{
                                backgroundColor: 'rgba(255, 255, 255, 0)',
                                backdropFilter: 'blur(0px)',
                            }}
                            animate={{
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                backdropFilter: 'blur(4px)',
                            }}
                            exit={{
                                backgroundColor: 'rgba(255, 255, 255, 0)',
                                backdropFilter: 'blur(0px)',
                            }}
                        >
                            <motion.div className="flex gap-8 bg-white" layoutId={isOpen ? 'foreground-container' : 'background-container'}>
                                <div className="w-[500px]">
                                    <motion.img layoutId={isOpen ? 'foreground' : 'background'} src="/landing-page/about-us-image.png" alt="about-us-image" className="w-full h-full object-fit-cover" />
                                </div>
                                <motion.div
                                    className="border-0 border-s border-s-px p-8 w-[500px]"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    {text}
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    )
}

export default Dialog;