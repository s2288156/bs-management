// const port = process.env.port || process.env.npm_config_port || 80 // 端口

module.export = {
  devServer: {
    host: 'localhost',
    port: 8080,
    assetsSubDirectory: "static",
    assetsPublicPath: "/",
    proxyTable: {
      "/api": {
        target: "http://localhost:18000",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/"
        }
      }
    }
  }
}
