import * as THREE from 'three';

import App from '../App';
import { inputStore } from '../Utils/Store';

export default class AnimationController {
  constructor() {
    this.app = new App();
    this.scene = this.app.scene;
    this.avatar = this.app.world.character.avatar;
    inputStore.subscribe((input) => this.onInput(input));

    this.instantiatedAnimations();
  }

  instantiatedAnimations() {
    const idle = this.avatar.animations[0];
    this.mixer = new THREE.AnimationMixer(this.avatar.scene);

    this.animations = new Map();
    this.avatar.animations.forEach((clip) => {
      this.animations.set(clip.name, this.mixer.clipAction(clip));
    });

    this.animations.get('Idle').play();
  }

  onInput(input) {
    if (input.forward || input.backward || input.left || input.right) {
      this.animations.get('Run').reset();
      this.animations.get('Run').play();
      this.animations
        .get('Run')
        .crossFadeFrom(this.animations.get('Idle'), 0.3);
    } else {
      this.animations.get('Idle').reset();
      this.animations.get('Idle').play();
      this.animations
        .get('Idle')
        .crossFadeFrom(this.animations.get('Run'), 0.3);
    }
  }

  loop(deltaTime) {
    this.mixer.update(deltaTime);
  }
}
