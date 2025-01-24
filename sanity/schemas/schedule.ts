import { type SchemaTypeDefinition } from 'sanity';
import { Speaker } from './speaker';
import { Workshop } from './workshop';

const startTime = new Date()
startTime.setHours(7, 0, 0, 0);
const endTime = new Date()
endTime.setHours(22, 0, 0, 0);


const schema: SchemaTypeDefinition = {
    name: 'schedule',
    type: 'document',
    title: 'Schedule',

    fields: [
        { name: 'date', type: 'date', title: 'Date', },
        {
            name: 'events', type: 'array',
            of: [
                {
                    title: 'Event',
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Title' },
                        {
                            name: 'time', type: 'string', title: 'Time', options: {
                                list: generateTimeSlots(startTime, endTime, 15)
                            }
                        },
                        {
                            name: 'type',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Workshop', value: 'workshop' },
                                    { title: 'Talk', value: 'speaker' },
                                ]
                            },
                        },
                        { name: 'speaker', type: 'reference', to: [{ type: 'speaker' }], title: 'Speaker' },
                        { name: 'workshop', type: 'reference', to: [{ type: 'workshop' }], title: 'Workshop' },
                    ]
                }

            ]
        }
    ]
}


function generateTimeSlots(startTime: Date, endTime: Date, interval: number) {
    const timeSlots: string[] = [];
    let currentTime = new Date(startTime);

    while (currentTime < endTime) {
        const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        timeSlots.push(formattedTime);
        currentTime.setMinutes(currentTime.getMinutes() + interval);
    }

    return timeSlots;
}


export type Schedule = {
    date: `${number}-${number}-${number}`,
    events: Event[],
}[]

type Event = {
    title: string;
    time: string;
} & ({
    type: 'workshop';
    workshop: Workshop;
} | {
    type: 'speaker';
    speaker: Speaker;
} | { type: '' })



export default schema;