const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const path = require('path');

const deps = require('./package.json').dependencies;
module.exports = (_, argv) => {
  const pathDomain = argv.mode === 'development' ? 'http://localhost:8080/' : 'https://about-recursion.vercel.app/';
  const devtool = argv.mode === 'development' ? 'source-map' : false;
  return {
    output: {
      publicPath: pathDomain,
    },

    resolve: {
      alias: {
        src: path.resolve(__dirname, 'src'),
      },
      extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    },

    devServer: {
      port: 8080,
      historyApiFallback: true,
    },

    devtool,

    module: {
      rules: [
        {
          test: /\.m?js/,
          type: 'javascript/auto',
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.(css|s[ac]ss)$/i,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },

    plugins: [
      new ModuleFederationPlugin({
        name: 'recursion',
        filename: 'remoteEntry.js',
        remotes: {},
        exposes: {
          './Recursion': './src/App',
        },
        shared: {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: deps['react-dom'],
          },
          'react-router-dom': {
            singleton: true,
            requiredVersion: deps['react-router-dom'],
          },
        },
      }),
      new HtmlWebPackPlugin({
        template: './src/index.html',
      }),
    ],
  };
};
