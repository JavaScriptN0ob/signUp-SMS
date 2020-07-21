function generateOAuthToken() {
  var axios = require('axios');
  var qs = require('querystring');
  var data = qs.stringify({
  'client_id': '89i7SB3A7uiRWnHm6WGJ3vD5kpZEtRVN',
  'client_secret': 'qP1QC4Co9hBvlHaM',
  'grant_type': 'client_credentials',
  'scope': 'NSMS' 
  });
  var config = {
    method: 'post',
    url: 'https://tapi.telstra.com/v2/oauth/token',
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data : data
  };

  axios(config)
  .then(function (response) {
    // console.log(JSON.stringify(response.data));
    console.log(JSON.stringify(response.data.access_token));
  })
  .catch(function (error) {
    console.log(error);
  });
}

module.exports = { generateOAuthToken }
