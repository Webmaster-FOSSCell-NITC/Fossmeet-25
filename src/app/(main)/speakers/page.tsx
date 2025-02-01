'use client';
import { useState, useEffect } from "react";
import SpeakerCard from "@/components/Cards/SpeakerCard";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Modal from "@/components/Modals/SpeakerModal";
import { getSpeakers } from "@/lib/speakers";
import styles from "../styles.module.css";
import { SpeakerDetails } from "@/types";

const Page = () => {
    const [speakers, setSpeakers] = useState<SpeakerDetails[]>([]);
    const [selectedSpeaker, setSelectedSpeaker] = useState<SpeakerDetails | null>(null);

    useEffect(() => {
        const fetchSpeakers = async () => {
            const data = await getSpeakers();
            setSpeakers(data);
        };
        fetchSpeakers();
    }, []);

    return (
        <Container>
            <div className="mt-28 text-center flex flex-col">
                <span className="text-4xl">Our</span>
                <span className={`text-primary ${styles.outlinedText} !leading-[68px] text-5xl`}>
                    Speakers
                </span>
            </div>

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
                                    onClose={(e) => {
                                        e.stopPropagation();
                                        setSelectedSpeaker(null);
                                    }}
                                    orientation="right"
                                />
                            ) : (
                                <SpeakerCard
                                    name={speaker.name}
                                    talkTitle={speaker.talkTitle.length > 25 ? (speaker.talkTitle.slice(0, 25) + "...") : (speaker.talkTitle)}
                                    speakerImageUrl={speaker.speakerImageUrl}
                                    // orientation={index % 2 === 0 ? "left" : "right"}
                                    orientation="left"
                                />
                            )
                        }
                    </div>
                ))}
            </Section>

        </Container>
    );
};

export default Page;
