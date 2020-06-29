const ForkTSCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const path = require('path')

function modify(defaultConfig, { target, dev }, webpack, userOptions = {}) {
  const config = defaultConfig
  config.resolve.extensions.push('.ts', '.tsx')
  config.plugins.push(
    new ForkTSCheckerWebpackPlugin({
      checkSyntacticErrors: true,
      eslint: true,
  }))
  config.module.rules.push({
    test: /\.(ts|js)x?$/,
    include: [path.resolve(__dirname, 'src')],
    loader: 'babel-loader',
  })
  return config
}

module.exports = modify;
