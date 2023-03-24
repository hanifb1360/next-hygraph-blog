const nextConfig = {
  reactStrictMode: true,
  distDir: '.next', // Changed the output directory to 'build'
  deviceSizes: [320, 420, 768, 1024], // The device sizes for optimized images
};

module.exports = nextConfig;
