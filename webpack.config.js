var webpack = require('webpack');
module.exports = {
    entry: {
        demo1:'./demo1/index.js',
        demo2:'./demo2/index.js',
        demo3:'./demo3/index.js',
        demo4:'./demo4/index.js',
        demo5:'./demo5/index.js',
        demo6:'./demo6/index.js',
        demo7:'./demo7/index.js',
        demo8:'./demo8/index.js',
        demo9:'./demo9/index.js',
        demo10:'./demo10/index.js',
        //demo11:'./demo11/index.js',
        demo12:'./demo12/index.js',
    },
    output: {
        path: 'public',
        filename: 'scripts/bundle_[name].js',
        publicPath: '/'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
        ]
    },
    // add this handful of plugins that optimize the build
    // when we're in production
    plugins: process.env.NODE_ENV === 'production' ? [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ] : [],

}
