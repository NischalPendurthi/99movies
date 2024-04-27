/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      
      serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
      domains: ['lh3.googleusercontent.com',"m.media-amazon.com","randomuser.me"],
    },
    webpack(config) {
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
      }
      return config
    }
  }
  
  export default nextConfig