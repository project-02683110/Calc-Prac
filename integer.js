let Qdata = [], Adata = [], Idata = [], Ldata = [], Ans, Qes, Int, Lev;
const aiu = ['ア','イ','ウ','エ','オ'];

String.prototype.kana = function(){
    return(
        this
            .replaceAll('+','\\mathbf{+}')
            .replaceAll('-','\\mathbf{-}')
            .replaceAll('ア','\\fbox{ア}')
            .replaceAll('イ','\\fbox{イ}')
            .replaceAll('ウ','\\fbox{ウ}')
            .replaceAll('エ','\\fbox{エ}')
            .replaceAll('オ','\\fbox{オ}')
            .replaceAll('\\sqrt{','\\sqrt{⁬')
            .replaceAll(/d[A-Za-z]/,'\\,\\mathrm{$&}\\,')
    );
}

String.prototype.brac = function(){
    return(
        this
            .replaceAll('(','\\left(')
            .replaceAll(')','\\right)')
            .replaceAll('|','\\Big|')
    );
}

String.prototype.func = function(){
    return(
        this
            .replaceAll('@a','\\alpha⁡')
            .replaceAll('@b','\\beta⁡')
            .replaceAll('@g','\\gumma⁡')
            .replaceAll('@p','\\pi⁡')
            .replaceAll('@h','\\theta⁡')
            .replaceAll('@r','\\sqrt{⁡}')
            .replaceAll('@f','\\frac{⁡}{}')
            .replaceAll('@l','\\log{⁡}')
            .replaceAll('@p','^{⁡}')
            .replaceAll('@s','\\sin{⁡}')
            .replaceAll('@c','\\cos{⁡}')
            .replaceAll('@t','\\tan{⁡}')
            .replaceAll('@y','\\int_{⁡}^{}dx')
            .replaceAll('@i',Int + '⁡dx')
    );
}

async function fetchData() {
    try {
        const jsondata = await fetch('integer.json');
        const expdata = await jsondata.json();
        expdata.forEach(function (value, index) {
            Qdata[index] = value.question;
            Adata[index] = value.answer;
            Idata[index] = value.int;
            Ldata[index] = value.level;
        })
        disp();
        MathJax.typeset([document.getElementById('QP')]);
        MathJax.typeset([document.getElementById('OP')]);
    } catch (error) {
        console.log(error);
    }
}

function disp() {
    let QP = document.getElementById('QP'), LP = document.getElementById('LP'), r = Math.floor(Math.random() * Qdata.length);
    Qes = Qdata[r];
    Ans = Adata[r];
    Int = Idata[r];
    Lev = Number(Ldata[r]);
    LP.innerText = 'altitudedouble_arrow' + ('kid_star').repeat(Lev);
    QP.innerHTML = '\\[' + Qes.kana().brac() + '\\]';
    aiu.forEach( function(value) {
        document.getElementById(value).value = ''
        document.getElementById(value).disabled = (Qes.search(value) == -1) ;
    });
    MathJax.typeset([QP]);
}

function ansCheck() {
    let text = '';
    aiu.forEach( function(value) { text += document.getElementById(value).value; });
    if (Ans == text) disp();
}

function cursor() {
    let IP = document.getElementById('IP');
    let fp = IP.value.search('⁡');
    if ( fp >= 0 ) {
        IP.focus();
        IP.value = IP.value.replaceAll('⁡', '');
        IP.setSelectionRange(fp, fp);
    }
}

function reload() {
    let IP = document.getElementById('IP'), OP = document.getElementById('OP');
    IP.value = IP.value.func();
    cursor();
    OP.innerHTML = IP.value == '' ? '\\[Memo\\]' : IP.value.kana();
    window.setTimeout(function(){
        MathJax.typeset([OP]);
    }, 100);
}

function insertLatex(tx1, tx2) {
    let IP = document.getElementById('IP'), ss = IP.selectionStart, se = IP.selectionEnd;
    IP.value = IP.value.substr(0, ss) + tx1 + IP.value.substr(ss, se - ss) + tx2 + IP.value.substr(se);
    reload();
    IP.focus();
    IP.setSelectionRange(se + tx1.length, se + tx1.length);
}

function copyLatex() {
    insertLatex(('#' + Qes + '#'), '');
}

function deleteLatex() {
    let IP = document.getElementById('IP');
    IP.value = '';
    reload();
    IP.focus();
}

function ipof() {
    if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
        document.getElementById('bgfade').style.height = '60%';
    }
}

function ipob() {
    document.getElementById('bgfade').style.height = '100%';
}

window.onload = fetchData();