'use strict';
const oneOne = document.querySelector('.one-one');
const oneTwo = document.querySelector('.one-two');
const oneThree = document.querySelector('.one-three');
const twoOne = document.querySelector('.two-one');
const twoTwo = document.querySelector('.two-two');
const twoThree = document.querySelector('.two-three');
const threeOne = document.querySelector('.three-one');
const threeTwo = document.querySelector('.three-two');
const threeThree = document.querySelector('.three-three');
const reset = document.querySelector('.restart');
let winner = document.querySelector('.win');
let activePlayer = 0;
let oos = 'blank.jpg';
let otws = 'blank.jpg';
let oths = 'blank.jpg';
let to = 'blank.jpg';
let twt = 'blank.jpg';
let tth = 'blank.jpg';
let tho = 'blank.jpg';
let tht = 'blank.jpg';
let thth = 'blank.kpg';
let isPlaying = true;
let beenThereOO = false;
let beenThereOT = false;
let beenThereOTH = false;
let beenThereTO = false;
let beenThereTWT = false;
let beenThereTTH = false;
let beenThereTHO = false;
let beenThereTHT = false;
let beenThereTHTH = false;
let d1 = false,
  d2 = false,
  d3 = false,
  d4 = false,
  d5 = false,
  d6 = false,
  d7 = false,
  d8 = false;

winner.classList.add('hidden');
reset.addEventListener('click', function () {
  isPlaying = true;
  beenThereOO = false;
  beenThereOT = false;
  beenThereOTH = false;
  beenThereTO = false;
  beenThereTWT = false;
  beenThereTTH = false;
  beenThereTHO = false;
  beenThereTHT = false;
  beenThereTHTH = false;
  d1 = false;
  d2 = false;
  d3 = false;
  d4 = false;
  d5 = false;
  d6 = false;
  d7 = false;
  d8 = false;
  activePlayer = 0;
  oos = 'blank.jpg';
  otws = 'blank.jpg';
  oths = 'blank.jpg';
  to = 'blank.jpg';
  twt = 'blank.jpg';
  tth = 'blank.jpg';
  tho = 'blank.jpg';
  tht = 'blank.jpg';
  thth = 'blank.kpg';
  oneOne.src = 'blank.jpg';
  oneTwo.src = 'blank.jpg';
  oneThree.src = 'blank.jpg';
  twoOne.src = 'blank.jpg';
  twoTwo.src = 'blank.jpg';
  twoThree.src = 'blank.jpg';
  threeOne.src = 'blank.jpg';
  threeTwo.src = 'blank.jpg';
  threeThree.src = 'blank.jpg';
  winner.classList.add('hidden');
});
oneOne.addEventListener('click', function () {
  if (isPlaying && !beenThereOO) {
    beenThereOO = true;
    oneOne.src = `${activePlayer === 0 ? 'xxxxx.jpg' : 'ooooo.jpg'}`;
    if (activePlayer === 0) {
      activePlayer = 1;
    } else activePlayer = 0;
    oos = oneOne.src.slice(oneOne.src.length - 9);
    checkingFirstLine();
    chekingFirstVertical();
    chekingDiagonalOne();
    isDraw();
  }
});
oneTwo.addEventListener('click', function () {
  if (isPlaying && !beenThereOT) {
    beenThereOT = true;
    oneTwo.src = `${activePlayer === 0 ? 'xxxxx.jpg' : 'ooooo.jpg'}`;
    if (activePlayer === 0) {
      activePlayer = 1;
    } else activePlayer = 0;
    otws = oneTwo.src.slice(oneTwo.src.length - 9);
    checkingFirstLine();
    chekingSecondVertical();
    isDraw();
  }
});
oneThree.addEventListener('click', function () {
  if (isPlaying && !beenThereOTH) {
    beenThereOTH = true;
    oneThree.src = `${activePlayer === 0 ? 'xxxxx.jpg' : 'ooooo.jpg'}`;
    if (activePlayer === 0) {
      activePlayer = 1;
    } else activePlayer = 0;
    oths = oneThree.src.slice(oneThree.src.length - 9);
    checkingFirstLine();
    chekingThirdVertical();
    chekingDiagonalTwo();
    isDraw();
  }
});
twoOne.addEventListener('click', function () {
  if (isPlaying && !beenThereTO) {
    beenThereTO = true;
    twoOne.src = `${activePlayer === 0 ? 'xxxxx.jpg' : 'ooooo.jpg'}`;
    if (activePlayer === 0) {
      activePlayer = 1;
    } else activePlayer = 0;
    to = twoOne.src.slice(twoOne.src.length - 9);
    checkingSecondLine();
    chekingFirstVertical();
    isDraw();
  }
});
twoTwo.addEventListener('click', function () {
  if (isPlaying && !beenThereTWT) {
    beenThereTWT = true;
    twoTwo.src = `${activePlayer === 0 ? 'xxxxx.jpg' : 'ooooo.jpg'}`;
    if (activePlayer === 0) {
      activePlayer = 1;
    } else activePlayer = 0;
    twt = twoTwo.src.slice(twoTwo.src.length - 9);
    checkingSecondLine();
    chekingSecondVertical();
    chekingDiagonalOne();
    chekingDiagonalTwo();
    isDraw();
  }
});
twoThree.addEventListener('click', function () {
  if (isPlaying && !beenThereTTH) {
    beenThereTTH = true;
    twoThree.src = `${activePlayer === 0 ? 'xxxxx.jpg' : 'ooooo.jpg'}`;
    if (activePlayer === 0) {
      activePlayer = 1;
    } else activePlayer = 0;
    tth = twoThree.src.slice(twoThree.src.length - 9);
    checkingSecondLine();
    chekingThirdVertical();
    isDraw();
  }
});
threeOne.addEventListener('click', function () {
  if (isPlaying && !beenThereTHO) {
    beenThereTHO = true;
    threeOne.src = `${activePlayer === 0 ? 'xxxxx.jpg' : 'ooooo.jpg'}`;
    if (activePlayer === 0) {
      activePlayer = 1;
    } else activePlayer = 0;
    tho = threeOne.src.slice(threeOne.src.length - 9);
    checkingThirdLine();
    chekingFirstVertical();
    chekingDiagonalTwo();
    isDraw();
  }
});
threeTwo.addEventListener('click', function () {
  if (isPlaying && !beenThereTHT) {
    beenThereTHT = true;
    threeTwo.src = `${activePlayer === 0 ? 'xxxxx.jpg' : 'ooooo.jpg'}`;
    if (activePlayer === 0) {
      activePlayer = 1;
    } else activePlayer = 0;
    tht = threeTwo.src.slice(threeTwo.src.length - 9);
    checkingThirdLine();
    chekingSecondVertical();
    isDraw();
  }
});
threeThree.addEventListener('click', function () {
  if (isPlaying && !beenThereTHTH) {
    beenThereTHTH = true;
    threeThree.src = `${activePlayer === 0 ? 'xxxxx.jpg' : 'ooooo.jpg'}`;
    if (activePlayer === 0) {
      activePlayer = 1;
    } else activePlayer = 0;
    thth = threeThree.src.slice(threeThree.src.length - 9);
    checkingThirdLine();
    chekingThirdVertical();
    chekingDiagonalOne();
    isDraw();
  }
});
//1

