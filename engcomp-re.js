let hist = [];
let now;
let data;
let count = 1;
let voiceE;

fetchData();

speechSynthesis.addEventListener('voiceschanged', e => {
    let voices = speechSynthesis.getVoices();
    console.log(voices);
    let t = true;
    let y = true;
    for (let i = 0; i < voices.length; i++) {
        if (voices[i].name == 'Microsoft David - English (United States)') {
            voiceE = voices[i];
            t = false;
        }
        if (voices[i].name == 'Microsoft Ichiro - Japanese (Japan)') {
            voiceJ = voices[i];
            y = false;
        }
        if (voices[i].lang == 'en-US' && t) voiceE = voices[i];
        if (voices[i].lang == 'ja-JP' && y) voiceJ = voices[i];
    }
    let stb = document.getElementById('start');
    stb.disabled = false;
});

async function fetchData() {
    try {
        const jsondata = await fetch('newl.json');
        data = await jsondata.json();
    } catch (error) {
        console.error('Error loading JSON file:', error);
    }
}

function started() {
    let stb = document.getElementById('start');
    stb.remove();
    Qt();
}

function Qt() {
    let Q = document.getElementById('Q');
    let A = document.getElementById('A');
    let timelimit = document.getElementById('timelimit');
    do {
        now = Math.floor(Math.random() * (data.length));
    } while (hist.indexOf(now) != -1);
    let tx = trim(data[now].japanese);
    Q.innerHTML = count.toString() + '. ' + trim(tx);
    A.innerHTML = data[now].english.substr(0,1) + '<y>' + data[now].english.substr(1) + '</y>';
    aPlay("Qt");
    speakJ(tx)
    for (var i = 1; i <= 8; i++) {
        let WL = 'WL'+i.toString();
        let bt = document.getElementById(WL);
        if (bt.classList.contains('No') == false) bt.classList.add('No');
        if (data[now][WL] == 'True') bt.classList.remove('No');
    }
    count++;
    window.setTimeout(An, 5000);
    hist.push(now);
    var t = 0;
    let timer = setInterval(function() {
        if (t > 100) {
            clearInterval(timer);
        } else {
            t++;
            timelimit.value = t;
        }
    }, 50);
}

function An() {
    let A = document.getElementById('A');
    let timelimit = document.getElementById('timelimit');
    A.innerHTML = data[now].english.substr(0,1) + '<z>' + data[now].english.substr(1) + '</z>';
    aPlay("An");
    speakE(data[now].english);
    window.setTimeout(Qt, 5000);
    var t = 0;
    let timer = setInterval(function() {
        if (t > 100) {
            clearInterval(timer);
        } else {
            t++;
            timelimit.value = t;
        }
    }, 50);
}

function trim(text) {
    while (text.length > 35) {
        text = text.substr(0, text.lastIndexOf('。'));
    }
    return text;
}

function aPlay(file) {
    document.getElementById(file).currentTime = 0;
    document.getElementById(file).play();
}

function speakE(text) {
    const uttr = new SpeechSynthesisUtterance();
    uttr.text = text;
    uttr.lang = 'en-US';
    uttr.voice = voiceE;
    window.speechSynthesis.speak(uttr);
}

function speakJ(text) {
    const uttr = new SpeechSynthesisUtterance();
    uttr.text = text.replace(/（.*?）/g, "");
    uttr.lang = 'en-US';
    uttr.voice = voiceJ;
    uttr.rate = 1.8
    uttr.pitch = 0.5
    window.speechSynthesis.speak(uttr);
}