const puppeteer = require('puppeteer');
const fs = require('fs')
//const CONFIG =  require ('./config.json');

let page;
let browser;
const width = 1920;
const height = 1080;
const APP = 'https://app.theeye.io/dashboard#';

beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 80,
      args: [`--window-size=${width},${height}`]
    });
    page = await browser.newPage();
    await page.setViewport({ width, height });
  });
  describe("Contact form", () => {
    test("lead can submit a contact request", async () => {
      await page.goto(APP);
      console.log("HOLA")
    }, 16000);
  });






  afterAll(() => {
    browser.close();
});