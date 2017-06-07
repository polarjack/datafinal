var park = require('./apiIn.json')
var school = require('./school.json')

// console.log(park[0].AdministrativeArea)
var all = [
"中正區",
"大同區",
"中山區",
"松山區",
"大安區",
"萬華區",
"信義區",
"士林區",
"北投區",
"內湖區",
"南港區",
"文山區",
]

// console.log("臺北市士林區翠山里至善路2段321號".indexOf('士林區'))

function gothrough(tofind) {
  
  var after = school.filter((a) =>{
    if(a.school == "高職"){
     return a.address.indexOf(tofind) > 0
    }
  })
  return after.length
}

all.map((value) => console.log(gothrough(value)))


