export const data = {
  "key": "v-2d0a983f",
  "path": "/ja/",
  "title": "",
  "lang": "ja-JP",
  "frontmatter": {
    "home": true,
    "heroImage": "https://v1.vuepress.vuejs.org/hero.png",
    "tagline": "Simple and Usuful shellscript",
    "actionText": "Get Started →",
    "actionLink": "/overview/"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "ja/README.md",
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
