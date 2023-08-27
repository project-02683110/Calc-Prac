let hist = [];
let now;
let data;

fetchData();

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
    Q.innerHTML = data[now].japanese;
    A.innerHTML = data[now].english.substr(0,1) + '<y>' + data[now].english.substr(1) + '</y>';
    for (var i = 1; i <= 8; i++) {
        let WL = 'WL'+i.toString();
        let bt = document.getElementById(WL);
        if (bt.classList.contains('No') == false) bt.classList.add('No');
        if (data[now][WL] == 'True') bt.classList.remove('No');
    }
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

function aPlay(file) {
    document.getElementById(file).currentTime = 0;
    document.getElementById(file).play();
}