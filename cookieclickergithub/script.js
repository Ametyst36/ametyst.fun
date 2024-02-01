let v = {
    level: 1,
    cookiespersecond: 0,
    autoclicker: 0,
    multiclicker: 0,
    ulticlicker: 0,
    doubler: 1,
    alltimecookie: 0,
    cookieClicks: 0,
    achivements: [0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0]
}

var audioclick = new Audio("tick.mp3");
var audiobuy = new Audio("buy.mp3");
var achivement = new Audio("achievement.mp3");

doubleractivate();

if (localStorage === null) {
    save();
};

function cookieClicked() {
    v.cookieClicks = v.cookieClicks + v.level;
    v.alltimecookie = v.alltimecookie + v.level;
    document.getElementById("a").innerHTML = v.cookieClicks;
    document.getElementById("statsatc").innerHTML = v.alltimecookie;
    audioclick.play();
    if (v.achivements[0] === 0) {
        achivement1();
    }
    if (v.alltimecookie >= 1000 && v.achivements[1] === 0) {
        achivement2();
    }
    if (v.alltimecookie >= 100000 && v.achivements[2] === 0) {
        achivement3();
    }
    if (v.alltimecookie >= 1000000 && v.achivements[3] === 0) {
        achivement4();
    }
    if (v.alltimecookie >= 10000000 && v.achivements[4] === 0) {
        achivement5();
    }
    if (v.alltimecookie >= 100000000 && v.achivements[5] === 0) {
        achivement6();
    }
    if (v.alltimecookie >= 1000000000 && v.achivements[6] === 0) {
        achivement7();
    }
    if (v.alltimecookie >= 10000000000 && v.achivements[7] === 0) {
        achivement8();
    }
    if (v.alltimecookie >= 100000000000 && v.achivements[8] === 0) {
        achivement9();
    }
    if (v.alltimecookie >= 1000000000000 && v.achivements[9] === 0) {
        achivement10();
    }
}

function levelplus() {
    audiobuy.play();
    if (v.cookieClicks >= v.level * 20) {
        v.level++;
        v.cookieClicks = v.cookieClicks - v.level * 20 + 20;
        document.getElementById("a").innerHTML = v.cookieClicks;
        document.getElementById("levelcount").innerHTML = "Level (" + v.level + ")";
        document.getElementById("levelprice").innerHTML = v.level * 20;
        if (v.level === 11) {
            achivement21();
        }
        if (v.level === 21) {
            achivement22();
        }
        if (v.level === 51) {
            achivement23();
        }
        if (v.level === 101) {
            achivement24();
        }
        if (v.level === 251) {
            achivement25();
        }
    }
}

function autoclickerplus() {
    audiobuy.play();
    if (v.cookieClicks >= v.autoclicker * 10 + 10) {
        v.cookiespersecond++;
        v.autoclicker++;
        v.cookieClicks = v.cookieClicks - v.autoclicker * 10;
        document.getElementById("a").innerHTML = v.cookieClicks;
        document.getElementById("autoclickercount").innerHTML = "Autoclicker (" + v.autoclicker + ")";
        document.getElementById("autoclickerprice").innerHTML = v.autoclicker * 10 + 10;
        if (v.cookiespersecond >= 100) {
            achivement11();
        }
        if (v.cookiespersecond >= 1000) {
            achivement12();
        }
        if (v.cookiespersecond >= 10000) {
            achivement13();
        }
        if (v.cookiespersecond >= 10000) {
            achivement14();
        }
        if (v.cookiespersecond >= 100000) {
            achivement15();
        }
    }
}

