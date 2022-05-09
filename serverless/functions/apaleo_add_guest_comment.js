
// This is your new function. To start, set the name and path on the left.

exports.handler = function(context, event, callback) {
    console.log(event);
    const axios = require('axios').default;
  
    axios({
      method: 'patch',
      url: context.APALEO_API_DOMAIN + '/booking/v1/reservations/' + event.reservation_id,
      responseType: 'json',
      headers: {
        'Authorization': 'Bearer ' + event.apaleo_token,
        'Content-Type': 'application/json'
      },
      data: [
        {"value": event.comment,
        "path": "/guestComment",
        "op": "add"}
      ]
    })
    .then(function (response) {
      console.log(response.data);
      return callback(null, response.data)
    })
    .catch(function (error) {
      console.log(error);
      return callback(error, null);
    })
  
    // This callback is what is returned in response to this function being invoked.
    // It's really important! E.g. you might respond with TWiML here for a voice or SMS response.
    // Or you might return JSON data to a studio flow. Don't forget it!
    
  };