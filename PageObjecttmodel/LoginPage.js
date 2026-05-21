export default class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator('#email');
    this.password = page.locator('#password');
    this.signin = page.locator('.btnSubmit');
  }

  async gotoPage() {
    await this.page.goto('https://practicesoftwaretesting.com/auth/login');
  }

  async loginToWebsite(email, pass) {
    await this.username.fill(email);
    await this.password.fill(pass);
    await this.signin.click();
  }
}
