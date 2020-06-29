const ForkTSCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const path = require('path')

function modify(defaultConfig, { target, dev }, webpack, userOptions = {}) {
  const config = defaultConfig
  config.resolve.extensions.push('.ts', '.tsx')
  config.plugins.push(
    new ForkTSCheckerWebpackPlugin({
      eslint: {
        files: './src/**/*.{ts,tsx,js,jsx}' // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
      },
  }))
  config.module.rules.push({
    test: /\.(ts|js)x?$/,
    exclude: /node_modules/,
    loader: "babel-loader"
  })
  return config
}

module.exports = modify;
