function sceneIntro() {
    background(sceneIntrobg);
    fill('#4C3A6E');
  
    textFont(fontTitle, 40);
    textAlign(CENTER);
    text("Echoes of Thoughts", 400, 200);
  
    hideButtons();
    showButton("play", "Cave");
}

function sceneCave() {
    if (!music.isPlaying()) {
        music.play(); // Start playing if it's not already playing
    }
    background(sceneCavebg);
    image(amulet, 720, 550);
    hideButtons();  
    positionSprite("Cave");
  
    if (filterScene("ReadMinds")) {
      scene = "ReadMinds";
    }
  }
  
  function sceneReadMinds() {
    background(sceneIntrobg);
    fill('#4C3A6E');
    
    textFont(fontTitle, 30);
    textAlign(CENTER);
    text("You can read minds now!", 400, 200);
    
    hideButtons();
    showButton("proceed", "ChooseAPlace");
    
    positionSprite("ReadMindsNext");
  }
  
  function sceneChooseAPlace() {
    background(sceneChooseAPlacebg);
    hideButtons();
    image(imgMountPixel, 650, 450);
    image(imgMysticWoods, 30, 450);
    image(imgEnigma, 350, 250);
  
    positionSprite("ChooseAPlace");
    
    if (filterScene("MountPixel")) {
      scene = "MountPixel";
      positionSprite("ChooseAPlaceNextMP");
    }
    else if (filterScene("MysticWoods")) {
      scene = "MysticWoods";
      positionSprite("ChooseAPlaceNextMW");
    }
    else if (filterScene("Enigma")) {
      scene = "Enigma";
      positionSprite("ChooseAPlaceNextEC");
    }
  }
  
  //Mount Pixel 
  function sceneMountPixel() {
    background(sceneMountPixelbg);
  
    image(characterdotcon, 700, 500);
  
    positionSprite("MPOptions");
    
    if (filterScene("MPOptions")) {
      scene = "MPOptions";
    }
  }
  
  // Mount Pixel Options
  function sceneMPOptions() {
    background(sceneMountPixelbg);
    fill(0)
   
    textAlign(CENTER);
    textSize(20);
    textFont(fontTitle);
   
    text("I am on the brink of a ground-breaking invention", 400, 100);
    hideButtons();
    showButton("findoutmore", "MPPuzzle");
   
    positionSprite("MPOptionsNext");
   
    showButton("goback", "ChooseAPlace");
  }
  
  // Mount Pixel Puzzle
  function sceneMPPuzzle() {
    hideButtons();
    background(sceneMysteryBoxbg);
  
    image(mysterybox, 700, 530); 
  
    puzzleDisplay();
  
    positionSprite("MPPuzzle");
  
    if (filterScene("MPStory")) {
      scene = "MPStory";
    }
    
    // Check collision with maze walls
    checkCollision();
  }
  
  // Mount Pixel Story Unravel
  function sceneMPStory() {
    background(sceneMountPixelbg);
    push();
    fill(0);
    
    textAlign(CENTER);
    textSize(20);
    
    text("His invention merged magic and technology,", 400, 100);
    text("which made him power hungry....", 400, 130);
    pop();
    fill(255);
    
    textAlign(CENTER);
    textSize(50);
    
    text("The End", 400, 520);
    showButton("reset", "Intro");
  }
  
  // Mystic Woods
  function sceneMysticWoods() {
    background(sceneMysticWoodsbg);
    image(characternixie, 700, 500);
  
    positionSprite("MysticWoods");
  
    if (filterScene("MWOptions")) {
      scene = "MWOptions";
    }
  }
  
  // Mystic Woods Options
  function sceneMWOptions() {
    background(sceneMysticWoodsbg);
    fill('#FFD0E0');
    
    textAlign(CENTER);
    textSize(20);
    textFont(fontTitle);
    
    text("I must protect the Mystic Woods from tech", 400, 100);
    
    hideButtons();
    showButton("findoutmore", "MWPuzzle");
    
    positionSprite("MWOptionsNext");
  
    showButton("goback", "ChooseAPlace");
  }
  
  // Mystic Woods Puzzle
  function sceneMWPuzzle() {
    hideButtons();
    background(sceneMysteryBoxbg);
  
     //The wall to take you to the next level
     image(mysterybox, 700, 530); 
  
  
    positionSprite("MWPuzzle");
  
    // Transition to the next mode when the sprite reaches a certain position
    if (filterScene("MWStory") ) {
      scene = "MWStory";
    }
    
    // Check collision with maze walls
    checkCollision(); 
  }
  
  //Woods Story Unravel
  function sceneMWStory() {
    push();
    fill('#FFD0E0');
    background(sceneMysticWoodsbg);
    
    textAlign(CENTER);
    textSize(20);
    
    text("She was succesful in stopping magic", 400, 100);
    text("from merging with tech,", 400, 130);
    text("but the world will never experience it....", 400, 160);
    
    pop();
    fill(255);
    
    textAlign(CENTER);
    textSize(50);
    
    text("The End", 400, 520);
    showButton("reset", "Intro");
  }
  
  // Enigma Council
  function sceneEnigma() {
    background(sceneEnigmabg);
    image(characterharmony, 700, 500);
  
    positionSprite("Enigma");
  
    if (filterScene("ECOptions")) {
      scene = "ECOptions";
    }
  }
  
  //Enigma Council Options
  function sceneECOptions() {
    background(sceneEnigmabg);
    fill(0);
    textAlign(CENTER);
    textSize(20);
    text("Tech and magic could be powerful together, but it needs to be ethical", 400, 100);
    hideButtons();
    showButton("findoutmore", "ECPuzzle");
    positionSprite("ECOptionsNext");
    //sprite.position(200, 200);
    showButton("goback", "ChooseAPlace");
  }
  
  //Enigma Council Puzzle
  function sceneECPuzzle() {
    hideButtons();
    background(sceneMysteryBoxbg);
  
     //The wall to take you to the next level
    image(mysterybox, 700, 530); 
  
    positionSprite("ECPuzzle");
    
    // Transition to the next mode when the sprite reaches a certain position
    if (filterScene("ECStory") ) {
      scene = "ECStory";
    }
  
    // Check collision with maze walls
    checkCollision();
  }
  
  //Enigma Council Story Unravel
  function sceneECStory() {
    push();
    background(sceneEnigmabg);
    fill(0);
    
    textSize(20);
    textAlign(CENTER);
    
    text("She managed to ethically merge them,", 400, 100);
    text("now the world the can experience their power....", 400, 130);
    pop();
    fill(255);
    
    textAlign(CENTER);
    textSize(50);
    
    text("The End", 400, 520);
    showButton("reset", "Intro");
  }

  function sceneTemplate() {
    //Background

    //Text if any

    //image if any

    //buttons if any

    //sprite position

    //next
  }