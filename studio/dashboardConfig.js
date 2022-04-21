export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60773a71d4c2651e752e6e01',
                  title: 'Sanity Studio',
                  name: 'Scope321-studio',
                  apiId: 'e8b93f4a-0151-4e21-80a1-ef8e2e989f24'
                },
                {
                  buildHookId: '60773a711cb1c51dae7a424a',
                  title: 'Website',
                  name: 'scope321-1',
                  apiId: 'ca9922f3-ba8a-4531-8af1-cf3e2a194e85'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chainges/web-prod',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://www.scope321.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
