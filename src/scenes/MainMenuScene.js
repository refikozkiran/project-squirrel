import Phaser from "phaser";

export default class MainMenuScene extends Phaser.Scene {

    constructor() {
        super("MainMenuScene");
    }

    create() {

        // Arkaplan
        this.cameras.main.setBackgroundColor("#1d4735");

        // Hareket eden yıldız/toz parçacıkları
        this.particles = [];

        for (let i = 0; i < 40; i++) {

            const dot = this.add.circle(

                Phaser.Math.Between(0,720),

                Phaser.Math.Between(0,1280),

                Phaser.Math.Between(1,3),

                0xffffff,

                0.35

            );

            this.tweens.add({

                targets: dot,

                y: dot.y - Phaser.Math.Between(100,300),

                alpha: 0,

                duration: Phaser.Math.Between(4000,7000),

                repeat:-1

            });

            this.particles.push(dot);

        }

        // Logo
        this.logo = this.add.text(

            360,

            260,

            "🌳",

            {

                fontSize:"110px"

            }

        ).setOrigin(.5);

        this.tweens.add({

            targets:this.logo,

            scale:1.08,

            duration:1200,

            yoyo:true,

            repeat:-1

        });

        // Başlık
        this.add.text(

            360,

            420,

            "Oakling Adventures",

            {

                fontSize:"56px",

                fontStyle:"bold",

                color:"#ffffff"

            }

        ).setOrigin(.5);

        this.add.text(

            360,

            490,

            "Discover the Forest",

            {

                fontSize:"28px",

                color:"#d7eadb"

            }

        ).setOrigin(.5);

        this.createButton(360,700,"PLAY",()=>{

            this.scene.start("WorldMapScene");

        });

        this.createButton(360,820,"SETTINGS",()=>{

            alert("Settings yakında eklenecek");

        });

        this.createButton(360,940,"HOW TO PLAY",()=>{

            alert("How To Play yakında eklenecek");

        });

    }

    createButton(x,y,text,callback){

        const btn=this.add.rectangle(

            x,

            y,

            320,

            82,

            0x2f6b4b

        ).setStrokeStyle(3,0xffffff);

        const label=this.add.text(

            x,

            y,

            text,

            {

                fontSize:"32px",

                color:"#ffffff"

            }

        ).setOrigin(.5);

        btn.setInteractive({useHandCursor:true});

        btn.on("pointerover",()=>{

            this.tweens.add({

                targets:[btn,label],

                scale:1.05,

                duration:120

            });

        });

        btn.on("pointerout",()=>{

            this.tweens.add({

                targets:[btn,label],

                scale:1,

                duration:120

            });

        });

        btn.on("pointerdown",()=>{

            this.tweens.add({

                targets:[btn,label],

                scale:.92,

                duration:80,

                yoyo:true,

                onComplete:callback

            });

        });

    }

}