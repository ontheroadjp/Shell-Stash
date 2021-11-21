module.exports = {
    lang: 'ja-JP',
    title: 'Shell Stash',
    description: 'Simple and Usuful shellscript',
    base: '/Shell-Stash/',
    dest: 'docs/',
    repo: 'ontheroadjp/Shell-Stash',
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
