import * as THREE from "three";

import App from "../App.js";
import Physics from "./Physics.js";
import Environment from "./Environment.js";
import Character from "./Character.js";
import CharacterController from "./CharacterController.js";
import AnimationController from "./AnimationController.js";
import Portal from "./Portal.js";

import { appStateStore } from "../Utils/Store.js";

export default class World {
    constructor() {
        this.app = new App();
        this.scene = this.app.scene;
        
        this.physics = new Physics();

        this.portalData = [
            {
                position: new THREE.Vector3(-1.52, 3.04 - 0.61, -12.12 - 0.33),
                data: this.app.modalContentProvider.getModalInfo('welcome')
            },
            {
                position: new THREE.Vector3(-5.65, 15.00 - 10.30, -22.01 - 4.67),
                data: this.app.modalContentProvider.getModalInfo('journey')
            },
            {
                position: new THREE.Vector3(8.48, 12.17 - 8.72, -21.25 - 0.54),
                data: this.app.modalContentProvider.getModalInfo('projects')
            }
        ];

        const unsub = appStateStore.subscribe((state) => {
            if (state.physicsReady && state.assetsReady) {
                this.environment = new Environment();
                this.character = new Character();
                this.characterController = new CharacterController();
                this.animationController = new AnimationController();
                
                if (this.physics.rapierLoaded) {
                    this.createPortals();
                }
                
                unsub();
            }
        });

        this.loop();
    }

    createPortals() {
        try {
            this.portals = [];
            this.portalData.forEach(({ position, data }) => {
                try {
                    const portal = new Portal(position, data);
                    this.portals.push(portal);
                } catch (error) {
                    console.error('Error creating portal:', error);
                }
            });
        } catch (error) {
            console.error('Error in createPortals:', error);
        }
    }

    loop(deltaTime, elapsedTime) {
        if (this.physics) this.physics.loop();
        if (this.characterController) this.characterController.loop();
        if (this.animationController) this.animationController.loop(deltaTime);
        
        if (this.portals && this.portals.length > 0) {
            this.portals.forEach(portal => portal.update());
        }
    }
}