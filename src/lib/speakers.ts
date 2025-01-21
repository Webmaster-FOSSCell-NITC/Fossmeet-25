import { Speaker } from "@/sanity/schemas/speaker";
import { SpeakerCardProps } from "@/components/Cards/SpeakerCard";
import { client } from "@/sanity/lib/client";
import { revalidateTime } from "@/sanity/env";
import { urlForImage } from "@/sanity/lib/image";

export const getSpeakers = async (): Promise<SpeakerCardProps[]> => {
    const speakers = await client.fetch<Speaker[]>(
        `*[_type=="speaker"]`,
        {},
        {
            next: {
                revalidate: revalidateTime
            }
        }
    )

    const output: SpeakerCardProps[] = speakers.map(data => ({
        name: data.name,
        talkTitle: data.talk,
        speakerImageUrl: urlForImage(data.image),
    }))


    return output;
}