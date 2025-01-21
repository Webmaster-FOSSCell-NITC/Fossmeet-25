import { type SchemaTypeDefinition } from 'sanity';

const schema: SchemaTypeDefinition = {
    name: 'speaker',
    type: 'document',
    title: 'Speakers',
    fields: [
        { name: 'name', type: 'string', title: 'Name' },
        { name: 'description', type: 'text' },
        { name: 'image', type: 'image' },
        {
            name: 'socials',
            type: 'array',
            of: [
                {
                    title: 'socials',
                    type: 'object',
                    fields: [
                        { name: 'link', type: 'url' },
                        {
                            name: 'type',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Twitter', value: 'twitter' },
                                    { title: 'Website', value: 'website' },
                                    { title: 'Github', value: 'github' },
                                    { title: 'Linkedin', value: 'linkedin' }
                                ]
                            },
                        },
                    ]
                }
            ],
        },
        { name: 'talk', type: 'string' }
    ],
}

export type Speaker = {
    image: Image;
    description: string;
    socials: Social[];
    _updatedAt: Date;
    _createdAt: Date;
    _type: string;
    name: string;
    talk: string;
    _id: string;
    _rev: string;
}

type Image = {
    _type: string;
    asset: Asset;
}

type Asset = {
    _ref: string;
    _type: string;
}


type Social = {
    link: string;
    _key: string;
    type: string;
}


export default schema