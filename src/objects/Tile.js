import Phaser from "phaser";

export default class Tile {

    constructor(scene, row, col, type, size) {

        this.scene = scene;

        this.row = row;
        this.col = col;

        this.type = type;

        this.size = size;

        this.selected = false;

        this.sprite = scene.add.rectangle(
            0,
            0,
            size - 8,
            size - 8,
            this.getColor(type)
        );

        this.sprite.setStrokeStyle(3, 0xffffff);

        this.sprite.setInteractive({
            useHandCursor: true
        });

        this.sprite.tile = this;

    }

    getColor(type) {

        switch(type){

            case "acorn":
                return 0x8B5A2B;

            case "leaf":
                return 0x45b649;

            case "flower":
                return 0xff66cc;

            case "mushroom":
                return 0xff4444;

            case "crystal":
                return 0x55ccff;

            case "wood":
                return 0xb8860b;

            default:
                return 0xffffff;

        }

    }

    setPosition(x,y){

        this.sprite.setPosition(x,y);

    }

    select(){

        this.selected = true;

        this.scene.tweens.add({

            targets:this.sprite,

            scale:1.15,

            duration:120

        });

    }

    unselect(){

        this.selected = false;

        this.scene.tweens.add({

            targets:this.sprite,

            scale:1,

            duration:120

        });

    }

    swap(other){

        const tempRow=this.row;
        const tempCol=this.col;

        this.row=other.row;
        this.col=other.col;

        other.row=tempRow;
        other.col=tempCol;

    }

}