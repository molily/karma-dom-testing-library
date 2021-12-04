// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = (config) => {
  config.set({
    basePath: '',
    files: [
      'src/karma-helper.js',
      'src/*.test.js',
      'src/*.test.jsx',
    ],
    preprocessors: {
      'src/*.test.js': ['esbuild'],
      'src/*.test.jsx': ['esbuild'],
    },
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-esbuild'),
    ],
    client: {
      jasmine: {
        failSpecWithNoExpectations: true,
      },
      clearContext: false,
    },
    jasmineHtmlReporter: {
      suppressAll: true,
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true,
    esbuild: {
      jsxFactory: 'h',
      jsxFragment: 'Fragment',
    },
  });
};
