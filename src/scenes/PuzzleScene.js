import Phaser from "phaser";

export default class PuzzleScene extends Phaser.Scene {

    constructor() {
        super("PuzzleScene");
    }

    init(data) {

        this.level = data.level || 1;

    }

    create() {

        this.cameras.main.setBackgroundColor("#264d3a");

        this.add.text(
            360,
            120,
            "LEVEL " + this.level,
            {
                fontSize: "54px",
                color: "#ffffff"
            }
        ).setOrigin(0.5);

        this.add.rectangle(
            360,
            700,
            520,
            520,
            0x3a5f47
        );

        this.add.text(
            360,
            700,
            "Puzzle Engine\nComing Soon",
            {
                align: "center",
                fontSize: "34px",
                color: "#ffffff"
            }
        ).setOrigin(0.5);

        const back = this.add.text(
            360,
            1180,
            "← BACK",
            {
                fontSize: "32px",
                color: "#ffffff"
            }
        )
        .setOrigin(0.5)
        .setInteractive();

        back.on("pointerdown", () => {

            this.scene.start("WorldMapScene");

        });

    }

}