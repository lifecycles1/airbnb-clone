/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.imgur.com", "links.papareact.com"],
  },
  env: {
    mapbox_key: "pk.eyJ1IjoibGlmZWN5Y2xlczEiLCJhIjoiY2xoejkyenRmMWJoejNjbXdzMzExc252MiJ9.1GdEXxGlLkYGsnjDQxH3hg"
  }
};

module.exports = nextConfig;
