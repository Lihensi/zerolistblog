const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/api': {
        // 远程服务器
        // target: 'http://zerolist.cn:8080',
        // 本地服务器
        target: 'http://localhost:8001',
      },
    }
  }
})
