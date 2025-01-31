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
                    "description": 
                        "<div class='intro'>" +
                        "<h2>Hi, I'm William Curry</h2>" +
                        "<p>Full-stack developer specializing in React and modern JavaScript, with experience in AI/LLM integration. " +
                        "I combine technical precision with innovative problem-solving to build efficient, scalable applications.</p>" +
                        "<p>My development approach leverages cutting-edge tools and techniques – from AI-assisted workflows to " +
                        "modern frontend frameworks. This interactive portfolio, built with Three.js, demonstrates my passion for " +
                        "creating engaging user experiences.</p>" +
                        "<p>My unique background as an EMT has instilled crucial skills in rapid decision-making and calm " +
                        "problem-solving under pressure, qualities that translate perfectly to handling complex technical challenges " +
                        "in fast-paced development environments.</p>" +
                        "<p>Navigate through the portals above to explore my professional journey and projects!</p>" +
                        "<div class='contact-info'>" +
                        "<p>Let's Connect:</p>" +
                        "<ul>" +
                        "<li>Email: <a href='mailto:willhcurry@gmail.com'>willhcurry@gmail.com</a></li>" +
                        "<li>GitHub: <a href='https://github.com/willhcurry' target='_blank'>github.com/willhcurry</a></li>" +
                        "<li>LinkedIn: <a href='https://www.linkedin.com/in/willhcurry/' target='_blank'>linkedin.com/in/willhcurry</a></li>" +
                        "</ul>" +
                        "</div>" +
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
                        "<p>Spearheaded development of an e-commerce platform utilizing advanced LLM prompt engineering techniques. " +
                        "Implemented AI-driven design workflows and custom UI optimizations, demonstrating strong problem-solving " +
                        "and technical innovation.</p>" +
                        "</div>" +
                        "<div class='work-entry'>" +
                        "<h3>Frontend Developer at Guaranteed Rate</h3>" +
                        "<p class='company'>Jan 2022 - Apr 2022</p>" +
                        "<p>Built critical components for loan processing system using React, GraphQL, and Tailwind CSS. " +
                        "Notable achievements include resolving complex UI bugs and maintaining 95% test coverage across components.</p>" +
                        "</div>" +
                        "<div class='work-entry'>" +
                        "<h3>Software Developer at Virtual Service Operations</h3>" +
                        "<p class='company'>Sep 2020 - Feb 2021</p>" +
                        "<p>Enhanced Kaiser Permanente's Operations Manager platform serving 10,000+ daily users. Utilized Angular, " +
                        "NestJS, and GraphQL in a microservices architecture, achieving 98% code review approval rate.</p>" +
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
                "<h3>EPUB to RAG Markdown Converter</h3>" +
                "<p>Imagine turning your favorite books into an AI-powered knowledge base! I'm crafting a Python tool that transforms EPUB files into a semantic search playground. It's like giving your books superpowers – breaking them down into digestible chunks ready for semantic search and question-answering.</p>" +
                "<div class='tech-stack'>Python • EbookLib • BeautifulSoup • RAG Preprocessing</div>" +
                "<a href='https://github.com/willhcurry/book_to_markdown_converter' target='_blank' class='github-link'>View on GitHub</a>" +
                "</div>" +
                "<div class='project-card'>" +
                "<h3>Interactive 3D Portfolio</h3>" +
                "<p>Welcome to my digital playground! This isn't just a portfolio – it's an immersive 3D world that brings my professional journey to life. I've created a custom digital landscape where you can literally walk through my professional story, complete with physics-based interactions that make exploring my work feel like an adventure.</p>" +
                "<ul>" +
                "<li>Crafted a dynamic character controller that lets you navigate through my professional world</li>" +
                "<li>Built a modular architecture with smart state management and an event-driven portal system</li>" +
                "<li>Optimized 3D rendering with a custom animation system and efficient asset loading</li>" +
                "</ul>" +
                "<div class='tech-stack'>Three.js • Rapier Physics • Advanced JavaScript</div>" +
                "</div>" +
                "<a href='https://discover-videos-lovat.vercel.app' target='_blank' class='project-link'>Live Demo</a>" +
                "<div class='project-card'>" +
                "<h3>Netflix Clone Video Platform</h3>" +
                "<p>Dive into a streaming experience that's more than just another video platform! I've crafted a Netflix-inspired app that brings together cutting-edge tech and smooth user experience. It's like building your own collection of favorited YouTube videos without, umm, YouTube. </p>" +
                "<ul>" +
                "<li>Engineered a rock-solid authentication system that keeps user data safe and sound</li>" +
                "<li>Created dynamic, Netflix-style routing that makes browsing feel intuitive and fun</li>" +
                "<li>Implemented smart state management that makes the app feel seamless and responsive</li>" +
                "</ul>" +
                "<div class='tech-stack'>Next.js • Hasura GraphQL • JWT • Magic SDK</div>" +
                "<a href='https://discover-videos-lovat.vercel.app' target='_blank' class='project-link'>Live Demo</a>" +
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