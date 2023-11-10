import Camera from './Camera.js';

export default class App {
    constructor() {
        const camera = new Camera();
        console.log(camera.instance);
    };
};