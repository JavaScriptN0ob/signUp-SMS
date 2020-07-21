const {sendCodeToPhone} = require('./message');

const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url);
  // res.write('message had been sent!');
  // res.end();
  // generateOAuthToken();
  if(req.uel === '/sendMessage') {
    sendCodeToPhone();
  }
})

server.listen(12306);