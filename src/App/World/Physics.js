import * as THREE from 'three';
import App from '../App.js';
import { appStateStore } from '../Utils/Store.js';

/**
 * Class representing a physics simulation
 */
export default class Physics {
  /**
   * Creates an instance of Physics.
   */
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

  /**
   * Adds a mesh to the physics simulation with a given rigid body type and collider type
   * @param {THREE.Mesh} mesh - The mesh to add to the physics simulation
   * @param {string} type - The rigid body type ("dynamic" or "fixed")
   * @param {string} collider - The collider type ("cuboid", "ball", or "trimesh")
   */
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
        const { scaledVertices, indices } = this.computeTrimeshDimensions(mesh);
        colliderType = this.rapier.ColliderDesc.trimesh(
          scaledVertices,
          indices
        );
        this.world.createCollider(colliderType, this.rigidBody);
        break;
    }

    // setting the rigid body position and rotation
    const worldPosition = mesh.getWorldPosition(new THREE.Vector3());
    const worldRotation = mesh.getWorldQuaternion(new THREE.Quaternion());
    this.rigidBody.setTranslation(worldPosition);
    this.rigidBody.setRotation(worldRotation);

    this.meshmap.set(mesh, this.rigidBody);
  }

  /**
   * Computes the dimensions of a cuboid collider for a given mesh
   * @param {THREE.Mesh} mesh - The mesh to compute the dimensions for
   * @returns {THREE.Vector3} The dimensions of the cuboid collider
   */
  computeCuboidDimensions(mesh) {
    mesh.geometry.computeBoundingBox();
    const size = mesh.geometry.boundingBox.getSize(new THREE.Vector3());
    const worldScale = mesh.getWorldScale(new THREE.Vector3());
    size.multiply(worldScale);
    return size;
  }
   
  
  /**
  Computes the radius of a sphere collider for a given mesh
  @param {THREE.Mesh} mesh - The mesh to compute the radius for
  @returns {number} The radius of the sphere collider
  */
  computeBallDimensions(mesh) {
    mesh.geometry.computeBoundingSphere();
    const radius = mesh.geometry.boundingSphere.radius;
    const worldScale = mesh.getWorldScale(new THREE.Vector3());
    const maxScale = Math.max(worldScale.x, worldScale.y, worldScale.z);
    return radius * maxScale;
  }

  /**
  Computes the scaled vertices and indices of a trimesh collider for a given mesh
  @param {THREE.Mesh} mesh - The mesh to compute the scaled vertices and indices for
  @returns {{scaledVertices: number[], indices: number[]}} The scaled vertices and indices of the trimesh collider
  */
  computeTrimeshDimensions(mesh) {
    const vertices = mesh.geometry.attributes.position.array;
    const indices = mesh.geometry.index.array;
    const worldScale = mesh.getWorldScale(new THREE.Vector3());
    console.log(worldScale);

    const scaledVertices = vertices.map((vertex, index) => {
      return vertex * worldScale.getComponent(index % 3);
    });

    return { scaledVertices, vertices, indices };
  }

  /**
  The loop function that updates the physics simulation and the mesh positions and rotations
  */
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
