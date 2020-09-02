// const port = process.env.port || process.env.npm_config_port || 80 // 端口

module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:18080/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/"
        }
      }
    }
  }
}
