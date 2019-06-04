// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/Users/wwlorey/Projects/williamlorey.com/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/wwlorey/Projects/williamlorey.com/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/wwlorey/Projects/williamlorey.com/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-music-js": () => import("/Users/wwlorey/Projects/williamlorey.com/src/pages/music.js" /* webpackChunkName: "component---src-pages-music-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/wwlorey/Projects/williamlorey.com/.cache/data.json")

