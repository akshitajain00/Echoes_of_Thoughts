//Ningxuan Zhang; Image as sprite
// Soumya Karwa; Buttons


let mode = 0;
let sprite;
let scene0bg;
let scene1bg;
let scene3bg;
let scene4bg;
let scene6bg;
let scene9bg;
let character;
let img1;
let img2;
let img3;
let othercharacter1;
let othercharacter2;
let othercharacter3;
let thing1;
let thing2;

function preload() {
  fontTitle = loadFont('mystery-quest.regular.ttf');
  scene0bg = loadImage("ccgame1.png");
  scene1bg = loadImage("ccgame2.png");
  scene3bg = loadImage("ccgame3.png");
  scene4bg = loadImage("ccgame4.png");
  scene6bg = loadImage("ccgame7.png");
  scene9bg = loadImage("ccgame5.png");
  scene14bg = loadImage("ccgame6.png");
  character = loadImage("character.png");
  img1 = loadImage("mountpixel.png");
  img2 = loadImage("enigmacouncil.png");
  img3 = loadImage("mysticwoods.png");
  othercharacter1 = loadImage("dotcon.png");
  othercharacter2 = loadImage("nixie.png");
  othercharacter3 = loadImage("harmony.png");
  thing1 = loadImage("amulet.png");
  thing2 = loadImage("mysterybox.png");
}

 class Wall {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.img = thing2;
  }
   
  displayWalls(){ 
  fill(0);
  image(this.img, this.x, this.y);
  image(this.img, 50, 50);
  image(this.img, 375, 50);
  image(this.img, 700, 50);
  image(this.img, 50, 530); 
  image(this.img, 375, 530);   
  }
 }


function setup() {
  createCanvas(800, 600);
  sprite = new Sprite(200,200,100,character);
  //buttons
  let col = color('#C39EBA');
  button0 = createButton('Play');
  button0.style('font-size', '18px', 'color', '#7D6EA9');
  button0.style('font-family', 'Georgia'); 
  button0.style('background-color', col);
  button0.size(60, 35); 
  
  button1 = createButton('Proceed');
  button1.style('font-size', '18px', 'color', '#7D6EA9');
  button1.style('font-family', 'Georgia'); 
  button1.style('background-color', col);
  button1.size(80, 35); 
  
  button2 = createButton('Find Out More');
  button2.style('font-family', 'Georgia'); 
  button2.style('background-color', col);

  button3 = createButton('Go back');
  button3.style('font-family', 'Georgia'); 
  button3.style('background-color', col);

  button4 = createButton('Find Out More');
  button4.style('font-family', 'Georgia'); 
  button4.style('background-color', col);

  button5 = createButton('Go Back');
  button5.style('font-family', 'Georgia'); 
  button5.style('background-color', col);

  button6 = createButton('Find Out More');
  button6.style('font-family', 'Georgia'); 
  button6.style('background-color', col);

  button7 = createButton('Go Back');
  button7.style('font-family', 'Georgia'); 
  button7.style('background-color', col);
}

function draw() {
  switch (mode) {
    case 0:
      scene0();// The Introduction
      break;
    case 1:
      scene1();//Finding the amulet in the magical cave
      break;
    case 2:
      scene2();//What does the amulet do?
      break;
    case 3:
      scene3();//Choose the place
      break;
    case 4:
      scene4(); //Mount Pixel
      break;
    case 5:
      scene5();//Mount Pixel Options
      break;
    case 6:
      scene6();//Mount Pixel Puzzle
      break;
    case 7:
      scene7();//Mount Pixel Story Unravel
      break;
    case 8:
      scene8();//Mount Pixel Choices Impact
      break;
    case 9:
      scene9();//Mystic Woods
      break;
    case 10:
      scene10();//Mystic Woods Options
      break;
    case 11:
      scene11();//Mystic Woods Puzzle
      break;
    case 12:
      scene12();//Mystic Woods Story Unravel
      break;
    case 13:
      scene13();//Mystic Woods Choices Impact
      break;
    case 14:
      scene14();//Enigma Council
      break;
    case 15:
      scene15();//Enigma Council Options
      break;
    case 16:
      scene16();//Enigma Council Puzzle
      break;
    case 17:
      scene17();//Enigma Council Story Unravel
      break;
    case 18:
      scene18();//Enigma Council Choices Impact
      break;
  }
  //sprite = image(sprite, 200, 500, 50, 100);
  //image(sprite,200,500,50,100);
  
}

