//set the fundamental frequency
const FUNDAMENTAL = 220;

// Create an array of harmonics of the fundamental
const frequencyList = [FUNDAMENTAL, (FUNDAMENTAL * 2), (FUNDAMENTAL * 3), (FUNDAMENTAL * 4), (FUNDAMENTAL * 5), (FUNDAMENTAL * 6), (FUNDAMENTAL * 7), (FUNDAMENTAL * 8), (FUNDAMENTAL * 9), (FUNDAMENTAL * 10), (FUNDAMENTAL * 11), (FUNDAMENTAL * 12), (FUNDAMENTAL * 13)];
console.log(frequencyList);

// Load frequency at random from array
const harmonic = frequencyList[Math.floor(Math.random() * frequencyList.length)]
console.log(harmonic);

// Set up Audio Context
const audioContext = new AudioContext(); 

// Set up Oscillator
const osc = audioContext.createOscillator();

// Set up oscillator frequency
osc.frequency.value = harmonic;

// Start oscillator to audio context
osc.start();

// Connect oscillator on button press
function play() {
    osc.connect(audioContext.destination);
    console.log("started");
}

// Disconnect oscillator when button is not pressed
function stop() {
    osc.disconnect(audioContext.destination);
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

const veg = document.querySelectorAll(".veg")[0];
const veggie = Math.floor(Math.random() * 9);
veg.setAttribute("src", `img/${veggie}.png`);