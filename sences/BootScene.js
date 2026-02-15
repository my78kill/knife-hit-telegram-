export default class BootScene extends Phaser.Scene {
    constructor(){
        super('BootScene');
    }

    preload(){
        this.load.image('knife','assets/knife.png');
        this.load.image('wood','assets/wood.png');
        this.load.image('apple','assets/apple.png');
    }

    create(){
        this.scene.start('MenuScene');
    }
}