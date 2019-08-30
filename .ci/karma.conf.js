module.exports = (config) => {
  config.set({
    basePath: '../',
    files: [
      'node_modules/chai/chai.js',
      'node_modules/underscore/underscore.js',
      'node_modules/jquery/dist/jquery.min.js',

      'src/Grub.js',
      'src/Bee.js',
      'src/HoneyMakerBee.js',
      'src/ForagerBee.js',
      'src/RetiredForager.js',

      'test/verifyClass.js',
      'test/*.js',
    ],
    frameworks: ['mocha'],
    browsers: ['ChromeHeadless'],
    logLevel: config.LOG_INFO,
    singleRun: true,
    port: 9876,
  });
};
