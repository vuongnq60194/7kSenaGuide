'use strict';

$(function () {
    var lvHero1 = $("#lv-hero1");
    var lvHero2 = $("#lv-hero2");
    var lvHero3 = $("#lv-hero3");
    var lvHero4 = $("#lv-hero4");
    var lvHero5 = $("#lv-hero5");
    var powerHero1 = $("#power-hero1");
    var powerHero2 = $("#power-hero2");
    var powerHero3 = $("#power-hero3");
    var powerHero4 = $("#power-hero4");
    var powerHero5 = $("#power-hero5");
    var lvLeader = $("#lv-leader");

    $("#minus-lv-hero1").click(function () {
        var value = lvCalculate(lvHero1.data().value, lvHero1, "minus");
    });
    $("#plus-lv-hero1").click(function () {
        var value = lvCalculate(lvHero1.data().value, lvHero1, "plus");
    });
    $("#minus-power-hero1").click(function () {
        var value = powerCalculate(powerHero1.data().value, powerHero1, "minus");
    });
    $("#plus-power-hero1").click(function () {
        var value = powerCalculate(powerHero1.data().value, powerHero1, "plus");
    });

    $("#minus-lv-hero2").click(function () {
        var value = lvCalculate(lvHero2.data().value, lvHero2, "minus");
    });
    $("#plus-lv-hero2").click(function () {
        var value = lvCalculate(lvHero2.data().value, lvHero2, "plus");
    });
    $("#minus-power-hero2").click(function () {
        var value = powerCalculate(powerHero2.data().value, powerHero2, "minus");
    });
    $("#plus-power-hero2").click(function () {
        var value = powerCalculate(powerHero2.data().value, powerHero2, "plus");
    });

    $("#minus-lv-hero3").click(function () {
        var value = lvCalculate(lvHero3.data().value, lvHero3, "minus");
    });
    $("#plus-lv-hero3").click(function () {
        var value = lvCalculate(lvHero3.data().value, lvHero3, "plus");
    });
    $("#minus-power-hero3").click(function () {
        var value = powerCalculate(powerHero3.data().value, powerHero3, "minus");
    });
    $("#plus-power-hero3").click(function () {
        var value = powerCalculate(powerHero3.data().value, powerHero3, "plus");
    });

    $("#minus-lv-hero4").click(function () {
        var value = lvCalculate(lvHero4.data().value, lvHero4, "minus");
    });
    $("#plus-lv-hero4").click(function () {
        var value = lvCalculate(lvHero4.data().value, lvHero4, "plus");
    });
    $("#minus-power-hero4").click(function () {
        var value = powerCalculate(powerHero4.data().value, powerHero4, "minus");
    });
    $("#plus-power-hero4").click(function () {
        var value = powerCalculate(powerHero4.data().value, powerHero4, "plus");
    });

    $("#minus-lv-hero5").click(function () {
        var value = lvCalculate(lvHero5.data().value, lvHero5, "minus");
    });
    $("#plus-lv-hero5").click(function () {
        var value = lvCalculate(lvHero5.data().value, lvHero5, "plus");
    });
    $("#minus-power-hero5").click(function () {
        var value = powerCalculate(powerHero5.data().value, powerHero5, "minus");
    });
    $("#plus-power-hero5").click(function () {
        var value = powerCalculate(powerHero5.data().value, powerHero5, "plus");
    });

    $("#minus-lv-leader").click(function () {
        var value = lvCalculate(lvLeader.data().value, lvLeader, "minus");
    });
    $("#plus-lv-leader").click(function () {
        var value = lvCalculate(lvLeader.data().value, lvLeader, "plus");
    });

    $("#select-hero1").change(function () {
        getHero(this.value).then(function (data) {
            $("#select-hero1").data("hero", data.results[0]);
            totalCaculate();
        });
    });
    $("#select-hero2").change(function () {
        getHero(this.value).then(function (data) {
            $("#select-hero2").data("hero", data.results[0]);
            totalCaculate();
        });
    });
    $("#select-hero3").change(function () {
        getHero(this.value).then(function (data) {
            $("#select-hero3").data("hero", data.results[0]);
            totalCaculate();
        });
    });
    $("#select-hero4").change(function () {
        getHero(this.value).then(function (data) {
            $("#select-hero4").data("hero", data.results[0]);
            totalCaculate();
        });
    });
    $("#select-hero5").change(function () {
        getHero(this.value).then(function (data) {
            $("#select-hero5").data("hero", data.results[0]);
            totalCaculate();
        });
    });
    //    $("#select-leader").change(function () {
    //        updateStats(this.value, $("#select-leader"));
    //    });

});

