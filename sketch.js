//Basic P5.js standard functions preload, setup, draw

function preload() {
  fontTitle = loadFont('mystery-quest.regular.ttf');
  music = loadSound('Evening-Improvisation-with-Ethera(chosic.com).mp3');

  sceneIntrobg = loadImage("bgIntro.png");
  sceneCavebg = loadImage("bgCave.png");
  sceneChooseAPlacebg = loadImage("bgChooseAPlace.png");
  sceneMountPixelbg = loadImage("bgMountPixel.png");
  sceneMysticWoodsbg = loadImage("bgMysticWoods.png");
  sceneEnigmabg = loadImage("bgEnigma.png");
  sceneMysteryBoxbg = loadImage("bgMysteryBox.png");
  character = loadImage("character.png");

  imgMountPixel = loadImage("mountpixel.png");
  imgEnigma = loadImage("enigmacouncil.png");
  imgMysticWoods = loadImage("mysticwoods.png");
  characterdotcon = loadImage("dotcon.png");
  characternixie = loadImage("nixie.png");
  characterharmony = loadImage("harmony.png");

  amulet = loadImage("amulet.png");
  mysterybox = loadImage("mysterybox.png");
}

function setup() {
  createCanvas(800, 600);
  sprite = new Sprite(200,200,100,character);
  
  //buttons
  let col = color('#C39EBA');
  buttonPlay = createButton('Play');
  buttonPlay.addClass('buttonStyle');
  // buttonPlay.style('font-size', '18px', 'color', '#7D6EA9');
  // buttonPlay.style('font-family', 'Georgia'); 
  // buttonPlay.style('background-color', col);
  // buttonPlay.size(60, 35); 
  
  buttonProceed = createButton('Proceed');
  buttonProceed.addClass('buttonStyle');
  // buttonProceed.style('font-size', '18px', 'color', '#7D6EA9');
  // buttonProceed.style('font-family', 'Georgia'); 
  // buttonProceed.style('background-color', col);
  // buttonProceed.size(80, 35); 
  
  buttonFom = createButton('Find Out More');
  // buttonFom.style('font-family', 'Georgia'); 
  // buttonFom.style('background-color', col);
  buttonFom.addClass('buttonStyle');

  buttonGoback = createButton('Go back');
  // buttonGoback.style('font-family', 'Georgia'); 
  // buttonGoback.style('background-color', col);
  buttonGoback.addClass('buttonStyle');

  buttonReset = createButton('Reset');
  // buttonReset.style('font-size', '18px', 'color', '#7D6EA9');
  // buttonReset.style('font-family', 'Georgia'); 
  // buttonReset.style('background-color', col);
  // buttonReset.size(80, 35); 
  buttonReset.addClass('buttonStyle');
}

function draw() {
  window["scene".concat(scene)]();
}



