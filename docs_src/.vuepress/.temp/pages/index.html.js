export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "https://v1.vuepress.vuejs.org/hero.png",
    "tagline": "Simple and Usuful shellscript",
    "actions": [
      {
        "text": "Get Started",
        "link": "/overview/",
        "type": "primary"
      },
      {
        "text": "usage",
        "link": "/usage/",
        "type": "secondary"
      }
    ],
    "features": [
      {
        "title": "Simple",
        "details": "It is an easy to install/uninstall program of only 3.5kb."
      },
      {
        "title": "Useful",
        "details": "No more typing long paths over and over again with cp and mv commands!"
      },
      {
        "title": "Easy to Use",
        "details": "No need to specify complicated options, just the ss command."
      }
    ],
    "footer": "MIT Licensed | Copyright © 2021-present ontheroadjp"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "README.md",
  "git": {
    "updatedTime": 1637479351000,
    "contributors": [
      {
        "name": "ontheroadjp",
        "email": "dev@ontheroad.jp",
        "commits": 1
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
