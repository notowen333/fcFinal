/**
 * Owen Kaplan
 * 
 * Form and Code Final Project
 * 
 */


var charCtr = 35
let font, phraseBool, sentences, backgroundBool;


function preload() {
 font = loadFont('assets/Roboto/Roboto-Light.ttf');
 phraseBool = true;
 backgroundBool = false; 
 sentences = ['I am the purpose of creation', 'I am but dust and ashes']
}


function setup() {

    createCanvas(windowWidth, windowHeight);
    textFont(font);
    textAlign(CENTER, CENTER);
    frameRate(1);
    fill('white');
    stroke('white');
    background('black');
    textSize(12);
    text('OK', windowWidth - 20, windowHeight - 20);
}

function draw() {

    const sentence = phraseBool ? sentences[0] : sentences[1];
    phraseBool = !phraseBool;
    const timeoutMs = 1000
    let [x, y] = [mouseX, mouseY]
    let origX = x

    //set spacing between chars and fontSize
    jitterDist = jitterDistGen()
    fontSize = jitterDistGen()
    textSize(fontSize);

    for (var i = 0; i < sentence.length; i += 1) {

        utfKey = sentence.charCodeAt(i);
        let letter = char(utfKey);
        x += jitterDist
        setTimeout(drawLetter(letter, x, y), timeoutMs);

    }

    // queue clearing rectangle
    queueClearingRect(x, origX, y, fontSize)

}


function queueClearingRect(x,origX, y, fontSize) {

    const width = x - origX
    setTimeout(() => rect(origX - 6, y - 8, width + 12, fontSize + 15 ), rectTimeGen())

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

function rectTimeGen() {
    return 4000 + Math.floor(Math.random() * 5000)
}


function resetAndFlip() {

    backgroundBool = !backgroundBool;
    if (backgroundBool) {
        background('white')
        fill('black')
        stroke('black')
        textSize(12);
        text('OK', windowWidth - 20, windowHeight - 20);
    }
    else {
        background('black');
        fill('white')
        stroke('white')
        textSize(12);
        text('OK', windowWidth - 20, windowHeight - 20);
    }

    // clear queued rects
    const highestId = window.setTimeout(() => {
        for (let i = highestId; i >= 0; i--) {
          window.clearInterval(i);
        }
      }, 0);

}

// stop drawing when a key is pressed
function keyPressed() {
    noLoop();
}

// flip color scheme and start drawing when mouse is clicked
function mouseClicked() {
    resetAndFlip();
    loop();
}