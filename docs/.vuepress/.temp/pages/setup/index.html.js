export const data = {
  "key": "v-d8bfacea",
  "path": "/setup/",
  "title": "Setup",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Install",
      "slug": "install",
      "children": []
    },
    {
      "level": 2,
      "title": "Uninstall",
      "slug": "uninstall",
      "children": []
    }
  ],
  "filePathRelative": "setup/README.md",
  "git": {}
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
