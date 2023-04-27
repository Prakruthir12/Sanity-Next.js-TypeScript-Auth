import {defineField, defineType} from 'sanity';

export default defineType({
    name: 'message',
    title: 'Message',
    type: 'document',
    fields: [
      defineField({
        name: 'name',
        type: 'string',
      }),
      defineField({
        name: 'email',
        type: 'string',
      }),
      defineField({
        name: 'message',
        type: 'text',
      }),
    ],
})