const step = .5;

// ---------- PEOPLE -----------

const tall = document.querySelector(".tall"), short = document.querySelector(".short"), lamp = document.querySelector(".lamp");

// tall.style.left = getComputedStyle(tall).left, short.style.left = getComputedStyle(short).left; // in px

document.onmousedown = document.ontouchstart = ()=>{setin = setInterval(move, 60);};
document.onmouseup = document.ontouchend = ()=>{clearInterval(setin);};

function move() {
    tall.style.left = parseFloat(tall.style.left)+step+'%';
    short.style.left = parseFloat(short.style.left)-step+'%';
    calcShadow()
}


// ---------- SHADOWS --------

const tallS = tall.querySelector(".shadow"), shortS = short.querySelector(".shadow");
tallS.style.width = shortS.style.width = '0px';

function calcShadow() {
    l = parseInt(getComputedStyle(lamp).height);
    hT = parseInt(getComputedStyle(tall).height);
    hS = parseInt(getComputedStyle(short).height);
    d = parseInt(getComputedStyle(tall).left) - parseInt(getComputedStyle(lamp).left);

    tallS.style.width = d*hT/(l-hT)+'px';
    shortS.style.width = d*hS/(l-hS)+'px';
}


// ------- HELPERS --------

function reset() {
    tallS.style.width = shortS.style.width = '0px';
    tall.style.left = short.style.left = lamp.style.left;
    // document.querySelector('body').style.transform = 'scale(.8)';
}


