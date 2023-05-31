/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.imgur.com", "links.papareact.com"],
  },
  env: {
    mapbox_key: "",
  },
};

module.exports = nextConfig;
