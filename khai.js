// Room

var attackFrame = 100;

function Area(x, y, blockX, blockY, blockSize, areaId, areaName){
    this.x = x;
    this.y = y;
    this.blockX = blockX;
    this.blockY = blockY;
    this.blockSize = blockSize;
    this.width = blockX * blockSize;
    this.height = blockY * blockSize;
    this.areaId = areaId;
    this.areaName = areaName;
    this.blocks = {
        top: [],
        left: [],
        bottom: [],
        right: [],
    };
    this.entrances = [];
    this.roomToBlocks();
    this.rooms = [
        new Room(x, y, blockX, blockY, blockSize, areaId, 0, null),
        
    ];
}
Area.prototype.roomToBlocks = function(){
    //top wall
    for(var x=0; x<this.blockX; x++){
        this.blocks.top.push(new Block(this.x + x*this.blockSize, this.y, this.blockSize, "top"));
    }
    //left wall
    for(var y=0; y<this.blockY; y++){
        this.blocks.left.push(new Block(this.x, this.y + y*this.blockSize, this.blockSize, "left"));
    }
    //bottom wall
    for(var x=0; x<this.blockX; x++){
        this.blocks.bottom.push(new Block(this.x + x*this.blockSize, this.y + this.height - this.blockSize, this.blockSize, "bottom"));
    }
    //right wall
    for(var y=0; y<this.blockY; y++){
        this.blocks.right.push(new Block(this.x + this.width - this.blockSize, this.y + y*this.blockSize, this.blockSize, "right"));
    }
}
Area.prototype.addEntrance = function(wallDirection, blockCoordinate, exitId, requiredMilestone){
    if(wallDirection == "top"){
        var entranceX = this.x + blockCoordinate * this.blockSize;
        var entranceY = this.y + this.blockSize/2;
        var width = this.blockSize*5;
        var height = this.blockSize;
    }
    else if(wallDirection == "left"){
        var entranceX = this.x + this.blockSize/2
        var entranceY = this.y + blockCoordinate * this.blockSize;
        var width = this.blockSize;
        var height = this.blockSize*5;
    }
    else if(wallDirection == "bottom"){
        var entranceX = this.x + blockCoordinate * this.blockSize;
        var entranceY = this.y + this.height - this.blockSize/2;
        var width = this.blockSize*5;
        var height = this.blockSize;
    }
    else if(wallDirection == "right"){
        var entranceX = this.x + this.width - this.blockSize/2
        var entranceY = this.y + blockCoordinate * this.blockSize;
        var width = this.blockSize;
        var height = this.blockSize*5;
    }   
    this.entrances.push(new Entrance(entranceX, entranceY, width, height, wallDirection, exitId, "area"));
    this.entrances[this.entrances.length-1].requirement = requiredMilestone;
    this.replaceEntranceBlocks(this.entrances[this.entrances.length-1]);
}
Area.prototype.replaceEntranceBlocks = function(entrance){
    ////console.log(this)
    //top wall
    if(entrance.wallDirection == "top"){
        var currentBlocks = this.blocks.top;
        for(var x=0, length=this.blockX; x<length; x++){
            var currentBlock = currentBlocks[x];
            if(collideRectRect(entrance.x-entrance.width/2, entrance.y-entrance.height/2, entrance.width, entrance.height, currentBlock.x, currentBlock.y, currentBlock.blockSize, currentBlock.blockSize)){
                entrance.blocks.push(new Block(currentBlock.x, currentBlock.y, currentBlock.blockSize, currentBlock.wallDirection, "locked"));
                currentBlocks.splice(x, 1);
                x -= 1;
                length -= 1;
            }
        }
    }
    
    //left wall
    else if(entrance.wallDirection == "left"){
        var currentBlocks = this.blocks.left;
        for(var y=0, length=this.blockY; y<length; y++){
            var currentBlock = currentBlocks[y];
            if(collideRectRect(entrance.x-entrance.width/2, entrance.y-entrance.height/2, entrance.width, entrance.height, currentBlock.x, currentBlock.y, currentBlock.blockSize, currentBlock.blockSize)){
                entrance.blocks.push(new Block(currentBlock.x, currentBlock.y, currentBlock.blockSize, currentBlock.wallDirection, "locked"));
                currentBlocks.splice(y, 1);
                y -= 1;
                length -= 1;
            }
        }
    }
    //bottom wall
    else if(entrance.wallDirection == "bottom"){
        var currentBlocks = this.blocks.bottom;
        for(var x=0, length=this.blockX; x<length; x++){
            var currentBlock = currentBlocks[x];
            if(collideRectRect(entrance.x-entrance.width/2, entrance.y-entrance.height/2, entrance.width, entrance.height, currentBlock.x, currentBlock.y, currentBlock.blockSize, currentBlock.blockSize)){
                entrance.blocks.push(new Block(currentBlock.x, currentBlock.y, currentBlock.blockSize, currentBlock.wallDirection, "locked"));
                currentBlocks.splice(x, 1);
                x -= 1;
                length -= 1;
            }
        }
    }
    //right wall
    if(entrance.wallDirection == "right"){
        var currentBlocks = this.blocks.right;
        for(var y=0, length=this.blockY; y<length; y++){
            var currentBlock = currentBlocks[y];
            if(collideRectRect(entrance.x-entrance.width/2, entrance.y-entrance.height/2, entrance.width, entrance.height, currentBlock.x, currentBlock.y, currentBlock.blockSize, currentBlock.blockSize)){
                entrance.blocks.push(new Block(currentBlock.x, currentBlock.y, currentBlock.blockSize, currentBlock.wallDirection, "locked"));
                currentBlocks.splice(y, 1);
                y -= 1;
                length -= 1;
            }
        }
    }
}
Area.prototype.show = function(){
    var blocks = this.blocks;
    //top wall
    for(var i=0, length=blocks.top.length; i<length; i++){
        blocks.top[i].show();
    }
    //left wall
    for(var i=1, length=blocks.left.length-1; i<length; i++){
        blocks.left[i].show();
    }
    //bottom wall
    for(var i=0, length=blocks.bottom.length; i<length; i++){
        blocks.bottom[i].show();
    }
    //right wall
    for(var i=1, length=blocks.right.length-1; i<length; i++){
        blocks.right[i].show();
    }
    
    for(var i=0, length=this.entrances.length; i<length; i++){
        if(milestone[this.entrances[i].requirement] == null){
            for(var l of this.entrances[i].blocks){
                l.show();
            }
        }
    }
}


