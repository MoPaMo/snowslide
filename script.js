var config = {
  type: Phaser.AUTO,
  width: screen.width,
  height: screen.height,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200,x:0 },
    },
  },
  scene: {
    preload: preload,
    create: create,
  },
};

var game = new Phaser.Game(config);

function preload() {
  this.load.setBaseURL("/");

  this.load.image("sky", "assets/space3.png");
  this.load.image("red", "assets/red.png");
  this.load.image("white", "assets/white.png");
  this.load.image("sleigh", "assets/sleigh_lg.png");
}

function create() {
  this.add.image(400, 300, "sky");
        this.cameras.main.setSize(screen.width, screen.height);
  var particles = this.add.particles("red");

  var avatar = this.physics.add.image(400, 100, "sleigh");
avatar.setScale(0.25,0.25);
  avatar.setVelocity(100, 200);
  avatar.setCollideWorldBounds(true);
        this.cameras.main.startFollow(avatar);
  var snow = this.add.particles("white");

  snow.createEmitter({
    x: { min: 00, max: screen.width },
    y: 1,
    lifespan: 2000,
    speedY: { min: 200, max: 400 },
    scale: { start: 0.2, end: 0 },
    quantity: 2,
    blendMode: "ADD",
  });
}
