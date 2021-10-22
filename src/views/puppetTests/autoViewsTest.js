const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 })
  await page.goto("http://localhost:8080/");
  await page.screenshot({ path: "testsScreenshots/home.png" });
  console.log("Home Page loaded successfully");
  await page.goto("http://localhost:8080/Asthma");
  await page.screenshot({ path: "testsScreenshots/Asthma.png" });
  console.log("Asthma Page loaded successfully");
  await page.goto("http://localhost:8080/Breathing");
  await page.screenshot({ path: "testsScreenshots/breathing.png" });
  console.log("breathing Page loaded successfully");
  await page.goto("http://localhost:8080/Disease");
  await page.screenshot({ path: "testsScreenshots/breathing.png" });
  console.log("Disease Page loaded successfully");
  await page.goto("http://localhost:8080/Smoking");
  await page.screenshot({ path: "testsScreenshots/smoking.png" });
  console.log("Smoking Page loaded successfully");
  await page.goto("http://localhost:8080/Vaping");
  await page.screenshot({ path: "testsScreenshots/vaping.png" });
  console.log("Vaping Page loaded successfully");
  await browser.close();
})();