function multiclickerplus() {
    audiobuy.play();
    if (v.cookieClicks >= v.multiclicker * 100 + 100) {
        v.cookiespersecond = v.cookiespersecond + 10;
        v.multiclicker++;
        v.cookieClicks = v.cookieClicks - v.multiclicker * 100;
        document.getElementById("a").innerHTML = v.cookieClicks;
        document.getElementById("multiclickercount").innerHTML = "Multiclicker (" + v.multiclicker + ")";
        document.getElementById("multiclickerprice").innerHTML = v.multiclicker * 100 + 100;
        if (v.cookiespersecond >= 100) {
            achivement11();
        }
        else if (v.cookiespersecond >= 1000) {
            achivement12();
        }
        else if (v.cookiespersecond >= 10000) {
            achivement13();
        }
        else if (v.cookiespersecond >= 10000) {
            achivement14();
        }
        else if (v.cookiespersecond >= 100000) {
            achivement15();
        }
    }
}

function ulticlickerplus() {
    audiobuy.play();
    if (v.cookieClicks >= v.ulticlicker * 1000 + 1000) {
        v.cookiespersecond = v.cookiespersecond + 100;
        v.ulticlicker++;
        v.cookieClicks = v.cookieClicks - v.ulticlicker * 1000;
        document.getElementById("a").innerHTML = v.cookieClicks;
        document.getElementById("ulticlickercount").innerHTML = "Multiclicker (" + v.ulticlicker + ")";
        document.getElementById("ulticlickerprice").innerHTML = v.ulticlicker * 1000 + 1000;
        if (v.cookiespersecond >= 100 && v.achivements[10] === 0) {
            achivement11();
        }
        else if (v.cookiespersecond >= 1000 && v.achivements[11] === 0) {
            achivement12();
        }
        else if (v.cookiespersecond >= 10000 && v.achivements[12] === 0) {
            achivement13();
        }
        else if (v.cookiespersecond >= 100000 && v.achivements[13] === 0) {
            achivement14();
        }
        else if (v.cookiespersecond >= 1000000 && v.achivements[14] === 0) {
            achivement15();
        }
    }
}

function doubleplus() {
    audiobuy.play();
    if (v.cookieClicks >= v.doubler * 100000) {
        v.cookieClicks = v.cookieClicks - v.doubler * 100000;
        v.doubler++;
        document.getElementById("a").innerHTML = v.cookieClicks;
        document.getElementById("doublercount").innerHTML = "Double Clicker (" + v.doubler + "x)";
        document.getElementById("doublerprice").innerHTML = v.doubler * 100000;
        if (doubler === 2) {
            achivement16();
        }
        if (doubler === 6) {
            achivement17();
        }
        if (doubler === 11) {
            achivement18();
        }
        if (doubler === 21) {
            achivement19();
        }
        if (doubler === 51) {
            achivement20();
        }
    }
}

function doubleractivate() {
setInterval(function(){
    v.cookieClicks = v.cookieClicks + (v.cookiespersecond * v.doubler);
    v.alltimecookie = v.alltimecookie + (v.cookiespersecond * v.doubler);
    document.getElementById("a").innerHTML = v.cookieClicks;
    document.getElementById("statscps").innerHTML = v.cookiespersecond * v.doubler;
    document.getElementById("statsatc").innerHTML = v.alltimecookie;
    if (v.alltimecookie >= 1000 && v.achivements[1] === 0) {
        achivement2();
    }
    if (v.alltimecookie >= 100000 && v.achivements[2] === 0) {
        achivement3();
    }
    if (v.alltimecookie >= 1000000 && v.achivements[3] === 0) {
        achivement4();
    }
    if (v.alltimecookie >= 10000000 && v.achivements[4] === 0) {
        achivement5();
    }
    if (v.alltimecookie >= 100000000 && v.achivements[5] === 0) {
        achivement6();
    }
    if (v.alltimecookie >= 1000000000 && v.achivements[6] === 0) {
        achivement7();
    }
    if (v.alltimecookie >= 10000000000 && v.achivements[7] === 0) {
        achivement8();
    }
    if (v.alltimecookie >= 100000000000 && v.achivements[8] === 0) {
        achivement9();
    }
    if (v.alltimecookie >= 1000000000000 && v.achivements[9] === 0) {
        achivement10();
    }
}, 1000)}


