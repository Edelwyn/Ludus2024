const config = {
  type: Phaser.AUTO,
  parent: "canvas-wrapper",
  width: 2500,
  height: 1200,
  transparent: true,
  scene: [Accueil, Jeu, Credits, CommentJouer, Gameover, Victoire],
};
const game = new Phaser.Game(config);
