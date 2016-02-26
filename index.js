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


app.get('/', function (req, res) {
    rest.get(baseURL + 'classes/Heroes', options).on('complete', function (data) {
        res.render('heroes', {
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
        rest.get(baseURL + 'classes/Skillsets?where=' + param, options).on('complete', function (skills) {
            res.render('hero', {
                Title: req.param('name'),
                Hero: hero.results[0],
                Skills: skills.results
            });
        });
    });
});
app.get('/castlerush', function (req, res) {
    res.render('castlerush', {
        Title: 'Castle Rush',
        guide: crGuide
    });
});
app.get('/raid', function (req, res) {
    res.render('raid', {
        Title: 'Raid',
        guide: raidGuide
    });
});


app.listen(serverPort, function () {
    console.log('Server is running at port %d (http://localhost:%d)', serverPort, serverPort)
});

var crGuide = {
    Rachel: "Rachel's skillset is made for CR. Phoenix clears the mobs, Blaze reduces 80% both Damage/Defense for 2 turns. Passive Power of Flame makes the turn longer also! ",
    RachelImg: "http://files.parsetfss.com/b88a7f35-acd9-47d6-b0e0-09c910a1a917/tfss-abe6a427-d5fe-4d80-8cbe-56f4a4b2bcee-rachel.png",
    Ace: "Increase 50% damage received in 2 turns to enemy, remove buff, passive -50% Def. 'Nuff said! ",
    AceImg: "http://files.parsetfss.com/b88a7f35-acd9-47d6-b0e0-09c910a1a917/tfss-1709c81b-b2c3-4253-8a88-9c0b9774476e-ace.png",
    Lina: "With the passive decrease Physic Attack/Defense by 25%, 1st skill heal teammate with 60% Attack Power for 3 turns, 2nd skill buff damage by 50% for 2 turns, you'd better have this geisha in your team.",
    LinaImg: "http://files.parsetfss.com/b88a7f35-acd9-47d6-b0e0-09c910a1a917/tfss-eae1ae07-89d7-4242-8956-ccd28fdeb918-lina.png",
    Eileene: "Eileene is not really a big damage dealer, but she makes your DPS deals really big damage! Increase 60% Physical Attack, bro!",
    EileeneImg: "http://files.parsetfss.com/b88a7f35-acd9-47d6-b0e0-09c910a1a917/tfss-6837aacd-ca63-4c6b-a0d4-228e7d3a41a7-eileene.png",
    Alice: "A tanky bunny that has highest HP in this meta, healing and remove debuff, revive with invicible and 50% power increase for 2 turns.",
    AliceImg: "http://files.parsetfss.com/b88a7f35-acd9-47d6-b0e0-09c910a1a917/tfss-2828c6c3-d9fc-415a-a4b8-9e061b4a072a-alice.png",
    Spike: "The boy that's immune to everything. In case you don't have other immune debuffs like Karin or Rania etc... Spike would be the one that helps your team survive with 2 turns immune to any kind of debuff.",
    SpikeImg: "http://files.parsetfss.com/b88a7f35-acd9-47d6-b0e0-09c910a1a917/tfss-7dcf2f97-57a9-4aef-93f5-3fddf350f4ad-spike.png",
    ShaneImg: "http://files.parsetfss.com/b88a7f35-acd9-47d6-b0e0-09c910a1a917/tfss-32c84c06-0188-4476-8061-64e454c2666b-shane.png",
    DellonsImg: "http://files.parsetfss.com/b88a7f35-acd9-47d6-b0e0-09c910a1a917/tfss-05c8e57f-455d-42f1-97ea-81ee797bc595-dellons.png",
    JupyImg: "http://files.parsetfss.com/b88a7f35-acd9-47d6-b0e0-09c910a1a917/tfss-79b7badd-9d3e-4841-ae51-ada2d29a3400-jupy.png",
    SiegImg: "http://files.parsetfss.com/b88a7f35-acd9-47d6-b0e0-09c910a1a917/tfss-5b21959c-634d-45e4-955b-34ae0b396b16-sieg.png",
    KaronImg: "http://files.parsetfss.com/b88a7f35-acd9-47d6-b0e0-09c910a1a917/tfss-3378be60-7552-4f9e-8209-e7b48e736152-karon.png",
    JokerImg: "http://files.parsetfss.com/b88a7f35-acd9-47d6-b0e0-09c910a1a917/tfss-c6bce6f4-f448-40ac-9331-ff96c242e524-joker.png",
    RuriImg: "http://files.parsetfss.com/b88a7f35-acd9-47d6-b0e0-09c910a1a917/tfss-eb4ce33c-0ce4-4531-b9c5-d40c4d4a601f-ruri.png",
    RudyImg: "http://files.parsetfss.com/b88a7f35-acd9-47d6-b0e0-09c910a1a917/tfss-6ca1e94b-073e-4436-bc6d-9374732e974b-rudy.png",
    HeaveniaImg: "http://files.parsetfss.com/b88a7f35-acd9-47d6-b0e0-09c910a1a917/tfss-139d787c-c37b-461c-bbed-e920a7ff41ef-heavenia.png",
    VictoriaImg: "http://files.parsetfss.com/b88a7f35-acd9-47d6-b0e0-09c910a1a917/tfss-0754efc7-b4aa-4439-b3e3-32ac60baa74f-victoria.png",
    HelleniaImg: "http://files.parsetfss.com/b88a7f35-acd9-47d6-b0e0-09c910a1a917/tfss-d6d4e014-60ee-4437-ade0-84854fe161b5-hellenia.png",
    YuiImg: "http://files.parsetfss.com/b88a7f35-acd9-47d6-b0e0-09c910a1a917/tfss-e9d22b24-62ee-4fd7-8729-a8ded39d3140-yui.png",
    MayImg: "http://files.parsetfss.com/b88a7f35-acd9-47d6-b0e0-09c910a1a917/tfss-aebd2c7a-9629-45ce-b1a5-5accfc344204-may.png",
    RaniaImg: "http://files.parsetfss.com/b88a7f35-acd9-47d6-b0e0-09c910a1a917/tfss-de2f98b1-95d9-4c38-a7ad-f516b787d0d3-rania.png",
    KarinImg: "http://files.parsetfss.com/b88a7f35-acd9-47d6-b0e0-09c910a1a917/tfss-30bb04dc-6ff8-4b85-af58-bd8eb2fa8fbc-karin.png",
    LeoImg: "http://files.parsetfss.com/b88a7f35-acd9-47d6-b0e0-09c910a1a917/tfss-e562cb39-ffdd-4012-8399-e3115c52085f-leo.png",
    KrisImg: "http://files.parsetfss.com/b88a7f35-acd9-47d6-b0e0-09c910a1a917/tfss-39b51934-c1a2-48fe-8279-0f4e5ff1d241-kris.png",
    JaveImg: "http://files.parsetfss.com/b88a7f35-acd9-47d6-b0e0-09c910a1a917/tfss-86cc0771-0a4b-4704-90bc-5bd93242b348-jave.png"
};

var raidGuide = {
    Lina: "In case you use Sieg for Stun immune, bring Lina for healing slot. Warmth Echo can be stacked with Eileene's passive also.",
    Espada: "Both Espada and Velika have the passive that reduce 50% incoming Magic Damage for all allies, but with 2 single target skills, Espada is much better for raid.",
    Victoria: "Wew, 50% Physical/Magic Attack boost is not bad, but it's active skill, and only last for a few turns.",
    Eileene: "60% Physical Attack passive boost!",
    Velika: "Hmm she's great for Arena and Adventure, but for raid, only when you don't have Espada, or in the #2 team.",
    Karon: "Karon - The healing boy, with 6 turns immune to Stun.",
    Jupy: "Jupy can deal massively damage to the Destroyer Gaze. However, she's quite fragile.",
    Dellons: "Dellons should be at the second DPS place instead of Jupy, but it's much harder to transcend Dellons to 40.",
    Sieg: "Sieg has 2 single target skills with high percentage, 6 turns immune to stun - he would be your 1st choice for this slot.",
    Shane: "Shane has very high Critical Rate, low-cooldown skill and immune to Magic damage. Currently she's the best backline dps for Raid.",
    LinaImg: "http://files.parsetfss.com/b88a7f35-acd9-47d6-b0e0-09c910a1a917/tfss-eae1ae07-89d7-4242-8956-ccd28fdeb918-lina.png",
    EileeneImg: "http://files.parsetfss.com/b88a7f35-acd9-47d6-b0e0-09c910a1a917/tfss-6837aacd-ca63-4c6b-a0d4-228e7d3a41a7-eileene.png",
    ShaneImg: "http://files.parsetfss.com/b88a7f35-acd9-47d6-b0e0-09c910a1a917/tfss-32c84c06-0188-4476-8061-64e454c2666b-shane.png",
    DellonsImg: "http://files.parsetfss.com/b88a7f35-acd9-47d6-b0e0-09c910a1a917/tfss-05c8e57f-455d-42f1-97ea-81ee797bc595-dellons.png",
    JupyImg: "http://files.parsetfss.com/b88a7f35-acd9-47d6-b0e0-09c910a1a917/tfss-79b7badd-9d3e-4841-ae51-ada2d29a3400-jupy.png",
    SiegImg: "http://files.parsetfss.com/b88a7f35-acd9-47d6-b0e0-09c910a1a917/tfss-5b21959c-634d-45e4-955b-34ae0b396b16-sieg.png",
    KaronImg: "http://files.parsetfss.com/b88a7f35-acd9-47d6-b0e0-09c910a1a917/tfss-3378be60-7552-4f9e-8209-e7b48e736152-karon.png",
    VictoriaImg: "http://files.parsetfss.com/b88a7f35-acd9-47d6-b0e0-09c910a1a917/tfss-0754efc7-b4aa-4439-b3e3-32ac60baa74f-victoria.png",
    EspadaImg: "http://files.parsetfss.com/b88a7f35-acd9-47d6-b0e0-09c910a1a917/tfss-f5f70e18-d356-406b-977d-7f2544ec78ef-espada.png",
    VelikaImg: "http://files.parsetfss.com/b88a7f35-acd9-47d6-b0e0-09c910a1a917/tfss-0b11ec41-b2bd-4240-b5c3-5d717f48f7a9-velika.png"
};
