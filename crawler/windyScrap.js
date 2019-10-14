
const request = require('request')
const cheerio = require('cheerio')



var data = request('https://www.windy.com/pt/-Temperatura-temp?temp,-19.181,-47.450,7', function(err, res, body){
    console.log(body);
});

//var data= {
//    value: true
//}

module.exports = data