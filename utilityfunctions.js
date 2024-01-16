let scene = "Intro";
let sprite;
let sceneIntrobg;
let sceneCavebg;
let sceneChooseAPlacebg;
let sceneMountPixelbg;
let sceneMysticWoodsbg;
let sceneEngimabg;
let sceneMysteryBoxbg;
let character;
let imgMountPixel;
let imgMysticWoods;
let imgEnigma;
let characterdotcon;
let characternixie;
let characterharmony;
let amulet;
let mysterybox;

function puzzleDisplay(){
  image(mysterybox, 50, 50);
  image(mysterybox, 375, 50);
  image(mysterybox, 700, 50);
  image(mysterybox, 50, 530);
  image(mysterybox, 375, 530);
  image(mysterybox, 700, 530);
}



// function mouseClicked() {
//   if (!music.isPlaying()) {
//     music.play(); // Start playing if it's not already playing
//   }
// }

//Sprite Position Calculations
function filterScene(whichScene) {
  switch(whichScene) {
    case "ReadMinds":
      return sprite.x > 650;
    case "MountPixel":
      return sprite.x > 620 && sprite.y > 420 && sprite.x < 750 && sprite.y < 550;
    case "MysticWoods":
      return sprite.x > 60 && sprite.y > 420 && sprite.x < 110 && sprite.y < 550;
    case "Enigma":
      return sprite.x > 320 && sprite.y > 220 && sprite.x < 380 && sprite.y < 350;
    case "MPOptions":
      return sprite.x > 650 && sprite.y > 350;
    case "MPStory":
      return sprite.x > 600 && sprite.y > 380 && sprite.x < 750 && sprite.y <= 420;
    case "MWOptions":
      return sprite.x > 650 && sprite.y > 350;
    case "MWStory":
      return sprite.x > 600 && sprite.y > 380 && sprite.x < 750 && sprite.y <= 420;
    case "ECOptions":
      return sprite.x > 650 && sprite.y > 350;
    case "ECStory":
      return sprite.x > 600 && sprite.y > 380 && sprite.x < 750 && sprite.y <= 420;
    default: true;
  }
}

function hideButtons() {
  buttonPlay.hide();
  buttonProceed.hide();
  buttonFom.hide();
  buttonGoback.hide();
  buttonReset.hide();
}

function showButton(button, nextScene) {
  switch(button){
    case "play":
      buttonPlay.show();
      buttonPlay.position((windowWidth/2), 350);
      buttonPlay.mousePressed(() => scene = nextScene);
      music.stop();
      break;
    case "proceed":
      buttonProceed.show();
      buttonProceed.position((windowWidth/2), 350);
      buttonProceed.mousePressed(() => scene = nextScene);
      
      break;
    case "findoutmore":
      buttonFom.show();
      buttonFom.position((windowWidth/2)-100, 250);
      buttonFom.mousePressed(() => scene = nextScene);
      break;
    case "goback":
      buttonGoback.show();  
      buttonGoback.position((windowWidth/2)+50, 250);
      buttonGoback.mousePressed(() => scene = nextScene);
      break;
    case "reset":
      buttonReset.show();
      buttonReset.position((windowWidth/2), 250);
      buttonReset.mouseClicked(() => scene = nextScene);
      break;
  }
}

function positionSprite(thisScene){
  switch(thisScene) {
    case "Cave":
      if (sprite.x > 800) {
        sprite.x = 0;
      }
      sprite.x = constrain(sprite.x, 30, 760);
      sprite.y = constrain(sprite.y, 500, 500);
    
      sprite.move();
      sprite.display();
      break;
    case "ReadMindsNext":
      sprite.x = 300;
      sprite.y = 480;
      break;
    case "ChooseAPlace":  
      sprite.x = constrain(sprite.x, 30, 700);
      sprite.y = constrain(sprite.y, 250, 500);
      
      sprite.move();
      sprite.display();
      break;
    case "ChooseAPlaceNextMP":
      sprite.x = 30;
      sprite.y = 500;
      break;
    case "ChooseAPlaceNextMW":
      sprite.x = 30;
      sprite.y = 500;
      break;
    case "ChooseAPlaceNextEC":
      sprite.x = 30;
      sprite.y = 500;
      break;
    case "MPOptions":
      sprite.move();
      sprite.display(); 
  
      sprite.x = constrain(sprite.x, 30, 760);
      sprite.y = constrain(sprite.y, 500, 500);
      break;
    case "MPOptionsNext":
      sprite.x = 200;
      sprite.y = 200;
      break;
    case "MPPuzzle":
      sprite.move();
      sprite.display();
  
      sprite.x = constrain(sprite.x, 50, 750);
      sprite.y = constrain(sprite.y, 100, 420);
      break;
    case "MysticWoods":
      sprite.display();
      sprite.move();

      sprite.x = constrain(sprite.x, 30, 760);
      sprite.y = constrain(sprite.y, 500, 500);
      break;
    case "MWOptionsNext":
      sprite.x = 200;
      sprite.y = 200;
      break;
    case "MWPuzzle":
      sprite.move();
      sprite.display();
  
      sprite.x = constrain(sprite.x, 50, 750);
      sprite.y = constrain(sprite.y, 100, 420);
      break;
    case "Enigma":
      sprite.move();
      sprite.display();

      sprite.x = constrain(sprite.x, 30, 760);
      sprite.y = constrain(sprite.y, 500, 500);
      break;
    case "ECOptionsNext":
      sprite.x = 200;
      sprite.y = 200;
      break;
    case "ECPuzzle":
      sprite.move();
      sprite.display();
  
      sprite.x = constrain(sprite.x, 50, 750);
      sprite.y = constrain(sprite.y, 100, 420);
      break;
    case "":
      break;
  }
}

function checkCollision() {
  if (collideRectRect(sprite.x, sprite.y, sprite.size, sprite.size, 50, 50, mysterybox)) {
    // If collision occurs, reset the sprite's position
    sprite.position(200, 200);
  }
  if (collideRectRect(sprite.x, sprite.y, sprite.size, sprite.size, 375, 50, mysterybox)) {
    // If collision occurs, reset the sprite's position
    sprite.position(200, 200);
  }
  if (collideRectRect(sprite.x, sprite.y, sprite.size, sprite.size, 700, 50, mysterybox)) {
    // If collision occurs, reset the sprite's position
    sprite.position(200, 200);
  }
  if (collideRectRect(sprite.x, sprite.y, sprite.size, sprite.size, 50, 530, mysterybox)) {
    // If collision occurs, reset the sprite's position
    sprite.position(200, 200);
  }
  if (collideRectRect(sprite.x, sprite.y, sprite.size, sprite.size, 375, 530, mysterybox)) {
    // If collision occurs, reset the sprite's position
    sprite.position(200, 200);
  }
}