function scene0() {
  background(scene0bg);
  fill('#4C3A6E');
  textFont(fontTitle, 40);
  textAlign(CENTER);
  text("Welcome to Echoes of Thoughts", 400, 200);
  button0.show();
  button0.position(windowWidth/2, windowHeight/2);
  button0.mousePressed(() => mode = 1);
  button1.hide();
  button2.hide();
  button3.hide();
  button4.hide();
  button5.hide();
  button6.hide();
  button7.hide();
}

function scene1() {
  background(scene1bg);
  //text("Walk towards the box", 300, 250);
  //text("PICK ME", 330, 350);
  image(thing1, 720, 550);
  button0.hide();
  
  if (mode == 1 && sprite.x > 800) {
    sprite.x = 0;
  }
  sprite.x = constrain(sprite.x, 30, 760);
  sprite.y = constrain(sprite.y, 500, 500);

  sprite.move();
  sprite.display();

  // Transition to the next mode when the sprite reaches a certain position
  if (sprite.x > 650) {
    mode = 2;
  }
}

function scene2() {
  background(scene0bg);
  fill('#4C3A6E');
  textFont('Georgia', 30);
  textAlign(CENTER);
  text("You can read minds now!", 400, 200);
  button1.show();
  button1.position(windowWidth/2, windowHeight/2);
  button1.mousePressed(() => mode = 3);
  sprite.x = 300;
  sprite.y = 480;
}

function scene3() {
  background(scene3bg);
  button1.hide();
  button2.hide();
  button3.hide();
  button4.hide();
  button5.hide();
  button6.hide();
  button7.hide();
  image(img1, 650, 450);
  image(img3, 30, 450);
  image(img2, 350, 250);

  sprite.move();
  sprite.display();
  sprite.x = constrain(sprite.x, 30, 700);
  sprite.y = constrain(sprite.y, 250, 500);

  if (sprite.x > 620 && sprite.y > 420 && sprite.x < 750 && sprite.y < 550) {
    mode = 4;
    sprite.x = 30;
    sprite.y = 500;
  }
     if (sprite.x > 60 && sprite.y > 420 && sprite.x < 110 && sprite.y < 550) {
    mode = 9;
    sprite.x = 30;
    sprite.y = 500;
  }
  if (sprite.x > 320 && sprite.y > 220 && sprite.x < 380 && sprite.y < 350) {
    mode = 14;
    sprite.x = 30;
    sprite.y = 500;
  }
}
//Mount Pixel 
function scene4() {
  background(scene4bg);

  image(othercharacter1, 700, 500);

  sprite.move();
  sprite.display(); 
  
  sprite.x = constrain(sprite.x, 30, 760);
  sprite.y = constrain(sprite.y, 500, 500);
  
  if (sprite.x > 650 && sprite.y > 350) {
    mode = 5;
  }
}
// Mount Pixel Options
function scene5() {
  background(scene4bg);
  fill(0)
  textAlign(CENTER);
  textSize(20);
  textFont(fontTitle);
  text("I am on the brink of a ground-breaking invention", 400, 100);
  button2.show();
  button2.position(650, 200);
  button2.mousePressed(() => mode = 6);
  sprite.x = 200;
  sprite.y = 200;
  button3.show();
  button3.position(800, 200);
  button3.mousePressed(() => mode = 3);

}
// Mount Pixel Puzzle
function scene6() {
  button2.hide();
  button3.hide();
  background(scene6bg);

   //The wall to take you to the next level
   image(thing2, 700, 530); 

  let walls = [
  new Wall(50, 50, 50, 50),
  new Wall(375, 50, 50, 50),
  new Wall(700, 50, 50, 50),
  new Wall(50, 530, 50, 50),
  new Wall(375, 530, 50, 50),
];
  
  // Move the sprite
  sprite.move();
  // Display the sprite
  sprite.display();
  
  //Contrain the sprite to a particular area
  sprite.x = constrain(sprite.x, 50, 750);
  sprite.y = constrain(sprite.y, 100, 420);
  
  // Transition to the next mode when the sprite reaches a certain position
  if (sprite.x > 600 && sprite.y > 400 && sprite.x < 750 && sprite.y < 420 ) {
    mode = 7;
  }
  
  // Check collision with maze walls
  for (let i = 0; i < walls.length; i++) {
    walls[i].displayWalls();
    if (collideRectRect(sprite.x, sprite.y, sprite.size, sprite.size, walls[i].x, walls[i].y, walls[i].img)) {
      // If collision occurs, reset the sprite's position
      sprite.x = 200;
      sprite.y = 200;
    }
  }
    // Walls array
let Walls = [
  { x: 50, y: 50, width: 50, height: 50 },
  { x: 375, y: 50, width: 50, height: 50 },
  { x: 700, y: 50, width: 50, height: 50 },
  { x: 50, y: 530, width: 50, height: 50 },
  { x: 375, y: 530, width: 50, height: 50 },
];
}



