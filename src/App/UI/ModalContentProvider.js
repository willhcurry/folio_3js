export default class ModalContentProvider {
    constructor() {
      this.modalContents = {
        welcome: {
          title: "Welcome to My World",
          description: 
            "<div class='intro'>" +
            "<h2>Hi, I'm William Curry</h2>" +
            "<p>Front-End Engineer with 4+ years experience building responsive, high-performance web applications using JavaScript, React, and " +
            "modern technologies. Skilled in translating UI/UX designs into clean, maintainable code while optimizing for speed and scalability.</p>" +
            "<p>My development approach leverages cutting-edge tools and techniques – from AI-assisted workflows to " +
            "modern frontend frameworks. This interactive portfolio, built with Three.js, demonstrates my passion for " +
            "creating engaging user experiences.</p>" +
            "<p>I have a proven ability to collaborate with cross-functional teams to deliver exceptional user experiences and front-end best practices.</p>" +
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
        },
        journey: {
          title: "Professional Journey",
          description: 
            "<div class='work-history'>" +
            "<div class='work-entry'>" +
            "<h3>Mobile Developer (Volunteer) at Core Productions</h3>" +
            "<p class='company'>Dec 2024 - Present</p>" +
            "<p>Architected a robust mental health app through React Native, employing TypeScript and modern frameworks. " +
            "Engineered an advanced state management system integrating Redux and Context API, enhancing offline data synchronization " +
            "and bolstering security protocols. Adopted Agile practices and Git protocols to streamline team collaboration.</p>" +
            "</div>" +
            "<div class='work-entry'>" +
            "<h3>Web Developer at Tree Three LLC</h3>" +
            "<p class='company'>Mar 2023 - Sep 2023</p>" +
            "<p>Developed a Shopify-based e-commerce platform with over 50 unique print-on-demand products. " +
            "Streamlined image generation processes by integrating AI tools like Midjourney with Adobe Suite, improving processing time by " +
            "25%. Effectively managed project timelines and deliverables in a fully remote environment.</p>" +
            "</div>" +
            "<div class='work-entry'>" +
            "<h3>Software Engineer at Guaranteed Rate</h3>" +
            "<p class='company'>Jan 2022 - Apr 2022</p>" +
            "<p>Played a key role in refining a TypeScript-based tool for processing upwards of 175,000 mortgage evaluations annually. " +
            "Developed high-quality, maintainable code achieving 100% test coverage, effectively resolving challenging React form event " +
            "issues. Utilized Git and Jira for version control and issue tracking.</p>" +
            "</div>" +
            "<div class='work-entry'>" +
            "<h3>Software Developer at Virtual Service Operations - Kaiser Permanente</h3>" +
            "<p class='company'>Sep 2020 - Feb 2021</p>" +
            "<p>Facilitated efficient health platform operations utilizing Angular to support 6,000+ users " +
            "with robust microservices architecture, achieving a 97% code approval rate. Optimized application efficiency by refactoring components " +
            "with Nest.js and TypeScript, reducing code complexity by 75%.</p>" +
            "</div>" +
            "<div class='work-entry'>" +
            "<h3>Web Developer at RTV Solution</h3>" +
            "<p class='company'>Aug 2019 - Sep 2020</p>" +
            "<p>Collaborated with C-level executives optimizing website, increasing conversion rates by 27% through modernized architecture. " +
            "Enhanced client acquisition by 30% and retention by 40%. Successfully integrated adaptable design strategies for consistent " +
            "user interactions across various devices.</p>" +
            "</div>" +
            "</div>",
          color: 0x0000ff
        },
        projects: {
          title: "Featured Projects",
          description: 
            "<div class='projects-grid'>" +
            "<div class='project-card'>" +
            "<h3>XRInterface - Interactive Spatial UI for XR Environments (WIP)</h3>" +
            "<p>Designed and implemented a responsive spatial user interface for XR headsets using WebXR and React Three Fiber, featuring " +
            "interactive 3D panels with transitions, state management, and optimized rendering. Constructed an architecture that abstracts input methods " +
            "through a unified interaction system, ensuring cross-device compatibility with various XR hardware.</p>" +
            "<div class='tech-stack'>WebXR • React Three Fiber • Performance Optimization</div>" +
            "<a href='https://willhcurry.github.io/XRInterface/' target='_blank' class='project-link'>View Project</a>" +
            "</div>" +
            "<div class='project-card'>" +
            "<h3>Three.js Portfolio</h3>" +
            "<p>Created a cutting-edge 3D JavaScript portfolio with Three.js, integrating complex physics-based character interactions for an " +
            "enriched and intuitive user interface. Designed a modular state management system and advanced animation architectures to reduce load times by 65%. " +
            "Implemented an interactive 3D environment by integrating Rapier physics with optimized rendering processes.</p>" +
            "<div class='tech-stack'>Three.js • Rapier Physics • Advanced JavaScript</div>" +
            "</div>" +
            "</div>",
          color: 0xff0000
        }
      }
    }
  
    getModalInfo(portalName) {
      return this.modalContents[portalName];
    }
  }
  