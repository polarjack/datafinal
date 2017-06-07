var hospital = require('./hospital.json')
var test = require('./hostest.json')
var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyClG1COBS6izq7X-_rTqMjp-N01GGNaMSA'
});
var sleep = require('sleep')

// function find(target) {
//   hospital.map(getaddress(v.addr))
// }

function getaddress(value) {
   googleMapsClient.geocode({
    address: value
  }, function(err, response) {
    if (!err) {
      console.log(response.json.results[0].formatted_address,",")
    }
  });
}

test.map((v) =>{
  getaddress(v.addr)
  sleep.msleep(100)
})
// getaddress('台北市仁愛路4段112巷12號')
