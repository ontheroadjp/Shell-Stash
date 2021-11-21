module.exports = {
    lang: 'ja-JP',
    title: 'Shell Stash',
    description: 'Document for very usuful shell script of the Shell Stash',
    base: '/Shell-Stash/',
    repo: 'ontheroadjp/Shell-Stash',
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Shell Stash Documentation',
            description: 'Documentation for Shell-Stash',
        },
        '/ja/': {
            lang: 'ja-JP',
            title: 'Shell Stash ドキュメント',
            description: 'Shell Stash ドキュメント',
        },
    },
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        locales: {
            '/': {
                selectLanguageName: 'English',
                navbar: [
                    // NavbarItem
                    { text: 'setup', link: '/setup/', },
                    { text: 'usage', link: '/usage/', },
                ],
            },
            '/ja/': {
                selectLanguageName: '日本語',
                navbar: [
                    { text: 'セットアップ', link: '/ja/setup/', },
                    { text: '使い方', link: '/ja/usage/', },
                ],
            },
        },
    },
}
