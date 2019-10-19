const webpack = require('webpack')

module.exports = {
  target: 'serverless',
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        defaultLoaders.babel,
        {
          loader: require('styled-jsx/webpack').loader,
          options: {
            type: 'scoped'
          }
        }
      ]
    })

    config.plugins.push(
      new webpack.EnvironmentPlugin(process.env)
    )
    
    return config
  }
}
