import webpack from 'webpack'
import path from 'path'
import { BuildPaths } from '../build/types/config'
import { buildCssLoader } from '../build/loaders/buildCssLoader'

export const webpackConfig = ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    entry: '',
    html: '',
    build: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  }

  config.resolve.modules.push(paths.src)
  config.resolve.extensions.push('.ts', '.tsx')
  config.module.rules.push(buildCssLoader(true))

  return config
}

export default webpackConfig
