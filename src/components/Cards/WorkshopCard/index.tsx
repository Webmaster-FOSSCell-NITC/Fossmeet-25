import Image from "next/image";
import { lato } from "@/fonts";

/**
 * Displays a workshop card with a logo, title, date, duration, description, and speaker information.
 *
 * @param {WorkshopCardProps} props - Props for the WorkshopCard component.
 * @param {string} [props.logoUrl] - image representing the workshop
 * @param {string} [props.title] - Title of the workshop
 * @param {string} [props.date] - date in which the workshop will be happening
 * @param {string} [props.duration] - duration of the workshop
 * @param {string} [props.description] - brief idea on what the workshop will be about
 * @param {string} [props.speakerName] - host of the workshop
 * @param {string} [props.speakerImageUrl] - profile pic of the host
 * @param {string} [props.link] - registration url
 * @returns The rendered workshop card component.
 * 
 * @author Arshiya Padiyath Puthenkattil Ibrahim HAFIS
 */
const WorkshopCard = ({
    logoUrl,
    title,
    date,
    duration,
    description,
    speakerImageUrl,
    speakerName,
    link,
}: WorkshopCardProps) => {
    return (
        <div className={`border border-secondary/25 shadow-lg p-0 w-[300px] flex flex-col justify-between cursor-pointer ${lato.className}`}>
            <div className="w-full h-[250px] overflow-hidden relative">
                <Image
                    src={logoUrl}
                    alt={`${title} Logo`}
                    className="object-fit-cover"
                    width={300}
                    height={300}
                />
            </div>

            <div className=" py-[7px] px-[10px] overflow-hidden h-[225px]">
                <h2 className="text-[24px] font-bold text-gray-800 mb-[3px]">{title}</h2>
                <div className="flex items-center space-x-[8px] mb-[27px]">
                    <span className="bg-[#B0B0B033] text-secondary text-[10px] px-[10px] py-[5px] rounded-[98px]">
                        {date}
                    </span>
                    <span className="bg-[#B0B0B033] text-secondary  text-[10px] px-[10px] py-[5px] rounded-[98px]">
                        {duration} hours
                    </span>
                </div>
                <p className="text-[#3B3B3BA6] text-[14px]"> {description.substring(0, 128)}... </p>
            </div>

            <div className="flex items-center justify-between bg-primary h-[50px]">
                <div className="flex items-center space-x-3  py-[7px] px-[11px] gap-[11px]">
                    <Image
                        src={speakerImageUrl}
                        alt={`${speakerName} Image`}
                        width={36}
                        height={36}
                        className="rounded-full"
                    />
                    <span className="text-gray-800 font-medium text-[14px]">{speakerName}</span>
                </div>
                {
                    link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center bg-secondary text-white h-full"
                        >
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="50" height="50" fill="#3B3B3B" />
                                <path d="M29.6547 31.5883C29.4367 31.3703 29.4438 31.0258 29.6547 30.7937L34.3234 25.5625H14.3125C14.0031 25.5625 13.75 25.3094 13.75 25C13.75 24.6906 14.0031 24.4375 14.3125 24.4375H34.3234L29.6617 19.2062C29.4578 18.9672 29.4367 18.6367 29.6547 18.4187C29.8727 18.2008 30.2523 18.1867 30.4563 18.4117C30.4563 18.4117 36.025 24.5289 36.0813 24.5992C36.1375 24.6695 36.25 24.7961 36.25 25C36.25 25.2039 36.1375 25.3445 36.0813 25.4008C36.025 25.457 30.4563 31.5883 30.4563 31.5883C30.3508 31.6937 30.2031 31.75 30.0555 31.75C29.9078 31.75 29.7672 31.6937 29.6547 31.5883Z" fill="white" />
                            </svg>
                        </a>
                    )
                }
            </div>
        </div>
    );
};

export default WorkshopCard;

export interface WorkshopCardProps {
    logoUrl: string;
    title: string;
    date: string;
    duration: string;
    description: string;
    speakerImageUrl: string;
    speakerName: string;
    link: string;
}
