const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const WebpackPwaManifest = require( 'webpack-pwa-manifest' );

const path = require( 'path' );
module.exports = {
   context: __dirname,
   entry: './src/index.js',
   output: {
      path: path.resolve( __dirname, 'dist' ),
      filename: 'main.js',
      publicPath: '/',
   },
   devServer: {
      historyApiFallback: true
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            use: 'babel-loader',
         },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
         },
         {
            test: /\.(png|j?g|svg|gif)?$/,
            use: 'file-loader'
         }
]
   },
   resolve: {
    modules: ['node_modules', 'app'],
    extensions: ['.js', '.jsx', '.react.js', '.less'],
    mainFields: ['browser', 'jsnext:main', 'main'],
    alias: {
      '@app': path.resolve(__dirname, './src/'),
      '@app-components': path.resolve(__dirname, './src/components/'),
      // '@app-containers': path.resolve(__dirname, '../../app/containers/'),
      '@app-pages': path.resolve(__dirname, './src/pages/'),
      // '@app-redux': path.resolve(__dirname, '../../app/redux/'),
      // '@app-sagas': path.resolve(__dirname, '../../app/sagas/'),
      // '@app-services': path.resolve(__dirname, '../../app/services/'),
      // '@app-api': path.resolve(__dirname, '../../app/api/'),
      // '@app-axios': path.resolve(__dirname, '../../app/axios/'),
      // '@app-images': path.resolve(__dirname, '../../public/images/'),
      // '@app-styles': path.resolve(__dirname, '../../app/styles/'),
      // '@app-utils': path.resolve(__dirname, '../../app/utils/'),
      // '@app-hooks': path.resolve(__dirname, '../../app/hooks/'),
      '@public': path.resolve(__dirname, './public/'),
    },
  },
   plugins: [
      new HtmlWebPackPlugin({
         template: path.resolve( __dirname, 'public/index.html' ),
         filename: 'index.html',
         favicon: './public/favicon.ico',
         manifest: './public/manifest.json',
      }),
      new WebpackPwaManifest({
         "short_name": "World of Warcraf - PWA",
         "name": "PWA application using WoW API's",
         "icons": [
           {
             "src": path.resolve( __dirname, 'public/favicon.ico' ),
             "sizes": "64x64 32x32 24x24 16x16",
             "type": "image/x-icon"
           },
           {
             "src": path.resolve( __dirname, 'public/logo192.png' ),
             "type": "image/png",
             "sizes": "192x192"
           },
           {
             "src": path.resolve( __dirname, 'public/logo512.png' ),
             "type": "image/png",
             "sizes": "512x512"
           }
         ],
         "start_url": ".",
         "display": "standalone",
         "theme_color": "#000000",
         "background_color": "#ffffff",
       })
   ]
};