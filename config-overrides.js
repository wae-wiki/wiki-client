module.exports = {
  webpack: config => {
    const devServer = {
      host: '127.0,0.1',
      port: 8080
    };
    return {
      ...config,
      devServer
    };
  }
}
