import { revalidateTime } from '../../sanity/env'
import { client } from '../../sanity/lib/client'
import { Workshop } from '../../sanity/schemas/workshop'
import { urlForImage } from '../../sanity/lib/image'
import { WorkshopDetails } from '@/types'

export const getWorkshops = async (): Promise<WorkshopDetails[]> => {
    const workshops: Workshop[] = await client.fetch<Workshop[]>(
        `*[_type=="workshop"]`,
        {},
        {
            next: {
                revalidate: revalidateTime
            }
        }
    )

    const output: WorkshopDetails[] = workshops.map(data => ({
        title: data.name,
        description: data.description,
        duration: data.duration,
        logoUrl: urlForImage(data.image),
        date: data.date,
        speakerName: data.conducted_by.name,
        speakerImageUrl: urlForImage(data.conducted_by.logo),
        link: "",
    }))

    return output;
}
