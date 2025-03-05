import { StringComponents } from "sanity";
import { SpeakerCardProps } from "./components/Cards/SpeakerCard";
import { WorkshopCardProps } from "./components/Cards/WorkshopCard";

export type SpeakerDetails = SpeakerCardProps & {
    description?: string,
    socials: {
        type: string,
        url: string,
    }[],
};

export type WorkshopDetails = WorkshopCardProps;

export type EventDetails = {
    title: string;
    time: string;
    type: '' | 'workshop' | 'speaker';
    speaker: SpeakerDetails | null;  
    workshop: WorkshopDetails | null; 
};

export type ScheduleDetails = {
    date: Date;
    events: EventDetails[];
};