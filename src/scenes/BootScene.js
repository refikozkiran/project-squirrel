import Phaser from "phaser";

export default class BootScene extends Phaser.Scene {

    constructor() {
        super("BootScene");
    }

    create() {

        this.cameras.main.fadeIn(600, 0, 0, 0);

        this.scene.start("PreloadScene");

    }

}