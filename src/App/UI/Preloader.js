import assetStore from '../Utils/AssetStore';

export default class Preloader {
  constructor() {
    this.assetStore = assetStore;
    console.log(this.assetStore);
  }
}
