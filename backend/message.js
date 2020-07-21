const { generateOAuthToken } = require('./generateOAuthToken');
generateOAuthToken();
//Run createSubcription.js & above two lines code step by step & replace headers.Authorization with new OAuthToken.


function sendCodeToPhone() {
  var axios = require('axios');
  var data = JSON.stringify({"to":["+61450147001"],"body":"2020/07/21","from":"Wenpei Z","validity":5,"scheduledDelivery":1,"notifyURL":"https://www.example.com/","replyRequest":false,"priority":false,"receiptOff":true});
  var config = {
    method: 'post',
    url: 'https://tapi.telstra.com/v2/messages/sms',
    headers: { 
      'Accept': 'application/json', 
      'Content-Type': 'application/json', 
      'Authorization': 'Bearer 5bOtmOPQIQfZFS28nvcujG84iXbS'
    },
    data : data
  };

  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
}

module.exports = { sendCodeToPhone };