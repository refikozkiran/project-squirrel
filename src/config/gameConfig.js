import Phaser from "phaser";

import BootScene from "../scenes/BootScene.js";
import PreloadScene from "../scenes/PreloadScene.js";
import MainMenuScene from "../scenes/MainMenuScene.js";

export default {

    type: Phaser.AUTO,

    width: 720,

    height: 1280,

    backgroundColor: "#1b4b36",

    parent: "game",

    scale: {

        mode: Phaser.Scale.FIT,

        autoCenter: Phaser.Scale.CENTER_BOTH

    },

    scene: [

        BootScene,

        PreloadScene,

        MainMenuScene

    ]

};