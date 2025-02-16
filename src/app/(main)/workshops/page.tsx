"use client"
import { useState, useEffect } from "react";
import WorkshopCard from "@/components/Cards/WorkshopCard";
import Container from "@/components/Container";
import Section from "@/components/Section";
import { getWorkshops } from "@/lib/workshops";
import styles from "../styles.module.css";
import { WorkshopDetails } from "@/types";

import { motion, useScroll, useTransform } from "framer-motion";

const Page = () => {
    const [Workshops, setWorkshops] = useState<WorkshopDetails[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWorkshops = async () => {
            setLoading(true);
            try {
                const data = await getWorkshops();
                setWorkshops(data);
            } catch(error) {
                console.error(error);
            } finally {
                setLoading(false);
            }

        };
        fetchWorkshops();
    }, []);

    return (
        <Container>
            <div className="my-24 text-center flex flex-col">
                <span className="text-4xl">Our</span>
                <span className={`text-primary ${styles.outlinedText} !leading-[68px] text-5xl`}>
                    Workshops
                </span>
            </div>

           
                {
                    !loading ?
                    <Section className="mb-24 grid grid-cols-1 gap-y-12 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center w-full h-full ">

                            {Workshops.map((workshop, index) => (
                                <WorkshopCard
                                    key={index}
                                    title={workshop.title}
                                    logoUrl={workshop.logoUrl}
                                    date={workshop.date}
                                    description={workshop.description}
                                    duration={workshop.duration}
                                    speakerName={workshop.speakerName}
                                    speakerImageUrl={workshop.speakerImageUrl}
                                    link={workshop.link}

                                />

                            ))}

                    </Section>
                        
                        :
                        
                        <div className="w-full h-full flex gap-1 justify-center items-center">
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
    )
}

export default Page