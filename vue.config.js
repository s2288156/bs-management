// const port = process.env.port || process.env.npm_config_port || 80 // 端口

module.exports = {
  devServer: {
    proxy: {
      "/": {
        target: "http://localhost:8200/",
        changeOrigin: true,
        // pathRewrite: {
        //   "^/api": "/"
        // }
      }
    }
  }
}
