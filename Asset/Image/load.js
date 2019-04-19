var imageSrc = {}

function preload(){
    
    imageSrc["playerWalkingLeft"] = [loadImage("PlayerWalkingLeft/0.png"), loadImage("PlayerWalkingLeft/1.png"), loadImage("PlayerWalkingLeft/2.png"), loadImage("PlayerWalkingLeft/3.png"), loadImage("PlayerWalkingLeft/4.png"), loadImage("PlayerWalkingLeft/5.png"), loadImage("PlayerWalkingLeft/6.png"), loadImage("PlayerWalkingLeft/7.png")];

    imageSrc["playerWalkingRight"] = [loadImage("PlayerWalkingRight/0.png"), loadImage("PlayerWalkingRight/1.png"), loadImage("PlayerWalkingRight/2.png"), loadImage("PlayerWalkingRight/3.png"), loadImage("PlayerWalkingRight/4.png"), loadImage("PlayerWalkingRight/5.png"), loadImage("PlayerWalkingRight/6.png"), loadImage("PlayerWalkingRight/7.png")];

    imageSrc["playerCrouchingLeft"] = [loadImage("PlayerCrouchingLeft/0.png"), loadImage("PlayerCrouchingLeft/1.png"), loadImage("PlayerCrouchingLeft/2.png"), loadImage("PlayerCrouchingLeft/3.png"), loadImage("PlayerCrouchingLeft/4.png")];

    imageSrc["playerCrouchingRight"] = [loadImage("PlayerCrouchingRight/0.png"), loadImage("PlayerCrouchingRight/1.png"), loadImage("PlayerCrouchingRight/2.png"), loadImage("PlayerCrouchingRight/3.png"), loadImage("PlayerCrouchingRight/4.png")];

    imageSrc["playerIdle"] = [loadImage("PlayerIdle/0.png"), loadImage("PlayerIdle/1.png"), loadImage("PlayerIdle/2.png"), loadImage("PlayerIdle/3.png"), loadImage("PlayerIdle/4.png"), loadImage("PlayerIdle/5.png"), loadImage("PlayerIdle/6.png")];
    
    imageSrc["playerAttackLeft"] = [loadImage("PlayerAttack/0.png")];
    
    imageSrc["playerAttackRight"] = [loadImage("PlayerAttack/1.png")];
    
    imageSrc["playerDeath"] = [loadImage("death/0.png"), loadImage("death/1.png"), loadImage("death/2.png"), loadImage("death/3.png"), loadImage("death/4.png"), loadImage("death/5.png"), ]

    imageSrc["zombieWalkingLeft"] = [loadImage("Zombie/WalkLeft/0.png"), loadImage("Zombie/WalkLeft/1.png"), loadImage("Zombie/WalkLeft/2.png"), loadImage("Zombie/WalkLeft/3.png")];

    imageSrc["zombieWalkingRight"] = [loadImage("Zombie/WalkRight/0.png"), loadImage("Zombie/WalkRight/1.png"), loadImage("Zombie/WalkRight/2.png"), loadImage("Zombie/WalkRight/3.png")];

    imageSrc["zombieIdle"] = loadImage("Zombie/idle/0.png");
    
    imageSrc["zombieAttackLeft"] = [loadImage("Zombie/attack/left/0.png"), loadImage("Zombie/attack/left/1.png"), loadImage("Zombie/attack/left/2.png")];
    
    imageSrc["zombieAttackRight"] = [loadImage("Zombie/attack/right/0.png"), loadImage("Zombie/attack/right/1.png"), loadImage("Zombie/attack/right/2.png")]
    
    imageSrc["zombieDeath"] = [loadImage("Zombie/death/00.png"), loadImage("Zombie/death/01.png"), loadImage("Zombie/death/02.png"), loadImage("Zombie/death/03.png"), loadImage("Zombie/death/04.png"), loadImage("Zombie/death/05.png"), loadImage("Zombie/death/06.png"), loadImage("Zombie/death/07.png"), loadImage("Zombie/death/08.png"), loadImage("Zombie/death/09.png"), loadImage("Zombie/death/10.png"), ]

    imageSrc["textures"] = [loadImage("StationaryObjects/cobblestone.png"), loadImage("StationaryObjects/wood.png"), loadImage("StationaryObjects/rosebush.png"), loadImage("StationaryObjects/Mossy & Cracked Road.png"), loadImage("StationaryObjects/Mossy & Cracked Road Vertical.png")];

    imageSrc["tree"] = [loadImage("StationaryObjects/(optional)tree/00.png"), loadImage("StationaryObjects/(optional)tree/01.png"), loadImage("StationaryObjects/(optional)tree/02.png"), loadImage("StationaryObjects/(optional)tree/03.png"), loadImage("StationaryObjects/(optional)tree/04.png"), loadImage("StationaryObjects/(optional)tree/05.png"), loadImage("StationaryObjects/(optional)tree/06.png"), loadImage("StationaryObjects/(optional)tree/07.png"), loadImage("StationaryObjects/(optional)tree/08.png"), loadImage("StationaryObjects/(optional)tree/09.png"), loadImage("StationaryObjects/(optional)tree/10.png"), loadImage("StationaryObjects/(optional)tree/11.png"), loadImage("StationaryObjects/(optional)tree/12.png"), loadImage("StationaryObjects/(optional)tree/13.png"), loadImage("StationaryObjects/(optional)tree/14.png"), loadImage("StationaryObjects/(optional)tree/15.png"), loadImage("StationaryObjects/(optional)tree/16.png"), loadImage("StationaryObjects/(optional)tree/17.png"), loadImage("StationaryObjects/(optional)tree/18.png")];

    imageSrc["hitmarker"] = [loadImage("StationaryObjects/hitmarker/0.png"), loadImage("StationaryObjects/hitmarker/1.png")];

    imageSrc["wardrobe"] = [loadImage("StationaryObjects/wardrobe/0.png"), loadImage("StationaryObjects/wardrobe/1.png")];
    imageSrc["titlescreen"] = loadImage("StationaryObjects/titlescreen.png");

}
