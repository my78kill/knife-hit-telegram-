export default class GameOverScene extends Phaser.Scene {
    constructor(){
        super('GameOverScene');
    }

    init(data){
        this.finalScore = data.score;
    }

    create(){
        this.add.text(200,300,"GAME OVER",{fontSize:"32px"}).setOrigin(0.5);
        this.add.text(200,350,"Score: "+this.finalScore,{fontSize:"26px"}).setOrigin(0.5);

        if(window.Telegram){
            Telegram.WebApp.sendData(JSON.stringify({
                score: this.finalScore
            }));
        }

        const btn = this.add.text(200,450,"MENU",{fontSize:"24px"})
            .setOrigin(0.5)
            .setInteractive();

        btn.on('pointerdown',()=>{
            this.scene.start('MenuScene');
        });
    }
}