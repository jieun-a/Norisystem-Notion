import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '7875426197cf461698809def95960ebf',

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
      title: 'About',
      pageId: 'f1199d37579b41cbabfc0b5174f4256a'
    },
    {
      title: 'Contact',
      pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
    },
    {
      title: 'Nori Home',
      url: 'www.norisystem.co.kr'
    }
  ]
})