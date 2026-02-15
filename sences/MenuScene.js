export default class MenuScene extends Phaser.Scene {
    constructor(){
        super('MenuScene');
    }

    create(){
        this.add.text(200,300,"KNIFE HIT",{fontSize:"32px",color:"#fff"}).setOrigin(0.5);

        const btn = this.add.text(200,400,"START",{fontSize:"26px",backgroundColor:"#ff9800"})
            .setOrigin(0.5)
            .setPadding(10)
            .setInteractive();

        btn.on('pointerdown',()=>{
            this.scene.start('GameScene');
        });
    }
}