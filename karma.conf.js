const path = require('path');
process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'webpack'],

    files: [
      'src/tests/**/*.spec.js',
      'src/tests/**/*.spec.jsx'
    ],

    preprocessors: {
      'src/tests/**/*.spec.js': ['webpack'],
      'src/tests/**/*.spec.jsx': ['webpack']
    },

    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: { node: 'current' } }],
                  ['@babel/preset-react', { runtime: 'automatic' }]
                ],
                plugins: ['babel-plugin-istanbul']
              }
            }
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
          {
            test: /\.(png|jpe?g|gif|svg|webp)$/i,
            type: 'asset/resource'
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.jsx']
      }
    },

    webpackMiddleware: {
      stats: 'errors-only'
    },

    reporters: ['spec', 'coverage'],

    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'text-summary' },
        { type: 'lcov', subdir: 'lcov' }
      ]
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadlessCustom'],
    customLaunchers: {
      ChromeHeadlessCustom: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage']
      }
    },
    singleRun: true,
    concurrency: Infinity
  });
};
