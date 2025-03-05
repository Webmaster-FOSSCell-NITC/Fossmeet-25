"use client"
import { getSchedule } from "@/lib/schedule"
import { ScheduleDetails } from "@/types"
import { useEffect, useState } from "react"
import ScheduleCard from "@/components/Cards/ScheduleCard";
import Container from "@/components/Container";
import styles from "../styles.module.css";
import { motion, useScroll, useTransform } from "framer-motion";


const Page = () => {
    const [tabNo, setTabno] = useState(1);
    const [scheduleData, setScheduleData] = useState<{ eventName: string; time: string; speaker?: string; img?: string; color?: string }[][]>([[], [], []]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSchedule = async () => {
            setLoading(true);
            try {
                const data = await getSchedule();
                const day1Arr: any[] = [];
                const day2Arr: any[] = [];
                const day3Arr: any[] = [];

                const map: Record<string, any[]> = {
                    '2025-03-14': day1Arr,
                    '2025-03-15': day2Arr,
                    '2025-03-16': day3Arr,
                };

                for (const x of data) {
                    for (const y of x.events) {
                        if (y.type === 'speaker') {
                            map[x.date.toISOString().split('T')[0]].push({
                                Img: true,
                                eventName: y.title,
                                time: y.time,
                                speaker: y.speaker ? y.speaker.name : "",
                                img: y.speaker && y.speaker.speakerImageUrl ? (y.speaker.speakerImageUrl) : undefined,
                    
                            });
                        } else if (y.type === 'workshop') {
                            map[x.date.toISOString().split('T')[0]].push({
                                Img: true,
                                eventName: y.title,
                                time: y.time,
                                speaker: y.workshop?.speakerName ? y.workshop.speakerName : "",
                                img: y.workshop?.logoUrl ,
                            });
                        } else {
                            map[x.date.toISOString().split('T')[0]].push({
                                noImg: true,
                                eventName: y.title,
                                time: y.time,
                            });
                        }
                    }
                }

                setScheduleData([day1Arr, day2Arr, day3Arr]);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        void fetchSchedule();
    }, []);

    return (
        <Container>
            <div className="mt-28 text-center flex flex-col">
                <span className="text-4xl">Event</span>
                <span className={`text-primary ${styles.outlinedText} !leading-[68px] text-5xl`}>
                    Schedule
                </span>
                <div className="flex justify-center gap-4 mt-4">
                    {[1, 2, 3].map(day => (
                        <button
                            key={day}
                            onClick={() => setTabno(day)}
                            className={`px-4 py-2 rounded ${tabNo === day ? 'bg-primary' : 'bg-[#B0B0B033]'}`}
                        >
                            Day {day}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex flex-col items-center gap-4 min-h-screen py-6 w-full">
                {loading ? (
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
                ) : (
                    scheduleData[tabNo - 1].map((event, index) => (
                        <ScheduleCard
                            key={index}
                            title={event.eventName}
                            speakerImageUrl={event.img}
                            speakerName={event.speaker || ""}
                            time={event.time}
                            
                        />
                    ))
                )}
            </div>
        </Container>
    );
};

export default Page;
