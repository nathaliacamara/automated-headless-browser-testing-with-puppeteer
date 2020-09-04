

const puppeteer = require('puppeteer')

describe('My First Puppeteer Test', () => {
    it(' should launch the browser', async function() {


    const browser = await puppeteer.launch({
    
    headless: false,  
    args: ['--disable-notifications'],
    sloMo:500
    
    })

    const page = await browser.newPage()
    await page.goto('https://example.com/')
    await page.waitForSelector('h1')
    await browser.close()




    })




})