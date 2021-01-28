'use strict'
// const port = process.env.port || process.env.npm_config_port || 80 // 端口
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = 'vue Admin Template' // page title
// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
// You can change the port by the following methods:
// port = 9528 npm run dev OR npm run dev --port = 9528
const port = process.env.port || process.env.npm_config_port || 9528 // dev port

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
    // proxy: {
    //   '/': {
    //     target: 'http://localhost:8200/',
    //     changeOrigin: true
    //     // pathRewrite: {
    //     //   "^/api": "/"
    //     // }
    //   }
    // }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
