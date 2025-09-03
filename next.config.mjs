/** @type {import('next').NextConfig} */
 const nextConfig = {
      output: 'export', // Enables static HTML export
      basePath: process.env.NODE_ENV === 'production' ? '/web-web-portfolio-25' : '', // Adjust for GitHub Pages URL
      assetPrefix: process.env.NODE_ENV === 'production' ? '/web-web-portfolio-25/' : '', // Adjust for GitHub Pages URL
    };

export default nextConfig
