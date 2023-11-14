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

const assetStore = createStore((set) => ({
    assetsToLoad,
    loadAssets: {},
    addLoadedAsset: (asset, id) =>
        set((state) => ({
            loadAssets: {
                ...state.loadAssets,
                [id] : asset,
            
            },
        })),
}));

export default assetStore;