function Room(x, y, blockX, blockY, blockSize, areaId, roomId, roomName){
    this.x = x;
    this.y = y;
    this.blockX = blockX;
    this.blockY = blockY;
    this.blockSize = blockSize;
    this.areaId = areaId;
    this.roomId = roomId;
    this.roomName = roomName;
    this.width = blockX * blockSize;
    this.height = blockY * blockSize;
    this.blocks = {
        top: [],
        left: [],
        bottom: [],
        right: [],
    };
    this.entrances = [];
    this.roomToBlocks();
}
Room.prototype.roomToBlocks = function(){
    //top wall
    for(var x=0; x<this.blockX; x++){
        this.blocks.top.push(new Block(this.x + x*this.blockSize, this.y, this.blockSize, "top"));
    }
    //left wall
    for(var y=0; y<this.blockY; y++){
        this.blocks.left.push(new Block(this.x, this.y + y*this.blockSize, this.blockSize, "left"));
    }
    //bottom wall
    for(var x=0; x<this.blockX; x++){
        this.blocks.bottom.push(new Block(this.x + x*this.blockSize, this.y + this.height - this.blockSize, this.blockSize, "bottom"));
    }
    //right wall
    for(var y=0; y<this.blockY; y++){
        this.blocks.right.push(new Block(this.x + this.width - this.blockSize, this.y + y*this.blockSize, this.blockSize, "right"));
    }
}
Room.prototype.addEntrance = function(wallDirection, exitId){
    if(wallDirection == "top"){
        var entranceX = this.x + (Math.floor(Math.random()*(this.blockX-4))+2) * this.blockSize;
        var entranceY =this.y + this.blockSize/2;
        var width = this.blockSize*2;
        var height = this.blockSize;
    }
    else if(wallDirection == "left"){
        var entranceX = this.x + this.blockSize/2
        var entranceY = this.y + (Math.floor(Math.random()*(this.blockX-4))+2) * this.blockSize;
        var width = this.blockSize;
        var height = this.blockSize*2;
    }
    else if(wallDirection == "bottom"){
        var entranceX = this.x + (Math.floor(Math.random()*(this.blockX-4))+2) * this.blockSize;
        var entranceY = this.y + this.height - this.blockSize/2;
        var width = this.blockSize*2;
        var height = this.blockSize;
    }
    else if(wallDirection == "right"){
        var entranceX = this.x + this.width - this.blockSize/2
        var entranceY = this.y + (Math.floor(Math.random()*(this.blockX-4))+2) * this.blockSize;
        var width = this.blockSize;
        var height = this.blockSize*2;
    }   
    //console.log(areas)
    this.entrances.push(new Entrance(entranceX, entranceY, width, height, wallDirection, exitId, "room"));
    areas[this.areaId].rooms[0].entrances.push(new Entrance(entranceX, entranceY, width, height, null, this.roomId, "room"));
    this.removeEntranceBlocks(this.entrances[this.entrances.length-1]);
}
Room.prototype.removeEntranceBlocks = function(entrance){
    //console.log(this)
    //top wall
    if(entrance.wallDirection == "top"){
        var currentBlocks = this.blocks.top;
        for(var x=0, length=this.blockX; x<length; x++){
            var currentBlock = currentBlocks[x];
            if(collideRectRect(entrance.x-entrance.width/2, entrance.y-entrance.height/2, entrance.width, entrance.height, currentBlock.x, currentBlock.y, currentBlock.blockSize, currentBlock.blockSize)){
                currentBlocks.splice(x, 1);
                x -= 1;
                length -= 1;
            }
        }
    }
    //left wall
    else if(entrance.wallDirection == "left"){
        var currentBlocks = this.blocks.left;
        for(var y=0, length=this.blockY; y<length; y++){
            var currentBlock = currentBlocks[y];
            if(collideRectRect(entrance.x-entrance.width/2, entrance.y-entrance.height/2, entrance.width, entrance.height, currentBlock.x, currentBlock.y, currentBlock.blockSize, currentBlock.blockSize)){
                currentBlocks.splice(y, 1);
                y -= 1;
                length -= 1;
            }
        }
    }
    //bottom wall
    else if(entrance.wallDirection == "bottom"){
        var currentBlocks = this.blocks.bottom;
        for(var x=0, length=this.blockX; x<length; x++){
            var currentBlock = currentBlocks[x];
            if(collideRectRect(entrance.x-entrance.width/2, entrance.y-entrance.height/2, entrance.width, entrance.height, currentBlock.x, currentBlock.y, currentBlock.blockSize, currentBlock.blockSize)){
                currentBlocks.splice(x, 1);
                x -= 1;
                length -= 1;
            }
        }
    }
    //right wall
    if(entrance.wallDirection == "right"){
        var currentBlocks = this.blocks.right;
        for(var y=0, length=this.blockY; y<length; y++){
            var currentBlock = currentBlocks[y];
            if(collideRectRect(entrance.x-entrance.width/2, entrance.y-entrance.height/2, entrance.width, entrance.height, currentBlock.x, currentBlock.y, currentBlock.blockSize, currentBlock.blockSize)){
                currentBlocks.splice(y, 1);
                y -= 1;
                length -= 1;
            }
        }
    }
}
Room.prototype.show = function(){
    var blocks = this.blocks;
    //top wall
    for(var i=0, length=blocks.top.length; i<length; i++){
        blocks.top[i].show();
    }
    //left wall
    for(var i=1, length=blocks.left.length-1; i<length; i++){
        blocks.left[i].show();
    }
    //bottom wall
    for(var i=0, length=blocks.bottom.length; i<length; i++){
        blocks.bottom[i].show();
    }
    //right wall
    for(var i=1, length=blocks.right.length-1; i<length; i++){
        blocks.right[i].show();
    }
}


