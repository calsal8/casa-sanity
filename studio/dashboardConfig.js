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
                  buildHookId: '5f690deb4d8777320b3c6f37',
                  title: 'Sanity Studio',
                  name: 'casa-sanity-studio',
                  apiId: '626759e4-beb1-4ddf-a668-98a153e07ca2'
                },
                {
                  buildHookId: '5f690deb3fc26524b0d177b4',
                  title: 'Blog Website',
                  name: 'casa-sanity',
                  apiId: 'b1497e61-d05d-45a6-b3fa-b4371554ada2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/calsal8/casa-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://casa-sanity.netlify.app', category: 'apps'}
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
