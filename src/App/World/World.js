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
                data: {
                    title: "Welcome to My World",
                    description: 
                        "<div class='intro'>" +
                        "<h2>Hi, I'm William Curry</h2>" +
                        "<p>I'm a full-stack developer who transforms complex challenges into elegant solutions. " +
                        "With a foundation in modern JavaScript and React, I blend technical expertise with " +
                        "entrepreneurial insight to create impactful applications.</p>" +
                        "<p>What sets me apart is my innovative approach to development – I leverage AI tools " +
                        "to accelerate development while maintaining high code quality. This portfolio itself " +
                        "showcases my passion for interactive experiences, built with Three.js and modern web technologies.</p>" +
                        "<p>My journey from EMT to software engineer has given me a unique perspective on " +
                        "problem-solving and crisis management, skills that prove invaluable in today's fast-paced " +
                        "development environment.</p>" +
                        "<p>Explore my work history and projects through the portals above!</p>" +
                        "</div>",
                    color: 0x00ff00
                }
            },
            {
                position: new THREE.Vector3(-5.65, 15.00 - 10.30, -22.01 - 4.67),
                data: {
                    title: "Professional Journey",
                    description: 
                        "<div class='work-history'>" +
                        "<div class='work-entry'>" +
                        "<h3>Web Developer at Tree Three</h3>" +
                        "<p class='company'>Mar 2023 - Sep 2023</p>" +
                        "<p>Founded and managed an innovative print-on-demand e-commerce platform, combining " +
                        "technical expertise with entrepreneurial vision. Integrated AI services for unique product " +
                        "designs and implemented digital marketing strategies for growth.</p>" +
                        "</div>" +
                        "<div class='work-entry'>" +
                        "<h3>Software Engineer at Guaranteed Rate</h3>" +
                        "<p class='company'>Jan 2022 - Apr 2022</p>" +
                        "<p>Developed frontend solutions using ReactJS and GraphQL, notably contributing to a credit " +
                        "score calculation tool. Enhanced loan processing efficiency through real-time monitoring " +
                        "features and intuitive interfaces.</p>" +
                        "</div>" +
                        "<div class='work-entry'>" +
                        "<h3>Software Developer at Virtual Service Operations</h3>" +
                        "<p class='company'>Sep 2020 - Feb 2021</p>" +
                        "<p>Contributed to Kaiser Permanente's Operations Manager software, working with a " +
                        "microservices architecture. Leveraged TypeScript, Angular, and GraphQL to enhance hospital " +
                        "server monitoring systems.</p>" +
                        "</div>" +
                        "</div>",
                    color: 0x0000ff
                }
            },
            {
                position: new THREE.Vector3(8.48, 12.17 - 8.72, -21.25 - 0.54),
                data: {
                    title: "Featured Projects",
                    description: 
                        "<div class='projects-grid'>" +
                        "<div class='project-card'>" +
                        "<h3>3D Interactive Portfolio</h3>" +
                        "<p>A creative approach to showcasing my work through an immersive 3D environment. " +
                        "Built with Three.js and Rapier physics, featuring dynamic character movement and " +
                        "interactive portals.</p>" +
                        "<div class='tech-stack'>Three.js • Rapier Physics • JavaScript</div>" +
                        "</div>" +
                        "<div class='project-card'>" +
                        "<h3>E-commerce Platform</h3>" +
                        "<p>Full-stack print-on-demand platform integrating AI for design generation. " +
                        "Implemented robust ordering system and analytics dashboard.</p>" +
                        "<div class='tech-stack'>JavaScript • AI Integration • Full-Stack Development</div>" +
                        "</div>" +
                        "<div class='project-card'>" +
                        "<h3>Credit Score Calculator</h3>" +
                        "<p>Developed at Guaranteed Rate, this tool streamlined loan officer workflows by " +
                        "providing real-time credit assessment capabilities.</p>" +
                        "<div class='tech-stack'>React • GraphQL • Tailwind CSS</div>" +
                        "</div>" +
                        "</div>",
                    color: 0xff0000
                }
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