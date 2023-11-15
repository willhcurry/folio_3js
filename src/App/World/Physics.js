import * as THREE from 'three';
import App from '../App.js';
import { appStateStore } from '../Utils/Store.js';

export default class Physics {
  constructor() {
    this.app = new App();
    this.scene = this.app.scene;

    this.meshmap = new Map();

    import('@dimforge/rapier3d').then((RAPIER) => {
      const gravity = { x: 0, y: -9.81, z: 0 };
      this.world = new RAPIER.World(gravity);
      this.rapier = RAPIER;

      this.rapierLoaded = true;
      appStateStore.setState({ physicsReady: true });
    });
  }

  add(mesh, type, collider) {
    // defining the rigid body type
    let rigidBodyType;
    if (type === 'dynamic') {
      rigidBodyType = this.rapier.RigidBodyDesc.dynamic();
    } else if (type === 'fixed') {
      rigidBodyType = this.rapier.RigidBodyDesc.fixed();
    }
    this.rigidBody = this.world.createRigidBody(rigidBodyType);

    let colliderType;

    switch (collider) {
      case 'cuboid':
        const dimensions = this.computeCuboidDimensions(mesh);
        colliderType = this.rapier.ColliderDesc.cuboid(
          dimensions.x / 2,
          dimensions.y / 2,
          dimensions.z / 2
        );
        this.world.createCollider(colliderType, this.rigidBody);
        break;
      case 'ball':
        const radius = this.computeBallDimensions(mesh);
        colliderType = this.rapier.ColliderDesc.ball(radius);
        this.world.createCollider(colliderType, this.rigidBody);
        break;
      case 'trimesh':
        console.log('trimesh');
        break;
    }

    // defining the collider type

    // setting the rigid body position and rotation
    const worldPosition = mesh.getWorldPosition(new THREE.Vector3());
    const worldRotation = mesh.getWorldQuaternion(new THREE.Quaternion());
    this.rigidBody.setTranslation(worldPosition);
    this.rigidBody.setRotation(worldRotation);

    this.meshmap.set(mesh, this.rigidBody);
  }

  computeCuboidDimensions(mesh) {
    mesh.geometry.computeBoundingBox();
    const size = mesh.geometry.boundingBox.getSize(new THREE.Vector3());
    const worldScale = mesh.getWorldScale(new THREE.Vector3());
    size.multiply(worldScale);
    return size;
  }

  computeBallDimensions(mesh) {
    mesh.geometry.computeBoundingSphere();
    const radius = mesh.geometry.boundingSphere.radius;
    const worldScale = mesh.getWorldScale(new THREE.Vector3());
    const maxScale = Math.max(worldScale.x, worldScale.y, worldScale.z);
    return radius * maxScale;
  }

  loop() {
    if (!this.rapierLoaded) return;

    this.world.step();

    this.meshmap.forEach((rigidBody, mesh) => {
      const position = new THREE.Vector3().copy(rigidBody.translation());
      const rotation = rigidBody.rotation();

      mesh.parent.worldToLocal(position);

      mesh.position.copy(position);
      mesh.quaternion.copy(rotation);
    });
  }
}
