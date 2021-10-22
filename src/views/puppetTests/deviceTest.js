const puppeteer = require("puppeteer");
const iPhone = puppeteer.devices["iPhone X"];
const iPad = puppeteer.devices["iPad"];

puppeteer.launch().then(async browser => {
  const page = await browser.newPage();
  await page.emulate(iPhone);
  await page.goto("http://localhost:8080/");
  await page.screenshot({
    path: "testsScreenshots/iPhone10.png",
    fullPage: true
  });
  console.log("iPhone emulated successfully");
  await page.emulate(iPad);
  await page.goto("http://localhost:8080/");
  await page.screenshot({
    path: "testsScreenshots/iPad.png",
    fullPage: true
  });
  console.log("iPad emulated successfully");
  console.log(await page.title());
  await browser.close();
});
