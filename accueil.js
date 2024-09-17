class Accueil extends Phaser.Scene {
  constructor() {
    super({ key: "Accueil" });
  }
  preload() {
    this.load.image("logo", "img/logo_luminis.png");
    this.load.image("boutons", "img/orange_button_Text.png");
    this.load.image("boutonsIcones", "img/orange_button_icons.png");
  }

  create() {
    let graphics = this.add.graphics();

    graphics.fillStyle(0x8a221a);

    graphics.fillRect(0, 0, this.scale.width, this.scale.height);

    let logo = this.add
      .image(100, 300, "logo")
      .setAlpha(0.5)
      .setPosition(100, 100);

    let btnStart = this.add
      .image(100, 50, "boutons")
      .setCrop(129, 0, 62, 32)
      .setPosition(1100, 1050)
      .setScale(2.5);
    btnStart.setInteractive();
    btnStart.on("pointerdown", () => {
      this.scene.start("Jeu");
    });

    let btnCredits = this.add
      .image(100, 50, "boutons")
      .setCrop(385, 0, 78, 32)
      .setPosition(800, 1050)
      .setScale(2.5);
    btnCredits.setInteractive();
    btnCredits.on("pointerdown", () => {
      this.scene.start("credits");
    });

    let btnAudio = this.add
      .image(50, 50, "boutonsIcones")
      .setCrop(256, 193, 32, 30)
      .setPosition(560, 550)
      .setScale(2.5);

    let btnComJouer = this.add
      .text(100, 50, "Comment jouer")
      .setPosition(700, 650);
    btnComJouer.setInteractive();
    btnComJouer.on("pointerdown", () => {
      this.scene.start("CommentJouer");
    });
  }

  update() {}
}
