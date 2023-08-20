
describe('Demo Test', () => {

    it('my first test', async () => {

        browser.url('https://www.google.com/')

        await $('[name="q"]').setValue('WebdriverIO')
        // await $('[name="btnK"]').click()
        browser.keys('Enter')
        browser.pause(3000)

    })
})