function Block(x, y, blockSize, wallDirection, type){
    this.x = x;
    this.y = y;
    this.blockSize = blockSize;
    this.wallDirection = wallDirection;
    this.type = type;
    this.wallAlignment = "vertical";
    if(wallDirection == "top" || wallDirection == "bottom"){
        this.wallAlignment = "horizontal";
    }
}
Block.prototype.show = function(){
        image(imageSrc["block"], this.x, this.y, this.blockSize, this.blockSize);
//    image(imageSrc[this.type + "block" + this.wallAlignment], this.x, this.y, this.blockSize, this.blockSize);
}

function Entrance(x, y, width, height, wallDirection, exitId, type){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.wallDirection = wallDirection;
    this.exitId = exitId;
    this.type = type;
    this.blocks = [];
    this.requirement = null;
}


// Zombie

function Zombie(x, y,areaId, roomId, type){
    this.x = x;
    this.y = y;
    this.roomId = roomId;
    this.areaId = areaId
    this.type = type;
    this.type.parent = this;
    this.health = type.maxHealth;
    this.idleLocationX;
    this.idleLocationY;
    this.velocityX;
    this.velocityY;
    this.velocityDirection;
    this.animationStep = 0;
    this.lineOfSight;
    this.alerted = false;
    this.investigation = {};
    this.aggravated = false;
    this.enemy = {};
    this.action = "motion";
    
    this.updateIdlePosition();
    this.updateKinematic();
    ////console.log(this.velocityX, this.velocityY)
}
Zombie.prototype.updateKinematic = function(){
    var roomDilemma = false;
    var calm = 1;
    if(this.aggravated){
        if(this.enemy.roomId == this.roomId){
            var differenceX = this.enemy.x - this.x;
            var differenceY = this.enemy.y - this.y;
        }
        else{
            var entrance = false;
            roomDilemma = true;
            for(var i=1, length=rooms[this.roomId].entrances.length; i<length; i++){
                if(rooms[this.roomId].entrances[i].exitId == this.enemy.roomId){
//                    rootDilemma = false
                    entrance = rooms[this.roomId].entrances[i];
                    i = length;
                }
            }
            if(!entrance){
                entrance = rooms[this.enemy.roomId].entrances[0];
            }
            var differenceX = entrance.x - this.x;
            var differenceY = entrance.y - this.y;
        }
    }
    else if(this.alerted){
        calm=.75
        if(this.investigation.roomId == this.roomId){
            var differenceX = this.investigation.x - this.x;
            var differenceY = this.investigation.y - this.y;
        }
        else{
            var entrance = false;
            roomDilemma = true;
            for(var i=1, length=rooms[this.roomId].entrances.length; i<length; i++){
                if(rooms[this.roomId].entrances[i].exitId == this.investigation.roomId){
                    entrance = rooms[this.roomId].entrances[i];
                    i = length;
                }
            }
            if(!entrance){
                entrance = rooms[this.roomId].entrances[0];
            }
            var differenceX = entrance.x - this.x;
            var differenceY = entrance.y - this.y;
        }
    }
    else{
        calm = .5
        var differenceX = this.idleLocationX - this.x;
        var differenceY = this.idleLocationY - this.y;
    }
    var hypotenuse = findHypotenuse(differenceX, differenceY);
    if(this.aggravated){
        hypotenuse -= this.type.preferredDistanceFromEnemy;
    }
    var theta = findRotation(differenceX, differenceY);
    
    if(hypotenuse <= this.type.speed){ 
        this.x += differenceX;
        this.y += differenceY;
        if(roomDilemma){
            this.updateRoomId();
        }
        else if(this.aggravated){
            this.action = "attack";
            this.animationStep = 0;
        }
        else if(this.alerted){
            this.alerted = false;
            this.investigation = null;
            this.updateIdlePosition();
        }
        else{
            this.updateIdlePosition();
        }
    }
    else{
        this.velocityX = (this.type.speed * calm) * Math.cos(theta);
        this.velocityY = (this.type.speed * calm) * Math.sin(theta);
        var safeY = true
        var safeX = true
    for(var f of areas[this.areaId].rooms){
       
            for(var k of f.blocks.top){
            if(collideRectRect(this.x,this.y+this.velocityY,this.type.width,this.type.height,k.x,k.y,f.blockSize,f.blockSize)){
                safeY = false
            }
                if(collideRectRect(this.x+this.velocityX,this.y,this.type.width,this.type.height,k.x,k.y,f.blockSize,f.blockSize)){
                safeX = false
            }  
            }
            for(var k of f.blocks.bottom){
            if(collideRectRect(this.x,this.y+this.velocityY,this.type.width,this.type.height,k.x,k.y,f.blockSize,f.blockSize)){
                safeY = false
            }
                if(collideRectRect(this.x+this.velocityX,this.y,this.type.width,this.type.height,k.x,k.y,f.blockSize,f.blockSize)){
                safeX = false
            }
            }
            for(var k of f.blocks.left){
            if(collideRectRect(this.x,this.y+this.velocityY,this.type.width,this.type.height,k.x,k.y,f.blockSize,f.blockSize)){
                safeY = false
            }
                if(collideRectRect(this.x+this.velocityX,this.y,this.type.width,this.type.height,k.x,k.y,f.blockSize,f.blockSize)){
                safeX = false
            }  
            }
            for(var k of f.blocks.right){
            if(collideRectRect(this.x,this.y+this.velocityY,this.type.width,this.type.height,k.x,k.y,f.blockSize,f.blockSize)){
                safeY = false
            }
                if(collideRectRect(this.x+this.velocityX,this.y,this.type.width,this.type.height,k.x,k.y,f.blockSize,f.blockSize)){
                safeX = false
            } 
            }
        
        
    }
        if(safeX){
        this.x += this.velocityX;
        }
        if(safeY){
        this.y += this.velocityY;
        }
        this.updateRoomId()
    }
}
Zombie.prototype.updateRoomId = function(){
    var isCollision = false;
    for(var i=1, length=rooms.length; i<length; i++){
        var currentRoom = rooms[i];
        if(collidePointRect(this.x, this.y, currentRoom.x, currentRoom.y, currentRoom.width, currentRoom.height)){
            this.roomId = currentRoom.roomId;
            isCollision = true;
        }
    }
    if(!isCollision){
        this.roomId = 0;
    }
}
Zombie.prototype.updateIdlePosition = function(){
    var mustRelocate = false;
//    this.updateRoomId()
    var theta = Math.random()*TWO_PI;
    var distance = (Math.random()*(this.type.idleLocationMaxDistance-100))+100;
    var idleLocationX = this.x + distance * Math.cos(theta);
    var idleLocationY = this.y + distance * Math.sin(theta);
    if(this.roomId != findRoom(idleLocationX,idleLocationY) && !mustRelocate){
//        for(var i=0, length=rooms.length; i<length; i++){
//            var currentRoom = rooms[i];
//            if(collideRectRect(idleLocationX, idleLocationY, this.type.width, this.type.height, currentRoom.x, currentRoom.y, currentRoom.width, currentRoom.height)){
//                mustRelocate = true;
////                i = length;
//            }
//        }
        mustRelocate = true
    }
    if(mustRelocate){
        this.updateIdlePosition();
    }
    else{
        this.idleLocationX = idleLocationX;
        this.idleLocationY = idleLocationY;
    }
}
Zombie.prototype.soundCollision = function(){
    for(var i=0, length=soundWaves.length; i<length; i++){
        var currentWave = soundWaves[i];
        var zombiePinged = false;
        for(var l=0, pingLength=currentWave.zombiePinged.length; l<pingLength; l++){
            if(currentWave.zombiePinged[l] == this){
                zombiePinged = true;
            }
        }
//        var hearChance = Math.random()
        if(!zombiePinged && collideRectCircle(this.x, this.y, this.type.width, this.type.height, currentWave.originX, currentWave.originY, currentWave.currentRadius)){
//                    ////console.log(hearChance+"pre")
//                            ////console.log((currentWave.intensity/currentWave.currentRadius)*10)
            currentWave.zombiePinged.push(this)
            if(!this.aggravated && (!this.alerted || this.investigation.curiousLevel < (currentWave.intensity/currentWave.currentRadius)) && .4<((currentWave.intensity/currentWave.currentRadius)*10)){
//                ////console.log(hearChance)
                this.alerted = true;
                this.investigation = new Investigation(currentWave.originX, currentWave.originY, currentWave.roomId, currentWave.intensity/currentWave.currentRadius)
                currentWave.zombiePinged.push(this);
            }
        }
    }
}
Zombie.prototype.threatenZoneCollision = function(){
    if(collideRectCircle(player.x, player.y, player.width, player.height, this.x+this.type.width/2, this.y+this.type.height/2, this.type.threatRadius)){
        this.aggravated = true;
        this.enemy = player;
        if(this.alerted){
            this.alerted = false;
            this.investigation = null;
        }
    }
}
Zombie.prototype.show = function(){
    var direction = "right";
    if(this.velocityX < 0){
        direction = "left";
    }
    //image(imageSrc[this.type.tag + this.action + direction][this.animationStep], this.x, this.y, this.type.width, this.type.height);
    
    var healthWidth = map(this.hp, 0, this.type.maxHp, 0, this.type.width);
    noFill()
    stroke("black")
    strokeWeight(1)
    rect(this.x, this.y+this.type.height+5, this.width, 5);
    fill("red")
    rect(this.x, this.y+this.type.height+5, healthWidth, 5)
    
    fill("purple");
    rect(this.x, this.y, this.type.width, this.type.height);
    
    
    if(this.aggravated){
        textAlign(CENTER, BOTTOM);
        fill("red")
        stroke("black")
        strokeWeight(1);
        textSize(30);
        text("!", this.x+this.type.width/2, this.y-7);
    }
    else if(this.alerted){
        textAlign(CENTER, BOTTOM);
        fill("red")
        stroke("black")
        strokeWeight(1);
        textSize(30);
        text("?", this.x+this.type.width/2, this.y-7);
    }
    
    this.animationStep += 1;
    if(this.animationStep > attackFrame){
        this.animationStep = 0;
    }
    /*if(this.animationStep == imageSrc[this.type.tag + this.action + direction].length){
        this.animationStep = 0;
    }*/
}
Zombie.prototype.showThreatenZone = function(){
    fill(0, 50);
    stroke(0, 100);
    ellipse(this.x+this.type.width/2, this.y+this.type.height/2, this.type.threatRadius);
}
Zombie.prototype.playerCollision = function(){
    if(collideRectRect(this.x, this.y, this.type.width, this.type.height, player.x, player.y, player.width, player.height)){    
       this.action = "attack";
    }
}


