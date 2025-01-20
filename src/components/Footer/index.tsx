import { cantarell, inconsolate, lato } from "@/fonts";
import Image from "next/image";
import { useMemo } from "react";

type DataType = {
    Host: string;
    Date: string,
    Status: string;
    Mobile: string;
    'E-mail': string;
    Instagram: string;
    Telegram: string;
    Twitter: string;
    Speakers: string;
    Workshops: string;
    FAQ: string;
    Register: string;
    'FOSSMeet-24': string;
};

const Footer = () => {

    const data: DataType = useMemo((): DataType => ({
        'Host': "National Institute of Technology Calicut",
        'Date': "14, 15 and 16 March 2025",
        'Status': "54 days to go...",
        'Mobile': "+91 8921969412",
        'E-mail': "fosscell@nitc.ac.in",
        'Instagram': "@fosscell_nitc",
        'Telegram': "//foss_me",
        'Twitter': "//fosscell",
        'Speakers': "/speakers",
        'Workshops': "/workshops",
        'FAQ': "/faq",
        'Register': "/register",
        'FOSSMeet-24': "www.fossmeet.net/old",
    }), []);


    return (
        <footer className="h-full relative overflow-hidden">
            <div className="bg-secondary text-white px-[16px] lg:p-[40px] flex items-center gap-[40px] justify-start">
                <div className="h-[550px] w-[560px] absolute lg:static opacity-[10%] lg:opacity-100 left-[5rem] bottom-[-2rem]">
                    <Image src="/footer/foss-ascii.png" alt="ascii-art" className="w-full h-full object-fit-cover" width={500} height={500} />
                </div>
                <div className="w-full flex m-0 lg:ms-24 flex-col justify-center items-start">
                    <span className={`text-primary ${cantarell.className} text-2xl font-bold`}> contact@FOSSMeet-25 </span>
                    <span className="border border-white border-dashed w-full mb-[16px]" />
                    {
                        Object.keys(data).map((key, index) => (
                            <span key={index} className={`flex gap-1 text-xl lg:text-2xl font-semibold ${inconsolate.className}`}>
                                <h4 className="text-primary"> {key} </h4 > : <p className="text-white"> {data[key as (keyof DataType)]} </p>
                            </span>
                        ))
                    }

                    <img src="/footer/color-selection.svg" height={25} alt="color-picker" className="mt-14" />
                </div>
            </div>
            <div className={`w-full py-[10px] px-[16px] bg-primary ${lato.className} flex items-center justify-between`}>
                <div className="flex gap-2">
                    <img src="/footer/logo.svg" alt="footer-logo" height={25} width={25} />
                    <h4 className="font-bold text-xl lg:text-2xl"> FOSSMeet &apos;25 </h4>
                </div>
                <span className="font-normal text-base hidden lg:block"> An event conducted by FOSSCell NITC in collaboration with CSEA </span>
            </div>
        </footer>
    )
}

export default Footer;