class Gameover extends Phaser.Scene {
  constructor() {
    super({ key: "Gameover" });
  }
  preload() {
    this.load.image("logo", "img/logo_luminis.png");
    this.load.image("boutons", "img/orange_button_Text.png");
  }

  create() {
    //à partir de la, je n'ai pas été capable de voir mes changements, désoler d'avance si ca ressemble à rie
    let MenuPrinc = this.add
      .image(100, 50, "boutons")
      .setCrop(385, 0, 78, 32)
      .setPosition(800, 1050)
      .setScale(2.5);
    MenuPrinc.setInteractive();
    MenuPrinc.on("pointerdown", () => {
      this.scene.start("Accueil");
    });
  }

  update() {}
}
