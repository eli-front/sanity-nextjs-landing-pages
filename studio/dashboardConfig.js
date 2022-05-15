export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '628140fa2bb7b75e70d9b43e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-s9qhi962',
                  apiId: 'f21b50c3-2671-497a-ae40-8fe44a985c06'
                },
                {
                  buildHookId: '628140fbe789646182e17b98',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-3ryotk2o',
                  apiId: '3dcf0f63-6da1-420f-82a0-1ac3dde76fa3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/eli-front/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-3ryotk2o.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