// Zombie Type

function MeleeZombie(){
    this.maxHealth = 0;
    this.width = 40;
    this.height = 50;
    this.speed = 3.5;
    this.soundThreshold = 100;
    this.lineOfSight = {
        angleMax: 50,
        distanceMax: 50,
    }
    this.threatRadius = 280;
    this.preferredDistanceFromEnemy = 7;
    
    this.idleLocationMaxDistance = 150;
    this.damage = 70;
    this.attackAnimationStep = 4;
    this.tag = "meleeZombie";
}
MeleeZombie.prototype.attack = function(enemy){
    if(this.parent.animationStep == this.attackAnimationStep){
        if(collideRectRect(this.parent.x, this.parent.y, this.width, this.height, enemy.x, enemy.y, enemy.width, enemy.height)){
            enemy.health -= this.damage;
            //console.log("attacked")
        } 
    }
    if(this.parent.animationStep == attackFrame-1){
        this.parent.action = "motion";
    }
    if(enemy.health <= 0){
        enemy.death = true;
        this.parent.aggravated = false;
        this.parent.enemy = null;
        deathAnimation();
        this.parent.updateIdlePosition();
    }
}
function findRoom(x,y){
    var isCollision = false;
    for(var i=1, length=rooms.length; i<length; i++){
        var currentRoom = rooms[i];
        if(collidePointRect(x, y, currentRoom.x, currentRoom.y, currentRoom.width, currentRoom.height)){
//            this.roomId = currentRoom.roomId;
            isCollision = currentRoom.roomId;
        }
    }
    if(!isCollision){
        this.roomId = 0;
    }
    return isCollision
    
}
function Investigation(x, y, roomId, curiousLevel){
    this.x = x;
    this.y = y;
    this.roomId = roomId;
    this.curiousLevel = curiousLevel;
}

