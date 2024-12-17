import { inputStore } from "../Utils/Store.js";

export default class InputController {
  constructor() {
    this.inputStore = inputStore;
    this.keyPressed = {};
    
    this.startListening();
    this.setupTouchControls();
  }

  startListening() {
    window.addEventListener("keydown", (event) => this.onKeyDown(event));
    window.addEventListener("keyup", (event) => this.onKeyUp(event));
  }

  setupTouchControls() {
    const touchButtons = {
      up: document.querySelector('.mobile-btn.up'),
      down: document.querySelector('.mobile-btn.down'),
      left: document.querySelector('.mobile-btn.left'),
      right: document.querySelector('.mobile-btn.right')
    };

    // Handle touch events
    Object.entries(touchButtons).forEach(([direction, button]) => {
      // Touch events
      button.addEventListener('touchstart', (e) => {
        e.preventDefault();
        switch(direction) {
          case 'up':
            inputStore.setState({ forward: true });
            break;
          case 'down':
            inputStore.setState({ backward: true });
            break;
          case 'left':
            inputStore.setState({ left: true });
            break;
          case 'right':
            inputStore.setState({ right: true });
            break;
        }
      });

      button.addEventListener('touchend', (e) => {
        e.preventDefault();
        switch(direction) {
          case 'up':
            inputStore.setState({ forward: false });
            break;
          case 'down':
            inputStore.setState({ backward: false });
            break;
          case 'left':
            inputStore.setState({ left: false });
            break;
          case 'right':
            inputStore.setState({ right: false });
            break;
        }
      });

      // Mouse events for testing
      button.addEventListener('mousedown', (e) => {
        e.preventDefault();
        switch(direction) {
          case 'up':
            inputStore.setState({ forward: true });
            break;
          case 'down':
            inputStore.setState({ backward: true });
            break;
          case 'left':
            inputStore.setState({ left: true });
            break;
          case 'right':
            inputStore.setState({ right: true });
            break;
        }
      });

      button.addEventListener('mouseup', (e) => {
        e.preventDefault();
        switch(direction) {
          case 'up':
            inputStore.setState({ forward: false });
            break;
          case 'down':
            inputStore.setState({ backward: false });
            break;
          case 'left':
            inputStore.setState({ left: false });
            break;
          case 'right':
            inputStore.setState({ right: false });
            break;
        }
      });
    });
  }

  onKeyDown(event) {
    if (!this.keyPressed[event.code]) {
      switch (event.code) {
        case "KeyW":
        case "ArrowUp":
          inputStore.setState({ forward: true });
          break;
        case "KeyA":
        case "ArrowLeft":
          inputStore.setState({ left: true });
          break;
        case "KeyS":
        case "ArrowDown":
          inputStore.setState({ backward: true });
          break;
        case "KeyD":
        case "ArrowRight":
          inputStore.setState({ right: true });
          break;
      }
      this.keyPressed[event.code] = true;
    }
  }

  onKeyUp(event) {
    switch (event.code) {
      case "KeyW":
      case "ArrowUp":
        inputStore.setState({ forward: false });
        break;
      case "KeyA":
      case "ArrowLeft":
        inputStore.setState({ left: false });
        break;
      case "KeyS":
      case "ArrowDown":
        inputStore.setState({ backward: false });
        break;
      case "KeyD":
      case "ArrowRight":
        inputStore.setState({ right: false });
        break;
    }
    this.keyPressed[event.code] = false;
  }
}