/**
 * Owen Kaplan
 * 
 * Form and Code Final Project
 * 
 */


var charCtr = 35
let font, phraseBool, sentences, backgroundBool;
let fontSize = 20;


function preload() {
 font = loadFont('assets/Roboto/Roboto-Light.ttf');
 phraseBool = true;
 backgroundBool = true; 
 sentences = ['I am the purpose of creation', 'I am but dust and ashes']
}


function setup() {

    createCanvas(windowWidth, windowHeight);
    textFont(font);
    textSize(fontSize);
    textAlign(CENTER, CENTER);
    frameRate(1);

}

function draw() {


    const sentence = phraseBool ? sentences[0] : sentences[1];
    phraseBool = !phraseBool;

    let [x, y] = [mouseX, mouseY]

    for (var i = 0; i < sentence.length; i += 1) {

        utfKey = sentence.charCodeAt(i);
        let letter = char(utfKey);
        x += jitterDistGen()
        setTimeout(drawLetter(letter, x, y), 1000);

    }

}

function drawLetter(let, xPos, yPos) {
    text(let, xPos, yPos);
}

/**
 * Gives a random number between 10 and 30
 */
function jitterDistGen() {
    return 10 + Math.floor(Math.random() * 21)
}


function keyPressed() {

    backgroundBool = !backgroundBool;
    if (backgroundBool) {
        background('white')
        fill('black')
    }
    else {
        background('black');
        fill('white')
    }

}