// Mount Pixel Story Unravel
function scene7() {
  background(scene4bg);
  fill(0);
  textAlign(CENTER);
  textSize(20);
  text("His invention merged magic and technology,", 400, 100);
  text("which made him power hungry....", 400, 130);
}
// Mount Pixel Choices Impact
//function scene8() {
 // background(0);
  //stroke(255);
  //text("BACK TO REALITY", 200, 200);
//}

// Mystic Woods
function scene9() {
  background(scene9bg);
  image(othercharacter2, 700, 500);

  sprite.display();
  sprite.move();

  sprite.x = constrain(sprite.x, 30, 760);
  sprite.y = constrain(sprite.y, 500, 500);
  
  if (sprite.x > 650 && sprite.y > 350) {
    mode = 10;
  }
}
// Mystic Woods Options
function scene10() {
  background(scene9bg);
  fill('#FFD0E0');
  textAlign(CENTER);
  textSize(20);
  text("I must protect the Mystic Woods from tech", 400, 100);
  button4.show();
  button4.position(650, 200);
  button4.mousePressed(() => mode = 11);
  button5.show();
  button5.position(800, 200);
  button5.mousePressed(() => mode = 3);
}
// Mystic Woods Puzzle
function scene11() {
  button2.hide();
  button3.hide();
  button4.hide();
  button5.hide();
  background(scene6bg);

   //The wall to take you to the next level
   image(thing2, 700, 530); 

  let walls = [
  new Wall(50, 50, 50, 50),
  new Wall(375, 50, 50, 50),
  new Wall(700, 50, 50, 50),
  new Wall(50, 530, 50, 50),
  new Wall(375, 530, 50, 50),
];
  
  // Move the sprite
  sprite.move();
  // Display the sprite
  sprite.display();
  
  //Contrain the sprite to a particular area
  sprite.x = constrain(sprite.x, 50, 750);
  sprite.y = constrain(sprite.y, 100, 420);
  
  // Transition to the next mode when the sprite reaches a certain position
  if (sprite.x > 600 && sprite.y > 400 && sprite.x < 750 && sprite.y < 420 ) {
    mode = 12;
  }
  
  // Check collision with maze walls
  for (let i = 0; i < walls.length; i++) {
    walls[i].displayWalls();
    if (collideRectRect(sprite.x, sprite.y, sprite.size, sprite.size, walls[i].x, walls[i].y, walls[i].img)) {
      // If collision occurs, reset the sprite's position
      sprite.x = 200;
      sprite.y = 200;
    }
  }
    // Walls array
let Walls = [
  { x: 50, y: 50, width: 50, height: 50 },
  { x: 375, y: 50, width: 50, height: 50 },
  { x: 700, y: 50, width: 50, height: 50 },
  { x: 50, y: 530, width: 50, height: 50 },
  { x: 375, y: 530, width: 50, height: 50 },
];
}

