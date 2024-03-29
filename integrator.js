let Idata = [], Qdata = [], Adata = [], Rdata = [], Ldata = [], Ans, Qes, Rng, Lev, qesID;
const aiu = ['ア','イ','ウ','エ','オ'];

String.prototype.kana = function(){
    return(
        this
            .replaceAll('+','\\mathbf{+}')
            .replaceAll('-','\\mathbf{-}')
            .replaceAll(/[ア-オ]+/g,'\\fbox{$&}')
            .replaceAll('\\sqrt{','\\sqrt{⁬')
            .replaceAll(/d[A-Za-z]=/g,'\\,$&')
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
            .replaceAll('@g','\\gamma⁡')
            .replaceAll('@p','\\pi⁡')
            .replaceAll('@h','\\theta⁡')
            .replaceAll('@r','\\sqrt{⁡}')
            .replaceAll('@f','\\frac{⁡}{}')
            .replaceAll('@l','\\log{⁡}')
            .replaceAll('@n','\\ln{⁡}')
            .replaceAll('@p','^{⁡}')
            .replaceAll('@s','\\sin{⁡}')
            .replaceAll('@c','\\cos{⁡}')
            .replaceAll('@t','\\tan{⁡}')
            .replaceAll('@y','\\int_{⁡}^{}')
            .replaceAll('@i','\\int' + Rng + '⁡dx')
            .replaceAll('@k','\\left[⁡\\right]' + Rng)
    );
}

async function fetchData() {
    try {
        const jsondata = await fetch('https://script.google.com/macros/s/AKfycbzPa5cnSRdws8HQ1o-yQKz4qxLkH9j3ixnP_lDqiSuG6SzrTmY3hpx8p3ExBS5RLvBO/exec');
        const expdata = await jsondata.json();
        expdata.forEach(function (value, index) {
            Idata[index] = value.ID;
            Qdata[index] = value.question;
            Adata[index] = value.answer;
            Rdata[index] = value.range;
            Ldata[index] = value.level;
        })
        disp();
        MathJax.typeset([document.getElementById('QP')]);
        MathJax.typeset([document.getElementById('OP')]);
        document.getElementById('screen').classList.add('load_end');
    } catch (error) {
        console.log(error);
    }
}

function disp() {
    let QP = document.getElementById('QP'), LP = document.getElementById('LP'), r = Math.floor(Math.random() * Qdata.length);
    qesID = Idata[r]
    Qes = Qdata[r];
    Ans = Adata[r];
    Rng = Rdata[r];
    Lev = Ldata[r];
    LP.innerText = 'altitudedouble_arrow' + ('kid_star').repeat(Lev) + ('remove').repeat(5-Lev);
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

function getLink() {
    return 'https://docs.google.com/forms/d/e/1FAIpQLSclF34RkIDHnX5qWQ_bXHl1pWboUG9_fK_z0n2el-ZZFLz-xA/viewform?usp=pp_url&entry.1149597675=https://calcprac.netlify.app/integrator.html?id%3D' + qesID.toString();
}

window.onload = fetchData();