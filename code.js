var rooms = []
var things = []
var zombies = [];
var areas = []
var milestone = {};


var imageSrc = {};
var fontSrc = {};
var soundSrc = {};

var gameActive = false;
var titleScreen = true;
var gameOverScreen = false;


function preload(){
    soundSrc["soundtrack"] = loadSound('Asset/Music/Ambient/Shadowlands 3 - Machine.mp3');
    soundSrc["soundtrack1"] = loadSound('Asset/Music/Combat/Mistake the Getaway.mp3')
    soundSrc["soundtrack2"] = loadSound('Asset/Music/Other/Serpentine Trek.mp3')
    soundSrc["footstep"] = loadSound('Asset/Sound/Walking/footstep00.ogg')
    soundSrc["footstep2"] = loadSound('Asset/Sound/Walking/footstep01.ogg')
    soundSrc["footstep3"] = loadSound('Asset/Sound/Walking/footstep02.ogg')
    soundSrc["footstep4"] = loadSound('Asset/Sound/Walking/footstep03.ogg')
    soundSrc["footstep5"] = loadSound('Asset/Sound/Walking/footstep04.ogg')
    soundSrc["footstep6"] = loadSound('Asset/Sound/Walking/footstep05.ogg')
    soundSrc["footstep7"] = loadSound('Asset/Sound/Walking/footstep06.ogg')
    soundSrc["footstep8"] = loadSound('Asset/Sound/Walking/footstep07.ogg')
    soundSrc["footstep9"] = loadSound('Asset/Sound/Walking/footstep08.ogg')
    soundSrc["footstep10"] = loadSound('Asset/Sound/Walking/footstep09.ogg')
    soundSrc["playerattack"] = loadSound('Asset/Sound/Player/Player_Attack.mp3')
    soundSrc["ambience"] = loadSound('Asset/Sound/Zombie/Zombie_Ambience (1).wav')
    soundSrc["ambience2"] = loadSound('Asset/Sound/Zombie/Zombie_Ambience (2).wav')
    soundSrc["ambienc3"] = loadSound('Asset/Sound/Zombie/Zombie_Ambience (3).wav')
    soundSrc["zombiedeath1"] = loadSound('Asset/Sound/Zombie/Zombie_Death.wav')
    soundSrc["zombiedeath2"] = loadSound('Asset/Sound/Zombie/Zombie_Death1.wav')
    soundSrc["grunt"] = loadSound('Asset/Sound/Zombie/Zombie_Grunt.wav')
    soundSrc["zombiesound1"] = loadSound('Asset/Sound/Zombie/Zombies Sound Effects Pack/ZOMBIE SOUNDZ (2).wav')
    soundSrc["zombiesound2"] = loadSound('Asset/Sound/Zombie/Zombies Sound Effects Pack/ZOMBIE SOUNDZ (3).wav')
    soundSrc["zombiesound3"] = loadSound('Asset/Sound/Zombie/Zombies Sound Effects Pack/ZOMBIE SOUNDZ (5).wav')
    soundSrc["zombiesound4"] = loadSound('Asset/Sound/Zombie/Zombies Sound Effects Pack/ZOMBIE SOUNDZ (6).wav')
    soundSrc["zombiesound5"] = loadSound('Asset/Sound/Zombie/Zombies Sound Effects Pack/ZOMBIE SOUNDZ (9).wav')
    soundSrc["zombiesound6"] = loadSound('Asset/Sound/Zombie/Zombies Sound Effects Pack/ZOMBIE SOUNDZ (10).wav')
    soundSrc["zombiesound7"] = loadSound('Asset/Sound/Zombie/Zombies Sound Effects Pack/ZOMBIE SOUNDZ (11).wav')
    soundSrc["zombiesound8"] = loadSound('Asset/Sound/Zombie/Zombies Sound Effects Pack/ZOMBIE SOUNDZ (12).wav')
    soundSrc["zombiesound9"] = loadSound('Asset/Sound/Zombie/Zombies Sound Effects Pack/ZOMBIE SOUNDZ (13).wav')
    soundSrc["zombiesound10"] = loadSound('Asset/Sound/Zombie/Zombies Sound Effects Pack/ZOMBIE SOUNDZ (14).wav')
    soundSrc["zombiesound11"] = loadSound('Asset/Sound/Zombie/Zombies Sound Effects Pack/ZOMBIE SOUNDZ (15).wav')
    soundSrc["zombiesound12"] = loadSound('Asset/Sound/Zombie/Zombies Sound Effects Pack/ZOMBIE SOUNDZ (16).wav')
    soundSrc["zombiesound13"] = loadSound('Asset/Sound/Zombie/Zombies Sound Effects Pack/ZOMBIE SOUNDZ (17).wav')
    soundSrc["zombiesound14"] = loadSound('Asset/Sound/Zombie/Zombies Sound Effects Pack/ZOMBIE SOUNDZ (18).wav')
    soundSrc["zombiesound15"] = loadSound('Asset/Sound/Zombie/Zombies Sound Effects Pack/ZOMBIE SOUNDZ (19).wav')
    soundSrc["zombiesound16"] = loadSound('Asset/Sound/Zombie/Zombies Sound Effects Pack/ZOMBIE SOUNDZ (20).wav')
    soundSrc["zombiesound17"] = loadSound('Asset/Sound/Zombie/Zombies Sound Effects Pack/ZOMBIE SOUNDZ (21).wav')
    soundSrc["zombiesound18"] = loadSound('Asset/Sound/Zombie/Zombies Sound Effects Pack/ZOMBIE SOUNDZ (23).wav')
    soundSrc["zombiesound19"] = loadSound('Asset/Sound/Zombie/Zombies Sound Effects Pack/ZOMBIE SOUNDZ (24).wav')
    soundSrc["zombiesound20"] = loadSound('Asset/Sound/Zombie/Zombies Sound Effects Pack/ZOMBIE SOUNDZ (25).wav')
    
    fontSrc["chakraPetch"] = loadFont("Asset/Fonts/ChakraPetch-Medium.ttf");
    fontSrc["fellEnglish"] = loadFont("Asset/Fonts/Fell English.ttf");
    
    imageSrc["playerWalkingLeft"] = [loadImage("Asset/Image/PlayerWalkingLeft/0.png"), loadImage("Asset/Image/PlayerWalkingLeft/1.png"), loadImage("Asset/Image/PlayerWalkingLeft/2.png"), loadImage("Asset/Image/PlayerWalkingLeft/3.png"), loadImage("Asset/Image/PlayerWalkingLeft/4.png"), loadImage("Asset/Image/PlayerWalkingLeft/5.png"), loadImage("Asset/Image/PlayerWalkingLeft/6.png"), loadImage("Asset/Image/PlayerWalkingLeft/7.png")];

    imageSrc["playerWalkingRight"] = [loadImage("Asset/Image/PlayerWalkingRight/0.png"), loadImage("Asset/Image/PlayerWalkingRight/1.png"), loadImage("Asset/Image/PlayerWalkingRight/2.png"), loadImage("Asset/Image/PlayerWalkingRight/3.png"), loadImage("Asset/Image/PlayerWalkingRight/4.png"), loadImage("Asset/Image/PlayerWalkingRight/5.png"), loadImage("Asset/Image/PlayerWalkingRight/6.png"), loadImage("Asset/Image/PlayerWalkingRight/7.png")];

    imageSrc["playerCrouchingLeft"] = [loadImage("Asset/Image/PlayerCrouchingLeft/0.png"), loadImage("Asset/Image/PlayerCrouchingLeft/1.png"), loadImage("Asset/Image/PlayerCrouchingLeft/2.png"), loadImage("Asset/Image/PlayerCrouchingLeft/3.png"), loadImage("Asset/Image/PlayerCrouchingLeft/4.png")];

    imageSrc["playerCrouchingRight"] = [loadImage("Asset/Image/PlayerCrouchingRight/0.png"), loadImage("Asset/Image/PlayerCrouchingRight/1.png"), loadImage("Asset/Image/PlayerCrouchingRight/2.png"), loadImage("Asset/Image/PlayerCrouchingRight/3.png"), loadImage("Asset/Image/PlayerCrouchingRight/4.png")];

    imageSrc["playerIdle"] = [loadImage("Asset/Image/PlayerIdle/0.png"), loadImage("Asset/Image/PlayerIdle/1.png"), loadImage("Asset/Image/PlayerIdle/2.png"), loadImage("Asset/Image/PlayerIdle/3.png"), loadImage("Asset/Image/PlayerIdle/4.png"), loadImage("Asset/Image/PlayerIdle/5.png"), loadImage("Asset/Image/PlayerIdle/6.png")];
    
    imageSrc["playerAttackLeft"] = [loadImage("Asset/Image/PlayerAttack/0.png")];
    
    imageSrc["playerAttackRight"] = [loadImage("Asset/Image/PlayerAttack/1.png")];
    
    imageSrc["playerDeath"] = [loadImage("Asset/Image/death/0.png"), loadImage("Asset/Image/death/1.png"), loadImage("Asset/Image/death/2.png"), loadImage("Asset/Image/death/3.png"), loadImage("Asset/Image/death/4.png"), loadImage("Asset/Image/death/5.png"), ]

    imageSrc["zombieWalkingLeft"] = [loadImage("Asset/Image/Zombie/WalkLeft/0.png"), loadImage("Asset/Image/Zombie/WalkLeft/1.png"), loadImage("Asset/Image/Zombie/WalkLeft/2.png"), loadImage("Asset/Image/Zombie/WalkLeft/3.png")];

    imageSrc["zombieWalkingRight"] = [loadImage("Asset/Image/Zombie/WalkRight/0.png"), loadImage("Asset/Image/Zombie/WalkRight/1.png"), loadImage("Asset/Image/Zombie/WalkRight/2.png"), loadImage("Asset/Image/Zombie/WalkRight/3.png")];

    imageSrc["zombieIdle"] = loadImage("Asset/Image/Zombie/idle/0.png");
    
    imageSrc["zombieAttackLeft"] = [loadImage("Asset/Image/Zombie/attack/left/0.png"), loadImage("Asset/Image/Zombie/attack/left/1.png"), loadImage("Asset/Image/Zombie/attack/left/2.png")];
    
    imageSrc["zombieAttackRight"] = [loadImage("Asset/Image/Zombie/attack/right/0.png"), loadImage("Asset/Image/Zombie/attack/right/1.png"), loadImage("Asset/Image/Zombie/attack/right/2.png")]
    
    imageSrc["zombieDeath"] = [loadImage("Asset/Image/Zombie/death/00.png"), loadImage("Asset/Image/Zombie/death/01.png"), loadImage("Asset/Image/Zombie/death/02.png"), loadImage("Asset/Image/Zombie/death/03.png"), loadImage("Asset/Image/Zombie/death/04.png"), loadImage("Asset/Image/Zombie/death/05.png"), loadImage("Asset/Image/Zombie/death/06.png"), loadImage("Asset/Image/Zombie/death/07.png"), loadImage("Asset/Image/Zombie/death/08.png"), loadImage("Asset/Image/Zombie/death/09.png"), loadImage("Asset/Image/Zombie/death/10.png"), ]

    imageSrc["textures"] = [loadImage("Asset/Image/StationaryObjects/cobblestone.png"), loadImage("Asset/Image/StationaryObjects/wood.png"), loadImage("Asset/Image/StationaryObjects/rosebush.png"), loadImage("Asset/Image/StationaryObjects/Mossy & Cracked Road.png"), loadImage("Asset/Image/StationaryObjects/Mossy & Cracked Road Vertical.png")];

    imageSrc["tree"] = [loadImage("Asset/Image/StationaryObjects/(optional)tree/00.png"), loadImage("Asset/Image/StationaryObjects/(optional)tree/01.png"), loadImage("Asset/Image/StationaryObjects/(optional)tree/02.png"), loadImage("Asset/Image/StationaryObjects/(optional)tree/03.png"), loadImage("Asset/Image/StationaryObjects/(optional)tree/04.png"), loadImage("Asset/Image/StationaryObjects/(optional)tree/05.png"), loadImage("Asset/Image/StationaryObjects/(optional)tree/06.png"), loadImage("Asset/Image/StationaryObjects/(optional)tree/07.png"), loadImage("Asset/Image/StationaryObjects/(optional)tree/08.png"), loadImage("Asset/Image/StationaryObjects/(optional)tree/09.png"), loadImage("Asset/Image/StationaryObjects/(optional)tree/10.png"), loadImage("Asset/Image/StationaryObjects/(optional)tree/11.png"), loadImage("Asset/Image/StationaryObjects/(optional)tree/12.png"), loadImage("Asset/Image/StationaryObjects/(optional)tree/13.png"), loadImage("Asset/Image/StationaryObjects/(optional)tree/14.png"), loadImage("Asset/Image/StationaryObjects/(optional)tree/15.png"), loadImage("Asset/Image/StationaryObjects/(optional)tree/16.png"), loadImage("Asset/Image/StationaryObjects/(optional)tree/17.png"), loadImage("Asset/Image/StationaryObjects/(optional)tree/18.png")];

    imageSrc["hitmarker"] = [loadImage("Asset/Image/StationaryObjects/hitmarker/0.png"), loadImage("Asset/Image/StationaryObjects/hitmarker/1.png")];

    imageSrc["wardrobe"] = [loadImage("Asset/Image/StationaryObjects/wardrobe/0.png"), loadImage("Asset/Image/StationaryObjects/wardrobe/1.png")];
    imageSrc["titlescreen"] = loadImage("Asset/Image/StationaryObjects/titlescreen.png");
}

