import Knife from '../objects/Knife.js';
import Target from '../objects/Target.js';

export default class GameScene extends Phaser.Scene {

    constructor() {
        super('GameScene');
    }

    create() {
        this.level = 1;
        this.score = 0;
        this.knivesRemaining = 6;

        this.target = new Target(this, 200, 300);

        this.knives = [];

        this.scoreText = this.add.text(20, 20, "Score: 0", { fontSize: "20px" });
        this.knifeText = this.add.text(20, 50, "Knives: 6", { fontSize: "20px" });
        this.levelText = this.add.text(200, 80, "Level 1", { fontSize: "24px" }).setOrigin(0.5);

        this.input.on('pointerdown', this.throwKnife, this);
    }

    update() {
        this.target.update();

        this.knives.forEach(k => k.update());
    }

    throwKnife() {
        if (this.knivesRemaining <= 0) return;

        let knife = new Knife(this, 200, 650);
        this.knives.push(knife);
    }

    useKnife() {
        this.knivesRemaining--;
        this.knifeText.setText("Knives: " + this.knivesRemaining);
    }

    levelComplete() {
        this.score += 10;
        this.level++;

        this.knivesRemaining = 6 + this.level;
        this.scoreText.setText("Score: " + this.score);
        this.knifeText.setText("Knives: " + this.knivesRemaining);
        this.levelText.setText("Level " + this.level);

        this.cameras.main.shake(200);

        // reset target
        this.target.stuckAngles = [];
        this.knives.forEach(k => k.destroy());
        this.knives = [];

        // speed increase
        this.target.rotationSpeed += 0.005;
    }

    gameOver() {
        this.scene.start('GameOverScene', { score: this.score });
    }
}