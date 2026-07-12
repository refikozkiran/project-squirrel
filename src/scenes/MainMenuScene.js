import Phaser from "phaser";

export default class MainMenuScene extends Phaser.Scene{

constructor(){

super("MainMenuScene");

}

create(){

this.cameras.main.setBackgroundColor("#234833");

this.add.text(

360,

350,

"Oakling Adventures",

{

fontSize:"56px",

color:"#ffffff"

}

).setOrigin(.5);

}
}