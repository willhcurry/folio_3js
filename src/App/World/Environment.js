import * as THREE from 'three';

import App from '../App.js';

export default class Environment {
  constructor() {
    this.app = new App();
    this.scene = this.app.scene;
    this.physics = this.app.world.physics;

    this.loadEnvironment();
    this.addMeshes();
  }

  loadEnvironment() {
    // lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);

    this.directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    this.directionalLight.position.set(1, 1, 1);
    this.directionalLight.castShadow = true;
    this.scene.add(this.directionalLight);
  }

  addMeshes() {
    const geometry = new THREE.BoxGeometry(4, 4, 4);
    const material = new THREE.MeshStandardMaterial({ color: 'blue' });
    this.cubeMesh = new THREE.Mesh(geometry, material);
    this.cubeMesh.position.y = 10;
    this.cubeMesh.rotation.x = 0.5;
    this.cubeMesh.rotation.z = 0.5;
    this.cubeMesh.scale.set(5, 5, 5);
    this.scene.add(this.cubeMesh);
    this.physics.add(this.cubeMesh);

    this.cubeMesh2 = new THREE.Mesh(geometry, material);
    this.cubeMesh2.position.y = 10;
    this.cubeMesh2.position.x = 3;

    this.cubeMesh2.rotation.x = 0.5;
    this.cubeMesh2.rotation.z = 0.5;
    this.scene.add(this.cubeMesh2);
    this.physics.add(this.cubeMesh2);
  }
}
