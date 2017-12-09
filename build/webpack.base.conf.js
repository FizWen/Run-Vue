var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')

var autoprefixer = require('autoprefixer');
var nested = require('postcss-nested');
var cssnext = require('postcss-cssnext');
var flexFallback = require('postcss-flex-fallback');

var env = process.env.NODE_ENV

// check env & config/index.js to decide weither to enable CSS Sourcemaps for the
// various preprocessor loaders added to vue-loader at the end of this file
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd

// var getPath = function(_path) {
//   var assetsPublicPath = ''
//   if (process.env.NODE_ENV === 'production') {
//       assetsPublicPath = config.build.assetsPublicPath
//   } else if (process.env.NODE_ENV === 'dist') {
//       assetsPublicPath = config.dist.assetsPublicPath
//   } else {
//       assetsPublicPath = config.dev.assetsPublicPath
//   }
//   return path.posix.join(assetsPublicPath, _path)
// }

// process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    // publicPath: getPath(process.env.NODE_ENV),  // 指定了一个在浏览器中被引用的URL地址
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: process.env.NODE_ENV === 'production' ? '[name].js?[chunkhash]' : '[name].js',
    chunkFilename: process.env.NODE_ENV === 'production' ? 'chunk[id].js?[chunkhash]' : 'chunk[id].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: [/node_modules/,/static/,/assets/]
      }
    ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /(node_modules|static|src\/assets\/dots)/
      },
      {
        test: /\.md$/,
        loader: 'raw-loader',
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      // {
      //   test: /\.(woff|svg|eot|ttf)\??.*$/,
      //   loader: 'url?limit=10000',
      //   query: {
      //     name: utils.assetsPath('./fonts/[name].[hash:7].[ext]')
      //   }
      // },
      {
        test: /\.(woff|eot|ttf|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: env === 'dist' ? utils.assetsPath('style/../fonts/[name].[hash:7].[ext]') : utils.assetsPath('./fonts/[name].[hash:7].[ext]')
        }
      },
      //在原有基础上加上一个postcss的loader就可以了
      {
        test:/\.css$/,
        loaders:['css-loader','postcss-loader'],
        // name: utils.assetsPath('./style/[name].css')
      }
    ]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  vue: {
    loaders: utils.cssLoaders({ sourceMap: useCssSourceMap }),
    autoprefixer: true,
    postcss: [
      nested(),
      cssnext({ browsers: ['last 2 versions', 'Android >= 2.1', 'iOS >= 7.0'] }),
      flexFallback(),
    ]
  }
}
