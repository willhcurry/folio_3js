import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

import assetStore from './AssetStore';

export default class AssetLoader {
    constructor() {
        this.assetStore = assetStore;
        console.log(this.assetStore);
        this.instantiateLoaders();
        this.startLoading();
    }

    instantiateLoaders() {
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('/draco/');
        this.gltfLoader = new GLTFLoader();
        this.gltfLoader.setDRACOLoader(dracoLoader);
        this.textureLoader = new THREE.TextureLoader();
    };

    startLoading() {

    };
}