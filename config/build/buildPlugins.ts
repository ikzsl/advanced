import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BuildOptions } from './types/config';

export const buildPlugins = ({
  paths,
}: BuildOptions): webpack.WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
      title: 'Development',
    }),
    new webpack.ProgressPlugin(),
  ];
};
