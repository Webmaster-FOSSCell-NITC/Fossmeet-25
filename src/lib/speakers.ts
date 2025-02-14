import { Speaker } from "../../sanity/schemas/speaker";
import { client } from "../../sanity/lib/client";
import { revalidateTime } from "../../sanity/env";
import { urlForImage } from "../../sanity/lib/image";
import { SpeakerDetails } from "@/types";



export const getSpeakers = async (): Promise<SpeakerDetails[]> => {
    const speakers: Speaker[] = await client.fetch<Speaker[]>(
        `*[_type=="speaker"]`,
        {},
        {
            next: {
                revalidate: revalidateTime
            }
        }
    )
    //console.log(speakers[0])
    const output: SpeakerDetails[] = speakers.map(data => ({
        name: data.name,
        talkTitle: data.talk || "",
        speakerImageUrl: urlForImage(data.image),
        description: data.description,
        socials: data.socials ? data.socials.map((social) => ({ type: social.type, url: social.link })) : [],
    }))


    return output;
}