function getHero(heroName) {
    var query = JSON.stringify({
        "H_Name": heroName
    });
    return $.ajax({
        url: 'classes/Heroes',
        data: 'where=' + query,
        method: 'get',
        contentType: 'application/json'
    }).promise();
}

function totalCaculate() {
    var physic = $("#physicTotal");
    var magic = $("#magicTotal");
    var total = $("#dmgTotal");
    var speed = $("#speedTotal");
    var highestSp = $("#highestSpeed");
    var averageDef = $("#averageDef");

    var hero1 = $("#select-hero1").data().hero === undefined ? {
        Attack: 0,
        Magic: 0,
        Speed: 0,
        Def: 0
    } : $("#select-hero1").data().hero;
    var hero2 = $("#select-hero2").data().hero === undefined ? {
        Attack: 0,
        Magic: 0,
        Speed: 0,
        Def: 0
    } : $("#select-hero2").data().hero;
    var hero3 = $("#select-hero3").data().hero === undefined ? {
        Attack: 0,
        Magic: 0,
        Speed: 0,
        Def: 0
    } : $("#select-hero3").data().hero;
    var hero4 = $("#select-hero4").data().hero === undefined ? {
        Attack: 0,
        Magic: 0,
        Speed: 0,
        Def: 0
    } : $("#select-hero4").data().hero;
    var hero5 = $("#select-hero5").data().hero === undefined ? {
        Attack: 0,
        Magic: 0,
        Speed: 0,
        Def: 0
    } : $("#select-hero5").data().hero;

    var ttPhy = hero1.Attack + hero2.Attack + hero3.Attack + hero4.Attack + hero5.Attack;
    var ttMag = hero1.Magic + hero2.Magic + hero3.Magic + hero4.Magic + hero5.Magic;
    var ttSpeed = hero1.Speed + hero2.Speed + hero3.Speed + hero4.Speed + hero5.Speed;
    var hSP = 0;
    var ttDef = hero1.Def + hero2.Def + hero3.Def + hero4.Def + hero5.Def;

    physic.data().value = ttPhy;
    physic.text(ttPhy);
    magic.data().value = ttMag;
    magic.text(ttMag);
    total.data().value = ttPhy + ttMag;
    total.text(ttPhy + ttMag);
    speed.data().value = ttSpeed;
    speed.text(ttSpeed);
    hSP = hero1.Speed > hero2.Speed ? hero1.Speed : hero2.Speed;
    hSP = hSP > hero3.Speed ? hSP : hero3.Speed;
    hSP = hSP > hero4.Speed ? hSP : hero4.Speed;
    hSP = hSP > hero5.Speed ? hSP : hero5.Speed;
    highestSp.data().value = hSP;
    highestSp.text(hSP);

    var count = hero1.Def == 0 ? 0 : 1;
    count = hero2.Def == 0 ? count : count + 1;
    count = hero3.Def == 0 ? count : count + 1;
    count = hero4.Def == 0 ? count : count + 1;
    count = hero5.Def == 0 ? count : count + 1;
    averageDef.data().value = ttDef / count;
    averageDef.text(ttDef / count);
}

function lvCalculate(value, lvHero, calculation) {
    if (calculation === "minus") {
        value = value == 30 ? value : value - 1;
    }
    if (calculation === "plus") {
        value = value == 40 ? value : value + 1;
    }
    lvHero.data().value = value;
    lvHero.text(value);
}

function powerCalculate(value, powerHero, calculation) {

    if (calculation === "minus") {
        value = value == 0 ? value : value - 1;
    }
    if (calculation === "plus") {
        value = value == 5 ? value : value + 1;
    }
    powerHero.data().value = value;
    powerHero.text(value);
}
