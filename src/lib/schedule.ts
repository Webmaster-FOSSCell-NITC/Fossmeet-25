import { client } from "../../sanity/lib/client";
import { revalidateTime } from "../../sanity/env";
import { ScheduleDetails, EventDetails } from "@/types";
import { Schedule } from "../../sanity/schemas/schedule";
import { urlForImage } from "../../sanity/lib/image";

export const getSchedule = async (): Promise<ScheduleDetails[]> => {
    const schedules = await client.fetch<Schedule[]>(
        `*[_type == "schedule"]{
        ...,
        events[]{
          ...,
          workshop->,
          speaker->
        }
    }
    `,
        {},
        {
            next: {
                revalidate: 30
            }
        }
    );


    const output: ScheduleDetails[] = schedules.map((schedule) : ScheduleDetails => ({
        date: new Date(schedule.date), 
        events: schedule.events.map(event => ({
            title: event.title,
            time: event.time,
            type: event.type,
            workshop: ((event.type === 'workshop' && event.workshop)
                ? {
                    title: event.workshop.name,
                    description: event.workshop.description,
                    logoUrl: urlForImage(event.workshop.image),
                    date: event.workshop.date,
                    duration: event.workshop.duration,
                    speakerImageUrl: urlForImage(event.workshop.conducted_by.logo),
                    speakerName: event.workshop.conducted_by.name,
                    link: ""
                }
                : null),
            speaker: ((event.type === 'speaker' && event.speaker)
                ? {
                    socials: event.speaker.socials ? event.speaker.socials.map((social) => ({ type: social.type, url: social.link })) : [],
                    description: event.speaker.description,
                    talkTitle: event.speaker.talk,
                    speakerImageUrl: urlForImage(event.speaker.image),
                    name: event.speaker.name
                }
                : null)
        }))
    }));

    return output;
};
