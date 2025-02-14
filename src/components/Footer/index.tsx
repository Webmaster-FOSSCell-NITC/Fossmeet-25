import { cantarell, inconsolate, lato } from "@/fonts";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

type DataType = {
    name: string,
    content: string,
    link?: string,
};

const Footer = () => {

    /*

Host
:
National Institute of Technology Calicut

Date
:
14, 15 and 16 March 2025

E-mail
:
info@fossmeet.net

Instagram
:
@fosscell_nitc

Telegram
:
t.me/foss_meet
    */

    const data = useMemo((): DataType[] => [
        {
            name: "Host",
            content: "National Institute of Technology, Calicut",
        },
        {
            name: "Date",
            content: "14, 15 and 16th March, 2025",
        },
        {
            name: "E-Mail",
            content: "info@fossmeet.net",
            link: "mailto:info@fossmeet.net",
        },
        {
            name: "Instagram",
            content: "@fosscell_nitc",
            link: "https://www.instagram.com/fosscellnitc?igsh=Z2xjdGo3bWk3Y2Nu"
        },
        {
            name: "Telegram",
            content: "t.me/foss_meet",
            link: "https://t.me/foss_meet",
        }
    ], []);


    return (
        <footer className="h-full relative overflow-hidden">
            <div className="bg-secondary text-white p-8 lg:p-[40px] flex items-start gap-[40px] justify-start">
                <div className="h-[550px] w-[550px] hidden lg:block">
                    <Image src="/footer/foss-ascii.png" alt="ascii-art" className="w-full h-full object-fit-cover" draggable={false} width={500} height={500} />
                </div>
                <div className="flex m-0 lg:ms-24 flex-col justify-center items-start">
                    <span className={`text-primary ${cantarell.className} text-2xl font-bold border border-0 border-b-[2px] pb-[16px] border-dashed mb-[32px]`}> contact<span className="text-white">@</span>FOSSMeet-25 </span>
                    {
                        // Object.keys(data).map((key, index) => (
                        //     <span key={index} className={`flex gap-1 text-xl lg:text-2xl font-semibold ${inconsolate.className}`}>
                        //         <h4 className="text-primary"> {key} </h4 > : <p className="text-white"> {data[key as (keyof DataType)]} </p>
                        //     </span>
                        // ))
                        data.map((value, index) => (
                            <span key={index} className={`flex gap-1 text-xl lg:text-2xl font-semibold ${inconsolate.className}`}>
                                <h4 className="text-primary"> {value.name} </h4>
                                <span> : </span>
                                {
                                    value.link ? (
                                        <Link className="text-white hover:underline underline-offset-4" href={value.link} target="_blank"> {value.content} </Link>
                                    ) : (
                                        <p className="text-white"> {value.content} </p>
                                    )
                                }
                            </span>
                        ))
                    }

                    <Image src="/footer/color-selection.svg" height={25} width={300} draggable={false} alt="color-picker" className="mt-[16px] lg:mt-14" />
                </div>
            </div>
            <div className={`w-full py-[10px] px-[16px] bg-primary ${lato.className} flex items-center justify-between`}>
                <div className="flex gap-2">
                    <img src="/footer/logo.svg" alt="footer-logo" height={25} width={25} />
                    <h4 className="font-bold text-xl lg:text-2xl"> FOSSMeet &apos;25 </h4>
                </div>
                <span className="font-normal text-base hidden lg:block">
  An event conducted by <a href="https://www.fosscell.org" target="_blank" rel="noopener noreferrer" >FOSSCell NITC</a> in collaboration with 
  <a href="https://www.assoc.cse.nitc.ac.in/" target="_blank" rel="noopener noreferrer" > CSEA</a>
</span>

            </div>
        </footer>
    )
}

export default Footer;