function checkingFirstLine() {
  if (oos !== 'blank.jpg' && oos === otws && oos === oths) {
    d1 = true;
    if (activePlayer === 1) {
      winner.classList.remove('hidden');
      winner.textContent = 'ხ-ებმა მოიგეს';
      oneOne.src = 'xxxrr.jpg';
      oneTwo.src = 'xxxrr.jpg';
      oneThree.src = 'xxxrr.jpg';

      isPlaying = false;
    } else {
      winner.classList.remove('hidden');
      winner.textContent = 'ო-ებმა მოიგეს';
      isPlaying = false;
      oneOne.src = 'ooorr.jpg';
      oneTwo.src = 'ooorr.jpg';
      oneThree.src = 'ooorr.jpg';
    }
  }
}

//2
function checkingSecondLine() {
  if (to !== 'blank.jpg' && to === twt && to === tth) {
    d2 = true;
    if (activePlayer === 1) {
      winner.classList.remove('hidden');
      winner.textContent = 'ხ-ებმა მოიგეს';
      isPlaying = false;
      twoOne.src = 'xxxrr.jpg';
      twoTwo.src = 'xxxrr.jpg';
      twoThree.src = 'xxxrr.jpg';
    } else {
      winner.classList.remove('hidden');
      winner.textContent = 'ო-ებმა მოიგეს';
      isPlaying = false;
      twoOne.src = 'ooorr.jpg';
      twoTwo.src = 'ooorr.jpg';
      twoThree.src = 'ooorr.jpg';
    }
  }
}

//3
function checkingThirdLine() {
  if (tho !== 'blank.jpg' && tho === tht && tho === thth) {
    d3 = true;
    if (activePlayer === 1) {
      winner.classList.remove('hidden');
      winner.textContent = 'ხ-ებმა მოიგეს';
      isPlaying = false;
      threeOne.src = 'xxxrr.jpg';
      threeTwo.src = 'xxxrr.jpg';
      threeThree.src = 'xxxrr.jpg';
    } else {
      winner.classList.remove('hidden');
      winner.textContent = 'ო-ებმა მოიგეს';
      isPlaying = false;
      threeOne.src = 'ooorr.jpg';
      threeTwo.src = 'ooorr.jpg';
      threeThree.src = 'ooorr.jpg';
    }
  }
}

