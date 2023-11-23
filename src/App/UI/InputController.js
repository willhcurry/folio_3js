export default class InputController {
  constructor() {
    this.startListening()
  }

  startListening() {
    window.addEventListener('keydown', (event) => {
      console.log(event)
    })
  }
}