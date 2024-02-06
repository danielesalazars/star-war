import slsw from 'serverless-webpack';
import nodeExternals from 'webpack-node-externals';

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  stats: 'minimal',
  resolve: {
    extensions: ['.js', '.json', '.ts'],
  },
  external: [nodeExternals()],
  output: {
    libraryTarget: 'commonjs2',
    path: `${__dirname}/.webpack`,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        loader: 'ts-loader',
        exclude: [
          {
            exclude: /node_modules/,
          },
        ],
      },
    ],
  },
};
