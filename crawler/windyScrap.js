
const request = require('request')

const jsdom = require('jsdom')
const {JSDOM} = jsdom

/*
    implementação do jquery para node.js

const cheerio = require('cheerio')
*/

var data;

request('https://www.windy.com/pt/-Temperatura-temp?temp,-19.911,-43.945,5,m:ddZaeIN', function(err, res, htm){
    if(!err){
        const dom = new JSDOM(htm);
        //console.log(dom.window.document.querySelector('html').innerHTML);
        console.log(dom.window.document.querySelector('body a').innerHTML);
        data = dom;

    }else{
        console.log('erro: ' + err);
    }
});

//var data= {
//    value: true
//}

module.exports = data