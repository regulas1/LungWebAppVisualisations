const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // set the viewport so we know the dimensions of the screen
  await page.setViewport({ width: 800, height: 600 });

  // go to a page setup for mouse event tracking
  await page.goto("http://localhost:8080/");

  // click an area
  await page.mouse.click(132, 103, { button: 'left'});

  // the screenshot should show feedback from the page that right part was clicked.
  await page.screenshot({ path: "testsScreenshots/mouse_click.png" });
  console.log("Navigated to Vaping Page✅");
  await page.mouse.click(131, 103, { button: 'left'});
  await page.screenshot({ path: "testsScreenshots/mouse_click2.png" });
  console.log("Navigated to Homepage✅");
  console.log("Navigation is successful✅");
  await browser.close();
})();
