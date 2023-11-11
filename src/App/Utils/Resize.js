import { sizesStore } from './Store';

export default class Resize {
    constructor() {

        const { setState } = sizesStore;
        console.log(setState);

        window.addEventListener("resize", () => {
            console.log('resized');
          });
    };
}