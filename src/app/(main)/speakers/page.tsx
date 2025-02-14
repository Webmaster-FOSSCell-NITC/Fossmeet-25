'use client';
import { useState, useEffect } from "react";
import SpeakerCard from "@/components/Cards/SpeakerCard";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Modal from "@/components/Modals/SpeakerModal";
import { getSpeakers } from "@/lib/speakers";
import styles from "../styles.module.css";
import { SpeakerDetails } from "@/types";
import useDisplayWidth from "@/hooks/DisplayWidth";
import { motion, useScroll, useTransform } from "framer-motion";

const Page = () => {
    const [speakers, setSpeakers] = useState<SpeakerDetails[]>([]);
    const [selectedSpeaker, setSelectedSpeaker] = useState<SpeakerDetails | null>(null);
    const screenWidth = useDisplayWidth();
    const [numCols, setNumCols] = useState<number>(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSpeakers = async () => {
            try{
                const data = await getSpeakers();
                setSpeakers(data);
            }
            catch(error){
                console.log(error);
            }
            finally{
                setLoading(false);
            }
            
        };
        fetchSpeakers();
    }, []);

    useEffect(() => {
        if (screenWidth > 1440)
            setNumCols(5);
        else if (screenWidth > 1080)
            setNumCols(4);
        else if (screenWidth > 800)
            setNumCols(3);
        else if (screenWidth > 600)
            setNumCols(2);
        else
            setNumCols(1);
    }, [screenWidth]);

    return (
        <Container>
            <div className="mt-28 text-center flex flex-col">
                <span className="text-4xl">Our</span>
                <span className={`text-primary ${styles.outlinedText} !leading-[68px] text-5xl`}>
                    Speakers
                </span>
            </div>

            {
                    !loading ?
                    <Section className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center w-full h-full">

                {speakers.map((speaker, index) => (
                    <div
                        key={index}
                        className="m-4"
                        onClick={() => setSelectedSpeaker(speaker)}
                    >
                        {
                            (selectedSpeaker == speaker) ? (
                                <Modal
                                    speaker={selectedSpeaker}
                                    onClose={() => setSelectedSpeaker(null)}
                                    orientation={index % (numCols) >= 2 ? 'left' : 'right'}
                                />
                            ) : (
                                <SpeakerCard
                                    name={speaker.name}
                                    talkTitle={speaker.talkTitle}
                                    speakerImageUrl={speaker.speakerImageUrl}
                                    orientation='left'
                                />
                            )
                        }
                    </div>
                ))}
            </Section>
                        
                        :
                        
                        <div className="w-full h-full flex gap-1 justify-center items-center mt-20">
                            <h1 className="text-secondary text-2xl">Loading</h1>
                            <div className="flex space-x-1">
                                {[0, 1, 2].map((i) => (
                                    <motion.span
                                        key={i}
                                        className={`w-1 h-1 bg-primary rounded-full`}
                                        animate={{ y: [0, 8, 0] }}
                                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
                                    />
                                ))}
                            </div>
                        </div>

                }

        </Container>
    );
};

export default Page;
