export default {
  name: 'poomsae',
  title: 'Poomsae',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'moveNumber',
      title: 'Number of Moves',
      type: 'number'
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
      name: 'pattern',
      title: 'Pattern',
      type: 'object',
      fields: [
        {
          name: 'image',
          title: 'Pattern Image',
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
          name: 'name',
          title: 'Pattern Name',
          type: 'string'
        },
        {
          name: 'meaning',
          title: 'Pattern Meaning',
          type: 'text',
        }
      ]
    },
    {
      name: 'meaning',
      title: 'Poomsae Meaning',
      type: 'text',
    },
    {
      name: 'newTechniques',
      title: 'New Techniques',
      type: 'array',
      of: [{
        type: 'reference',
        to: [
          { type: 'technique' },
        ]
      }]
    },
    //TODO: Video of Poomsae
    //TODO: Directions of Poomsae (Image + Description + Pro Deduction Factors)
    {
      name: 'directions',
      title: 'Directions',
      description: 'A list of movements described in the Kukkiwon textbook.',
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
  ],
}