function save() {
    localStorage.setItem("variables", JSON.stringify(v));
    audiobuy.play();
    console.log("Saved");
}

function load() {
    v = JSON.parse(localStorage.getItem("variables"));
    audiobuy.play();
    document.getElementById("a").innerHTML = v.cookieClicks;
    document.getElementById("levelcount").innerHTML = "Level (" + v.level + ")";
    document.getElementById("levelprice").innerHTML = v.level * 10;
    document.getElementById("autoclickercount").innerHTML = "Autoclicker (" + v.autoclicker + ")";
    document.getElementById("autoclickerprice").innerHTML = v.autoclicker * 10 + 10;
    document.getElementById("multiclickercount").innerHTML = "Multiclicker (" + v.multiclicker + ")";
    document.getElementById("multiclickerprice").innerHTML = v.multiclicker * 1000 + 1000;
    document.getElementById("ulticlickercount").innerHTML = "Multiclicker (" + v.ulticlicker + ")";
    document.getElementById("ulticlickerprice").innerHTML = v.ulticlicker * 100000 + 100000;
    document.getElementById("doublercount").innerHTML = "Double Clicker (" + v.doubler + "x)";
    document.getElementById("doublerprice").innerHTML = v.doubler * 100000;
    document.getElementById("statscps").innerHTML = v.cookiespersecond * v.doubler;
    document.getElementById("statsatc").innerHTML = v.alltimecookie;
    if (v.achivements[0] === 1) { document.getElementById("achivement1").style = "filter: grayscale(0%);"; }
    else {document.getElementById("achivement1").style = "filter: grayscale(100%);";};
    if (v.achivements[1] === 1) { document.getElementById("achivement2").style = "filter: grayscale(0%);"; }
    else {document.getElementById("achivement2").style = "filter: grayscale(100%);";};
    if (v.achivements[2] === 1) { document.getElementById("achivement3").style = "filter: grayscale(0%);"; }
    else {document.getElementById("achivement3").style = "filter: grayscale(100%);";};
    if (v.achivements[3] === 1) { document.getElementById("achivement4").style = "filter: grayscale(0%);"; }
    else {document.getElementById("achivement4").style = "filter: grayscale(100%);";};
    if (v.achivements[4] === 1) { document.getElementById("achivement5").style = "filter: grayscale(0%);"; }
    else {document.getElementById("achivement5").style = "filter: grayscale(100%);";};
    if (v.achivements[5] === 1) { document.getElementById("achivement6").style = "filter: grayscale(0%);"; }
    else {document.getElementById("achivement6").style = "filter: grayscale(100%);";};
    if (v.achivements[6] === 1) { document.getElementById("achivement7").style = "filter: grayscale(0%);"; }
    else {document.getElementById("achivement7").style = "filter: grayscale(100%);";};
    if (v.achivements[7] === 1) { document.getElementById("achivement8").style = "filter: grayscale(0%);"; }
    else {document.getElementById("achivement8").style = "filter: grayscale(100%);";};
    if (v.achivements[8] === 1) { document.getElementById("achivement9").style = "filter: grayscale(0%);"; }
    else {document.getElementById("achivement9").style = "filter: grayscale(100%);";};
    if (v.achivements[9] === 1) { document.getElementById("achivement10").style = "filter: grayscale(0%);"; }
    else {document.getElementById("achivement10").style = "filter: grayscale(100%);";};
    if (v.achivements[10] === 1) { document.getElementById("achivement11").style = "filter: grayscale(0%);"; }
    else {document.getElementById("achivement11").style = "filter: grayscale(100%);";};
    if (v.achivements[11] === 1) { document.getElementById("achivement12").style = "filter: grayscale(0%);"; }
    else {document.getElementById("achivement12").style = "filter: grayscale(100%);";};
    if (v.achivements[12] === 1) { document.getElementById("achivement13").style = "filter: grayscale(0%);"; }
    else {document.getElementById("achivement13").style = "filter: grayscale(100%);";};
    if (v.achivements[13] === 1) { document.getElementById("achivement14").style = "filter: grayscale(0%);"; }
    else {document.getElementById("achivement14").style = "filter: grayscale(100%);";};
    if (v.achivements[14] === 1) { document.getElementById("achivement15").style = "filter: grayscale(0%);"; }
    else {document.getElementById("achivement15").style = "filter: grayscale(100%);";};
    if (v.achivements[15] === 1) { document.getElementById("achivement16").style = "filter: grayscale(0%);"; }
    else {document.getElementById("achivement16").style = "filter: grayscale(100%);";};
    if (v.achivements[16] === 1) { document.getElementById("achivement17").style = "filter: grayscale(0%);"; }
    else {document.getElementById("achivement17").style = "filter: grayscale(100%);";};
    if (v.achivements[17] === 1) { document.getElementById("achivement18").style = "filter: grayscale(0%);"; }
    else {document.getElementById("achivement18").style = "filter: grayscale(100%);";};
    if (v.achivements[18] === 1) { document.getElementById("achivement19").style = "filter: grayscale(0%);"; }
    else {document.getElementById("achivement19").style = "filter: grayscale(100%);";};
    if (v.achivements[19] === 1) { document.getElementById("achivement20").style = "filter: grayscale(0%);"; }
    else {document.getElementById("achivement20").style = "filter: grayscale(100%);";};
    if (v.achivements[20] === 1) { document.getElementById("achivement21").style = "filter: grayscale(0%);"; }
    else {document.getElementById("achivement21").style = "filter: grayscale(100%);";};
    if (v.achivements[21] === 1) { document.getElementById("achivement22").style = "filter: grayscale(0%);"; }
    else {document.getElementById("achivement22").style = "filter: grayscale(100%);";};
    if (v.achivements[22] === 1) { document.getElementById("achivement23").style = "filter: grayscale(0%);"; }
    else {document.getElementById("achivement23").style = "filter: grayscale(100%);";};
    if (v.achivements[23] === 1) { document.getElementById("achivement24").style = "filter: grayscale(0%);"; }
    else {document.getElementById("achivement24").style = "filter: grayscale(100%);";};
    if (v.achivements[24] === 1) { document.getElementById("achivement25").style = "filter: grayscale(0%);"; }
    else {document.getElementById("achivement25").style = "filter: grayscale(100%);";};
    console.log("Save Loaded");
}

