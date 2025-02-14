"use client"
import { useState, useEffect } from "react";
import WorkshopCard from "@/components/Cards/WorkshopCard";
import Container from "@/components/Container";
import Section from "@/components/Section";
import { getWorkshops } from "@/lib/workshops";
import styles from "../styles.module.css";
import { WorkshopDetails } from "@/types";

const Page = () => {
    const [Workshops, setWorkshops] = useState<WorkshopDetails[]>([]);

    useEffect(() => {
        const fetchWorkshops = async () => {
            const data = await getWorkshops();
            setWorkshops(data);
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

        </Container>
    )
}

export default Page
