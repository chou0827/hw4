var freqA = 200;
var freqS = 220;
var freqD = 240;
var freqF = 260;
var freqG = 280;
var freqH = 300;


var oscA, oscS, oscD, oscF, oscG, oscH;

var playing = false;
var playingA = false;
var playingS = false;
var playingD = false;
var playingF = false;
var playingG = false;
var playingH = false;


function setup() {
	background (500,500);
  backgroundColor = color(255, 0, 255);
  textAlign(CENTER);
  
  oscA = new p5.Oscillator();
  oscA.setType('triangle');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();
  
  oscS = new p5.Oscillator();
  oscS.setType('triangle');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();
  
  oscD = new p5.Oscillator();
  oscD.setType('triangle');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();
  
  oscF = new p5.Oscillator();
  oscF.setType('triangle');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();
	
	oscG = new p5.Oscillator();
  oscG.setType('triangle');
  oscG.freq(freqG);
  oscG.amp(0);
  oscG.start();
	
	oscH = new p5.Oscillator();
  oscH.setType('triangle');
  oscH.freq(freqH);
  oscH.amp(0);
  oscH.start();
	
}

function draw() {
	background(255);
  fill(255);
  	if (playingA) {
		fill(255, 204, 0);
    ellipse (50, 50, 100, 100 );
	} else if (playingS) {
		noStroke();
		fill(random(255),random(0,100),random(0));
    rect (50, 50, 130, 130);
	} else if (playingD) {
		noStroke();
		fill(random(150),random(255),random(50));
    ellipse (50, 50, 140,140);
	} else if (playingF) {
		noStroke();
		fill(random(255),random(255),random(0));
    rect (50, 50, 160, 160);;
	} else if (playingG) {
		noStroke();
		fill(random(0),random(100),random(150));
    ellipse (50, 50, 180, 180);
	} else if (playingH) {
		noStroke();
		fill(random(0),random(50),random(255));
    rect (50, 50, 200, 200);
	}  else {
    background(255, 0, 0);
  } text('Click Here \n Keys A S D \n F G H ', width / 2, 40);
	}

function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
		playingA = true;
  } else if (key == 'S') {
    osc = oscS;
		playingS = true;
  } else if (key == 'D') {
    osc = oscD;
		playingD = true;
  } else if (key == 'F') {
    osc = oscF;
		playingF = true;
  } else if (key == 'G') {
    osc = oscG;
		playingG = true;
  } else if (key == 'H') {
    osc = oscH;
		playingH = true;
  }
	
  if (osc) {
    osc.amp(0.5, 0.1);
    playing = true;
  }
}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
  } else if (key == 'S') {
    osc = oscS;
  } else if (key == 'D') {
    osc = oscD;
  } else if (key == 'F') {
    osc = oscF;
	}	else if (key == 'G') {
    osc = oscG;
  } else if (key == 'H') {
    osc = oscH;
  }
  
  
  if (osc) {
    osc.amp(0, 0.5);
    playing = false;
		playingA = false;
		playingS = false;
		playingD = false;
		playingF = false;
		playingG = false;
		playingH = false;
		
  }
}
