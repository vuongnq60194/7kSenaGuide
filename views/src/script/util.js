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

});

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
