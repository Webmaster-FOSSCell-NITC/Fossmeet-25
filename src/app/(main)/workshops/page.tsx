"use client"

import { useState, useEffect } from "react";
import WorkshopCard from "@/components/Cards/WorkshopCard";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Modal from "@/components/Modals/WorkshopModal";
import { getWorkshops } from "@/lib/workshops";
import styles from "../styles.module.css";
import { WorkshopDetails } from "@/types";
//import useDisplayWidth from "@/hooks/DisplayWidth";
import { motion, useScroll, useTransform } from "framer-motion";

const Page = () => {
    const [workshops, setWorkshops] = useState<WorkshopDetails[]>([]);
    const [selectedWorkshop, setSelectedWorkshop] = useState<WorkshopDetails | null>(null);
    //const screenWidth = useDisplayWidth();
    const [numCols, setNumCols] = useState<number>(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWorkshops = async () => {
            try{
                const data = await getWorkshops();
                setWorkshops(data);
            }
            catch(error){
                console.log(error);
            }
            finally{
                setLoading(false);
            }
            
        };
        fetchWorkshops();
    }, []);

    // useEffect(() => {
    //     if (screenWidth > 1440)
    //         setNumCols(4);
    //     else if (screenWidth > 1080)
    //         setNumCols(3);
    //     else if (screenWidth > 800)
    //         setNumCols(2);
    //     else if (screenWidth > 600)
    //         setNumCols(1);
    //     else
    //         setNumCols(1);
    // }, [screenWidth]);

    return (
        <Container >
            <div className="mt-28 text-center flex flex-col">
                <span className="text-4xl">Our</span>
                <span className={`text-primary ${styles.outlinedText} !leading-[68px] text-5xl`}>
                    Workshops
                </span>
            </div>

            {
                    !loading ?
                    <Section className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center w-full h-full">

                {workshops.map((workshop, index) => (
                    <div
                        key={index}
                        className="m-4"
                        onClick={() => setSelectedWorkshop(workshop)}
                    >
                        {
                            (selectedWorkshop == workshop) ? (
                                <Modal
                                    workshop={selectedWorkshop}
                                    onClose={() => setSelectedWorkshop(null)}
                                    orientation={index % (numCols) >= 2 ? 'left' : 'right'}
                                />
                            ) : (
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
