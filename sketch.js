let count = 0;
let stepSize = 110;
let buttonSize = stepSize;

let noteNum = [];
let noteTimes = [];
let durationMultiplier = 6;
let buttonY = 200;

//Used to preload our audio in preload
let audio = [];

//Our sound button definitions
let soundButtons = [
	{
		color: "red",
		note: "Do",
		audio: "C",
	},
	{
		color: "orange",
		note: "Re",
		audio: "D",
	},
	{
		color: "yellow",
		note: "Mi",
		audio: "E",
	},
	{
		color: "green",
		note: "Fa",
		audio: "F",
	},
	{
		color: "blue",
		note: "So",
		audio: "G",
	},
	{
		color: "purple",
		note: "La",
		audio: "A",
	},
	{
		color: "pink",
		note: "Ti",
		audio: "B",
	},
	{
		color: "red",
		note: "Do1",
		audio: "C1",
	},
	{
		color: "orange",
		note: "Re1",
		audio: "D1",
	},
	{
		color: "yellow",
		note: "Mi1",
		audio: "E1",
	},
];

// Array of notes and durations
let notes = [
	{ note: "C", duration: 1 },
	{ note: "D", duration: 0.5},
	{ note: "E", duration: 2 },
	{ note: "C", duration: 1 },
	{ note: "D", duration: 2 },
	{ note: "E", duration: 3 },
	// Add more notes and durations as needed
  ];

//This runs before setup
function preload() {
	//Preload our wav files from assets folder
	for (let i = 0; i < soundButtons.length; i++) {
		audio[i] = loadSound("assets/" + soundButtons[i]["audio"] + ".wav");
	}
}

//This runs during app setup (initialisation)
function setup() {
	createCanvas(1024, 768);
	background(255);

	for (let i = 0; i < soundButtons.length; i++) {
		createButtonb(i, soundButtons[i]["color"], soundButtons[i]["note"]);
	}

	createButtonc("Display", displayNotes);
  	createButtonc("Play", playNotes);
}

//This is the main program loop
function draw() {
	// Display the notes on the screen
	for (let i = 0; i < noteNum.length; i++) {
		let xPos = i * buttonSize;
		let yPos = buttonY + buttonSize;
	
		fill(0);
		textAlign(CENTER, CENTER);
		text(noteNum[i], xPos + buttonSize / 2, yPos + buttonSize / 2);
	}
}

function createButtonb(index, color, note) {
	let xPos = index * buttonSize;
	let yPos = buttonY;

	let button = createButton(note);
	button.position(xPos, yPos);
	button.size(buttonSize, buttonSize);
	button.style("background-color", color);
	button.mousePressed(() => {
		audio[index].play();
		noteNum.push(index + 1);
		noteTimes.push(count);
		count += stepSize;
	});
}

function createButtonc(label, onClick) {
	let button = createButton(label);
	button.position(100, height - 450);
	button.mousePressed(onClick);
}

function displayNotes() {
	console.log("Notes:", noteNum);
}
  
function playNotes() {
	for (let i = 0; i < noteNum.length; i++) {
	  let noteIndex = noteNum[i] - 1;
	  let durationb = notes[noteIndex].duration;
	  setTimeout(() => {
		audio[noteIndex].play();
	  }, durationb * 1000);
	}
}

function keyPressed() {
	if (keyCode === 32) {
		// Spacebar
		noteNum.push(0);
		noteTimes.push(0);
		count += stepSize;
	} else if (keyCode === BACKSPACE) {
		noteNum.pop();
		noteTimes.pop();
		count -= stepSize;
	}
}
