// After you completed writing, raise this flag.
let Completed = true;

let data;
let QuestionsData = [];
let urlinfo = new Object();

var scripts = document.getElementsByTagName( 'script' );
var src = scripts[ scripts.length - 1 ].src;

var query = src.substring( src.indexOf( '?' ) + 1 );
var parameters = query.split( '&' );

async function fetchData() {
    try {
        const jsondata = await fetch(jFileName || 'help.json');
        data = await jsondata.json();
        data.forEach(function (value, index) {
            QuestionsData[index] = value.text;
        })
        history = [...Array(QuestionsData.length)].map((_, i) => i.toString());
        reset();
    } catch (error) {
        console.error('Error loading JSON file:', error);
    }
}

// ===============================================================================
// Don't change bellow.
const resetable = 20000;
const defaultNum = 0;
const defaultChr = '?';
const wtChr = '??'
let global;
let history;
let charge = false;

window.onload = function() {
    fetchData();
    let resetButton = document.getElementById('reset-button');
    resetButton.onclick = () => {
        reset();
    };
    document.addEventListener('keypress', function(e) {
        console.log(history);
        if (e.key == 's') reset();
    });
}

function reset() {
    let Q = document.getElementById('Q');
    let resetButton = document.getElementById('reset-button');
    if (Completed) {
        if (history.length == 0) {
            Q.innerHTML = '<h2>問題を一周しました</h2><br><button class="tile">R</button>をタップしてリスタート。<br><button class="input-box"></button><div id="secret-answer">0:Num:1,R:1</div>'
            history = [...Array(QuestionsData.length)].map((_, i) => i);
            charge = true;
        } else {
            let n = Math.floor(Math.random() * history.length);
            Q.innerHTML = QuestionsData[history[n]];
            history.splice(n, 1);
        }
    }
    let key = document.getElementsByClassName('tile');
    for (let i = 0; i < key.length; i++) {
        key[i].onclick = toutched;
    }
    let input = document.getElementsByClassName('input-box');
    global = [...Array(input.length)].map(()=>({"Num":defaultNum}));
    input[0].classList.add('attention');
    for (let i = 0; i < input.length; i++) {
        input[i].onclick = focused;
        input[i].id = i.toString();
        input[i].innerHTML = defaultChr;
    }
    let Wts = document.getElementsByClassName('wt');
    for (let i = 0; i < Wts.length; i++) {
        Wts[i].innerHTML = wtChr;
    }
    let Nopt = document.getElementsByClassName('nopt');
    for (let i = 0; i < Nopt.length; i++) {
        Nopt[i].innerHTML = optionsOpen(Nopt[i]);
        Nopt[i].setAttribute('title', optionsShow(Nopt[i]));
    }
    resetButton.disabled = true;
    window.setTimeout(function() {
        resetButton.disabled = false;
    }, resetable);
}

function toutched(e) {
    var e = e || window.event;
    var elem = e.target || e.srcElement;
    let currentAttention =document.getElementsByClassName('attention');
    if (currentAttention.length) {
        var toInput = currentAttention[0];
        var tx = elem.textContent;
        var ad = Number(toInput.id);
        if (toInput.classList.contains('nopt')) {
            if (elem.classList.contains('numt') && toInput.getAttribute(Number(tx))) {
                global[ad].Num = Number(tx);
                toInput.innerHTML = toInput.getAttribute(Number(tx));
            }
        } else {
            if (global[ad].Num == defaultNum) global[ad].Num = 1;
            if (elem.classList.contains('numt')) {
                global[ad].Num = Number(tx);
            } else if (global[ad][tx]) {
                global[ad][tx]++;
            } else {
                global[ad][tx] = 1;
            }
            toInput.innerHTML = mathmeticalize(global[ad]);
        }
    }
    var ansData = ArrayToData(global);
    console.log(ansData);
    var correct = getAnswer();
    if (ansData == correct) {
        if (charge) {
            charge = false;
        } else {
            var effect = document.getElementById('Effect');
            var score = document.getElementById('score');
            var S = Number(score.innerText);
            S++;
            if (S>999) S=999;
            score.innerText = ( '000' + S ).slice( -3 );
            if (effect.value == 'T') aPlay('T');
            document.body.animate({
                background: ["deepskyblue", "white"],
            }, 500 );
        }
        reset();
    }
}

function getAnswer() {
    let ans = document.getElementById('secret-answer');
    return ans.textContent;
}

function focused(e) {
    var e = e || window.event;
    var elem = e.target || e.srcElement;
    if (elem.tagName == "BUTTON") {
        let currentAttention =document.getElementsByClassName('attention');
        if (currentAttention.length) currentAttention[0].classList.remove('attention');
        elem.classList.add('attention');
    }
}

function del() {
    let currentAttention =document.getElementsByClassName('attention');
    if (currentAttention.length) {
        var toInput = currentAttention[0];
        var ad = Number(toInput.id);
        global[ad] = {"Num":defaultNum};
        toInput.innerHTML = defaultChr;
        if (toInput.classList.contains('wt')) toInput.innerHTML = wtChr;
        if (toInput.classList.contains('nopt')) toInput.innerHTML = optionsOpen(toInput);
    }
    console.log(ArrayToData(global));
}

function mathmeticalize(array) {
    let res = '';
    let resb = '';
    let rese = '';
    for (key in array) {
        if (key == 'Num') {
            if (array[key] == 0) {
                return '';
            } else if (array[key] == 1) {
                resb = '';
            } else {
                resb = array[key];
            }
        } else if (key.length > 1 && key.slice(0,1) != '(') {
            if (array[key] == 1) {
                rese = rese + key;
            } else {
                rese = rese + key.substr(0,3) + '<sup class="math">' + array[key] + '</sup>' + key.substr(3);
            }
        } else if (array[key] > 1) {
            res = res + key + '<sup class="math">' + array[key] + '</sup>';
        } else {
            res = res + key;
        }
    }
    if (resb == '' && res == '' && rese == '') resb = '1';
    return resb + res + rese;
}

function ArrayToData(array) {
    let res = [...Array(array.length)].map(()=>'');
    for (let i = 0 ; i < array.length ; i++) {
        let pros = [];
        for (key in array[i]) {
            pros.push(key + ':' + array[i][key]);
        }
        pros.sort();
        res[i] = i + ':' + pros.join(',');
    }
    return res.join(';');
}

function optionsOpen(elem) {
    let i = 1;
    let ret = '';
    while (elem.getAttribute(i.toString())) {
        ret = ret + '&#' + (i + 9311).toString() + '; ' + elem.getAttribute(i.toString()) + ' , ';
        i++;
    }
    ret = ret.slice(0, -3);
    return ret;
}

function optionsShow(elem) {
    let i = 1;
    let ret = '';
    while (elem.getAttribute(i.toString())) {
        ret = ret + (i).toString() + ':' + elem.getAttribute(i.toString()) + ' , ';
        i++;
    }
    ret = ret.slice(0, -3);
    return ret;
}

function aPlay(file) {
    document.getElementById(file).currentTime = 0;
    document.getElementById(file).play();
}