function randomNumber(min,max) {
 // return Math.floor(Math.random()*(max-min+1)+min)
   return Math.random()*(max-min+1)+min
}

function setup() {
  var canvas = createCanvas(800, 600);
  var x = (windowWidth - width) /2 ;
    var y = (windowHeight - height) / 2;
    canvas.position(x, y);
    soundSrc["soundtrack"].play();
    
//    var testing = new Room(500,500,10,10,20,1,null)
//testing.addEntrance("top",0)
//testing.addEntrance("bottom",0)
//testing.addEntrance("left",0)
//testing.addEntrance("right",0)
//    rooms.push(testing)
        areas[0] = null;
    var testing = new Area(-50,-650,140,85,20,1,null)
testing.addEntrance("top",95, 0, "havePesticide")
    areas.push(testing)
    
    var placeHolder = new Room(-1000,-10000,10,10,10,1,0,null)
    var one = new Room(30,400,30,25,20,1,1,null)
    one.addEntrance("top",0)
    areas[1].rooms.push(one)
    var two = new Room(30,-550,30,25,20,1,2,null)
    two.addEntrance("bottom",0)
    areas[1].rooms.push(two)
    var three = new Room(670,400,30,25,20,1,3,null)
    three.addEntrance("top",0)
    areas[1].rooms.push(three)
    var four = new Room(1310,400,60,25,20,1,4,null)
    four.addEntrance("top",0)
//    four.addEntrance("top",10)
    areas[1].rooms.push(four)
//    var five = new Room(1950,400,30,25,20,5,null)
//    five.addEntrance("top",5)
//    rooms.push(five)
    var six = new Room(670,-550,30,25,20,1,6,null)
    six.addEntrance("bottom",0)
    areas[1].rooms.push(six)
    var seven = new Room(1310,-550,30,25,20,1,7)
    seven.addEntrance("bottom",0)
    areas[1].rooms.push(seven)
    var eight = new Room(1950,-550, 30,25,20,1,8)
    eight.addEntrance("bottom",0)
    eight.addEntrance("top",9)
    areas[1].rooms.push(eight)
    var nine = new Room(1950,-1400,30,25,20,1,10)
    nine.addEntrance("bottom",9)
    nine.addEntrance("top",0)
    rooms.push(nine)
    
    var ten = new Room(2590,-1400,30,25,20,1,11)
    ten.addEntrance("top",0)
    rooms.push(ten)
    
    things.push(new makeCabinet(550,550, "Nothing!"))
    
    var testing = new Zombie(50, 100,1, 0, new MeleeZombie());
    zombies.push(testing);
    var f = new Zombie(150,-400,1,0,new MeleeZombie())
    zombies.push(f)
    var f = new Zombie(200,-350,1,0,new MeleeZombie())
    zombies.push(f)
    var f = new Zombie(500,140,1,0,new MeleeZombie())
    zombies.push(f)
    var f = new Zombie(700,-400,1,0,new MeleeZombie())
    zombies.push(f)
    var f = new Zombie(750,-350,1,0,new MeleeZombie())
    zombies.push(f)
    var f = new Zombie(900,400,1,0,new MeleeZombie())
    zombies.push(f)
    var f = new Zombie(1200,100,1,0,new MeleeZombie())
    zombies.push(f)
    
    imageSrc["blockhorizontal"] = loadImage("block.png");
    imageSrc["blockvertical"] = loadImage("block.png");
    imageSrc["block"] = loadImage("block.png")
}

