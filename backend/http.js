const {sendCodeToPhone} = require('./message');

const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url);
  // res.write('message had been sent!');
  // res.end();
  // generateOAuthToken();
  // sendCodeToPhone();
  if(req.url === '/sendMessage') {
    sendCodeToPhone();
  }
})

server.listen(12306);