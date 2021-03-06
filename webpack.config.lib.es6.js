const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const merge = require('webpack-merge')
const common = require('./webpack.config.lib.common.js')

const root = path.join(__dirname)

module.exports = merge(common, {
  output: {
    path: path.resolve(root + '/dist'),
    filename: 'material-components-vue.min.js',
    libraryTarget: 'umd',
    library: 'material-components-vue'
  },
  plugins: [
    new UglifyJSPlugin({
      uglifyOptions: {
        ecma: 6
      },
      cache: true,
      parallel: true
    })
  ]
})
