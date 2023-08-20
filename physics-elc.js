// After you completed writing, raise this flag.
let Completed = true;

// Your questions here.
let QuestionsData = [
    '面積<button class="tile">S</button>, 極板間隔<button class="tile">d</button>のコンデンサーCがある.<br>Cに電圧<span class="math">V</span>を加えて十分時間が経ったとき, Cには<button class="tile">Q</button>の電荷がたくわえられた.<br>このとき以下の式が成り立つ.<blockquote class="math">V＝<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac>, Q＝<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac>V</blockquote>ここで極板間に生じる電場<span class="math">E</span>は<span class="math">E＝<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac></span>となるので, その大きさは<span class="math">d</span>によらない.<br>またこのとき, 誘電比率<span class="math">ε</span>は<span class="math">ε＝<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac></span>で表される.<br>ただしクーロンの法則の比例定数を<button class="tile">k</button>, 円周率を<button class="tile">π</button>とする.<div id="secret-answer">0:Num:4,Q:1,d:1,k:1,π:1;1:Num:1,S:1;2:Num:1,S:1;3:Num:4,d:1,k:1,π:1;4:Num:4,Q:1,k:1,π:1;5:Num:1,S:1;6:Num:1;7:Num:4,k:1,π:1</div>',
    '断面積<button class="tile">S</button>, 長さ<button class="tile">l</button>の抵抗Rに一定の電圧<button class="tile">V</button>をかける.<br>このときR内に存在する電気量<span class="math">－<button class="tile">e</button></span>の電子は電場から<span class="math">F<sub class="math">1</sub>=<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac></span>の力を受ける.<br>また電子はこれとは逆の方向に, その速さ<span class="math">v</span>に比例した<span class="math">F<sub class="math">2</sub>=<button class="tile">k</button>v</span>の抵抗力を受ける.<br>この2力が釣り合うとき, 電子の速さは<span class="math">v＝<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac></span><br>よってR内の電子密度を<button class="tile">n</button>とすると以下が成り立つ.<blockquote class="math">I＝<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac>V, V＝<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac>I</blockquote>またこのときRの抵抗率<span class="math">ρ</span>は<span class="math">ρ＝<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac></span><div id="secret-answer">0:Num:1,V:1,e:1;1:Num:1,l:1;2:Num:1,V:1,e:1;3:Num:1,k:1,l:1;4:Num:1,S:1,e:2,n:1;5:Num:1,k:1,l:1;6:Num:1,k:1,l:1;7:Num:1,S:1,e:2,n:1;8:Num:1,k:1;9:Num:1,e:2,n:1</div>',
    '単位長あたりの抵抗が<button class="tile">r</button>で, 長さが<button class="tile">L</button>の一様な直線状の抵抗線ABがある.<br>両端ABに起電力<button class="tile">E</button>の直流電源の正極と負極をそれぞれつないだとき, ABを流れる電流の大きさは<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac>である.<br>また上の直流電源をつないだまま, 抵抗線上にAT<span class="math">＝</span><button class="tile">a</button>, BT<span class="math">＝</span><button class="tile">b</button>となるよう接点Tをとる.<br>A, Tを起電力<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac>の直流電源の正極と負極につないだとき, 電源には電流が流れなかった.<div id="secret-answer">0:E:1,Num:1;1:L:1,Num:1,r:1;2:E:1,Num:1,a:1;3:L:1,Num:1</div>',
    '内部抵抗<button class="tile">R</button>[Ω], 1目盛り<button class="tile">I</button>[A]の電流計X, 及び可変抵抗Yがある.<blockquote>(1)<br>抵抗Yを並列接続してXを1目盛り<span class="math">I＋<button class="tile">i</button></span>[A]の電流計として用いたい.<br>回路全体に<span class="math">I＋i</span>[A]の電流を流すとき, Yには<button class="input-box"></button>[A]の電流が流れるとよい.<br>このときYに加わる電圧は<button class="input-box"></button>[V]となるから, Yの抵抗値は<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac>[Ω]とすればよい.</blockquote><blockquote>(2)<br>抵抗Yを直列接続してXを1目盛り<span class="math"><button class="tile">v</button></span>[V]の電圧計として用いたい.<br>回路全体に<span class="math">I</span>[A]の電流を流すとき, Xには<button class="input-box"></button>[V]の電圧が生じる.<br>このときYに加わる電圧は<span class="math"><button class="input-box"></button>－<button class="input-box"></button></span>[V]となるから, Yの抵抗値は<span class="math"><frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac>－<button class="input-box"></button></span>[Ω]とすればよい.</blockquote><div id="secret-answer">0:Num:1,i:1;1:I:1,Num:1,R:1;2:I:1,Num:1,R:1;3:Num:1,i:1;4:I:1,Num:1,R:1;5:Num:1,v:1;6:I:1,Num:1,R:1;7:Num:1,v:1;8:I:1,Num:1;9:Num:1,R:1</div>',
    '<img src="290.png" width="400px"><br>紙面に垂直で表から裏へ向かう一様な磁場<button class="tile">B</button>[T]がある.<br>この磁場中で紙面に平行に図のような形の金属導線OXYと長さ<button class="tile">l</button>[m]の導体棒OPを用意し,<br>OPをOを中心とし点PをXYに接触させながら, 角速度<button class="tile">ω</button>[rad/s]で矢印の向きに回転させる.<br>導体棒は抵抗がなく, 導線は円形部分XYだけに単位長さ当たり<button class="tile">ρ</button>[Ω/m]の抵抗があるものとする.<br><span class="math">Δt</span>[s]間の扇形OPXの面積の変化量<span class="math">ΔS</span>[m<sup>2</sup>]は, <span class="math">ΔS＝<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac>Δt</span><br>ゆえにOP間に誘導起電力が生じ, 点Pの電位は点Oよりも<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac>[V]だけ <button class="input-box nopt" 1="高" 2="低"></button>い.<br>また∠XOP＝<button class="tile">θ</button>のとき, OP間を流れる電流の大きさは<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac>[A]である.<div id="secret-answer">0:Num:1,l:2,ω:1;1:Num:2;2:B:1,Num:1,l:2,ω:1;3:Num:2;4:Num:1;5:B:1,Num:1,l:1,ω:1;6:Num:2,θ:1,ρ:1</div>',
    '断面積<button class="tile">S</button>[m<sup>2</sup>], 巻き数<button class="tile">a</button>, 長さ<button class="tile">l</button>[m]のソレノイドAがある.<br>Aに<button class="tile">I</button>[A]の電流をかけたとき, ソレノイド中心の磁束<span class="math">Φ</span>[Wb]は<span class="math">Φ＝<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac></span>となる.<br>ここで, <span class="math">I</span>を<span class="math">Δt</span>[s]間に<span class="math">ΔI</span>[A]だけ増やす.<br>このときAに生じる誘導起電力の大きさは, <frac><fn class="math"><button class="input-box"></button>ΔI</fn><fd class="math"><button class="input-box"></button>Δt</fd></frac>[V]である.<br>ゆえにAの自己インダクタンス<span class="math">L</span>は<span class="math">L＝<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac></span>となる.<br>またこれに巻き数<button class="tile">b</button>のソレノイドBをAに触れないよう重ねる.<br>このときBには大きさ<frac><fn class="math"><button class="input-box"></button>ΔI</fn><fd class="math"><button class="input-box"></button>Δt</fd></frac>[V]の誘導起電力が生じる.<br>ゆえにAB間の相互インダクタンス<span class="math">M</span>[H]は<span class="math">L</span>[H]の<frac><fn class="math"><button class="input-box"></button></fn><fd class="math"><button class="input-box"></button></fd></frac>倍である.<br>ただし, 透磁率は<button class="tile">μ</button>[N/A<sup>2</sup>]とせよ.<div id="secret-answer">0:I:1,Num:1,S:1,a:1,μ:1;1:Num:1,l:1;2:Num:1,S:1,a:2,μ:1;3:Num:1,l:1;4:Num:1,S:1,a:2,μ:1;5:Num:1,l:1;6:Num:1,S:1,a:1,b:1,μ:1;7:Num:1,l:1;8:Num:1,b:1;9:Num:1,a:1</div>',
    '<img src="pqrs.png" width="400px"><br>図のように, 磁束密度<button class="tile">B</button>の鉛直上向きの一様な磁場中に,<br>間隔<button class="tile">L</button>の2本の平行導体レールPQ, RSが水平に対して角度<span class="math">θ</span>で固定されている.<br>2本のレールは上端で導線QRにより接続されている.<br>このレール上に長さ<span class="math">L</span>, </button>質量<button class="tile">m</button>, 電気抵抗<button class="tile">R</button>の導体棒XYをおく.<br>XYに大きさ<button class="tile">v</button>の初速度を<b>Q→Pの向きに</b>与えると,<br>その後XYは水平を保ち, 速さ<span class="math">v</span>のままレールに沿って降下を続けた.<br>このときXYには大きさ<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac>の誘導電流が流れる.<blockquote>(以下分力として答えよ.)<br>XYは<b>P→Qの向きに</b>磁場から大きさ<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac>の力を受ける.<br>また, XYには<b>Q→Pの向きに</b>大きさ<button class="input-box"></button>の重力がはたらく.<br>これらがPQ方向でつりあうとき, <span class="math">v＝<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac>tanθ</span>となる.</blockquote>重力加速度は<button class="tile">g</button>を用いよ.<blockquote><span class="math">θ</span>に関する三角関数: <button class="tile tfunc">sinθ</button>, <button class="tile tfunc">cosθ</button></blockquote><div id="secret-answer">0:B:1,L:1,Num:1,cosθ:1,v:1;1:Num:1,R:1;2:B:2,L:2,Num:1,cosθ:2,v:1;3:Num:1,R:1;4:Num:1,g:1,m:1,sinθ:1;5:Num:1,R:1,g:1,m:1;6:B:2,L:2,Num:1,cosθ:1</div>',
    '<img src="abcd.png" width="400px"><br>抵抗値<button class="tile">A</button>[Ω], <button class="tile">B</button>[Ω], <button class="tile">C</button>[Ω], <button class="tile">D</button>[Ω]の4つの抵抗, 内部抵抗の無視できる電流計, 及び起電力<span class="math">V</span>の電源がある.<br>これを図のように接続し, その左端を電源の正極に, 右端を負極につないだ.<br>このときAとBの合成抵抗値は<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac>[Ω], CとDの合成抵抗値は<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac>[Ω]だから, 4抵抗の合成抵抗値は<frac><fn class="math">A<button class="input-box"></button>＋<button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac>[Ω]となる.<br>ゆえに電源を流れる電流の大きさ<span class="math">I</span>は, <span class="math">I＝<frac><fn class="math"><button class="input-box"></button>V</fn><fd class="math">A<button class="input-box"></button>＋<button class="input-box"></button></fd></frac></span>[A]となる.<br>また図のように電流<span class="math">a</span>[A]～<span class="math">e</span>[A]を定義すると, キルヒホッフの第二法則より, <span class="math">b＝<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac>a</span>, <span class="math">d＝<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac>c</span>となる.<br>キルヒホッフの第一法則より, <span class="math">I＝a＋b＝c＋d</span>だから, <span class="math">a＝<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac>I</span>, <span class="math">c＝<frac><fn><button class="input-box"></button></fn><fd><button class="input-box"></button></fd></frac>I</span><br>以上により, キルヒホッフの第一法則から, <span class="math">e＝<frac><fn class="math"><button class="input-box wt"></button>－<button class="input-box wt"></button></fn><fd><button class="input-box"></button></fd></frac>I</span><br>よって正の電流が図<span class="math">e</span>の順方向に流れる条件は, <frac><fn class="math">A</fn><fd class="math">C</fd></frac><button class="input-box nopt" 1=">" 2="=" 3="<"></button><frac><fn class="math">B</fn><fd class="math">D</fd></frac>である.<blockquote>数値計算は以下を用いよ. ただし, <button class="input-box-r wt"></button>に対して使ってはならない.<br><button class="tile tfunc">(A+B)</button>, <button class="tile tfunc">(A+C)</button>, <button class="tile tfunc">(B+D)</button>, <button class="tile tfunc">(C+D)</button></blockquote><div id="secret-answer">0:A:1,B:1,Num:1;1:(A+B):1,Num:1;2:C:1,D:1,Num:1;3:(C+D):1,Num:1;4:(C+D):1,B:1,Num:1;5:(A+B):1,C:1,D:1,Num:1;6:(A+B):1,(C+D):1,Num:1;7:(A+B):1,(C+D):1,Num:1;8:(C+D):1,B:1,Num:1;9:(A+B):1,C:1,D:1,Num:1;10:A:1,Num:1;11:B:1,Num:1;12:C:1,Num:1;13:D:1,Num:1;14:B:1,Num:1;15:(A+B):1,Num:1;16:D:1,Num:1;17:(C+D):1,Num:1;18:B:1,C:1,Num:1;19:A:1,D:1,Num:1;20:(A+B):1,(C+D):1,Num:1;21:Num:3</div>'
]

// ===============================================================================
// Don't change bellow.
const resetable = 20000;
const defaultNum = 0;
const defaultChr = '?';
const wtChr = '??'
let global;
let history = [...Array(QuestionsData.length)].map((_, i) => i.toString());
let charge = false;

window.onload = function() {
    let resetButton = document.getElementById('reset-button');
    resetButton.onclick = () => {
        reset();
    };
    reset();
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