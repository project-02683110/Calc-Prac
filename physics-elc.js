let global;
let Completed = true;
let A;

window.onload = function() {
    reset();
}

function reset() {
    let Q = document.getElementById('Q');
    if (Completed) {
        let a;
        do {
            a = Math.floor(Math.random() * QuestionsData.length);
        } while (a == A)
        A = a;
        Q.innerHTML = QuestionsData[a];
    }
    let key = document.getElementsByClassName('tile');
    for (let i = 0; i < key.length; i++) {
        key[i].onclick = toutched;
    }
    let input = document.getElementsByClassName('input-box');
    global = [...Array(input.length)].map(()=>({"Num":1}));
    input[0].classList.add('attention');
    for (let i = 0; i < input.length; i++) {
        input[i].onclick = focused;
        input[i].id = i.toString();
    }
}

function toutched(e) {
    var e = e || window.event;
    var elem = e.target || e.srcElement;
    let currentAttention =document.getElementsByClassName('attention');
    if (currentAttention.length) {
        var toInput = currentAttention[0];
        var tx = elem.textContent;
        var ad = Number(toInput.id);
        if (elem.classList.contains('numt')) {
            global[ad].Num = Number(tx);
        } else if (global[ad][tx]) {
            global[ad][tx]++;
        } else {
            global[ad][tx] = 1;
        }
        toInput.innerHTML = mathmeticalize(global[ad]);
    }
    var ansData = ArrayToData(global);
    console.log(ansData);
    var correct = document.getElementById('secret-answer');
    if (ansData == correct.textContent) {
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
        reset();
    }
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
        global[ad] = {"Num":1};
        toInput.innerHTML = ''
    }
    console.log(ArrayToData(global));
}

function mathmeticalize(array) {
    let res = '';
    for (key in array) {
        if (key == 'Num') {
            if (array[key] == 0) {
                return '';
            } else if (array[key] > 1) {
                res = array[key] + res;
            }
        } else if (array[key]>1) {
            res = res + key + '<sup class="math">' + array[key] + '</sup>';
        } else {
            res = res + key;
        }
    }
    if (res == '') res = '1';
    return res;
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

function aPlay(file) {
    document.getElementById(file).currentTime = 0;
    document.getElementById(file).play();
}


let QuestionsData = [
    '面積<button class="tile">S</button>, 極板間隔<button class="tile">d</button>のコンデンサーCがある.<br>Cに電圧<span class="math">V</span>を加えて十分時間が経ったとき, Cには<button class="tile">Q</button>の電荷がたくわえられた.<br>このとき以下の式が成り立つ.<blockquote class="math">V=<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac>, Q=<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac>V</blockquote>ここで極板間に生じる電場<span class="math">E</span>は<span class="math">E=<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac></span>となるので, その大きさは<span class="math">d</span>によらない.<br>またこのとき, 誘電比率<span class="math">ε</span>は<span class="math">ε=<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac></span>で表される.<br>ただしクーロンの法則の比例定数を<button class="tile">k</button>, 円周率を<button class="tile">π</button>とする.<div id="secret-answer">0:Num:4,Q:1,d:1,k:1,π:1;1:Num:1,S:1;2:Num:1,S:1;3:Num:4,d:1,k:1,π:1;4:Num:4,Q:1,k:1,π:1;5:Num:1,S:1;6:Num:1;7:Num:4,k:1,π:1</div>',
    '断面積<button class="tile">S</button>, 長さ<button class="tile">l</button>の抵抗に一定の電圧<button class="tile">V</button>をかける.<br>このとき抵抗内に存在する電気量<span class="math">－<button class="tile">e</button></span>の電子に電場から<span class="math">F<sub class="math">1</sub>=<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac></span>の力を受ける.<br>また電子はこれとは逆の方向に, その速さ<span class="math">v</span>に比例した<span class="math">F<sub class="math">2</sub>=<button class="tile">k</button>v</span>の抵抗力を受ける.<br>この2力が釣り合うとき, 電子の速さは<span class="math">v=<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac></span><br>よって抵抗内の電子密度を<button class="tile">n</button>とすると以下が成り立つ.<blockquote class="math">I=<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac>V, V=<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac>I</blockquote>またこのとき抵抗の抵抗率<span class="math">ρ</span>は<span class="math">ρ=<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac></span><div id="secret-answer">0:Num:1,V:1,e:1;1:Num:1,l:1;2:Num:1,V:1,e:1;3:Num:1,k:1,l:1;4:Num:1,S:1,e:2,n:1;5:Num:1,k:1,l:1;6:Num:1,k:1,l:1;7:Num:1,S:1,e:2,n:1;8:Num:1,k:1;9:Num:1,e:2,n:1</div>'
]