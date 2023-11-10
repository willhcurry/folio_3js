import * as THREE from 'three';
import App from './App.js';

export default class Renderer {
    constructor() {
        this.app = new App();
        this.canvas = this.app.canvas;

        this.setInstance();
    };

    setInstance() {
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
          });
          this.renderer.setSize(window.innerWidth, window.innerHeight);
          this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
};