import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { sizesStore } from './Utils/Store.js';

import App from './App.js';

export default class Camera {
  constructor() {
    this.app = new App();
    this.canvas = this.app.canvas;

    this.sizesStore = sizesStore;

    this.sizes = this.sizesStore.getState();

    this.setInstance();
    this.setControls();
    this.setResizeListener();
  }

  setInstance() {
    // initialize the camera
    this.instance = new THREE.PerspectiveCamera(
      35,
      this.sizes.width / this.sizes.height,
      0.1,
      200
    );

    this.instance.position.z = 100;
    this.instance.position.y = 20;
  }

  setControls() {
    this.controls = new OrbitControls(this.instance, this.canvas);
    this.controls.enableDamping = true;
  }

  setResizeListener() {
    this.sizesStore.subscribe((sizes) => {
      this.instance.aspect = sizes.width / sizes.height;
      this.instance.updateProjectionMatrix();
    });
  }

  loop() {
    this.controls.update();
    this.character = this.app.world.character?.rigidBody;
    if (this.character) {
      const characterPosition = this.character.translation();
      const characterRotation = this.character.rotation();

      const cameraOffset = new THREE.Vector3(0, 30, 55);
      cameraOffset.applyQuaternion(characterRotation);
      cameraOffset.add(characterPosition);

      const targetOffset = new THREE.Vector3(0, 10, 0);
      targetOffset.applyQuaternion(characterRotation);
      targetOffset.add(characterPosition);

      this.instance.position.lerp(cameraOffset, 0.1);
      this.controls.target.lerp(targetOffset, 0.1);
    }
  }
}