var inputUp = false;
var inputDown = false; 
var inputLeft = false;
var inputRight = false;
var screenX = 0;
var screenY = -500;
var player = {x:275,y:280,width:51,height:90,health:100, maxHealth: 100,equ:"G",aimX:0,aimY:0,speed:3,sneaking:false,roomId:0,stepping:false,gun:{tag:"ThornSpiker",dmg:4,speed:20,ammo:10000,ammoMax:10000,ROF:.15,cycle:false,reloadSpeed:2.5},barrell:{x:0,y:0},areaId:1, frameUpdate: 2, animationStep: 0,}
var soundWaves = []
var playerProjectiles = []

function newSound(originX,originY,intensity,currentRadius,originRoom,currentOpacity){
    this.originX = originX;
    this.originY = originY;
    this.intensity = intensity;
    this.currentRadius = currentRadius;
    this.roomId = originRoom;
    this.zombiePinged = [];
}
newSound.prototype.expandRadius = function(){
    this.currentRadius += 12;
//    this.currentOpacity -= 30;
//    if(this.currentOpacity < 0){
//        this.currentOpacity = 0
//    }
}
newSound.prototype.checkDetection = function(){
//    for(var i of zombieArray){
//        if(collideRectCircle(i.x,i.y,i.width,i.height,this.originX,this.originY,this.currentRadius) && this.originRoom = i.currentRoom){
////            var detectionChance = I'll come back to this
//        }
//    }
}
function makeSign(x,y,contents){
    this.x = x;
    this.y = y;
    this.contents = contents;
    this.type = "sign";
    this.open = false;
}
makeSign.prototype.render = function(){
    fill("brown")
    noStroke()
    rect(this.x,this,y, 30,25)
    rect(this.x+10,this.y+25,10,20)
    stroke("black")
     if(this.open){
        fill("black")
        text(this.contents,this.x-10,this.y-30,50,30)
    }
}
makeSign.prototype.interact = function(){
     if(this.open == false){
    this.open = true
    }else{
        this.close()
    }
}
function makeCabinet(x,y,contents){
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 30
    this.contents = contents;
    this.type = "cabinet"
    this.open = false;
}
makeCabinet.prototype.render = function(){
    fill("brown")
    rect(this.x,this.y,this.width,this.height)
    if(this.open){
        fill("black")
        text(this.contents,this.x-10,this.y-30,50,30)
    }
}
makeCabinet.prototype.interact = function(){
    if(this.open == false){
    this.open = true
    }else{
        this.close()
    }
}
makeCabinet.prototype.close = function(){
    //console.log("S")
    this.open = false
}
function renderShotgun(ox,oy,ax,ay){
  stroke("red")
  stroke(255,0,0)
  strokeWeight(9)
  strokeCap(SQUARE);
  var SGChangeX = ax-ox-15
  var SGChangeY = ay-oy-25
  var pvSG1 = Math.sqrt(Math.pow(45,2)/(Math.pow(SGChangeX,2)+Math.pow(SGChangeY,2)))
  var pvSG2 = Math.sqrt(Math.pow(5,2)/(Math.pow(SGChangeX,2)+Math.pow(SGChangeY,2)))
  var pvSG3 = Math.sqrt(Math.pow(20,2)/(Math.pow(SGChangeX,2)+Math.pow(SGChangeY,2)))
//  line(ox+15-(SGChangeX*pvSG2),oy+25-(SGChangeY*pvSG2),ox+15+(SGChangeX*pvSG1),oy+25+(SGChangeY*pvSG1))
//  line(ox+15-(SGChangeX*pvSG3),oy+30-(SGChangeY*pvSG3),ox+15+(SGChangeX*pvSG2),oy+30+(SGChangeY*pvSG2))
        player.barrell.x = ox+15+(SGChangeX*pvSG1);
        player.barrell.y = oy+25+(SGChangeY*pvSG1);
    stroke("black")
  strokeWeight(1)
  
}
function draw() {
    if(gameActive){
      strokeWeight(1)
      translate(screenX,screenY)
      background(220);
      stroke("black")
      fill("black")
        fill("slategray")
        rect(0,0,2590,350)
      var xchange = 0;
      var ychange = 0;
        var sneakModifier = 1
        if(player.sneaking){
            sneakModifier = .5
        }
        var finalSpeed = player.speed*sneakModifier;
      if(inputUp){
        ychange-=finalSpeed;
      }
      if(inputDown){
       ychange +=finalSpeed;
      }
      if(inputRight){
        xchange += finalSpeed;
      }
      if(inputLeft){
        xchange -= finalSpeed;
      }
      // var powerValuePlayer = Math.sqrt(
      var powerValuePlayer;
      if(isFinite(Math.sqrt(Math.pow(finalSpeed,2)/(Math.pow(xchange,2)+Math.pow(ychange,2)))) == true){

         powerValuePlayer = Math.sqrt(Math.pow(finalSpeed,2)/(Math.pow(xchange,2)+Math.pow(ychange,2)))

      }
      else{
        powerValuePlayer = 0;
      }
         var safeY = true
            var safeX = true
        for(var f of areas[player.areaId].rooms){

                for(var k of f.blocks.top){
                if(collideRectRect(player.x,player.y+ychange*powerValuePlayer,player.width,player.height,k.x,k.y,f.blockSize,f.blockSize)){
                    safeY = false
                }
                    if(collideRectRect(player.x+xchange*powerValuePlayer,player.y,player.width,player.height,k.x,k.y,f.blockSize,f.blockSize)){
                    safeX = false
                }

                }
                for(var k of f.blocks.bottom){
                if(collideRectRect(player.x,player.y+ychange*powerValuePlayer,player.width,player.height,k.x,k.y,f.blockSize,f.blockSize)){
                    safeY = false
                }
                    if(collideRectRect(player.x+xchange*powerValuePlayer,player.y,player.width,player.height,k.x,k.y,f.blockSize,f.blockSize)){
                    safeX = false
                }

                }
                for(var k of f.blocks.left){
                if(collideRectRect(player.x+xchange*powerValuePlayer,player.y,player.width,player.height,k.x,k.y,f.blockSize,f.blockSize)){
                    safeX = false
                }
                    if(collideRectRect(player.x,player.y+ychange*powerValuePlayer,player.width,player.height,k.x,k.y,f.blockSize,f.blockSize)){
                    safeY = false
                }

                }
                for(var k of f.blocks.right){
                if(collideRectRect(player.x+xchange*powerValuePlayer,player.y,player.width,player.height,k.x,k.y,f.blockSize,f.blockSize)){
                    safeX = false
                }
                    if(collideRectRect(player.x,player.y+ychange*powerValuePlayer,player.width,player.height,k.x,k.y,f.blockSize,f.blockSize)){
                    safeY = false
                }

                }


        }
        if(safeX){
      screenX -= xchange*powerValuePlayer;
        }
        if(safeY){
      screenY -= ychange*powerValuePlayer;
        }
        player.roomId = findRoom(player.x,player.y)
        if((xchange*powerValuePlayer != 0 || ychange*powerValuePlayer != 0) && !player.stepping){
            player.stepping = true
            var stepTime = 400;
            if(player.sneaking){
                stepTime = 1000
            }
            setTimeout(step,stepTime)
            var tempSound = new newSound(player.x+20,player.y+25,sneakModifier*randomNumber(15,25),0,player.roomId,255)
            var ind = soundWaves.length
            soundWaves.push(tempSound)
        }
    //  player.x = 275-screenX;
    //  player.y = 280-screenY;
        player.x = width/2-25-screenX;
        player.y = height/2-20-screenY;
        player.aimX = mouseX - screenX;
        player.aimY = mouseY - screenY;
        stroke("black")
      fill("red")
    //  rect(20,20,50,50)
        
        
      //fill("blue")
      //rect(player.x,player.y,40,50)
        var healthWidth = map(player.health, 0, player.maxHealth, 0, player.width);
        noFill()
        stroke("black")
        strokeWeight(2);
        rect(player.x, player.y-10, player.width, 5);
        fill("red")
        rect(player.x, player.y-10, healthWidth, 5);
        if(frameCount % player.frameUpdate == 0){
        player.animationStep += 1;
    }
        if(xchange == 0 && ychange == 0){
            if(player.animationStep >= imageSrc["playerIdle"].length){
                player.animationStep = 0;
            }
            //console.log(player.animationStep)
            image(imageSrc["playerIdle"][player.animationStep], player.x, player.y, player.width, player.height);
        }
        else{
            var movementType = "Walking";
            if(player.sneaking){
                movementType = "Crouching";
            }
            var movementDirection = "Right"
            if(xchange < 0){
                movementDirection = "Left"
            }
            if(player.animationStep >= imageSrc["player" + movementType + movementDirection].length){
                player.animationStep = 0;
            }
            image(imageSrc["player" + movementType + movementDirection][player.animationStep], player.x, player.y, player.width, player.height);
        }
        renderShotgun(player.x,player.y,player.aimX,player.aimY)
    //    //console.log(playerProjectiles)
        for(var o = 0;o<playerProjectiles.length;o++){
                      fill("black")
                      rect(Number(playerProjectiles[o].x),Number(playerProjectiles[o].y),2,2)
                  }
        for(var i=0, length=soundWaves.length; i<length; i++){
            var y = soundWaves[i];
            noFill()
    //    stroke("#ACC144")
    //        colorMode(RGB)
    //        var tempOpacity = Number(y.opacity)
    //        //console.log(y.currentOpacity)
            var tempColor = color(223, 208, 62,y.currentOpacity)
            stroke(tempColor)
        strokeWeight(5)
            y.expandRadius()
        ellipse(y.originX,y.originY,y.currentRadius,y.currentRadius)
            strokeWeight(1)
            if((y.intensity/y.currentRadius)*10< 0.4){
                soundWaves.splice(i, 1);
                i -= 1;
                length -= 1;
            }
        }
        for(var s = 0;s<playerProjectiles.length;s++){
            playerProjectiles[s].x += Number(playerProjectiles[s].changeX)
            playerProjectiles[s].y += Number(playerProjectiles[s].changeY)
        var collide = false;
        for(var i of zombies){
//            //console.log(i+"z")
//            //console.log(playerProjectiles[s])
            if(collideRectRect(playerProjectiles[s].x,playerProjectiles[s].y,3,3,i.x,i.y,i.type.width,i.type.height)){
                i.health -= playerProjectiles[s].dmg;
                i.aggravated = true
                i.enemy = player;
        if(i.alerted){
            i.alerted = false;
            i.investigation = null;
        }
                collide = true
            }
            
        }
        for(var f of areas[player.areaId].rooms){
                for(var g of f.blocks.top){
                    if(collideRectRect(playerProjectiles[s].x,playerProjectiles[s].y,3,3,g.x,g.y,f.blockSize,f.blockSize)){
                        collide = true
                    }
                }
                for(var g of f.blocks.bottom){
                    if(collideRectRect(playerProjectiles[s].x,playerProjectiles[s].y,3,3,g.x,g.y,f.blockSize,f.blockSize)){
                        collide = true
                    }
                }
                for(var g of f.blocks.left){
                    if(collideRectRect(playerProjectiles[s].x,playerProjectiles[s].y,3,3,g.x,g.y,f.blockSize,f.blockSize)){
                        collide = true
                    }
                }
                for(var g of f.blocks.right){
                    if(collideRectRect(playerProjectiles[s].x,playerProjectiles[s].y,3,3,g.x,g.y,f.blockSize,f.blockSize)){
                        collide = true
                    }
                }

            }
        if(collide){
            playerProjectiles.splice(s,1)
                    s--
        }
        
//            for(var u of currentMap){
//                if(collideRectRect(u.x,u.y,u.width,u.height,playerProjectiles[s].x,playerProjectiles[s].y,2,2)){
//                    playerProjectiles.splice(l,1)
//                    l-- 
//            }
//        }
            
        }
        for(var z of zombies){
            z.showThreatenZone();
        }
        for(var g of areas[player.areaId].rooms){
            fill("blue")
            strokeWeight(1)
            stroke("black")
            g.show()
        }
        for(var z of zombies){
            if(z.action == "motion"){
               z.updateKinematic();
            }
            else{
                z.type.attack(player);
            }
            z.soundCollision();
            z.threatenZoneCollision();
            z.playerCollision();
            z.show();
        }
        for(var o of things){
            o.render()
}
    }
    if(titleScreen){
        image(imageSrc["titlescreen"], 0, 0, 800, 600);
    }
    else if(gameOverScreen){
        fill(0, 170);
        noStroke();
        rect(-screenX, -screenY, 800, 600);
        
        fill("white")
        stroke(3);
        stroke("black")
        textAlign(CENTER, CENTER);
        textFont(fontSrc["chakraPetch"]);
        textSize(80);
        text("Game Over", width/2-screenX, height/3-screenY)
        
        if(sin(frameCount*0.05) > -0.64){
            textSize(20);
            text("Please Restart", width/2-screenX, height/2-screenY); 
        }
    }
    
}


