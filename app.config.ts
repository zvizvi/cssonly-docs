export default defineAppConfig({
  github: {
    owner: 'zvizvi',
    repo: 'cssonly',
    branch: 'main'
  },
  docus: {
    title: 'CSSonly Docs',
    // description: 'The best place to start your documentation.',
    // image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      github: 'zvizvi/cssonly'
    },
    github: {
      edit: true,
      releases: true,
      owner: 'zvizvi',
      repo: 'cssonly-docs',
      branch: 'main'
    },
    aside: {
      level: 0,
      exclude: []
    },
    header: {
      logo: false
    },
    footer: {
      credits: {
        text: 'Made with ☕ by @zvizvi',
        href: 'https://github.com/zvizvi',
        icon: ''
      }
    },
  }
})
