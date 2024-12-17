import { inputStore } from "../Utils/Store.js";

export default class InputController {
  constructor() {
    this.inputStore = inputStore;
    this.keyPressed = {};
    this.touchActive = false;
    
    this.startListening();
    this.setupTouchControls();
  }

  startListening() {
    window.addEventListener("keydown", (event) => this.onKeyDown(event));
    window.addEventListener("keyup", (event) => this.onKeyUp(event));
  }

  setupTouchControls() {
    const dpad = document.querySelector('.dpad');
    const center = { x: 75, y: 75 }; // Center of the 150x150 dpad
    const deadzone = 20; // Minimum distance from center to trigger movement

    const handleTouch = (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      if (!touch) return;

      const rect = dpad.getBoundingClientRect();
      const x = touch.clientX - rect.left - center.x;
      const y = touch.clientY - rect.top - center.y;
      
      const distance = Math.sqrt(x * x + y * y);
      if (distance < deadzone) {
        this.resetDirections();
        return;
      }

      const angle = Math.atan2(y, x);
      const degrees = angle * (180 / Math.PI);

      // Reset all directions
      this.resetDirections();

      // Highlight arrows based on direction
      const arrows = {
        up: document.querySelector('.up-arrow'),
        right: document.querySelector('.right-arrow'),
        down: document.querySelector('.down-arrow'),
        left: document.querySelector('.left-arrow')
      };

      // Handle 8-way movement
      if (degrees > -112.5 && degrees <= -67.5) {
        // Up
        inputStore.setState({ forward: true });
        arrows.up.classList.add('active');
      } else if (degrees > -67.5 && degrees <= -22.5) {
        // Up-right
        inputStore.setState({ forward: true, right: true });
        arrows.up.classList.add('active');
        arrows.right.classList.add('active');
      } else if (degrees > -22.5 && degrees <= 22.5) {
        // Right
        inputStore.setState({ right: true });
        arrows.right.classList.add('active');
      } else if (degrees > 22.5 && degrees <= 67.5) {
        // Down-right
        inputStore.setState({ backward: true, right: true });
        arrows.down.classList.add('active');
        arrows.right.classList.add('active');
      } else if (degrees > 67.5 && degrees <= 112.5) {
        // Down
        inputStore.setState({ backward: true });
        arrows.down.classList.add('active');
      } else if (degrees > 112.5 && degrees <= 157.5) {
        // Down-left
        inputStore.setState({ backward: true, left: true });
        arrows.down.classList.add('active');
        arrows.left.classList.add('active');
      } else if ((degrees > 157.5 && degrees <= 180) || (degrees <= -157.5 && degrees >= -180)) {
        // Left
        inputStore.setState({ left: true });
        arrows.left.classList.add('active');
      } else if (degrees > -157.5 && degrees <= -112.5) {
        // Up-left
        inputStore.setState({ forward: true, left: true });
        arrows.up.classList.add('active');
        arrows.left.classList.add('active');
      }
    };

    dpad.addEventListener('touchstart', handleTouch);
    dpad.addEventListener('touchmove', handleTouch);
    dpad.addEventListener('touchend', () => {
      this.resetDirections();
      document.querySelectorAll('.dpad-arrow').forEach(arrow => {
        arrow.classList.remove('active');
      });
    });
  }

  resetDirections() {
    inputStore.setState({
      forward: false,
      backward: false,
      left: false,
      right: false
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