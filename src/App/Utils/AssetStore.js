import { createStore } from 'zustand/vanilla';

export const assetsToLoad = [
    {
        path: './textures/2k_earth_daymap.jpg',
        id: 'earth',
        type: 'texture'
    },
    {
        path: './textures/2k_mars.jpg',
        id: 'earth',
        type: 'texture'
    },
    {
        path: './textures/2k_mercury.jpg',
        id: 'earth',
        type: 'texture'
    },
    {
        path: './textures/2k_sun.jpg',
        id: 'earth',
        type: 'texture'
    }
];

const assetStore = createStore(() => ({
    assetsToLoad,
    loadAssets: {},
    addLoadedAssets: (asset) => {console.log('addLoadedAsset', asset)}
}));

export default assetStore;