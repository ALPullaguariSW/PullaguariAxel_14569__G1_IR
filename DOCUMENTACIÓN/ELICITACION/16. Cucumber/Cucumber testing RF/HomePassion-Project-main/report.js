const cucumberHtmlReporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'cucumber_report.json',
  output: 'cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    browser: {
      name: 'chrome',
      version: '89'
    },
    device: 'Local Test Machine',
    platform: {
      name: 'Windows',
      version: '10'
    }
  }
};

cucumberHtmlReporter.generate(options);
