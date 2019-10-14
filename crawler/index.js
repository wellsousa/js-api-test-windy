const express = require('express')
var data = require('./windyScrap');

const app = express()

app.listen(3000, function(req, res){
    console.log('crawler running at port 3000');
    //console.log(data);
});