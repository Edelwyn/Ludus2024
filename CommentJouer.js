class CommentJouer extends Phaser.Scene {
  constructor() {
    super({ key: "CommentJouer" }); // Assignez une clé unique à votre scène
  }
  preload() {
    this.load.image("logo", "img/logo_luminis.png");
  }

  create() {
    let graphics = this.add.graphics();

    graphics.fillStyle(0x8a221a);

    graphics.fillRect(0, 0, this.scale.width, this.scale.height);
    //à partir de la, je n'ai pas été capable de voir mes changements, désoler d'avance si ca ressemble à rien
    let logo = this.add
      .image(400, 300, "logo")
      .setAlpha(0.5)
      .setPosition(100, 100);

    let btnBack = this.add
      .image(100, 100, "boutons")
      .setCrop(129, 0, 62, 32)
      .setPosition(300, 550)
      .setScale(2.5);
    btnBack.setInteractive();
    btnBack.on("pointerdown", () => {
      this.scene.start("Accueil");
    });
  }

  update() {}
}
