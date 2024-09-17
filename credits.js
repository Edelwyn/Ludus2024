class Credits extends Phaser.Scene {
  constructor() {
    super({ key: "credits" }); // Assignez une clé unique à votre scène
  }
  preload() {
    this.load.image("logo", "img/logo_luminis.png");
    this.load.image("boutons", "img/orange_button_Text.png");
  }

  create() {
    let graphics = this.add.graphics();

    graphics.fillStyle(0x8a221a);

    graphics.fillRect(0, 0, this.scale.width, this.scale.height);
    this.add.image(200, 200, "logo").setAlpha(0.5).setPosition(100, 100);

    let logo = this.add

      .image(400, 300, "logo")
      .setAlpha(0.5)
      .setPosition(100, 100);
    //à partir de la, je n'ai pas été capable de voir mes changements, désoler d'avance si ca ressemble à rien
    let btnBack = this.add
      .image(100, 50, "boutons")
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
