import {languages} from '../documents/languages';
  
export default {
  name: 'localeBodyPortableText',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true }
    }
  ],
  fields: languages.map(lang => ({
    title: lang.title,
    name: lang.name,
    type: 'bodyPortableText',
    fieldset: lang.isDefault ? null : 'translations'
  }))
}
  