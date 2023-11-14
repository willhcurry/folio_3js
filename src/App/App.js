import * as THREE from 'three';
import Camera from './Camera.js';
import Renderer from './Renderer.js';
import Loop from './Utils/Loop.js';
import World from './World/World.js';
import Resize from './Utils/Resize.js';
import AssetLoader from './Utils/AssetLoader.js';

let instance = null;

export default class App {
  constructor() {
    if (instance) {
      return instance;
    }
    instance = this;

    // threejs elements
    this.canvas = document.querySelector('canvas.threejs');
    this.scene = new THREE.Scene();

    // asset loader
    this.assetLoader = new AssetLoader();

    // world
    this.camera = new Camera();
    this.renderer = new Renderer();

    // camera and renderer
    this.world = new World();

    // extra utilities
    this.loop = new Loop();
    this.resize = new Resize();
  }
}
