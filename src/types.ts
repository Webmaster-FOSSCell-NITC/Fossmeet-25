import { SpeakerCardProps } from "./components/Cards/SpeakerCard";
import { WorkshopCardProps } from "./components/Cards/WorkshopCard";

export type SpeakerDetails = SpeakerCardProps & {
    description?: string,
};

export type WorkshopDetails = WorkshopCardProps;