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
    const group = new THREE.Group();
    group.position.y = 10;
    this.scene.add(group);

    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color: 'blue' });
    this.cubeMesh = new THREE.Mesh(geometry, material);
    this.cubeMesh.position.y = 10;
    this.cubeMesh.rotation.x = 0.5;
    this.cubeMesh.rotation.z = 0.5;
    group.add(this.cubeMesh);
    this.physics.add(this.cubeMesh, 'dynamic', 'ball');

    this.cubeMesh2 = new THREE.Mesh(geometry, material);
    this.cubeMesh2.position.y = 10;
    this.cubeMesh2.position.x = 0;

    this.cubeMesh2.rotation.x = 0.5;
    this.cubeMesh2.rotation.z = 0.5;
    group.add(this.cubeMesh2);
    this.physics.add(this.cubeMesh2, 'dynamic', 'ball');

    const groundGeometry = new THREE.BoxGeometry(10, 1, 10);
    const groundMaterial = new THREE.MeshStandardMaterial({
      color: 'turquoise',
    });
    this.groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
    this.scene.add(this.groundMesh);
    this.physics.add(this.groundMesh, 'fixed', 'cuboid');
  }
}
