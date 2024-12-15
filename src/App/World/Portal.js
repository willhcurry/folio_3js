import * as THREE from "three";
import App from "../App.js";

export default class Portal {
    constructor(position, portalData) {
        this.app = new App();
        this.scene = this.app.scene;
        this.physics = this.app.world.physics;
        
        this.title = portalData.title;
        this.description = portalData.description;
        this.color = portalData.color;
        this.position = position;
        
        this.createTriggerZone();
        
        this.playerInTrigger = false;
        this.cooldown = false;
    }

    createTriggerZone() {
        const colliderDesc = this.physics.rapier.ColliderDesc.cuboid(1.5, 2, 0.1)
            .setTranslation(this.position.x, this.position.y, this.position.z)
            .setSensor(true)
            .setActiveEvents(this.physics.rapier.ActiveEvents.COLLISION_EVENTS);
            
        this.triggerCollider = this.physics.world.createCollider(colliderDesc);
        this.triggerCollider.parent = this;
    }

    update() {
        if (this.app.world.characterController && !this.cooldown) {
            const playerPos = this.app.world.characterController.rigidBody.translation();
            const portalPos = this.position;
            
            const distance = Math.sqrt(
                Math.pow(portalPos.x - playerPos.x, 2) + 
                Math.pow(portalPos.z - playerPos.z, 2)
            );

            if (distance < 1.2 && !this.playerInTrigger) {
                this.handlePlayerEnter(this.app.modalManager);
            } else if (distance >= 1.8 && this.playerInTrigger) {
                this.handlePlayerExit();
            }
        }
    }

    handlePlayerEnter(modalManager) {
        if (!this.cooldown && !this.playerInTrigger) {
            this.playerInTrigger = true;
            modalManager?.openModal(this.title, this.description);
            
            this.cooldown = true;
            setTimeout(() => {
                this.cooldown = false;
            }, 1000);
        }
    }

    handlePlayerExit() {
        this.playerInTrigger = false;
    }

    dispose() {
        if (this.triggerCollider) {
            this.physics.world.removeCollider(this.triggerCollider);
        }
    }
}