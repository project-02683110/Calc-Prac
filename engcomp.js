function rnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1) - min + 2);
}

var taptag;
var A;
var Tag1 = '<span style="font-size: 10px;">', Tag2 = '</span>', Tag3 = '', Tag4 = '';
const Lang = ['english', 'japanese'];
let data;
fetchData();

async function fetchData() {
    try {
        const jsondata = await fetch('newl.json');
        data = await jsondata.json();
        main();
    } catch (error) {
        console.error('Error loading JSON file:', error);
    }
}

function main() {
    var elements = document.getElementsByClassName('ans');
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i];
        if (e) {
            e.classList.remove('ans');
        }
    }
    var Q = document.getElementById('Q');
    var Interval = document.getElementById('Interval')
    var ints = Interval.selectedIndex;
    var int = Interval.options[ints].value;
    var timelimit = document.getElementById('timelimit');
    var Style = document.getElementById('Style');
    var stls = Style.selectedIndex;
    var s = Number(Style.options[stls].value);
    var rndArray = [-1, -2, -3, -4];
    for (var i = 0 ; i < rndArray.length ; i++) {
        do {
            rndArray[i] = Math.floor(Math.random() * (data.length));
        } while (randomCheck(rndArray));
    }
    a = rndArray[0];
    Q.innerHTML = Tag3 + trim(data[a][Lang[s]]) + Tag4;
    rndArray = shuffle(rndArray);
    var options = document.getElementsByClassName('key');
    var text;
    for (var i = 0; i < options.length; i++) {
        text = trim(data[rndArray[i]][Lang[Math.abs(s-1)]]);
        options[i].innerHTML = Tag1 + text + Tag2;
        if (rndArray[i] == a) options[i].classList.add('ans');
    }
    for (var i = 1; i <= 8; i++) {
        let WL = 'WL' + i.toString();
        let bt = document.getElementById(WL);
        if (bt.classList.contains('No') == false) bt.classList.add('No');
        if (data[a][WL] == 'True') bt.classList.remove('No');
    }
    window.setTimeout(main, int * 1000);
    A = a;
    taptag = false;
    var t = 0;
    let timer = setInterval(function() {
        if (t > 100) {
            clearInterval(timer);
        } else {
            t++;
            timelimit.value = t;
        }
    }, int * 10);
}

function aPlay(file) {
    document.getElementById(file).currentTime = 0;
    document.getElementById(file).play();
}

function BC(e) {
    var effect = document.getElementById('Effect');
    var score = document.getElementById('score');
    var S = Number(score.innerText);
    var Bt = document.getElementById(e);
    if (taptag == false) {
        if (Bt.classList.contains('ans') == true) {
            Bt.classList.remove('ans');
            taptag = true;
            S++;
            if (S>999) S=999;
            score.innerText = ( '000' + S ).slice( -3 );
            if (effect.value=='T') aPlay('T');
            document.body.animate({
                background: ["deepskyblue", "white"],
            }, 500 );
        } else {
            S--;
            if (S<0) S=0;
            score.innerText = ( '000' + S ).slice( -3 );
            if (effect.value=='T') aPlay('F');
            document.body.animate({
                background: ["red", "white"],
            }, 200 );
        }
    }
}

function changeSize() {
    var Style = document.getElementById('Style');
    var stls = Style.selectedIndex;
    if (stls) {
        Tag1 = '';
        Tag2 = '';
        Tag3 = '<span style="font-size: 13pt;">';
        Tag4 = '</span>';
    } else {
        Tag1 = '<span style="font-size: 10px;">';
        Tag2 = '</span>';
        Tag3 = '';
        Tag4 = '';
    }
}

function shuffle(array) {
    for (let i = (array.length - 1) ; 0 < i ; i--) {
      let r = Math.floor(Math.random() * (i + 1));
      let tmp = array[i];
      array[i] = array[r];
      array[r] = tmp;
    }
    return array;
}

function randomCheck(array) {
    for (let i = 0 ; i < array.length - 1 ; i++) {
        for (let j = i + 1 ; j < array.length ; j++) {
            if (array[i] == array[j]) return true;
        }
    }
    return false;
}


function trim(text) {
    let log = [];
    while (text.length > 25) {
        var texta = text.substr(0, text.lastIndexOf('。'));
        var textb = text.substr(0, text.lastIndexOf('、'));
        text = texta < textb ? texta : textb;
        log.push(text);
    }
    if (text == '') console.error(log);
    return text;
}