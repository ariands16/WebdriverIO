const LoginPage = require('../pages/login.pages')

describe('login page', () => {

    it('login', async () => {

        browser.url('https://the-internet.herokuapp.com/login')

        await $('#username').setValue('tomsmith')
        await $('#password').setValue('SuperSecretPassword!')
        await $('button[type="submit"]').click()

        await expect($('#flash')).toHaveTextContaining('You logged into a secure area!')
    })

    it('login1', async () => {
        
        browser.url('https://the-internet.herokuapp.com/login')
        
        // get function from LoginPage directory
        await LoginPage.login('tomsmith','SuperSecretPassword!')
        await LoginPage.checkMessage('You logged into a secure area!')
    })

})