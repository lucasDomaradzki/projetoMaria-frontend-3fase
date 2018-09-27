const proxy = [
    {
      context: '/',
      target: 'http://localhost:3000',
      pathRewrite: { '^/': '' }
    }
  ];
  module.exports = proxy;