
const request = require('request')

/*
    implementação do jquery para node.js
*/
const cheerio = require('cheerio')

var data;

//request('https://www.windy.com/pt/-Temperatura-temp?temp,-19.181,-47.450,7', function(err, res, body){
request('https://www.windy.com/pt/-Temperatura-temp?temp,-19.911,-43.945,5,m:ddZaeIN', function(err, res, body){
//request('https://oglobo.globo.com/', function(err, res, body){
    if(!err){
        let $ = cheerio.load(body);
        console.log($);

        $('big').each(function(){
            console.log($(this).html());   
        });
    }else{
        console.log('erro: ' + err);
    }
});

//var data= {
//    value: true
//}

module.exports = data