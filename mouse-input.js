
var song;
var song1;
var song2;
var song3;
var song4;

function preload() {

  soundFormats('ogg', 'mp3');

  song = loadSound('35122__zin__hip-hop-beat-1-95.wav');
  song1 = loadSound('2085__opm__kk-set1.wav');
  song2 = loadSound('26903__vexst__snare-4.wav');
  song3 = loadSound('38927__sandyrb__plt-snare-01.wav');
  song4 = loadSound('86099__donthemagicwon__yeah2.mp3');
}

function setup() {
  createCanvas(500, 500);

  
  song.play();
  background(0,255,0);
  
}

function mousePressed() {
  if ( song.isPlaying() ) { 
    song.pause();
    background(255,0,0);
  } else {
    song.play(); 
    background(0,255,0);
  }
}

function keyPressed() {
  if (key == 'Z') { 
    song1.play();
  } else if (key == 'X') {
    song2.play();
  } else if (key == 'C') {
    song3.play();
  } else if (key == 'V') {
    song4.play();
  } else if (key == 'B') {
    song1.play();
  }
}
