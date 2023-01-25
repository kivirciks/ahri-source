const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Архитектура систем искусственного интеллекта',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  base: "/ahri/",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    variables: {
        nLabs: 6
    },
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Задания',
        link: '/task/',
      },
      {
        text: 'Проекты',
        link: '/project/'
      }
    ],
    sidebar: {
      '/task/': [
        {
          title: 'Описание курса',
          collapsable: false,
          children: [
            '',
            'glossary',
            'objective',
            'structure'
          ]
        },
        {
          title: 'Лабораторные работы',
          collapsable: false,
          children: [
            'task/1',
            'task/2'
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    [
        '@adamdehaven/vuepress-plugin-custom-tooltip',
        {
            name: 'tt'
        }
    ]
  ]
}
