export const siteData = {
  "base": "/Shell-Stash/",
  "lang": "ja-JP",
  "title": "Shell Stash",
  "description": "Simple and Usuful shellscript",
  "head": [],
  "locales": {
    "/": {
      "lang": "en-US",
      "title": "Shell Stash",
      "description": "Simple and Usuful shellscript"
    },
    "/ja/": {
      "lang": "ja-JP",
      "title": "Shell Stash",
      "description": "Simple and Usuful shellscript"
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