//Woods Story Unravel
function scene12() {
  fill('#FFD0E0');
  background(scene9bg);
  textAlign(CENTER);
  text("She was succesful in stopping magic", 400, 100);
  text("from merging with tech,", 400, 130);
  text("but the world will never experience it....", 400, 160);
}
// Mystic Woods Choices Impact
//function scene13() {
  //background(0);
  //stroke(255);
  //text("BACK TO REALITY", 200, 200);
//}
// Enigma Council
function scene14() {
  background(scene14bg);
  image(othercharacter3, 700, 500);

  sprite.move();
  sprite.display();

  sprite.x = constrain(sprite.x, 30, 760);
  sprite.y = constrain(sprite.y, 500, 500);

  if (sprite.x > 650 && sprite.y > 350) {
    mode = 15;
  }
}
//Enigma Council Choices
function scene15() {
  background(scene14bg);
  fill(0);
  textAlign(CENTER);
  textSize(20);
  text("Tech and magic could be powerful together, but it needs to be ethical", 400, 100);
  button6.show();
  button6.position(650, 200);
  button6.mousePressed(() => mode = 16);
  button7.show();
  button7.position(800, 200);
  button7.mousePressed(() => mode = 3);
}
//Enigma Council Puzzle
function scene16() {
  button2.hide();
  button3.hide();
  button6.hide();
  button7.hide();
  background(scene6bg);

   //The wall to take you to the next level
   image(thing2, 700, 530); 

  let walls = [
  new Wall(50, 50, 50, 50),
  new Wall(375, 50, 50, 50),
  new Wall(700, 50, 50, 50),
  new Wall(50, 530, 50, 50),
  new Wall(375, 530, 50, 50),
];
  
  // Move the sprite
  sprite.move();
  // Display the sprite
  sprite.display();
  
  //Contrain the sprite to a particular area
  sprite.x = constrain(sprite.x, 50, 750);
  sprite.y = constrain(sprite.y, 100, 420);
  
  // Transition to the next mode when the sprite reaches a certain position
  if (sprite.x > 600 && sprite.y > 400 && sprite.x < 750 && sprite.y < 420 ) {
    mode = 17;
  }

  // Check collision with maze walls
  for (let i = 0; i < walls.length; i++) {
    walls[i].displayWalls();
    if (collideRectRect(sprite.x, sprite.y, sprite.size, sprite.size, walls[i].x, walls[i].y, walls[i].img)) {
      // If collision occurs, reset the sprite's position
      sprite.x = 200;
      sprite.y = 200;
    }
  }
    // Walls array
let Walls = [
  { x: 50, y: 50, width: 50, height: 50 },
  { x: 375, y: 50, width: 50, height: 50 },
  { x: 700, y: 50, width: 50, height: 50 },
  { x: 50, y: 530, width: 50, height: 50 },
  { x: 375, y: 530, width: 50, height: 50 },
];
}
//Enigma Council Story Unravel
function scene17() {
  background(scene14bg);
  fill(0);
  textAlign(CENTER);
  text("She managed to ethically merge them,", 400, 100);
  text("now the world the can experience their power....", 400, 130);
}
//Enigma Council Choices Impact
//function scene18() {
 // background(0);
 // stroke(255);
 // text("BACK TO REALITY", 200, 200);
//}

