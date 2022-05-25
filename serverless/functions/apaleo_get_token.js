
// This is your new function. To start, set the name and path on the left.

exports.handler = function(context, event, callback) {
    console.log(event);
    const axios = require('axios').default;
  
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    axios({
      method: 'post',
      url: context.APALEO_IDENTITY_DOMAIN + '/connect/token',
      responseType: 'json',
      auth: {
        username: context.APALEO_CLIENT_ID,
        password: context.APALEO_CLIENT_SECRET
      },
      headers: {
        'Content-Type':'application/x-www-form-urlencoded',
      },
      data: params //qs.stringify({ 'grant_type': 'client_credentials' })
    })
    .then(function (response) {
      console.log(response.data);
      return callback(null, response.data.access_token)
  
    })
    .catch(function (error) {
      console.log(error);
      console.log(error.status);
      return callback(error, null);
    })
  
    // This callback is what is returned in response to this function being invoked.
    // It's really important! E.g. you might respond with TWiML here for a voice or SMS response.
    // Or you might return JSON data to a studio flow. Don't forget it!
    
  };
