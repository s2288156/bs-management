// const port = process.env.port || process.env.npm_config_port || 80 // 端口

module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://www.baidu.com/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/"
        }
      }
    }
  }
}