//vertical 1
function chekingFirstVertical() {
  if (oos !== 'blank.jpg' && oos === to && oos === tho) {
    d4 = true;
    if (activePlayer === 1) {
      winner.classList.remove('hidden');
      winner.textContent = 'ხ-ებმა მოიგეს';
      oneOne.src = 'xxxrr.jpg';
      twoOne.src = 'xxxrr.jpg';
      threeOne.src = 'xxxrr.jpg';
      isPlaying = false;
    } else {
      winner.classList.remove('hidden');
      winner.textContent = 'ო-ებმა მოიგეს';
      oneOne.src = 'ooorr.jpg';
      twoOne.src = 'ooorr.jpg';
      threeOne.src = 'ooorr.jpg';
      isPlaying = false;
    }
  }
}
// vertical 2
function chekingSecondVertical() {
  if (otws !== 'blank.jpg' && otws === twt && otws === tht) {
    d5 = true;
    if (activePlayer === 1) {
      winner.classList.remove('hidden');
      winner.textContent = 'ხ-ებმა მოიგეს';
      isPlaying = false;
      oneTwo.src = 'xxxrr.jpg';
      twoTwo.src = 'xxxrr.jpg';
      threeTwo.src = 'xxxrr.jpg';
    } else {
      winner.classList.remove('hidden');
      winner.textContent = 'ო-ებმა მოიგეს';
      isPlaying = false;
      oneTwo.src = 'ooorr.jpg';
      twoTwo.src = 'ooorr.jpg';
      threeTwo.src = 'ooorr.jpg';
    }
  }
}

//vertical 3
function chekingThirdVertical() {
  if (oths !== 'blank.jpg' && oths === tth && oths === thth) {
    d6 = true;
    if (activePlayer === 1) {
      winner.classList.remove('hidden');
      winner.textContent = 'ხ-ებმა მოიგეს';
      isPlaying = false;
      oneThree.src = 'xxxrr.jpg';
      twoThree.src = 'xxxrr.jpg';
      threeThree.src = 'xxxrr.jpg';
    } else {
      winner.classList.remove('hidden');
      winner.textContent = 'ო-ებმა მოიგეს';
      isPlaying = false;
      oneThree.src = 'ooorr.jpg';
      twoThree.src = 'ooorr.jpg';
      threeThree.src = 'ooorr.jpg';
    }
  }
}

//diagonal 1
function chekingDiagonalOne() {
  if (oos !== 'blank.jpg' && twt === oos && oos === thth) {
    d7 = true;
    if (activePlayer === 1) {
      winner.classList.remove('hidden');
      winner.textContent = 'ხ-ებმა მოიგეს';
      isPlaying = false;
      oneOne.src = 'xxxrr.jpg';
      twoTwo.src = 'xxxrr.jpg';
      threeThree.src = 'xxxrr.jpg';
    } else {
      winner.classList.remove('hidden');
      winner.textContent = 'ო-ებმა მოიგეს';
      isPlaying = false;
      oneOne.src = 'ooorr.jpg';
      twoTwo.src = 'ooorr.jpg';
      threeThree.src = 'ooorr.jpg';
    }
  }
}

//diagonal 2
function chekingDiagonalTwo() {
  if (oths !== 'blank.jpg' && twt === oths && oths === tho) {
    d8 = true;
    if (activePlayer === 1) {
      winner.classList.remove('hidden');
      winner.textContent = 'ხ-ებმა მოიგეს';
      isPlaying = false;
      oneThree.src = 'xxxrr.jpg';
      twoTwo.src = 'xxxrr.jpg';
      threeOne.src = 'xxxrr.jpg';
    } else {
      winner.classList.remove('hidden');
      winner.textContent = 'ო-ებმა მოიგეს';
      isPlaying = false;
      oneThree.src = 'ooorr.jpg';
      twoTwo.src = 'ooorr.jpg';
      threeOne.src = 'ooorr.jpg';
    }
  }
}
function isDraw() {
  if (
    beenThereOO &&
    beenThereOT &&
    beenThereOTH &&
    beenThereTO &&
    beenThereTWT &&
    beenThereTTH &&
    beenThereTHO &&
    beenThereTHT &&
    beenThereTHTH
  ) {
    if (!d1 && !d2 && !d3 && !d4 && !d5 && !d6 && !d7 && !d8) {
      winner.classList.remove('hidden');
      winner.textContent = 'ფრეა!';
    }
    oneOne.src = `${oos === 'xxxxx.jpg' ? 'xxxbb.jpg' : 'ooobb.jpg'}`;
    oneTwo.src = `${otws === 'xxxxx.jpg' ? 'xxxbb.jpg' : 'ooobb.jpg'}`;
    oneThree.src = `${oths === 'xxxxx.jpg' ? 'xxxbb.jpg' : 'ooobb.jpg'}`;
    twoOne.src = `${to === 'xxxxx.jpg' ? 'xxxbb.jpg' : 'ooobb.jpg'}`;
    twoTwo.src = `${twt === 'xxxxx.jpg' ? 'xxxbb.jpg' : 'ooobb.jpg'}`;
    twoThree.src = `${tth === 'xxxxx.jpg' ? 'xxxbb.jpg' : 'ooobb.jpg'}`;
    threeOne.src = `${tho === 'xxxxx.jpg' ? 'xxxbb.jpg' : 'ooobb.jpg'}`;
    threeTwo.src = `${tht === 'xxxxx.jpg' ? 'xxxbb.jpg' : 'ooobb.jpg'}`;
    threeThree.src = `${thth === 'xxxxx.jpg' ? 'xxxbb.jpg' : 'ooobb.jpg'}`;
  }
}
