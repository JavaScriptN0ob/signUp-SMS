const {generateOAuthToken} = require('./generateOAuthToken');
// let OAuthToken = generateOAuthToken();

function createSubscription() {
  var data = JSON.stringify({});
  var axios = require('axios');
  var config = {
    method: 'post',
    url: 'https://tapi.telstra.com/v2/messages/provisioning/subscriptions',
    headers: { 
      'Accept': 'application/json', 
      'Content-Type': 'application/json', 
      'Authorization': 'Bearer EwQkjBQgvALUtyTZqXcmkIhuAlBu'
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

createSubscription();