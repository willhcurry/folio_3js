import * as THREE from 'three';

export default class Camera {
    constructor() {
        this.setInstance()
    };

    setInstance() {
        // initialize the camera
        this.instance = new THREE.PerspectiveCamera(
            35,
            window.innerWidth / window.innerHeight,
            0.1,
            200
        );

        this.instance.position.z = 5; 
    };
};