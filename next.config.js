const nextConfig = {
  reactStrictMode: true,
  distDir: 'build', // Changed the output directory to 'build'
  deviceSizes: [320, 420, 768, 1024], // The device sizes for optimized images
};

module.exports = nextConfig;
