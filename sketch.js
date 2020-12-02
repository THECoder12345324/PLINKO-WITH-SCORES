var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var shoot = false
var gamestate = "start";
var particle;
var divisionHeight=300;
var score =0;
var count = 0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    text1 = random(100, 700);
    text2 = random(100, 700);
    text3 = random(100, 700);
    text4 = random(100, 700);
    text5 = random(100, 700);
    text6 = random(100, 700);
    text7 = random(100, 700);
    text8 = random(100, 700);
    text9 = random(100, 700);
    text10 = random(100, 700);

    text1 = Math.floor(text1);
    text2 = Math.floor(text2);
    text3 = Math.floor(text3);
    text4 = Math.floor(text4);
    text5 = Math.floor(text5);
    text6 = Math.floor(text6);
    text7 = Math.floor(text7);
    text8 = Math.floor(text8);
    text9 = Math.floor(text9);
    text10 = Math.floor(text10);

    
}
 


function draw() {
  background("black");
  Engine.update(engine);
  
  if (gamestate == "start") {
    textSize(50);
    fill("white");
    text("PLINKO WITH SCORES", 120, height / 2)
    textSize(20);
    text("Press space to start", 320, height / 2 + 70)
  }

  if (gamestate == "play") {
    textSize(20)
    fill("white")
    text("Score : " +score,20,30);
    text("Turns Left: " + (5 - count), 170, 30)
    for (var i = 0; i < plinkos.length; i++) {
      
      plinkos[i].display();
      
    }
  
    for (var j = 0; j < particles.length; j++) {
    
      particles[j].display();
    }
    if (particle != null) {
      particle.display();

      if (particle.body.position.y > 760) {

        if (particle.body.position.x < 80 && particle.body.position.x > 0) {
          score += text1;
          particle = null;
          if (count >= 5) {
            gamestate = "end";
          }
        }
        if (particle != null) {
          if (particle.body.position.x < 160 && particle.body.position.x > 80) {
            score += text2;
            particle = null;
            if (count >= 5) {
              gamestate = "end";
            }
          }
        }
        if (particle != null) {
          if (particle.body.position.x < 240 && particle.body.position.x > 160) {
            score += text3;
            particle = null;
            if (count >= 5) {
              gamestate = "end";
            }
          }
        }
        if (particle != null) {
          if (particle.body.position.x < 320 && particle.body.position.x > 240) {
            score += text4;
            particle = null;
            if (count >= 5) {
              gamestate = "end";
            }
          }
        }
        if (particle != null) {
          if (particle.body.position.x < 400 && particle.body.position.x > 320) {
            score += text5;
            particle = null;
            if (count >= 5) {
              gamestate = "end";
            }
          }
        }
        if (particle != null) {
          if (particle.body.position.x < 480 && particle.body.position.x > 400) {
            score += text6;
            particle = null;
            if (count >= 5) {
              gamestate = "end";
            }
          }
        }
        if (particle != null) {
          if (particle.body.position.x < 560 && particle.body.position.x > 480) {
            score += text7;
            particle = null;
            if (count >= 5) {
              gamestate = "end";
            }
          }
        }
        if (particle != null) {
          if (particle.body.position.x < 640 && particle.body.position.x > 560) {
            score += text8;
            particle = null;
            if (count >= 5) {
              gamestate = "end";
            }
          }
        }
        if (particle != null) {
          if (particle.body.position.x < 720 && particle.body.position.x > 640) {
            score += text9;
            particle = null;
            if (count >= 5) {
              gamestate = "end";
            }
          }
        }
        if (particle != null) {
          if (particle.body.position.x < 800 && particle.body.position.x > 720) {
            score += text10;
            particle = null;
            if (count >= 5) {
              gamestate = "end";
            }
          }
        }
        if (particle != null) {
          if (particle.body.position.x < 0 || particle.body.position.x > width) {
            particle = null;
            if (count >= 5) {
              gamestate = "end";
            }
          }
        }
        count+=1
      }
    }
    for (var k = 0; k < divisions.length; k++) {
      
      divisions[k].display();
      
      
    }
    fill("white");
    textSize(20);
    text('' + text1, 20, height-divisionHeight/2 - 100)
    text('' + text2, 100, height-divisionHeight/2 - 100)
    text('' + text3, 180, height-divisionHeight/2 - 100)
    text('' + text4, 260, height-divisionHeight/2 - 100)
    text('' + text5, 340, height-divisionHeight/2 - 100)
    text('' + text6, 420, height-divisionHeight/2 - 100)
    text('' + text7, 500, height-divisionHeight/2 - 100)
    text('' + text8, 580, height-divisionHeight/2 - 100)
    text('' + text9, 660, height-divisionHeight/2 - 100)
    text('' + text10, 740, height-divisionHeight/2 - 100)
  }
  
  if (gamestate === "end") {
    textSize(50);
    fill("white");
    text("GAME OVER", 250, height / 2)
    textSize(20);
    text("Refresh the screen to try again", 270, (height / 2) + 80)
  }
}

function mousePressed() {
  if (particle == null && gamestate === "play") {
    particle = new Particle(mouseX, 10, 10,10);
  }
}

function keyPressed() {
  if (keyCode === 32) {
    if (gamestate == "start") {
      gamestate = "play";
    }
  }
}