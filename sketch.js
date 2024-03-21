  
  //Creating the variables

  var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14;
  var information_page,information;
  var deaths_page,death_motivation;
  var request_page,request;
  var winner_page,winner;
  var loser_page,loser;
  var crystal_skin,crystal;
  var background_image;
  var player_skin,player;
  var enemy_skin1,enemy1,enemy2;
  var enemy_skin2,enemy3,enemy4;
  var enemy_skin3,enemy5,enemy6;
  var enemy_skin4,enemy7,enemy8;
  var enemy_skin5,enemy9,enemy10;
  var enemy_skin6,enemy11,enemy12;

  var deaths = 0;
  var gamestate = "request";

  function preload() {

    // Loading the images

    background_image = loadImage("./assets/Background.png");
    information_page = loadImage("./assets/Information_Page.png");
    request_page = loadImage("./assets/Request_Page.png");
    winner_page = loadImage("./assets/Won_Page.png");
    loser_page = loadImage("./assets/Lost_Page.png");
    deaths_page = loadImage("./assets/Deaths_Page.png");
    crystal_skin = loadImage("./assets/Crystal.png");
    player_skin = loadImage("./assets/Submarine.png");
    enemy_skin1 = loadImage("./assets/Enemy_White.png");
    enemy_skin2 = loadImage("./assets/Enemy_Black.png");
    enemy_skin3 = loadImage("./assets/Enemy_Blue.png");
    enemy_skin4 = loadImage("./assets/Enemy_Yellow.png");
    enemy_skin5 = loadImage("./assets/Enemy_Pink.png");
    enemy_skin6 = loadImage("./assets/Enemy_Rainbow.png");

  }

  function setup(){
  createCanvas(420,400);

  //Creating the sprites

  wall1 = createSprite(10,200,3,350);
  wall1.shapeColor="red";

  wall2 = createSprite(60,225,3,300);
  wall2.shapeColor="red";

  wall3 = createSprite(160,25,300,3);
  wall3.shapeColor="red";

  wall4 = createSprite(160,75,200,3);
  wall4.shapeColor="red";

  wall5 = createSprite(260,108,3,66.5);
  wall5.shapeColor="red";

  wall6 = createSprite(310,108,3,166.5);
  wall6.shapeColor="red";

  wall7 = createSprite(235,190,150,3);
  wall7.shapeColor="red";

  wall8 = createSprite(185,140,150,3);
  wall8.shapeColor="red";

  wall9 = createSprite(110,257,3,235);
  wall9.shapeColor="red";

  wall10 = createSprite(160,257,3,135);
  wall10.shapeColor="red";

  wall11 = createSprite(258.5,375,300,3);
  wall11.shapeColor="red";

  wall12 = createSprite(258.5,325,200,3);
  wall12.shapeColor="red";

  wall13 = createSprite(408,200,3,350);
  wall13.shapeColor="red";

  wall14 = createSprite(358,175,3,300);
  wall14.shapeColor="red";

  player = createSprite(34.5,367,5,5);
  player.addImage(player_skin);
  player.scale=0.15;

  crystal = createSprite(384,31,5,5);
  crystal.addImage(crystal_skin);
  crystal.scale=0.25
  
  enemy1 = createSprite(34.5,220,1,1);
  enemy1.addImage(enemy_skin1);
  enemy1.velocityX=1;
  enemy1.scale=0.2;

  enemy2 = createSprite(34.5,75,1,1);
  enemy2.addImage(enemy_skin1);
  enemy2.velocityX=1;
  enemy2.scale=0.2;

  enemy3 = createSprite(155,50,1,1);
  enemy3.addImage(enemy_skin2);
  enemy3.velocityY=1;
  enemy3.scale=0.2;

  enemy4 = createSprite(260,50,1,1);
  enemy4.addImage(enemy_skin2);
  enemy4.velocityY=1;
  enemy4.scale=0.2;

  enemy5 = createSprite(285,105,1,1);
  enemy5.addImage(enemy_skin3);
  enemy5.velocityX=1;
  enemy5.scale=0.2;

  enemy6 = createSprite(240,160,1,1);
  enemy6.addImage(enemy_skin3);
  enemy6.velocityY=1;
  enemy6.scale=0.2;
  
  enemy7 = createSprite(134.5,190,1,1);
  enemy7.addImage(enemy_skin4);
  enemy7.velocityX=1;
  enemy7.scale=0.2;

  enemy8 = createSprite(134.5,255,1,1);
  enemy8.addImage(enemy_skin4);
  enemy8.velocityX=1;
  enemy8.scale=0.2;

  enemy9 = createSprite(160,345,1,1);
  enemy9.addImage(enemy_skin5);
  enemy9.velocityY=1;
  enemy9.scale=0.2;

  enemy10 = createSprite(260,345,1,1);
  enemy10.addImage(enemy_skin5);
  enemy10.velocityY=1;
  enemy10.scale=0.2;


  enemy11 = createSprite(380,325,1,1);
  enemy11.addImage(enemy_skin6);
  enemy11.velocityX=1;
  enemy11.scale=0.2;

  enemy12 = createSprite(380,175,1,1);
  enemy12.addImage(enemy_skin6);
  enemy12.velocityX=1;
  enemy12.scale=0.2;

  information = createSprite(259,257.5,1,1);
  information.addImage(information_page);
  information.scale=0.25;

  death_motivation = createSprite(139,107.5,1,1);
  death_motivation.addImage(deaths_page);
  death_motivation.scale=0.25;

  request = createSprite(139,107.5,1,1);
  request.addImage(request_page);
  request.scale=0.25;
  request.visible=false;

  winner = createSprite(139,107.5,1,1);
  winner.addImage(winner_page);
  winner.scale=0.25;
  winner.visible=false;

  loser = createSprite(139,107.5,1,1);
  loser.addImage(loser_page);
  loser.scale=0.25;
  loser.visible=false;

  }
  
  function draw() {

  background(background_image);
  fill("red");
  textSize(20);
  text(deaths,232,113.5);
  strokeWeight(0);

// Mechanics for gameplay

  if(gamestate=="request"){
    request.visible=true;

    if(keyDown("space")){
      gamestate="play";
    }
  }
  else {
    request.visible=false;
  }
  
  if (gamestate=="play") {

    if(keyDown("right")){
      player.x = player.x + 3;
    }
    if(keyDown("left")){
      player.x = player.x - 3;
    }
    if(keyDown("up")){
      player.y = player.y - 3;
    }
    if(keyDown("down")){
      player.y = player.y + 3;
    }

    if(player.isTouching(wall1)||
      player.isTouching(wall2)||
      player.isTouching(wall3)||
      player.isTouching(wall4)||
      player.isTouching(wall5)||
      player.isTouching(wall6)||
      player.isTouching(wall7)||
      player.isTouching(wall8)||
      player.isTouching(wall9)||
      player.isTouching(wall10)||
      player.isTouching(wall11)||
      player.isTouching(wall12)||
      player.isTouching(wall13)||
      player.isTouching(wall14)||
      player.isTouching(enemy1)||
      player.isTouching(enemy2)||
      player.isTouching(enemy3)||
      player.isTouching(enemy4)||
      player.isTouching(enemy5)||
      player.isTouching(enemy6)||
      player.isTouching(enemy7)||
      player.isTouching(enemy8)||
      player.isTouching(enemy9)||
      player.isTouching(enemy10)||
      player.isTouching(enemy11)||
      player.isTouching(enemy12))

    {
      player.x = 34.5;
      player.y = 367;
      deaths = deaths + 1;
      gamestate="request";
    }
    
  }

  enemy1.bounceOff(wall1);
  enemy1.bounceOff(wall2);

  enemy2.bounceOff(wall1);
  enemy2.bounceOff(wall2);

  enemy3.bounceOff(wall3);
  enemy3.bounceOff(wall4);

  enemy4.bounceOff(wall3);
  enemy4.bounceOff(wall4);

  enemy5.bounceOff(wall5);
  enemy5.bounceOff(wall6);

  enemy6.bounceOff(wall7);
  enemy6.bounceOff(wall8);

  enemy7.bounceOff(wall9);
  enemy7.bounceOff(wall10);

  enemy8.bounceOff(wall9);
  enemy8.bounceOff(wall10);

  enemy9.bounceOff(wall11);
  enemy9.bounceOff(wall12);

  enemy10.bounceOff(wall11);
  enemy10.bounceOff(wall12);

  enemy11.bounceOff(wall13);
  enemy11.bounceOff(wall14);

  enemy12.bounceOff(wall13);
  enemy12.bounceOff(wall14);


  if(player.y>369) {
    player.x = 34.5;
    player.y = 367;
   }

  if(player.isTouching(crystal)) {
    gamestate="won";
    player.x = 382.5;
    player.y = 31;
  }

  if(gamestate=="won") {
    winner.visible=true;
  }
  else {
    winner.visible=false;
  }

  if(deaths>=8){
    gamestate="end"
    loser.visible=true;
  }
  else {
    loser.visible=false;
  }
  
 drawSprites();
  }
