/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.21kschool.com", "assets.weforum.org", "media.udig.com"], // Combine both domains in one array
  },
};

export default nextConfig;
