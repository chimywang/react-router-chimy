module.exports = {
    entry: {
        demo1:'./demo1/index.js',
        demo2:'./demo2/index.js',
        demo3:'./demo3/index.js',
        demo4:'./demo4/index.js',
        demo5:'./demo5/index.js',
    },
    output: {
        filename: './scripts/bundle_[name].js',
        publicPath: ''
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
        ]
    }
}
