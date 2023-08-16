const http = require('http');
const server = http.createServer((req, res) => {
    console.log("Aman");
})
server.listen(4000);
