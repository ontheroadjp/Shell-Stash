export const data = {
  "key": "v-3f644251",
  "path": "/ja/setup/",
  "title": "Setup",
  "lang": "ja-JP",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "インストール",
      "slug": "インストール",
      "children": []
    },
    {
      "level": 2,
      "title": "アンインストール",
      "slug": "アンインストール",
      "children": []
    }
  ],
  "filePathRelative": "ja/setup/README.md",
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
