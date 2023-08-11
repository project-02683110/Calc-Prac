// After you completed writing, raise this flag.
let Completed = true;

// Your questions here.
let QuestionsData = [
    '面積<button class="tile">S</button>, 極板間隔<button class="tile">d</button>のコンデンサーCがある.<br>Cに電圧<span class="math">V</span>を加えて十分時間が経ったとき, Cには<button class="tile">Q</button>の電荷がたくわえられた.<br>このとき以下の式が成り立つ.<blockquote class="math">V＝<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac>, Q＝<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac>V</blockquote>ここで極板間に生じる電場<span class="math">E</span>は<span class="math">E＝<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac></span>となるので, その大きさは<span class="math">d</span>によらない.<br>またこのとき, 誘電比率<span class="math">ε</span>は<span class="math">ε＝<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac></span>で表される.<br>ただしクーロンの法則の比例定数を<button class="tile">k</button>, 円周率を<button class="tile">π</button>とする.<div id="secret-answer">0:Num:4,Q:1,d:1,k:1,π:1;1:Num:1,S:1;2:Num:1,S:1;3:Num:4,d:1,k:1,π:1;4:Num:4,Q:1,k:1,π:1;5:Num:1,S:1;6:Num:1;7:Num:4,k:1,π:1</div>',
    '断面積<button class="tile">S</button>, 長さ<button class="tile">l</button>の抵抗に一定の電圧<button class="tile">V</button>をかける.<br>このとき抵抗内に存在する電気量<span class="math">－<button class="tile">e</button></span>の電子に電場から<span class="math">F<sub class="math">1</sub>=<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac></span>の力を受ける.<br>また電子はこれとは逆の方向に, その速さ<span class="math">v</span>に比例した<span class="math">F<sub class="math">2</sub>=<button class="tile">k</button>v</span>の抵抗力を受ける.<br>この2力が釣り合うとき, 電子の速さは<span class="math">v＝<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac></span><br>よって抵抗内の電子密度を<button class="tile">n</button>とすると以下が成り立つ.<blockquote class="math">I＝<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac>V, V＝<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac>I</blockquote>またこのとき抵抗の抵抗率<span class="math">ρ</span>は<span class="math">ρ＝<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac></span><div id="secret-answer">0:Num:1,V:1,e:1;1:Num:1,l:1;2:Num:1,V:1,e:1;3:Num:1,k:1,l:1;4:Num:1,S:1,e:2,n:1;5:Num:1,k:1,l:1;6:Num:1,k:1,l:1;7:Num:1,S:1,e:2,n:1;8:Num:1,k:1;9:Num:1,e:2,n:1</div>',
    '単位長あたりの抵抗が<button class="tile">r</button>で, 長さが<button class="tile">L</button>の一様な直線状の抵抗線ABがある.<br>両端ABに起電力<button class="tile">E</button>の直流電源の正極と負極をそれぞれつなぐいだとき, ABを流れる電流の大きさは<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac>である.<br>また上の直流電源をつないだまま, 抵抗線上にAT<span class="math">＝</span><button class="tile">a</button>, BT<span class="math">＝</span><button class="tile">b</button>となるよう接点Tをとる.<br>A, Tを起電力<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac>の直流電源の正極と負極につないだとき, 電源には電流が流れなかった.<div id="secret-answer">0:E:1,Num:1;1:L:1,Num:1,r:1;2:E:1,Num:1,a:1;3:L:1,Num:1</div>',
    '内部抵抗<button class="tile">R</button>[Ω], 1目盛り<button class="tile">I</button>[A]の電流計X, 及び可変抵抗Yがある.<blockquote>(1)<br>抵抗Yを並列接続してXを1目盛り<span class="math">I＋<button class="tile">i</button></span>[A]の電流計として用いたい.<br>回路全体に<span class="math">I＋i</span>[A]の電流を流すとき, Yには<button class="input-box"></button>[A]の電流が流れるとよい.<br>このときYに加わる電圧は<button class="input-box"></button>[V]となるから, Yの抵抗値は<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac>[Ω]とすればよい.</blockquote><blockquote>(2)<br>抵抗Yを直列接続してXを1目盛り<span class="math"><button class="tile">v</button></span>[V]の電圧計として用いたい.<br>回路全体に<span class="math">I</span>[A]の電流を流すとき, Xには<button class="input-box"></button>[V]の電圧が生じる.<br>このときYに加わる電圧は<span class="math"><button class="input-box"></button>－<button class="input-box"></button></span>[V]となるから, Yの抵抗値は<span class="math"><frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac>－<button class="input-box"></button></span>[Ω]とすればよい.</blockquote><div id="secret-answer">0:Num:1,i:1;1:I:1,Num:1,R:1;2:I:1,Num:1,R:1;3:Num:1,i:1;4:I:1,Num:1,R:1;5:Num:1,v:1;6:I:1,Num:1,R:1;7:Num:1,v:1;8:I:1,Num:1;9:Num:1,R:1</div>',
    '<img src="290.png" width="400px"><br>紙面に垂直で表から裏へ向かう一様な磁場<button class="tile">B</button>[T]がある.<br>この磁場中で紙面に平行に図のような形の金属導線OXYと長さ<button class="tile">l</button>[m]の導体棒OPを用意し,<br>OPをOを中心とし点PをXYに接触させながら, 角速度<button class="tile">ω</button>[rad/s]で矢印の向きに回転させる.<br>導体棒は抵抗がなく, 導線は円形部分XYだけに単位長さ当たり<button class="tile">ρ</button>[Ω/m]の抵抗があるものとする.<br><span class="math">Δt</span>[s]間の扇形OPXの面積の変化量<span class="math">ΔS</span>[m<sup>2</sup>]は, <span class="math">ΔS＝<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac>Δt</span><br>ゆえにOP間に誘導起電力が生じ, 点Pの電位は点Oよりも<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac>[V]だけ <button class="input-box"></button><i>{2:高い / 3:低い }</i>.<br>また∠XOP＝<button class="tile">θ</button>のとき, OP間を流れる電流の大きさは<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac>[A]である.<div id="secret-answer">0:Num:1,l:2,ω:1;1:Num:2;2:B:1,Num:1,l:2,ω:1;3:Num:2;4:Num:2;5:B:1,Num:1,l:1,ω:1;6:Num:2,θ:1,ρ:1</div>'
]

// ===============================================================================
// Don't change bellow.
let global;
let history = [...Array(QuestionsData.length)].map((_, i) => i.toString());
let charge = false;

window.onload = function() {
    reset();
    document.addEventListener('keypress', function(e) {
        console.log(history);
        if (e.key == 's') reset();
    });
}

function reset() {
    let Q = document.getElementById('Q');
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