
module.exports = {
  seo: {
  "title": "FastStore",
  "description": "A fast and performant store framework",
  "titleTemplate": "%s | FastStore",
  "author": "FastStore"
},

  // Theming
  theme: 'soft-blue',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: "univio",
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
    incrementAddress: false,
  },

  // Default session
  session: {
    currency: {
      code: "PLN",
      symbol: "zł",
    },
    locale: "pl-PL",
    channel: '{"salesChannel":1,"regionId":""}',
    country: "POL",
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    person: null,
  },

  cart: {
    id: '',
    items: [],
    messages: [],
    shouldSplitItem: true,
  },

  // Production URLs
  storeUrl: "https://univio.vtex.app",
  secureSubdomain: "https://secure.vtexfaststore.com/",
  checkoutUrl: "https://secure.vtexfaststore.com/checkout",
  loginUrl: "https://secure.vtexfaststore.com/api/io/login",
  accountUrl: "https://secure.vtexfaststore.com/api/io/account",

  previewRedirects: {
    home: '/',
    plp: "/home%20appliance",
    search: "/s?q=Brand",
    pdp: "/cuisinart-gr-4n-5-in-1-griddler/p",
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: "/cuisinart-gr-4n-5-in-1-griddler/p",
      collection: "/home%20appliance",
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: "/cuisinart-gr-4n-5-in-1-griddler/p",
      collection: "/home%20appliance",
      collection_filtered: "/home%20appliance/?category-1=home%20appliance&brand=Brand&facets=category-1%2Cbrand%27",
      search: "/s?q=Brand",
    },
    browser: 'electron',
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: "",
  },

  experimental: {
    nodeVersion: 18,
    cypressVersion: 12,
  },

  vtexHeadlessCms: {
    webhookUrls: [
      "https://univio.myvtex.com/cms-releases/webhook-releases",
    ],
  },
}
