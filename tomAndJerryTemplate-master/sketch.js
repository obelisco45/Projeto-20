var rato, ratoImg, ratoImg2, ratoImg3;
var gato, gatoImg1, gatoImg2, gatoImg3;
var bg;

function preload() {
    bg = loadImage("images/garden.png");
    ratoImg = loadAnimation("images/mouse1.png");
    ratoImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    ratoImg3 = loadAnimation("images/mouse4.png");
    gatoImg1 = loadAnimation("images/cat1.png");
    gatoImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    gatoImg3 = loadAnimation("images/cat3.png");
}

function setup(){
    createCanvas(1000,800);
    rato = createSprite(200, 600);
    rato.addAnimation("ratoImg", ratoImg);
    rato.scale = 0.15;
    gato = createSprite(870,600);
    gato.addAnimation("catoImg1", gatoImg1);
    gato.scale = 0.2;

}

function draw() {

    background(bg);
   if (gato.x-rato.x < (gato.width-rato.width)/2) {
       gato.velocityX = 0;
       gato.addAnimation("gatoImg3", gatoImg3)
       gato.x = 300;
       gato.scale = 0.2;
       gato.changeAnimation("gatoImg3");
       rato.addAnimation("ratoImg3", ratoImg3);
       rato.scale = 0.15;
       rato.changeAnimation("ratoImg3");
   }

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW) {
      gato.velocityX = -5;
      gato.addAnimation("gatoImg2", gatoImg2)
      gato.changeAnimation("gatoImg2");
      rato.addAnimation("ratoImg2", ratoImg2)
      rato.changeAnimation("ratoImg2");
      rato.frameDelay = 25;
  }


}
