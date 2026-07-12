import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {

    constructor() {
        super("PreloadScene");
    }

    preload() {

        this.cameras.main.setBackgroundColor("#0f1712");

        this.add.text(360, 450, "Oakling Adventures", {
            fontSize: "54px",
            color: "#ffffff"
        }).setOrigin(0.5);

        this.loadingText = this.add.text(360, 560, "Loading 0%", {
            fontSize: "28px",
            color: "#b8d5c2"
        }).setOrigin(0.5);

        const bar = this.add.graphics();

        this.load.on("progress", value => {

            bar.clear();

            bar.fillStyle(0xffffff);

            bar.fillRect(160, 650, 400 * value, 12);

            this.loadingText.setText(
                "Loading " + Math.floor(value * 100) + "%"
            );

        });

        // Şimdilik sahte yükleme
        for (let i = 0; i < 80; i++) {
            this.load.image("bg_forest","images/backgrounds/forest_day.png");

            this.load.image("tile_leaf","images/board/tile_leaf.png");

            this.load.image("btn_play","images/ui/play_button.png");
        }

    }

    create() {

        this.time.delayedCall(400, () => {

            this.scene.start("MainMenuScene");

        });

    }

}