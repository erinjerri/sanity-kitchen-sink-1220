export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5fc6579c56a2f272a661c98a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-1220-studio',
                  apiId: 'ffdd1f0b-7100-4796-b706-388c4c4d91c9'
                },
                {
                  buildHookId: '5fc6579ce045474556dbfc3d',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-1220',
                  apiId: '7b5459f8-8c13-41c0-8174-12ac60dfd52e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/erinjerri/sanity-kitchen-sink-1220',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-1220.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
