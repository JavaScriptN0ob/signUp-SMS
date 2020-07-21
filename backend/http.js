const {sendCodeToPhone} = require('./message');
const {generateOAuthToken} = require('./generateOAuthToken')

const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url);
  // sendCodeToPhone();
  // generateOAuthToken();
})

server.listen(12306);