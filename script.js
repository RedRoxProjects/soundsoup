const OSC_FREQUENCY = 440; 

//set up Audio Context
var audioContext = new AudioContext(); 

//set up Oscillator
var osc = audioContext.createOscillator();

//set up oscillator frequency
osc.frequency.value = OSC_FREQUENCY;

//start oscillator to audio context
osc.start();

//connect oscillator on button press
function play() {
    osc.connect(audioContext.destination);
    console.log("started");
}

//disconnect oscillator when button is not pressed
function stop() {
    osc.disconnect(audioContext.destination);
}

