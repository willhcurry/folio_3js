import App from './App/App.js';

// Get the current script's URL
const scriptUrl = new URL(import.meta.url);
// Get the base URL (remove the last two segments, which are the script file and 'src' folder)
const baseUrl = scriptUrl.href.slice(0, scriptUrl.href.lastIndexOf('/'));

// Dynamically create link element for styles
const link = document.createElement('link');
link.rel = 'stylesheet';
// Adjust the path to style.css based on the base URL
link.href = `${baseUrl}/../style.css`;  // Move up one level to access 'style.css'
document.head.appendChild(link);

// Start application
const app = new App();
