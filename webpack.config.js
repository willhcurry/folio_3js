const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'), // Edit this to your desired output directory
    filename: 'bundle.js',
  },
  experiments: {
    // Enable WebAssembly experiments based on your preference
    // asyncWebAssembly: true, // Recommended for newer browsers
    syncWebAssembly: true, // Deprecated, similar to Webpack 4
    asyncWebAssembly: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Load all JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'wasm-loader', // Transpile modern JavaScript syntax
          options: {
            presets: ['@babel/preset-env'], // Use appropriate presets for your target environment
          },
        },
      },
      {
        test: /\.css$/, // Load CSS files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader
      },
      {
        test: /\.glb$/, // Load Three.js models
        loader: 'three-loader',
      },

      // New rule for WebAssembly module with explicit parser
      {
        test: /\.wasm$/, // Load WebAssembly modules
        type: "webassembly/async", // Set the module type (sync or async)
        use: {
          loader: 'file-loader', // Use file-loader for loading the binary file
          options: {
            outputPath: 'assets', // Specify output path for the file
            publicPath: 'assets/',
          },
        },
      },
    ],
  },
  devServer: {
    port: 8080,
    contentBase: false,
    publicPath: '/assets/',
    hot: true,
    open: true,
  },
}