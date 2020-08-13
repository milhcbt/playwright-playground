class HomePage {
  async navigateTo() {
    return page.goto(global.BASE_URL);
  }

  async isActive() {
    return (await page.evaluate(() => window.location.pathname)) === 'google.com';
  }
}

module.exports = { HomePage };
