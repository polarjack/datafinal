var hospital = require('./hospital.json')

var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyClG1COBS6izq7X-_rTqMjp-N01GGNaMSA'
});


// function find(target) {
//   hospital.map(getaddress(v.addr))
// }

function getaddress(value) {
   googleMapsClient.geocode({
    address: '台北市仁愛路4段112巷12號'
  }, function(err, response) {
    if (!err) {
      console.log(response.json.results[0].formatted_address)
    }
  });
}

getaddress("testing")
