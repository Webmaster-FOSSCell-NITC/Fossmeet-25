'use client'

import Image from "next/image";
import { lato } from "@/fonts";

const ScheduleCard = ({
    title,
    speakerImageUrl,
    speakerName,
    time,
    //duration
}: ScheduleCardProps) => {
    return (
        <div 
            className={`border border-secondary/25 shadow-lg p-0 flex flex-col justify-between 
            ${lato.className} bg-white w-5/6 md:w-5/6 lg:w-2/3 xl:w-2/3 `}
        >
            <div className="py-2 px-4 overflow-hidden flex flex-col">
                <div className="justify-between flex">
                <h2 className="text-xl font-bold text-gray-800">{title}</h2>
                    <div className="flex items-center pt-[7px]">
                    {/* {speakerImageUrl && (
                        <div className="flex items-center pt-[7px]">
                            <Image
                                src={speakerImageUrl}
                                alt={`${speakerName} Image`}
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                        </div>
                    )} */}
                                    
                    </div>
                </div>
                

                <div className="flex items-center space-x-[8px] mb-[6px] mt-[3px]">
                    <span className="bg-[#B0B0B033] text-secondary text-[13px] px-[10px] py-[5px] rounded-[98px]">
                        {time}
                    </span>
                    {/* <span className="bg-[#B0B0B033] text-secondary text-[10px] px-[10px] py-[5px] rounded-[98px]">
                        {duration} hours
                    </span> */}
                </div>
            </div>

            <div className="flex items-center justify-between bg-primary h-[30px] px-4">
                    <span className="text-gray-800 font-medium text-sm">{speakerName}</span>
                </div>
            </div>
        
    );
};

export default ScheduleCard;

export interface ScheduleCardProps {
    title: string;
    speakerImageUrl?: string;
    speakerName: string;
    time: string;
    //duration: string
}
