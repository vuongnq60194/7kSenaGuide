'use strict';

var express = require('express');
var https = require('https');
var rest = require('restler');
var app = express();
var serverPort = 8080;

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
    rest.get(baseURL + 'classes/Configuration', options).on('complete', function (data) {
        res.render('pages/index', {
            Title: "Seven Knights",
            Config: data.results == undefined ? {} : data.results[0]
        });
    });
});
app.get('/heroes', function (req, res) {
    rest.get(baseURL + 'classes/Heroes', options).on('complete', function (data) {
        res.render('pages/heroes', {
            Title: "Heroes",
            Heroes: data.results == undefined ? [] : data.results
        });
    });
});
app.get('/hero', function (req, res) {
    var param = JSON.stringify({
        H_Name: req.param('name')
    });
    rest.get(baseURL + 'classes/Heroes?where=' + param, options).on('complete', function (hero) {
        rest.get(baseURL + 'classes/Skillsets?where=' + param, options).on('complete', function (skills) {
            rest.get(baseURL + 'classes/Reviews?where=' + param, options).on('complete', function (review) {
                res.render('pages/hero', {
                    Title: req.param('name'),
                    Hero: hero.results == undefined ? {} : hero.results[0],
                    Skills: skills.results == undefined ? [] : skills.results.reverse(),
                    Review: review.results == undefined ? {} : review.results[0],
                });
            });
        });
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
app.get('/teambuilder', function (req, res) {
    rest.get(baseURL + 'classes/Heroes', options).on('complete', function (data) {
        res.render('pages/teambuilder', {
            Title: 'Team Builder',
            Heroes: data.results == undefined ? [] : data.results
        });
    });
});

app.get('/classes/Heroes', function (req, res) {
    rest.get(baseURL + 'classes/Heroes?where=' + req.param('where'), options).on('complete', function (data) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data || {}, null, 2));
    });
});

//----------------------------
var csv = require('csv-parser')
var fs = require('fs')

var array = fs.readFileSync('herotemplate_en.csv').toString().split("\n");
var heroArray = [];
for (var i = 0; i < array.length - 1; i++) {
    var arr = array[i].split("\t");
    var hero = {}

    hero.Name = arr[1];
    hero.Desc = arr[3].replace("\\n", "");
    var str = hero.Desc.replace('"', '')

    console.log(str.replace('"', ''));
}

app.listen(serverPort, function () {
    console.log('Server is running at port %d (http://localhost:%d)', serverPort, serverPort)
});