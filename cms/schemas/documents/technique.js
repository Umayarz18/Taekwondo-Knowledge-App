export default {
    name: 'technique',
    title: 'Technique',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Technique Name',
            type: 'string',
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true // <-- Defaults to false
            },
            fields: [
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Caption',
                    options: {
                        isHighlighted: true // <-- make this field easily accessible
                    }
                },
                {
                    // Editing this field will be hidden behind an "Edit"-button
                    name: 'attribution',
                    type: 'string',
                    title: 'Attribution',
                }
            ]

        },
        {
            name: 'category',
            title: 'Category',
            description: 'What type of movement ',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Block', value: 'block' },
                    { title: 'Strike', value: 'strike' },
                    { title: 'Stance', value: 'stance' },
                    { title: 'Kick', value: 'Kick' }
                ]
            }
        },
        //TODO: Movement description with images
        {
            name: 'movementDisplay',
            title: 'Movement Display',
            description: 'A breakdown of the movement provided with pictures',
            type: 'array',
            of: [{
                title: 'Movement Step',
                name: 'movementStep',
                type: 'object',
                fields: [
                    {
                        title: 'Movement Description',
                        name: 'description',
                        type: 'text'
                    },
                    {
                        name: 'image',
                        title: 'image',
                        type: 'image',
                        options: {
                            hotspot: true // <-- Defaults to false
                        },
                        fields: [
                            {
                                name: 'caption',
                                type: 'string',
                                title: 'Caption',
                                options: {
                                    isHighlighted: true // <-- make this field easily accessible
                                }
                            },
                            {
                                // Editing this field will be hidden behind an "Edit"-button
                                name: 'attribution',
                                type: 'string',
                                title: 'Attribution',
                            }
                        ]
                    }
                ]
            }]
        }
        //TODO: Video of Movement
        //TODO: Areas Effected (Area Blocked or Target Areas)
        //TODO: Deduction Factors (list of deductions)
        //TODO: Practical Application (Description + Images)
    ]
}