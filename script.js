var attachFastClick = Origami.fastclick;
attachFastClick(document.body);

////Prevent Android context menu
//window.oncontextmenu = function() {
//    return false;
//}

const AudioContext = window.AudioContext || window.webkitAudioContext;

//set the fundamental frequency
const FUNDAMENTAL = 220;

//Set the number of partials
const PARTIALS = 13;

//Pick a random harmonic and calculate its frequency
const harmonicRank = Math.floor(Math.random() * PARTIALS);
const harmonic = FUNDAMENTAL*(1 + harmonicRank);
console.log("Harmonic Rank: " + harmonicRank);
console.log("Frequency: " + harmonic);

//Set gain of partial (sawtooth has -6dB/octave slope)
const volume = 1/(1 + harmonicRank);
console.log("Volume: " + volume);

// Set up Audio Context
const audioContext = new AudioContext();

// Set up Oscillator
const osc = audioContext.createOscillator();

// Set up Amplifier
const amplifier = audioContext.createGain();

// Set up oscillator frequency
osc.frequency.value = harmonic;

//Initialise amplifier gain
amplifier.gain.value = 0;

//Connect the Oscillator to the Amplifier
osc.connect(amplifier);

//Connect Amplifier to output
amplifier.connect(audioContext.destination);

// Start oscillator to audio context
osc.start();

// Turn on amplifier on button press
function play() {
    amplifier.gain.value = volume;
    console.log("started");
}

// Disconnect oscillator when button is not pressed
function stop() {
    amplifier.gain.value = 0;
}

function endTapOrClick(event) {
    //handle tap or click.
    stop();
    event.preventDefault();
    return false;
}

function TapOrClick(event) {
    //handle tap or click.
    play();
    event.preventDefault();
    return false;
}

$(document).ready(() => {
    const veggie = Math.floor(Math.random() * 9);
    console.log(1);
    const imgPath = 'img/' + veggie + '.png';
    console.log(2);
    $(".veg").attr("src", imgPath);
    console.log(3);
})
// const veg = document.querySelectorAll(".veg")[0];
// const veggie = Math.floor(Math.random() * 9);
// veg.setAttribute("src", `img/${veggie}.png`);
