/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add your image domains for Next.js Image Optimization
  images: {
    domains: ['openweathermap.org'], // Add more domains here if needed
  },
  
  // Add environment variables to be accessible in the app
  env: {
    NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
  },
};

module.exports = nextConfig;
