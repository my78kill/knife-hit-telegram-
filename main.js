import BootScene from './scenes/BootScene.js';
import MenuScene from './scenes/MenuScene.js';
import GameScene from './scenes/GameScene.js';
import GameOverScene from './scenes/GameOverScene.js';

const config = {
    type: Phaser.AUTO,
    width: 400,
    height: 700,
    backgroundColor: '#1a1a1a',
    scene: [BootScene, MenuScene, GameScene, GameOverScene]
};

new Phaser.Game(config);