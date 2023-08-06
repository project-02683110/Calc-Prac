function rnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1) - min + 2);
}

var taptag;
// 0:Question 1-4:Options 5:Answer 6;Time-limit
const questions = [
    ['sin30° ＝ ?', '<frac><fn>1</fn><fd>2</fd></frac>', '<frac><fn>√3</fn><fd>2</fd></frac>', '－<frac><fn>1</fn><fd>2</fd></frac>', '－<frac><fn>√3</fn><fd>2</fd></frac>', '1', 3],
    ['cos30° ＝ ?', '<frac><fn>1</fn><fd>2</fd></frac>', '<frac><fn>√3</fn><fd>2</fd></frac>', '－<frac><fn>1</fn><fd>2</fd></frac>', '－<frac><fn>√3</fn><fd>2</fd></frac>', '2', 3],
    ['sin60° ＝ ?', '<frac><fn>1</fn><fd>2</fd></frac>', '<frac><fn>√3</fn><fd>2</fd></frac>', '－<frac><fn>1</fn><fd>2</fd></frac>', '－<frac><fn>√3</fn><fd>2</fd></frac>', '2', 3],
    ['cos60° ＝ ?', '<frac><fn>1</fn><fd>2</fd></frac>', '<frac><fn>√3</fn><fd>2</fd></frac>', '－<frac><fn>1</fn><fd>2</fd></frac>', '－<frac><fn>√3</fn><fd>2</fd></frac>', '1', 3],
    ['sin120° ＝ ?', '<frac><fn>1</fn><fd>2</fd></frac>', '<frac><fn>√3</fn><fd>2</fd></frac>', '－<frac><fn>1</fn><fd>2</fd></frac>', '－<frac><fn>√3</fn><fd>2</fd></frac>', '2', 3],
    ['cos120° ＝ ?', '<frac><fn>1</fn><fd>2</fd></frac>', '<frac><fn>√3</fn><fd>2</fd></frac>', '－<frac><fn>1</fn><fd>2</fd></frac>', '－<frac><fn>√3</fn><fd>2</fd></frac>', '3', 3],
    ['sin150° ＝ ?', '<frac><fn>1</fn><fd>2</fd></frac>', '<frac><fn>√3</fn><fd>2</fd></frac>', '－<frac><fn>1</fn><fd>2</fd></frac>', '－<frac><fn>√3</fn><fd>2</fd></frac>', '1', 3],
    ['cos150° ＝ ?', '<frac><fn>1</fn><fd>2</fd></frac>', '<frac><fn>√3</fn><fd>2</fd></frac>', '－<frac><fn>1</fn><fd>2</fd></frac>', '－<frac><fn>√3</fn><fd>2</fd></frac>', '4', 3],
    ['sin<sup>2</sup>x ＝ ?', '1＋cos<sup>2</sup>x', '1－cos<sup>2</sup>x', 'cos<sup>2</sup>x－1', '－cos<sup>2</sup>x－1', '2', 4],
    ['cos<sup>2</sup>x ＝ ?', '1＋sin<sup>2</sup>x', '1－sin<sup>2</sup>x', 'sin<sup>2</sup>x－1', '－sin<sup>2</sup>x－1', '2', 4],
    ['<frac><fn>1</fn><fd>cos<sup>2</sup>x</fd></frac> ＝ ?', '1＋tan<sup>2</sup>x', '1－tan<sup>2</sup>x', 'tan<sup>2</sup>x－1', '－tan<sup>2</sup>x－1', '1', 4],
    ['tan<sup>2</sup>x ＝ ?', '1＋<frac><fn>1</fn><fd>cos<sup>2</sup>x</fd></frac>', '1－<frac><fn>1</fn><fd>cos<sup>2</sup>x</fd></frac>', '<frac><fn>1</fn><fd>cos<sup>2</sup>x</fd></frac>－1', '－<frac><fn>1</fn><fd>cos<sup>2</sup>x</fd></frac>－1', '3', 4],
    ['sin(－x) ＝ ?', 'sinx', 'cosx', '－sinx', '－cosx', '3', 4],
    ['cos(－x) ＝ ?', 'sinx', 'cosx', '－sinx', '－cosx', '2', 4],
    ['tan(－x) ＝ ?', 'tanx', '<frac><fn>1</fn><fd>tanx</fd></frac>', '－tanx', '－<frac><fn>1</fn><fd>tanx</fd></frac>', '3', 4],
    ['sin(180°－x) ＝ ?', 'sinx', 'cosx', '－sinx', '－cosx', '1', 4],
    ['cos(180°－x) ＝ ?', 'sinx', 'cosx', '－sinx', '－cosx', '4', 4],
    ['tan(180°－x) ＝ ?', 'tanx', '<frac><fn>1</fn><fd>tanx</fd></frac>', '－tanx', '－<frac><fn>1</fn><fd>tanx</fd></frac>', '3', 4],
    ['sin(90°－x) ＝ ?', 'sinx', 'cosx', '－sinx', '－cosx', '2', 4],
    ['cos(90°－x) ＝ ?', 'sinx', 'cosx', '－sinx', '－cosx', '1', 4],
    ['tan(90°－x) ＝ ?', 'tanx', '<frac><fn>1</fn><fd>tanx</fd></frac>', '－tanx', '－<frac><fn>1</fn><fd>tanx</fd></frac>', '2', 4],
    ['sin(90°＋x) ＝ ?', 'sinx', 'cosx', '－sinx', '－cosx', '2', 4],
    ['cos(90°＋x) ＝ ?', 'sinx', 'cosx', '－sinx', '－cosx', '3', 4],
    ['tan(90°＋x) ＝ ?', 'tanx', '<frac><fn>1</fn><fd>tanx</fd></frac>', '－tanx', '－<frac><fn>1</fn><fd>tanx</fd></frac>', '4', 4],
    ['sin(180°＋x) ＝ ?', 'sinx', 'cosx', '－sinx', '－cosx', '3', 4],
    ['cos(180°＋x) ＝ ?', 'sinx', 'cosx', '－sinx', '－cosx', '4', 4],
    ['tan(180°＋x) ＝ ?', 'tanx', '<frac><fn>1</fn><fd>tanx</fd></frac>', '－tanx', '－<frac><fn>1</fn><fd>tanx</fd></frac>', '1', 4],
    ['sinAcosB＋cosAsinB ＝ ?', 'sin(A＋B)', 'sin(A－B)', 'cos(A＋B)', 'cos(A－B)', '1', 5],
    ['sinAcosB－cosAsinB ＝ ?', 'sin(A＋B)', 'sin(A－B)', 'cos(A＋B)', 'cos(A－B)', '2', 5],
    ['cosAcosB－sinAsinB ＝ ?', 'sin(A＋B)', 'sin(A－B)', 'cos(A＋B)', 'cos(A－B)', '3', 5],
    ['cosAcosB＋sinAsinB ＝ ?', 'sin(A＋B)', 'sin(A－B)', 'cos(A＋B)', 'cos(A－B)', '4', 5],
    ['sin(A＋B) ＝ ?', 'sinAcosB＋cosAsinB', 'sinAcosB－cosAsinB', 'cosAcosB＋sinAsinB', 'cosAcosB－sinAsinB', '1', 5],
    ['sin(A－B) ＝ ?', 'sinAcosB＋cosAsinB', 'sinAcosB－cosAsinB', 'cosAcosB＋sinAsinB', 'cosAcosB－sinAsinB', '2', 5],
    ['cos(A－B) ＝ ?', 'sinAcosB＋cosAsinB', 'sinAcosB－cosAsinB', 'cosAcosB＋sinAsinB', 'cosAcosB－sinAsinB', '3', 5],
    ['cos(A＋B) ＝ ?', 'sinAcosB＋cosAsinB', 'sinAcosB－cosAsinB', 'cosAcosB＋sinAsinB', 'cosAcosB－sinAsinB', '4', 5],
    ['tan(A＋B) ＝ ?', '<frac><fn>1＋tanAtanB</fn><fd>tanA－tanB</fd></frac>', '<frac><fn>tanA＋tanB</fn><fd>1－tanAtanB</fd></frac>', '<frac><fn>1－tanAtanB</fn><fd>tanA＋tanB</fd></frac>', '<frac><fn>tanA－tanB</fn><fd>1＋tanAtanB</fd></frac>', '2', 5],
    ['sin3x ＝ ?', '4sin<sup>3</sup>x＋3sinx', '3sinx＋4sin<sup>3</sup>x', '4sin<sup>3</sup>x－3sinx', '3sinx－4sin<sup>3</sup>x', '4', 5],
    ['cos3x ＝ ?', '4cos<sup>3</sup>x＋3cosx', '3cosx＋4cos<sup>3</sup>x', '4cos<sup>3</sup>x－3cosx', '3cosx－4cos<sup>3</sup>x', '3', 5]
]

var A;

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
        a = Math.floor(Math.random() * (questions.length));
    } while (A == a);
    Q.innerHTML = questions[a][0];
    var options = document.getElementsByClassName('lkey');
    for (var i = 0; i < options.length; i++) {
        options[i].innerHTML = questions[a][i + 1];
    }
    var ansitem = document.getElementById(String(questions[a][5]));
    ansitem.classList.add('ans');
    window.setTimeout(main, questions[a][6] * 1000);
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
    }, questions[a][6] * 10);
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