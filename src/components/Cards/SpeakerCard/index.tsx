import Image from "next/image";
import { gloriaHallelujah } from "@/fonts";

/**
 * Displays a speaker card with their name, talk title, socials, and a transparent speaker image.
 *
 * @param {SpeakerCardProps} props - Props for the SpeakerCard component.
 * @returns The rendered speaker card component.
 */
const SpeakerCard = ({
    type,
    name,
    talkTitle,
    speakerImageUrl,
}: SpeakerCardProps) => {
  return (
    <div
      className={`relative w-[250px] h-[400px] bg-[#FF8B4A] shadow-lg p-4 rounded-lg flex flex-col justify-between overflow-hidden`}>
        <div className="absolute left-[-30px] bottom-[0px] w-[300px] h-[95%] ">
            <Image
            src={speakerImageUrl}
            alt={`${name} Picture`}
            layout="fill"
            objectFit="contain"
            className=""
            />
        </div>
        {type === 'right' ? (
            <div className="absolute top-[25px] right-[35px] text-center">
                <h2 className="text-[#3B3B3B] text-[20px] font-bold">{name}</h2>
                <p className="text-white text-[14px] mt-1">{talkTitle}</p>
            </div>
        ) : (
            <div className="absolute top-[25px] left-[35px] text-center">
                <h2 className="text-[#3B3B3B] text-[20px] font-bold">{name}</h2>
                <p className="text-white text-[14px] mt-1">{talkTitle}</p>
            </div>
        )}
    </div>
  );
};

export default SpeakerCard;

export interface SpeakerCardProps {
    type:'left' | 'right';
    name: string;
    talkTitle: string;
    speakerImageUrl: string;
}
