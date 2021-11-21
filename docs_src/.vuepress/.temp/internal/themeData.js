export const themeData = {
  "logo": "https://vuejs.org/images/logo.png",
  "locales": {
    "/": {
      "selectLanguageName": "English",
      "navbar": [
        {
          "text": "overview",
          "link": "/overview/"
        },
        {
          "text": "setup",
          "link": "/setup/"
        },
        {
          "text": "usage",
          "link": "/usage/"
        }
      ]
    },
    "/ja/": {
      "selectLanguageName": "日本語",
      "navbar": [
        {
          "text": "概要",
          "link": "/ja/overview/"
        },
        {
          "text": "セットアップ",
          "link": "/ja/setup/"
        },
        {
          "text": "使い方",
          "link": "/ja/usage/"
        }
      ]
    }
  },
  "docsRepo": "https://github.com/ontheroadjp/Shell-Stash",
  "docsBranch": "master",
  "docsDir": "docs",
  "editLinkPattern": ":repo/-/edit/:branch/:path",
  "lastUpdated": "Last Updated",
  "navbar": [],
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