// Support

function findProportionalFactor(dx, dy, dh){
  var k = 0;
  if(dx != 0 || dy != 0){
    k = Math.sqrt(Math.pow(dh, 2) / (Math.pow(dx, 2)+Math.pow(dy, 2)));
  }
  return k;
}

function findRotation(dx, dy){
  var dh = Math.sqrt(Math.pow(dy, 2) + Math.pow(dx, 2));  
  var rotationRadian = 0;
  if(dh != 0){
    rotationRadian = Math.acos(dx / dh);
  }
  if(dy < 0){
    rotationRadian *= -1;
  } 
  return rotationRadian;
}

function findHypotenuse(dx, dy){
  return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
}

function posNeg(number){
  if(number != 0){
    return number / Math.abs(number);
  }
  else {
    return 0;
  }
}


var dragObject = null;
var tutorialActive = false;
var tutorialSlide = 1;
var gameOverScreen = false;

//Draggable Tutorial

dragElement(document.getElementById("tutorialSpace"));
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "Header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "Header").onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        if(elmnt.offsetLeft > windowWidth-330){
            elmnt.style.left = (windowWidth - 330) + "px";
        }
        else if(elmnt.offsetLeft < 330){
            elmnt.style.left = 330 + "px";
        }
        if(elmnt.offsetTop > windowHeight-155){
            elmnt.style.top = (windowHeight - 155) + "px";
        }
        else if(elmnt.offsetTop < 155){
            elmnt.style.top = 155 + "px";
        }
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function displayTutorialSpace(){
    document.getElementById("tutorialSpace").setAttribute("style", "display: inline; top: 50%; left: 50%; transform: (-50%, -50%);");  
    tutorialSlide = 1;  
    tutorialContent();
    tutorialActive = true;
    if(dragObject != null){
        dragObject.parent.isDragged = false;
        dragObject.parent.isSnake = true;
        dragObject = null;
    }
    gameActive = false;
    noLoop();
}

