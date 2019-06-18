import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 600 });
  await page.goto('https://mya-ake.com', { waitUntil: 'networkidle0' });

  await page.click('#CybotCookiebotDialogBodyButtonAccept');

  await page.waitFor(2000);

  await Promise.all([
    page.waitForNavigation(),
    page.click('.main-header a[href="/slides"]'),
  ]);

  await page.waitFor(2000);

  await Promise.all([
    page.waitForNavigation(),
    page.click('.content-body ul a'),
  ]);

  while (true) {
    try {
      await Promise.all([
        page.click('#btn-swiper-next'),
        page.$eval('#btn-swiper-next', el => {
          if (el.classList.contains('swiper-button-disabled')) {
            throw 'complete';
          }
        }),
      ]);
    } catch (_) {
      break;
    }
  }

  await page.waitFor(6000);

  await page.click('#toggle-menu-slide');

  await page.waitFor(2000);

  await page.click('#menu-slide a[href="/slides"]');

  await page.waitFor(5000);

  await browser.close();
})().catch(err => {
  console.log(err);
  process.exit(1);
});
