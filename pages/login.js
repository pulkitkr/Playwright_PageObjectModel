exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page
        this.username_textbox = page.getByLabel('Username')
        this.password_textbox = page.getByLabel('Password')
        this.login_button = page.getByRole('button', { name: ' Login' })
    }
    async goLoginPage(){
        await this.page.goto('https://the-internet.herokuapp.com/login')
    }
    async login(userName, password){
        await this.username_textbox.fill(userName)
        await this.password_textbox.fill(password);
        await this.login_button.click()
    }
}