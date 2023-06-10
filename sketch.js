let count = 0;
let step = 110;
let sizeb = step;

let noteNum = [];
let noteTimes = [];
let durationb = 6;
let buttonY = 0;

//Used to preload our audio in preload
let audio = [];

//Our sound button definitions
let sounds = [
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
];
//This runs before setup
function preload() {
	//Preload our wav files from assets folder
	for (let i = 0; i < sounds.length; i++) {
		audio[i] = loadSound("assets/" + sounds[i]["audio"] + ".wav");
	}
}

//This runs during app setup (initialisation)
function setup() {
	createCanvas(1024, 768);
	background(255);

	for (let i = 0; i < sounds.length; i++) {
		createButtonb(i, sounds[i]["color"], sounds[i]["note"]);
	}
}

//This is the main program loop
function draw() {}

function createButtonb(index, color, note) {
	let xPos = index * sizeb;
	let yPos = buttonY;

	let button = createButton(note);
	button.position(xPos, yPos);
	button.size(sizeb, sizeb);
	button.style("background-color", color);
	button.mousePressed(() => {
		audio[index].play();
		noteNum.push(index + 1);
		noteTimes.push(count);
		count += step;
	});
}

function keyPressed() {
	if (keyCode === 32) {
		// Spacebar
		noteNum.push(0);
		noteTimes.push(0);
		count += step;
	} else if (keyCode === BACKSPACE) {
		noteNum.pop();
		noteTimes.pop();
		count -= step;
	}
}
