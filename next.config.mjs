// next.config.mjs
const isProd = process.env.NODE_ENV === 'production'

export default {
  output: 'export',                  // static HTML export
  images: { unoptimized: true },     // GH Pages has no image optimizer
  basePath: isProd ? '/web-portfolio-25' : '',
  assetPrefix: isProd ? '/web-portfolio-25/' : '',
  trailingSlash: true,               // optional; helps with some relative links
}
