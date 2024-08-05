const { Before, After } = require('@cucumber/cucumber');
const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { By, until } = require('selenium-webdriver');

let driver;

// Configuración del WebDriver
const setupDriver = () => {
  let options = new chrome.Options();
  options.addArguments('--ignore-certificate-errors'); // Ignorar errores de SSL
  options.addArguments('--proxy-server=http://proxyserver:port'); // Configurar proxy si es necesario

  driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  return driver;
};

Before(async function () {
  driver = setupDriver();
  await driver.get('http://localhost:3000/login'); // URL de tu aplicación
});

After(async function () {
  await driver.quit(); // Cierra el navegador después de cada prueba
});

module.exports = { driver, By, until };
