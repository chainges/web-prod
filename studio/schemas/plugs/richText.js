export default {
  name: 'richText',
  title: 'Rich Text',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'string'
    },
    {
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'block'
        }
      ]
    }
  ]
}
