module.exports = {
    lang: 'ja-JP',
    title: 'Shell Stash',
    description: 'Simple and Usuful shellscript',
    base: '/Shell-Stash/',
    head: [
        ['link', { rel: 'icon', type: 'image/png', href: '/dammy/images/hero.png' }],
        ['meta', { name: 'og:url', content: 'https://ontheroadjp.github.com/shell-Stash/' }],
        ['meta', { name: 'og:type', content: 'website' }],
        ['meta', { name: 'og:title', content: 'Shell Stash' }],
        ['meta', { name: 'og:description', content: 'Simple and Useful Shellscript' }],
        ['meta', { name: 'og:image', content: 'https://ontheroadjp.github.io/Shell-Stash/images/main.jpg' }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { name: 'twitter:site', content: '@te_ontheroad_jp' }],
        ['meta', { name: 'twitter:title', content: 'Shell Stash' }],
        ['meta', { name: 'twitter:description', content: 'Simple and Useful Shellscript' }],
        ['meta', { name: 'twitter:image', content: 'https://ontheroadjp.github.io/Shell-Stash/images/main.jpg' }],
    ],
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Shell Stash',
            description: 'Simple and Usuful shellscript',
        },
        '/ja/': {
            lang: 'ja-JP',
            title: 'Shell Stash',
            description: 'Simple and Usuful shellscript',
        },
    },
    themeConfig: {
        logo: '/images/hero.png',
        repo: 'ontheroadjp/Shell-Stash',
        locales: {
            '/': {
                selectLanguageName: 'English',
                navbar: [
                    // NavbarItem
                    { text: 'overview', link: '/overview/', },
                    { text: 'setup', link: '/setup/', },
                    { text: 'usage', link: '/usage/', },
                ],
            },
            '/ja/': {
                selectLanguageName: '日本語',
                navbar: [
                    { text: '概要', link: '/ja/overview/', },
                    { text: 'セットアップ', link: '/ja/setup/', },
                    { text: '使い方', link: '/ja/usage/', },
                ],
            },
        },
        docsRepo: 'https://github.com/ontheroadjp/Shell-Stash',
        docsBranch: 'master',
        docsDir: 'docs',
        editLinkPattern: ':repo/edit/:branch/:path',
        lastUpdated: 'Last Updated',
    },
}
