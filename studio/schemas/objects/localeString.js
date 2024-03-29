import {languages} from '../documents/languages';

export default {
  name: 'localeString',
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
    type: 'string',
    fieldset: lang.isDefault ? null : 'translations'
  }))
}
