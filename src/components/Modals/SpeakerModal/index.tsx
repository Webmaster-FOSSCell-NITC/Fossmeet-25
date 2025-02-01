import { SpeakerDetails } from "@/types";
import Image from "next/image";
import { MouseEventHandler } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

interface ModalProps {
    speaker: SpeakerDetails | null;
    orientation: 'left' | 'right',
    onClose: MouseEventHandler<SVGAElement>;
}

const Modal: React.FC<ModalProps> = ({
    speaker,
    onClose,
    orientation = 'right'
}) => {
    if (!speaker) return null;

    return (
        // <div className="mt-16 fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center z-50">
        //     <div className="absolute md:top-20 md:left-20 bg-white shadow-lg w-[90vw] md:w-[80vw] md:max-w-3xl flex flex-col md:flex-row h-auto max-h-[90vh] overflow-hidden">

        //         <div className="md:w-[30%] w-full flex justify-center items-center bg-gray-100">
        //             <Image
        //                 src={speaker.speakerImageUrl}
        //                 alt={speaker.name}
        //                 width={400}
        //                 height={400}
        //                 className="object-cover w-full h-full"
        //                 draggable={false}
        //             />
        //         </div>

        //         <div className="md:w-[70%] w-full p-4 overflow-y-auto max-h-[90vh]">
        //             <div className="flex justify-between">
        //                 <h2 className="text-2xl font-bold">{speaker.name}</h2>
        //                 <IoMdCloseCircleOutline
        //                     className="absolute right-2 top-3 cursor-pointer"
        //                     size={30}
        //                     onClick={onClose}
        //                 />
        //             </div>

        //             <p className="text-gray-600 mt-2">{speaker.talkTitle}</p>
        //             <p className="mt-4 text-gray-700">{speaker.description}</p>
        //         </div>
        //     </div>
        // </div>
        <div className="relative z-[5]">
            <div
                className={`relative w-[250px] h-[400px] bg-primary shadow-lg flex-col justify-between overflow-hidden`}>
                <div className="absolute left-0 bottom-[-50px] w-[300px] h-[350px]">
                    <Image
                        src={speaker.speakerImageUrl}
                        alt={`${name} Picture`}
                        className="object-fit-cover"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
            <div className="absolute top-0 right-0 translate-x-[100%] w-[450px] px-[16px] py-[6px] outline h-full bg-white">
                <div className="w-full flex items-center justify-between">
                    <div>
                        <h1> {speaker.name} </h1>
                    </div>
                    <IoMdCloseCircleOutline
                        className="cursor-pointer"
                        size={30}
                        onClick={onClose}
                    />
                </div>
            </div>
        </div>
    );
};

export default Modal;
