import Image from "next/image";
import { gloriaHallelujah } from "@/fonts";
import { motion } from 'framer-motion'
import { useCallback, useState } from "react";
import Marquee from "react-fast-marquee";
/**
 * Displays a speaker card with their name, talk title, socials, and a transparent speaker image.
 *
 * @param {SpeakerCardProps} props - Props for the SpeakerCard component.
 * @param {"left" | "right"} [props.orientation] - specifies if the card content should be left oriented or right oriented
 * @param {string} [props.name] - name of the speaker
 * @param {string} [props.talkTitle] - title of the talk the speaker will be conducting
 * @param {string} [props.speakerImageUrl] - image url 
 * @returns The rendered speaker card component.
 * 
 * @author Arshiya Padiyath Puthenkattil Ibrahim HAFIS
 */
const SpeakerCard = ({
    orientation = 'left',
    name,
    talkTitle,
    speakerImageUrl,
}: SpeakerCardProps) => {
    const [hovered, setHovered] = useState<boolean>(true);

    const mouseOverHandler = useCallback(() => setHovered(true), []);
    const mouseLeaveHandler = useCallback(() => setHovered(false), []);

    return (
        <div
            className={`relative w-[250px] h-[400px] bg-primary shadow-lg flex-col justify-between`}
        // onMouseOver={mouseOverHandler}
        // onMouseLeave={mouseLeaveHandler}
        >
            <img
                src={speakerImageUrl}

                alt={`${name}-picture`}
                className="object-cover absolute right-0 bottom-0 h-[350px] w-full"
            />

            <div className="absolute top-[10px] left-0 w-full px-[10px]">
                <h2 className="text-secondary text-[20px] font-bold w-full text-center"> {name} </h2>
                {
                    hovered ? (
                        <p className="text-white text-[14px] mt-1 text-left w-full text-nowrap overflow-hidden relative">
                            {
                                <motion.span
                                    className="block text-full text-nowrap w-full h-full absolute outline"
                                    initial={{
                                        top: 0,
                                        left: 0,
                                    }}
                                    // animate={{
                                    //     x: '-10%'
                                    // }}
                                    transition={{
                                        duration: 5
                                    }}
                                >
                                    {talkTitle}
                                </motion.span>
                            }
                        </p>
                    ) : (
                        <p className="text-white text-[14px] mt-1 text-left truncate w-4/5">
                            {talkTitle}
                        </p>
                    )
                }
            </div>
        </div>
    );
};

export default SpeakerCard;

export interface SpeakerCardProps {
    orientation?: 'left' | 'right';
    name: string;
    talkTitle: string;
    speakerImageUrl: string;
}
