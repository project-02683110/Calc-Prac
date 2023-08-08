function rnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1) - min + 2);
}

var taptag;
var A;
var rndArray = ['answer', 'opt1', 'opt2', 'opt3'];
let data;
fetchData();

async function fetchData() {
    try {
        const jsondata = await fetch('sct.json');
        data = await jsondata.json();
        main();
    } catch (error) {
        console.error('Error loading JSON file:', error);
    }
}
//setInterval(() => {
//    console.log(taptag);
//}, 500);

function main() {
    var elements = document.getElementsByClassName('ans');
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i];
        if (e) {
            e.classList.remove('ans');
        }
    }
    var Q = document.getElementById('Q');
    var timelimit = document.getElementById('timelimit');
    var a
    do {
        a = Math.floor(Math.random() * (data.length));
    } while (A == a);
    Q.innerHTML = data[a].question;
    rndArray = shuffle(rndArray);
    var options = document.getElementsByClassName('lkey');
    for (var i = 0; i < options.length; i++) {
        options[i].innerHTML = data[a][rndArray[i]];
        if (rndArray[i] == 'answer') options[i].classList.add('ans');
    }
    window.setTimeout(main, Number(data[a].timelimit) * 1000);
    A = a;
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
    }, Number(data[a].timelimit) * 10);
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

function shuffle(array) {
    for(let i = (array.length - 1); 0 < i; i--){
      let r = Math.floor(Math.random() * (i + 1));
      let tmp = array[i];
      array[i] = array[r];
      array[r] = tmp;
    }
    return array;
  }