function deletedata(){
    document.getElementById('id_confrmdiv').style.display="block"; //this is the replace of this line
    audioclick.play();

    document.getElementById('id_truebtn').onclick = function(){
        document.getElementById("id_confrmdiv").style.display = "none"
        localStorage.clear();
        location.reload();
        audioclick.play();
        console.log("Deleted Data");
    };
    document.getElementById('id_falsebtn').onclick = function(){
        document.getElementById("id_confrmdiv").style.display = "none";
        audioclick.play();
        console.log("Canceled Deleting");
    };
}

/* Achivements */

function achivement1() {
    document.getElementById("achivement1").style = "filter: grayscale(0%);";
    achivement.play();
    v.achivements[0] = 1;
}

function achivement2() {
    document.getElementById("achivement2").style = "filter: grayscale(0%);";
    achivement.play();
    v.achivements[1] = 1;
}

function achivement3() {
    document.getElementById("achivement3").style = "filter: grayscale(0%);";
    achivement.play();
    v.achivements[2] = 1;
}

function achivement4() {
    document.getElementById("achivement4").style = "filter: grayscale(0%);";
    achivement.play();
    v.achivements[3] = 1;
}

function achivement5() {
    document.getElementById("achivement5").style = "filter: grayscale(0%);";
    achivement.play();
    v.achivements[4] = 1;
}

