var bg, bgImg, player
var playerImg, playerShootImg
var zombie, z1, z2, z3, z4

function preload() {

  bgImg = loadImage("assets/bg.jpeg")
  playerImg = loadImage("assets/shooter_1.png")
  playerShootImg = loadImage("assets/shooter_3.png")

  z1 = loadImage("assets/zombie.png")
  z2 = loadImage("assets/zambie2.png")
  z3 = loadImage("assets/zombie3.png")
  z4 = loadImage("assets/zombie4.png")
}

function setup() {

  createCanvas(windowWidth, windowHeight);

  bg = createSprite(width / 2, height / 2 + 200)
  bg.addImage(bgImg)
  bg.scale = 1.3

  player = createSprite(150, height - 150)
  player.addImage(playerImg)
  player.scale = 0.6
  player.setCollider("rectangle", 0, 0, 300, 300)

  zombieGang = new Group()

}

function draw() {
  background(0);

  if (keyDown("up")) {
    player.y = player.y - 5
  }

  if (keyDown("down")) {
    player.y = player.y + 5
  }

  if (keyWentDown("space")) {
    player.addImage(playerShootImg)
  }

  if (keyWentUp("space")) {
    player.addImage(playerImg)
  }
  
  spawnZombies();

  drawSprites();

}


function spawnZombies() {
  if (frameCount % 60 == 0) {
    zombie = createSprite(width, height - 150)
    zombie.velocityX = -4

    var n = round(random(1, 4))

    switch (n) {
      case 1: zombie.addImage(z1)
        zombie.scale = 0.3
        zombie.setCollider("rectangle", 0, 0, 600, 800)
        break;

      case 2: zombie.addImage(z2)
        zombie.setCollider("rectangle", 0, 0, 200, 350)
        break;

      case 3: zombie.addImage(z3)
        zombie.setCollider("rectangle", -20, 0, 100, 200)
        zombie.scale = 1.6
        break;

      case 4: zombie.addImage(z4)
        zombie.scale = 0.5
        break;

    } 

     zombieGang.add(zombie)
  }
}





