const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const fs = require('fs');
const path = require('path');
const assert = require('assert');

let driver;
const screenshotsDir = path.resolve(__dirname, 'screenshots');
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir);
}

Before(async function () {
  driver = await new Builder().forBrowser('chrome').build();
});

After(async function (scenario) {
  const screenshotPath = path.join(screenshotsDir, `screenshot-${Date.now()}.png`);
  const screenshot = await driver.takeScreenshot();
  fs.writeFileSync(screenshotPath, screenshot, 'base64');
  console.log(`Captura de pantalla guardada en ${screenshotPath}`);
  await driver.quit();
});

Given('I am on the login page', async function () {
  await driver.get('http://localhost:3000/login');
  const screenshotPath = path.join(screenshotsDir, `screenshot-${Date.now()}.png`);
  const screenshot = await driver.takeScreenshot();
  fs.writeFileSync(screenshotPath, screenshot, 'base64');
  console.log(`Captura de pantalla guardada en ${screenshotPath}`);
});

When('I enter valid credentials', async function () {
  const emailField = await driver.findElement(By.name('email'));
  const passwordField = await driver.findElement(By.name('password'));
  await emailField.sendKeys('user@example.com');
  await passwordField.sendKeys('password');
  const screenshotPath = path.join(screenshotsDir, `screenshot-${Date.now()}.png`);
  const screenshot = await driver.takeScreenshot();
  fs.writeFileSync(screenshotPath, screenshot, 'base64');
  console.log(`Captura de pantalla guardada en ${screenshotPath}`);
});

When('I click the login button', async function () {
  const loginButton = await driver.findElement(By.name('loginButton'));
  await loginButton.click();
  const screenshotPath = path.join(screenshotsDir, `screenshot-${Date.now()}.png`);
  const screenshot = await driver.takeScreenshot();
  fs.writeFileSync(screenshotPath, screenshot, 'base64');
  console.log(`Captura de pantalla guardada en ${screenshotPath}`);
});

Then('I should see the tasks page', async function () {
  try {
    await driver.wait(until.urlIs('http://localhost:3000/tasks'), 5000);
    const screenshotPath = path.join(screenshotsDir, `screenshot-${Date.now()}.png`);
    const screenshot = await driver.takeScreenshot();
    fs.writeFileSync(screenshotPath, screenshot, 'base64');
    console.log(`Captura de pantalla guardada en ${screenshotPath}`);
  } catch (error) {
    console.error('No se pudo encontrar la página de tareas:', error);
    const screenshotPath = path.join(screenshotsDir, `screenshot-${Date.now()}.png`);
    const screenshot = await driver.takeScreenshot();
    fs.writeFileSync(screenshotPath, screenshot, 'base64');
    console.log(`Captura de pantalla guardada en ${screenshotPath}`);
    throw error; // Asegúrate de lanzar el error para que la prueba falle
  }
});

When('I enter an incorrect email and a valid password', async function () {
  const emailField = await driver.findElement(By.name('email'));
  const passwordField = await driver.findElement(By.name('password'));
  await emailField.sendKeys('wronguser@example.com');
  await passwordField.sendKeys('password');
  const screenshotPath = path.join(screenshotsDir, `screenshot-${Date.now()}.png`);
  const screenshot = await driver.takeScreenshot();
  fs.writeFileSync(screenshotPath, screenshot, 'base64');
  console.log(`Captura de pantalla guardada en ${screenshotPath}`);
});

Then('I should see an error message for incorrect email', async function () {
  try {
    const errorMessage = await driver.findElement(By.css('Typography[color="error"]')).getText();
    assert.strictEqual(errorMessage, 'Correo electrónico o contraseña incorrectos.');
    const screenshotPath = path.join(screenshotsDir, `screenshot-${Date.now()}.png`);
    const screenshot = await driver.takeScreenshot();
    fs.writeFileSync(screenshotPath, screenshot, 'base64');
    console.log(`Captura de pantalla guardada en ${screenshotPath}`);
  } catch (error) {
    console.error('No se pudo encontrar el mensaje de error para el correo electrónico incorrecto:', error);
    const screenshotPath = path.join(screenshotsDir, `screenshot-${Date.now()}.png`);
    const screenshot = await driver.takeScreenshot();
    fs.writeFileSync(screenshotPath, screenshot, 'base64');
    console.log(`Captura de pantalla guardada en ${screenshotPath}`);
    throw error; // Asegúrate de lanzar el error para que la prueba falle
  }
});

When('I enter a valid email and an incorrect password', async function () {
  const emailField = await driver.findElement(By.name('email'));
  const passwordField = await driver.findElement(By.name('password'));
  await emailField.sendKeys('user@example.com');
  await passwordField.sendKeys('wrongpassword');
  const screenshotPath = path.join(screenshotsDir, `screenshot-${Date.now()}.png`);
  const screenshot = await driver.takeScreenshot();
  fs.writeFileSync(screenshotPath, screenshot, 'base64');
  console.log(`Captura de pantalla guardada en ${screenshotPath}`);
});

Then('I should see an error message for incorrect password', async function () {
  try {
    const errorMessage = await driver.findElement(By.css('Typography[color="error"]')).getText();
    assert.strictEqual(errorMessage, 'Correo electrónico o contraseña incorrectos.');
    const screenshotPath = path.join(screenshotsDir, `screenshot-${Date.now()}.png`);
    const screenshot = await driver.takeScreenshot();
    fs.writeFileSync(screenshotPath, screenshot, 'base64');
    console.log(`Captura de pantalla guardada en ${screenshotPath}`);
  } catch (error) {
    console.error('No se pudo encontrar el mensaje de error para la contraseña incorrecta:', error);
    const screenshotPath = path.join(screenshotsDir, `screenshot-${Date.now()}.png`);
    const screenshot = await driver.takeScreenshot();
    fs.writeFileSync(screenshotPath, screenshot, 'base64');
    console.log(`Captura de pantalla guardada en ${screenshotPath}`);
    throw error; // Asegúrate de lanzar el error para que la prueba falle
  }
});
