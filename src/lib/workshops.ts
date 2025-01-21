import { WorkshopCardProps } from '@/components/Cards/WorkshopCard'
import { revalidateTime } from '@/sanity/env'
import { client } from '@/sanity/lib/client'
import { Workshop } from '@/sanity/schemas/workshop'
import { urlForImage } from '@/sanity/lib/image'

export const getWorkshops = async (): Promise<WorkshopCardProps[]> => {
    const workshops = await client.fetch<Workshop[]>(
        `*[_type=="workshop"]`,
        {},
        {
            next: {
                revalidate: revalidateTime
            }
        }
    )

    const output: WorkshopCardProps[] = workshops.map(data => ({
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
