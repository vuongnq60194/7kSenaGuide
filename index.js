'use strict';

var express = require('express');
var https = require('https');
var rest = require('restler');
var app = express();
var serverPort = 80;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));
var baseURL = 'https://api.parse.com/1/'
var options = {
    headers: {
        "X-Parse-Application-Id": "mflQrWKtkLDJxHXwnF7AemEUG8P2kGuzZGZ4ezVY",
        "X-Parse-REST-API-Key": "MvueScynogr4nqyG4uSUOmxb6GZYMI3dQYplxuBa"
    }
};

var SevenKnights = require('./views/data/sevenknights');
var crGuide = require('./views/data/castlerush');
var raidGuide = require('./views/data/raid');


app.get('/', function (req, res) {
    res.render('pages/index', {
        Title: "Seven Knights",
        SevenKnights: SevenKnights
    });
});
app.get('/heroes', function (req, res) {
    rest.get(baseURL + 'classes/Heroes', options).on('complete', function (data) {
        res.render('pages/heroes', {
            Title: "Heroes",
            Heroes: data.results
        });
    });
});
app.get('/hero', function (req, res) {
    var param = JSON.stringify({
        H_Name: req.param('name')
    });
    rest.get(baseURL + 'classes/Heroes?where=' + param, options).on('complete', function (hero) {
        if (hero.results !== undefined) {
            rest.get(baseURL + 'classes/Skillsets?where=' + param, options).on('complete', function (skills) {
                res.render('pages/hero', {
                    Title: req.param('name'),
                    Hero: hero.results[0],
                    Skills: skills.results
                });
            });
        } else {
            res.render('pages/index', {
                Title: "Seven Knights",
                SevenKnights: SevenKnights
            });
        }
    });
});
app.get('/castlerush', function (req, res) {
    res.render('pages/castlerush', {
        Title: 'Castle Rush',
        guide: crGuide
    });
});
app.get('/raid', function (req, res) {
    res.render('pages/raid', {
        Title: 'Raid',
        guide: raidGuide
    });
});

app.listen(serverPort, function () {
    console.log('Server is running at port %d (http://localhost:%d)', serverPort, serverPort)
});
