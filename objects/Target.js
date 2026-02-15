export default class Target extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'wood');

        scene.add.existing(this);

        this.scene = scene;
        this.rotationSpeed = 0.02;
        this.stuckAngles = [];

        this.setScale(0.6);
    }

    update() {
        this.rotation += this.rotationSpeed;
    }

    handleHit(knife) {
        let newAngle = this.rotation;

        // collision check
        for (let angle of this.stuckAngles) {
            if (Math.abs(angle - newAngle) < 0.25) {
                this.scene.gameOver();
                return;
            }
        }

        // stick knife
        knife.stuck = true;
        knife.angleOnTarget = newAngle;

        this.stuckAngles.push(newAngle);

        this.scene.useKnife();

        if (this.scene.knivesRemaining <= 0) {
            this.scene.levelComplete();
        }
    }
}