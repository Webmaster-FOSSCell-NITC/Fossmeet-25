import Image from "next/image";
import { gloriaHallelujah } from "@/fonts";

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
    return (
        <div
            className={`relative w-[250px] h-[400px] bg-primary shadow-lg flex-col justify-between overflow-hidden`}>
            <div className="absolute left-0 bottom-[0px] w-[300px] h-[350px] flex flex-col justify-end">
                <Image
                    src={speakerImageUrl}
                    alt={`${name}-picture`}
                    className="object-fit-cover"
                    priority
                    width={500}
                    height={500}
                />
            </div>
            {orientation === 'right' ? (
                <div className="absolute top-[10px] right-[35px] text-center">
                    <h2 className="text-secondary text-[20px] font-bold"> {name} </h2>
                    <p className="text-white text-[14px] mt-1"> {talkTitle} </p>
                </div>
            ) : (
                <div className="absolute top-[10px] left-[35px] text-center">
                    <h2 className="text-secondary text-[20px] font-bold"> {name} </h2>
                    <p className="text-white text-[14px] mt-1"> {talkTitle} </p>
                </div>
            )}
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
