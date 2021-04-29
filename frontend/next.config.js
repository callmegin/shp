module.exports = {
  // Uncomment the line below to enable basePath, pages and
  // redirects will then have a path prefix (`/app` in this case)
  //
  // basePath: '/app',

  async redirects() {
    return [
      {
        source: '/products',
        destination: '/',
        permanent: false,
      },
    ];
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};
