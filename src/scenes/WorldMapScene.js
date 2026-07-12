import Phaser from "phaser";

export default class WorldMapScene extends Phaser.Scene {

    constructor() {
        super("WorldMapScene");
    }

    create() {

        this.cameras.main.setBackgroundColor("#5d8b4b");

        this.add.text(
            360,
            100,
            "WORLD MAP",
            {
                fontSize: "52px",
                color: "#ffffff"
            }
        ).setOrigin(0.5);

        const levels = [
            { x: 180, y: 320 },
            { x: 360, y: 470 },
            { x: 250, y: 680 },
            { x: 500, y: 900 },
            { x: 360, y: 1120 }
        ];

        levels.forEach((level, index) => {

            const circle = this.add.circle(
                level.x,
                level.y,
                38,
                0xffffff
            );

            const text = this.add.text(
                level.x,
                level.y,
                (index + 1).toString(),
                {
                    color: "#000",
                    fontSize: "28px"
                }
            ).setOrigin(0.5);

            circle.setInteractive();

            circle.on("pointerdown", () => {

                this.scene.start("PuzzleScene", {
                    level: index + 1
                });

            });

        });

    }

}