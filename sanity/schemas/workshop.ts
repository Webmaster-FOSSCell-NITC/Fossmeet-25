import { Image, type SchemaTypeDefinition } from 'sanity';

const schema: SchemaTypeDefinition = {
    name: 'workshop',
    type: 'document',
    title: 'Workshops',
    fields: [
        { name: 'name', type: 'string', title: 'Name' },
        { name: 'description', type: 'text' },
        { name: 'image', type: 'image' },
        {
            name: 'conducted_by', type: 'object', fields: [
                { name: 'name', type: 'string' },
                { name: 'logo', type: 'image' }
            ]
        },
        {
            name: 'hosts', type: 'array',
            of: [
                { title: 'hosts', type: 'string' }
            ]
        },
        { name: 'date', type: 'date', title: 'Date' },
        { name: 'duration', type: 'string', title: 'Duration in hours   ' },
    ]
}

export interface Workshop {
    name: string
    description: string
    duration: string
    image: Image
    hosts: string[]
    conducted_by: {
        name: string
        logo: Image
    }
    date: string
}



export default schema;