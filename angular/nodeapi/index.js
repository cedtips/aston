const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const movies = require('./data.js');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function (req, res, next){
    res.header('Acces-Control-Allow-Origin', '*');
    res.header('Acces-Control-Allow-Methods', 'GET, POST');
    res.header('Acces-Control-Allow-Headers', 'Origin, X-Request-width, Content-Type, Accept');
    next();
});



app.get('/movies', function (request, response) {
    response.json(movies);
});

app.listen(3000);