function step(){
    player.stepping = false
}
//function mousePressed(event){
//  //console.log(event)
//}
function addProjectile(x,y,changeX,changeY,dmg){
    this.x = x;
    this.y = y;
    this.changeX = changeX;
    this.changeY = changeY;
    this.dmg = dmg; 
}
function cycleGun(){
    player.gun.cycle = false;
}
function mouseClicked(){
    if(gameActive && player.equ == "G"){
    if(player.gun.ammo > 0){
        if(!player.gun.cycle){
    var projectileXChange = Number(player.aimX) - Number(player.barrell.x);
    var projectileYChange = Number(player.aimY) - Number(player.barrell.y);
    var sPV = Math.sqrt(Math.pow(player.gun.speed,2)/(Math.pow(projectileXChange,2)+Math.pow(projectileYChange,2)))
    var sx = projectileXChange * sPV;
    var sy = projectileYChange * sPV;
            var npx = sx
            var npy = sy
            var sPV2 = Math.sqrt(Math.pow(player.gun.speed,2)/(Math.pow(npx,2)+Math.pow(npy,2)))
            var projec = new addProjectile(player.barrell.x,player.barrell.y,Number(npx*sPV2),Number(npy*sPV2),player.gun.dmg,1)
//            //console.log(projec)
            playerProjectiles.push(projec)
    
            player.gun.ammo -= 1;
        player.gun.cycle = true;
        setTimeout(cycleGun,player.gun.ROF*1000)
            var tempSound = new newSound(player.x+20,player.y+25,40,0,player.roomId,150)
        soundWaves.push(tempSound)
//            //console.log(playerProjectiles)
        }
    }
}
    if(titleScreen){
        if(collidePointTriangle(mouseX, mouseY, 310, 200, 310, 430, 510, 315)){
            titleScreen = false;
            gameActive = true;
            redraw();
            gameActive = false;
            displayTutorialSpace();
        }
    }
}

function keyPressed(){
//   //console.log(keyCode)
    if(keyCode == 16){
        player.sneaking = true;
        player.animationStep = 0;
    }
    
  if(keyCode == 87){
    inputUp = true;
            player.animationStep = 0;
  }
  if(keyCode == 83){
    inputDown = true;        player.animationStep = 0;

  }
  if(keyCode == 65){
    inputLeft = true;        player.animationStep = 0;

  }
  if(keyCode == 68){
    inputRight = true;        player.animationStep = 0;

  }
    if(keyCode == 69){
        for(var t of things){
//            //console.log("Sd")
            if(collideRectCircle(t.x,t.y,t.width,t.height,player.x+20,player.y+25,90)){
                t.interact()
            }
        }
    }
  
}

function keyReleased(){
    if(keyCode == 16){
        player.sneaking = false;
    }
  if(keyCode == 87){
    inputUp = false;
  }
  if(keyCode == 83){
    inputDown = false;
  }
  if(keyCode == 65){
    inputLeft = false;
  }
  if(keyCode == 68){
    inputRight = false;
  }
  
}

function deathAnimation(){
    gameOverScreen = true;
    player.death = true;
}