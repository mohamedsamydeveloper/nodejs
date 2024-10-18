const http = require('http');
const PORT = process.env.PORT || 3000;

const requestListener = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello\n');
};

const server = http.createServer(requestListener);

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
