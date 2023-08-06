function rnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1) - min + 2);
}

var A, B, C;
var taptag;

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
    var n = Interval.selectedIndex;
    var int = Interval.options[n].value;
    var timelimit = document.getElementById('timelimit');
    var a, b, c;
    do {
        a = rnd(2, 9);
        b = rnd(2, 9);
        c = a + b;
    } while (c <= 10 || A==a || B==b || C==c);
    Q.innerText = c + '－' + a + '＝ ？';
    var ansitem = document.getElementById(String(b));
    ansitem.classList.add('ans');
    window.setTimeout(main, int * 1000);
    A=a;
    B=b;
    C=c;
    taptag = false;
    var t = 0;
    let timer = setInterval(function() {
        if (t > 100) {
            clearInterval(timer);
        } else {
            t++;
            timelimit.value = t;
            console.log(t);
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

window.onload = function() {
    main();
    setInterval(() => {
        console.log(taptag);
    }, 500);
}