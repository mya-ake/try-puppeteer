import puppeteer from 'puppeteer';

describe('Context Example', () => {
  let browser: puppeteer.Browser;
  let context: puppeteer.BrowserContext;
  let page: puppeteer.Page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
  });

  beforeEach(async () => {
    context = await browser.createIncognitoBrowserContext();
    page = await context.newPage();
    await page.goto('https://mya-ake.com', { waitUntil: 'networkidle0' });
  });

  afterEach(async () => {
    if (context) await context.close();
  });

  afterAll(async () => {
    if (browser) await browser.close();
  });

  describe('Headline', () => {
    it('h1 is mya-ake.com', async () => {
      const h1Text = await page.$eval(
        '.content h1',
        (el: Element) => el.textContent,
      );
      expect(h1Text).toBe('mya-ake.com');
    });

    it('h1 is one', async () => {
      const elements = await page.$$('h1');
      expect(elements).toHaveLength(1);
    });
  });
});
