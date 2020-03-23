const { override, fixBabelImports,addLessLoader,addWebpackAlias,addDecoratorsLegacy } = require('customize-cra');

const {resolve}=require("path");
module.exports = override(
  addDecoratorsLegacy(),
  fixBabelImports('import', {
        libraryName: 'antd',
         libraryDirectory: 'es',
         style: true,
       }),
       addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#4cfc46' },
       }),
      addWebpackAlias({
       '@': resolve('src')
       })

     );