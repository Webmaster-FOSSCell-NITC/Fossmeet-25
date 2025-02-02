'use client'
import { lato } from "@/fonts";
import { SpeakerDetails } from "@/types";
import Image from "next/image";
import { MouseEventHandler, useCallback, useEffect, useMemo, useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
interface ModalProps {
    speaker: SpeakerDetails;
    orientation?: 'left' | 'right',
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
    speaker,
    onClose,
    orientation = 'right'
}) => {
    const [showDescription, setShowDescription] = useState(true)

    const closeHandler = useCallback(() => {
        onClose()
    }, [onClose]);

    const closeButtonClickHandler: MouseEventHandler<SVGElement> = useCallback(e => {
        e.stopPropagation();
        setShowDescription(false);
    }, []);

    const modelOrientation = useMemo(() =>
        orientation == 'right'
            ? "static lg:absolute top-0 right-0 lg:translate-x-[100%] w-[250px] sm:w-[300px] md:w-1/2 lg:w-[450px] px-[16px] py-[6px] h-[450px] md:h-full bg-white z-[5] overflow-y-scroll"
            : "static lg:absolute top-0 left-0 lg:translate-x-[-100%] w-[250px] sm:w-[300px] md:w-1/2 lg:w-[450px] px-[16px] py-[6px] h-[450px] md:h-full bg-white z-[5] overflow-y-scroll"
        , [orientation]);

    return (
        <div className="fixed p-20 sm:p-32 lg:p-0 top-0 top-none left-0 left-none w-full h-full flex flex-col lg:flex-row items-center justify-center lg:relative z-[5]">
            <motion.div
                className="fixed top-0 left-0 w-full h-full backdrop-blur-sm bg-black/50"
                initial={{
                    backdropFilter: 'blur(0px)'
                }}
                animate={{
                    backdropFilter: 'blur(8px)'
                }}
                transition={{
                    duration: 0.3
                }}
            />
            <div className={`relative w-[250px] sm:w-[300px] md:w-1/2 lg:w-[250px] h-[250px] sm:h-[300px] md:h-1/2 lg:h-[400px] bg-primary shadow-lg flex-col justify-between overflow-hidden`}>
                <div className="absolute left-0 bottom-[-50px] w-[200px] lg:w-[300px] h-[234px] lg:h-[350px]">
                    <Image
                        src={speaker.speakerImageUrl}
                        alt={`${speaker.name}-picture`}
                        className="object-fit-cover"
                        priority
                        width={500}
                        height={500}
                    />
                </div>
            </div>
            <AnimatePresence mode='wait' onExitComplete={closeHandler}>
                {
                    showDescription && (
                        <motion.div
                            className={modelOrientation}
                            initial={{
                                clipPath: orientation == 'right'
                                    ? 'polygon(0 0, 0 0, 0 100%, 0% 100%)'
                                    : 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)'
                            }}
                            animate={{
                                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
                            }}
                            exit={{
                                clipPath: orientation == 'right'
                                    ? 'polygon(0 0, 0 0, 0 100%, 0% 100%)'
                                    : 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)'
                            }}
                            transition={{
                                duration: 0.3
                            }}
                        >
                            <div className={`w-full flex closeButtonClickHandleritems-center justify-between lg:${orientation == 'right' ? 'flex-row' : 'flex-row-reverse'}`}>
                                <div>
                                    <h1 className={`text-secondary text-xl font-bold ${lato.className}`}> {speaker.name} </h1>
                                    <span className={`text-secondary/75 text-sm font-normal ${lato.className}`}> {speaker.talkTitle} </span>
                                </div>
                                <IoMdCloseCircleOutline
                                    className="cursor-pointer"
                                    size={30}
                                    onClick={closeButtonClickHandler}
                                />
                            </div>
                            <div className={`py-[16px] text-xs sm:text-sm text-secondary ${lato.className} lg:${orientation == 'right' ? 'text-left' : 'text-right'}`}>
                                {speaker.description}
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    );
};

export default Modal;