function hideTutorialSpace(){
    document.getElementById("tutorialSpace").setAttribute("style", "display: none;");
    if(!gameOverScreen){
        gameActive = true;
    }
    tutorialActive = false;
    loop();
}

function tutorialContent(){
    if(tutorialSlide == 1){
        document.getElementById("tutorialText").innerHTML = "<p style='text-indent: 50px;'>On the 4th day of the 5th month of 2035, a normal night on a normal day seemed to have something amiss. Overnight, all the rose bushes in the world had suddenly grown to enormous heights. With their new growth, they gained a weird toxin which began to spread to the humans of the world. Many people fell victim to the infectious toxin and turned into mutated rose zombies. The few humans that weren’t affected now survive in the wasteland that is Earth, against the ever increasing amount of rose zombies.</p><button class='nextButton' onclick='displayNextSlide()'>Next: <i class='arrow right'></i></button>"; 
        document.getElementById("tutorialSpaceHeader").innerHTML = "Background";
    }
    else if(tutorialSlide == 2){
        document.getElementById("tutorialText").innerHTML = "<p>Mouse Input:<br>&emsp;Mouse Move: Aim gun<br>&emsp;Mouse Press: Fire gun<br>Keyboard Input:<br>&emsp;WASD = Move Player<br>&emsp;WASD + Shift = Stealth<br>&emsp;E Key = Interact with Items</p><button class='previousButton' onclick='displayPreviousSlide()'><i class='arrow left'></i> :Previous</button><button class='nextButton' onclick='displayNextSlide()'>Next: <i class='arrow right'></i></button>";
        document.getElementById("tutorialSpaceHeader").innerHTML = "Instruction";
    }
    else if(tutorialSlide == 3){
        document.getElementById("tutorialText").innerHTML = "<p>Game Designers:<br>&emsp;Design Crew: Liam Dimas, Mia Meyers, Khai Sam<br>&emsp;Coding Crew: Liam Dimas, Khai Sam<br>&emsp;Art Crew: Alexander Flores, Mia Meyers<br>&emsp;Sound Crew: Juan Carlos, Alexander Flores</p><button class='previousButton' onclick='displayPreviousSlide()'><i class='arrow left'></i> :Previous</button><button class='nextButton' onclick='displayNextSlide()'>Next: <i class='arrow right'></i></button>";
        document.getElementById("tutorialSpaceHeader").innerHTML = "Credit";
    }
    else if(tutorialSlide == 4){
        document.getElementById("tutorialText").innerHTML = "<p>Game Sponsors:<br>&emsp;National Student Leadership Conference<br>&emsp;EA Industrial Toys<br>&emsp;Pasadena Educational Foundation<br>&emsp;Art Center<br>&emsp;Innovate Pasadena<br>&emsp;Caltech</p><button class='previousButton' onclick='displayPreviousSlide()'><i class='arrow left'></i> :Previous</button>";
        document.getElementById("tutorialSpaceHeader").innerHTML = "Credit";
    }
}

function displayNextSlide(){
    tutorialSlide += 1;
    tutorialContent();
}

function displayPreviousSlide(){
    tutorialSlide -= 1;
    tutorialContent();
}