function achivement6() {
    document.getElementById("achivement6").style = "filter: grayscale(0%);";
    achivement.play();
    v.achivements[5] = 1;
}

function achivement7() {
    document.getElementById("achivement7").style = "filter: grayscale(0%);";
    achivement.play();
    v.achivements[6] = 1;
}

function achivement8() {
    document.getElementById("achivement8").style = "filter: grayscale(0%);";
    achivement.play();
    v.achivements[7] = 1;
}

function achivement9() {
    document.getElementById("achivement9").style = "filter: grayscale(0%);";
    achivement.play();
    v.achivements[8] = 1;
}

function achivement10() {
    document.getElementById("achivement10").style = "filter: grayscale(0%);";
    achivement.play();
    v.achivements[9] = 1;
}
function achivement11() {
    document.getElementById("achivement11").style = "filter: grayscale(0%);";
    achivement.play();
    v.achivements[10] = 1;
}

function achivement12() {
    document.getElementById("achivement12").style = "filter: grayscale(0%);";
    achivement.play();
    v.achivements[11] = 1;
}

function achivement13() {
    document.getElementById("achivement13").style = "filter: grayscale(0%);";
    achivement.play();
    v.achivements[12] = 1;
}

function achivement14() {
    document.getElementById("achivement14").style = "filter: grayscale(0%);";
    achivement.play();
    v.achivements[13] = 1;
}

function achivement15() {
    document.getElementById("achivement15").style = "filter: grayscale(0%);";
    achivement.play();
    v.achivements[14] = 1;
}

function achivement16() {
    document.getElementById("achivement16").style = "filter: grayscale(0%);";
    achivement.play();
    v.achivements[15] = 1;
}

function achivement17() {
    document.getElementById("achivement17").style = "filter: grayscale(0%);";
    achivement.play();
    v.achivements[16] = 1;
}

function achivement18() {
    document.getElementById("achivement18").style = "filter: grayscale(0%);";
    achivement.play();
    v.achivements[17] = 1;
}

function achivement19() {
    document.getElementById("achivement19").style = "filter: grayscale(0%);";
    achivement.play();
    v.achivements[18] = 1;
}

function achivement20() {
    document.getElementById("achivement20").style = "filter: grayscale(0%);";
    achivement.play();
    v.achivements[19] = 1;
}

function achivement21() {
    document.getElementById("achivement21").style = "filter: grayscale(0%);";
    achivement.play();
    v.achivements[20] = 1;
}

function achivement22() {
    document.getElementById("achivement22").style = "filter: grayscale(0%);";
    achivement.play();
    v.achivements[21] = 1;
}

function achivement23() {
    document.getElementById("achivement23").style = "filter: grayscale(0%);";
    achivement.play();
    v.achivements[22] = 1;
}

function achivement24() {
    document.getElementById("achivement24").style = "filter: grayscale(0%);";
    achivement.play();
    v.achivements[23] = 1;
}

function achivement25() {
    document.getElementById("achivement25").style = "filter: grayscale(0%);";
    achivement.play();
    v.achivements[24] = 1;
}

function achivementCheat() {
    achivement1();
    achivement2();
    achivement3();
    achivement4();
    achivement5();
    achivement6();
    achivement7();
    achivement8();
    achivement9();
    achivement10();
    achivement11();
    achivement12();
    achivement13();
    achivement14();
    achivement15();
    achivement16();
    achivement17();
    achivement18();
    achivement19();
    achivement20();
    achivement21();
    achivement22();
    achivement23();
    achivement24();
    achivement25();
}

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.getElementById("bigcontainer").style = "flex-direction: column;";
    document.getElementById("divsmall").style = "width: calc(80%);margin: auto;margin-bottom: 10px;";
    document.getElementById("achivementbox").style = "padding: 0px;";
}