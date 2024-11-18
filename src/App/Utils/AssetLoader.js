import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'
import assetStore from './AssetStore.js'

export default class AssetLoader {
    constructor() {
        this.assetStore = assetStore.getState()
        this.assetsToLoad = this.assetStore.assetsToLoad
        this.addLoadedAsset = this.assetStore.addLoadedAsset
        this.loadingProgress = {}
        
        this.instantiateLoaders()
        this.startLoading()
    }

    instantiateLoaders() {
        const dracoLoader = new DRACOLoader()
        // Update path to match GitHub Pages structure
        const basePath = import.meta.env.DEV ? '/draco/' : '/folio_3js/draco/'
        dracoLoader.setDecoderPath(basePath)

        this.gltfLoader = new GLTFLoader()
        this.gltfLoader.setDRACOLoader(dracoLoader)
        this.textureLoader = new THREE.TextureLoader()

        // Optional: Log decoder path in development
        if (import.meta.env.DEV) {
            console.log('Draco decoder path:', basePath)
        }
    }

    updateLoadingProgress(assetId, progress) {
        this.loadingProgress[assetId] = progress
        const totalProgress = Object.values(this.loadingProgress).reduce((a, b) => a + b, 0)
        const averageProgress = totalProgress / this.assetsToLoad.length
        
        // If you have a loading UI, you can update it here
        if (import.meta.env.DEV) {
            console.log(`Overall loading progress: ${Math.round(averageProgress)}%`)
        }
    }

    getAssetPath(path) {
        // Handle paths for both development and production
        return import.meta.env.DEV ? path : `/folio_3js${path}`
    }

    startLoading() {
        this.assetsToLoad.forEach((asset) => {
            const assetPath = this.getAssetPath(asset.path)
            
            const onError = (error) => {
                console.error(`Error loading asset ${asset.id}:`, error)
                if (this.assetStore.setLoadingError) {
                    this.assetStore.setLoadingError(asset.id, error)
                }
            }

            const onProgress = (progress) => {
                if (progress.lengthComputable) {
                    const percentComplete = (progress.loaded / progress.total) * 100
                    this.updateLoadingProgress(asset.id, percentComplete)
                }
            }

            if (asset.type === 'texture') {
                this.textureLoader.load(
                    assetPath,
                    (loadedAsset) => {
                        this.addLoadedAsset(loadedAsset, asset.id)
                        this.updateLoadingProgress(asset.id, 100)
                    },
                    onProgress,
                    onError
                )
            }

            if (asset.type === 'model') {
                this.gltfLoader.load(
                    assetPath,
                    (loadedAsset) => {
                        this.addLoadedAsset(loadedAsset, asset.id)
                        this.updateLoadingProgress(asset.id, 100)
                        
                        if (import.meta.env.DEV) {
                            console.log(`Loaded model: ${asset.id}`)
                        }
                    },
                    onProgress,
                    onError
                )
            }
        })
    }

    // Utility method to check if all assets are loaded
    areAllAssetsLoaded() {
        const loadedCount = Object.keys(this.assetStore.loadedAssets).length
        return loadedCount === this.assetsToLoad.length
    }

    // Utility method to get loading status
    getLoadingStatus() {
        return {
            totalAssets: this.assetsToLoad.length,
            loadedAssets: Object.keys(this.assetStore.loadedAssets).length,
            progress: this.loadingProgress,
            isComplete: this.areAllAssetsLoaded()
        }
    }
}