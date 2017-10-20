const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const movies = require('./data.js');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function (req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Request-Width, Content-Type, Accept');
    next();
});



app.get('/movies', function (request, response) {
    response.json(movies);
});

app.post('/movies/add', function (request, reponse){
    data = request.body.movie,
    movies.push(data);
});

app.listen(3000);
