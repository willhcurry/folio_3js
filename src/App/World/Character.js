import * as THREE from 'three';
import App from '../App.js';
import { inputStore } from '../Utils/Store.js';

export default class Character {
  constructor() {
    this.app = new App();
    this.scene = this.app.scene;
    this.physics = this.app.world.physics;

    inputStore.subscribe((state) => {
      this.forward = state.forward;
      this.backward = state.backward;
      this.left = state.left;
      this.right = state.right;
    });

    this.instantiateCharacter();
  }

  instantiateCharacter() {
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    this.character = new THREE.Mesh(geometry, material);
    this.character.position.set(0, 2.5, 0);
    this.scene.add(this.character);
    this.physics.add(this.character, "dynamic", "cuboid")
  }

  loop() {
    if (this.forward) {
      this.character.position.z -= 0.1;
    }
    if (this.backward) {
      this.character.position.z += 0.1;
    }
    if (this.left) {
      this.character.position.x -= 0.1;
    }
    if (this.right) {
      this.character.position.x += 0.1;
    }
  }
}
