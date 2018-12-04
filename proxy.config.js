/**
 * @author Andreas Petroll
 * Configuração de proxy para evitar cors * 
 */
const proxy = [
    {
      context: '/',
      target: 'http://localhost:5000',
      pathRewrite: { '^/': '' }
    }
];
module.exports = proxy;