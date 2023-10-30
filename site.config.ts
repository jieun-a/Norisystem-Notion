import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  // rootNotionPageId: '7875426197cf461698809def95960ebf',
  rootNotionPageId: 'Norisystem-Blog-0e41a4cd2a5e4653b51b5071f2e7e68e?pvs=4', //norisytem-blog-notions

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Norisystem Blog',
  domain: 'nextjs-notion-starter-kit.transitivebullsh.it',
  author: '© norisystem Corp.',
  addressSuwon: '경기 용인시 기흥구 서천로201번길 11(기흥테라타워), 9064호',
  addressCheonan: '충청남도 천안시 서북구 백석공단1로10, 5층 B501호',
  suwonTel: '031-273-7650',
  cheonanTel: '041-414-7650',

  // open graph metadata (optional)
  description: 'Norisystem Blog',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  // github: 'transitive-bullshit',
  // linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`
  homepage: 'http://norisystem.co.kr',
  groupware: 'http://gw.norisystem.co.kr',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  // defaultPageIcon: null,
  defaultPageIcon: '/public/page-icon.png',
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Blog',
      pageId: 'Blog-81e05d80c5154e4d9c31dd0d01ce09f7?pvs=4'
    },
    {
      title: 'About',
      pageId: 'About-c3313d430c134070b37758d66c9f603f?pvs=4'
    },
    {
      title: 'Contact',
      pageId: 'Contact-4707deaee6614e9eb4ea66a26db4c6ea?pvs=4'
    }
  ]
})
