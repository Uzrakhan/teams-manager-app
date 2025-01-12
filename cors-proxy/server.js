const cors_proxy = require('cors-anywhere');

const host = 'localhost';
const port = 3001;

cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, () => {
    console.log(`Proxy server is running at http://${host}:${port}`);
});

