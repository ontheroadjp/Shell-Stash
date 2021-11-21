export const siteData = {
  "base": "/Shell-Stash/",
  "lang": "ja-JP",
  "title": "Shell Stash",
  "description": "Document for very usuful shell script of the Shell Stash",
  "head": [],
  "locales": {
    "/": {
      "lang": "en-US",
      "title": "Shell Stash Documentation",
      "description": "Documentation for Shell-Stash"
    },
    "/ja/": {
      "lang": "ja-JP",
      "title": "Shell Stash ドキュメント",
      "description": "Shell Stash ドキュメント"
    }
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
