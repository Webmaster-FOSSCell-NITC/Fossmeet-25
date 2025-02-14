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
    const [hovered, setHovered] = useState<boolean>(false);

    const mouseOverHandler = useCallback(() => setHovered(true), []);
    const mouseLeaveHandler = useCallback(() => setHovered(false), []);

    return (
    <div
      className="relative w-[250px] h-[400px] bg-primary shadow-lg flex-col justify-between overflow-hidden cursor-pointer"
      onMouseOver={mouseOverHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <img
        src={speakerImageUrl}
        alt={`${name}-picture`}
        className="object-cover absolute right-0 bottom-0 h-[350px] w-full"
      />

      <div className="absolute top-[10px] left-0 w-full px-[10px]">
        <h2 className="text-secondary text-[20px] font-bold w-full text-center">{name}</h2>

      
        <div className="relative w-full overflow-hidden mt-1 h-[20px]">
          {talkTitle.length <= 25 ? (
            
            <p className="text-white text-[14px]">{talkTitle}</p>
          ) : !hovered ? (
            
            <p className="text-white text-[14px] truncate">
              {talkTitle.slice(0, 25) + "..."}
            </p>
          ) : (
            
            <motion.div
              className="whitespace-nowrap text-white text-[14px] w-max"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ duration: 9, ease: "linear", repeat: Infinity }}
            >
              {talkTitle}  
            </motion.div>
          )}
        </div>
        
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
