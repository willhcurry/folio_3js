willhcurry.github.io/folio_3js/

Interactive 3D Portfolio
Overview
This is an immersive, interactive 3D portfolio showcasing my professional journey, projects, and background. Built using Three.js and Rapier physics engine, the portfolio allows users to navigate a 3D environment and explore interactive information portals.

Features

3D Character Navigation: Move through a custom-designed 3D environment
Interactive Portals: Click or walk into portals to reveal detailed information
Dynamic Lighting: Engaging visual experience with advanced lighting techniques
Responsive Design: Optimized for various screen sizes and devices

Technologies Used

Three.js
Rapier Physics Engine
Vite
Zustand (State Management)
Tweakpane (UI Debugging)

Prerequisites

Node.js (v14 or later)
npm or yarn

Installation

Clone the repository:
bashCopygit clone https://github.com/willhcurry/folio_3js.git
cd threejs-portfolio

Install dependencies:
bashCopynpm install


Running the Project

Development mode:
bashCopynpm run dev

Build for production:
bashCopynpm run build

Preview production build:
bashCopynpm run preview


Project Structure

src/: Source code directory
public/: Static assets
package.json: Project dependencies and scripts

Portals Content
The portfolio includes three main portals:

Welcome Portal: Personal introduction and professional overview
Professional Journey: Work history and career progression
Featured Projects: Showcase of key development projects

Customization
To modify portal content, edit the portalData array in the main script. Each portal includes:

Position in 3D space
Title
Detailed description
Custom color

Performance Optimization

Utilizes Vite for fast development and build processes
Implements top-level await and WASM support
Efficient 3D rendering with Three.js

Future Improvements

Responsive mobile controls
Additional interactive elements
Enhanced performance optimizations

License
MIT
Contact
William Curry

GitHub: @willhcurry

Acknowledgments

Three.js Community
Rapier Physics Engine
Vite Build Tool