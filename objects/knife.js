export default class Knife extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'knife');

        scene.add.existing(this);

        this.scene = scene;
        this.stuck = false;
        this.angleOnTarget = 0;
        this.speed = 14;

        this.setOrigin(0.5, 1); // bottom center
        this.setScale(0.5);
    }

    update() {
        if (!this.stuck) {
            this.y -= this.speed;

            if (this.y <= this.scene.target.y + 90) {
                this.scene.target.handleHit(this);
            }
        } else {
            let target = this.scene.target;

            this.x = target.x + Math.cos(this.angleOnTarget - target.rotation) * 90;
            this.y = target.y + Math.sin(this.angleOnTarget - target.rotation) * 90;

            this.rotation = this.angleOnTarget - target.rotation;
        }
    }
}