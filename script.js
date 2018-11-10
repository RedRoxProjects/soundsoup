//set the fundamental frequency
const FUNDAMENTAL = 220;

// Create an array of harmonics of the fundamental
var frequencyList = [FUNDAMENTAL, (FUNDAMENTAL * 2), (FUNDAMENTAL * 3), (FUNDAMENTAL * 4), (FUNDAMENTAL * 5), (FUNDAMENTAL * 6), (FUNDAMENTAL * 7), (FUNDAMENTAL * 8), (FUNDAMENTAL * 9), (FUNDAMENTAL * 10), (FUNDAMENTAL * 11), (FUNDAMENTAL * 12), (FUNDAMENTAL * 13)];
console.log(frequencyList);

// Load frequency at random from array
var harmonic = frequencyList[Math.floor(Math.random() * frequencyList.length)]
console.log(harmonic);

// Set up Audio Context
var audioContext = new AudioContext(); 

// Set up Oscillator
var osc = audioContext.createOscillator();

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

