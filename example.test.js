

const puppeteer = require('puppeteer')
const expect = require('chai').expect

describe('My First Puppeteer Test', () => {
    it(' should launch the browser', async function() {


    const browser = await puppeteer.launch({
    
    headless: true,  
    args: ['--disable-notifications'], 
    sloMo:10
    
    })

    const page = await browser.newPage()
    await page.setDefaultTimeout(10000) // set default timeouts 
    await page.setDefaultNavigationTimeout(20000) // set default timeouts 

    
    /* Go Back & Forward 
    
    await page.goto('https://example.com/')
    await page.waitForSelector('h1')
    await page.goto('https://dev.to/')
    await page.waitForSelector('#top-bar')
    await page.goBack()
    await page.waitForSelector('h1')
    await page.goForward()
    await page.waitForSelector('h1')
    */
 
    // Inputs
    //await page.goto('https://devexpress.github.io/testcafe/example/')
    await page.goto('https://example.com/')
     
     // await page.waitForXPath('//h1') //wait For Xpath 

    //await page.type('#developer-name','Nathalia',{delay: 1000}) //text fields
  
    // Buttons and Checkbox 
    
    /*await page.click('#tried-test-cafe',{clickCount: 1}) //checkbox 
    await page.select('#preferred-interface', 'JavaScript API') // picklist
    const message = 'Lets fill that message with some'
    await page.type('#comments', message) // text area
    await page.click('#submit-button') //button
    await page.waitForSelector('.result-content')
    await page.waitFor(5000)*/

     // Get Page title e URL 

    const title = await page.title()
    const url= await page.url()

    /*console.log('TITLE: ' + title) //imprime no console o titulo 
    console.log('URL: ' + url) // imprime no console a url */

    // Get element text
    const text = await page.$eval('h1', element=>element.textContent)
    //console.log('Text in the H1: ' + text)

    //Get Element Count
    const count = await page.$$eval('p', element=>element.length) //$$eval-> multiples elements (<p></p>,<p></p>) result= 2 tags
    //console.log('Number of P tags on the page: ' + count)


    // Assertions 
    expect(title).to.be.a('string', 'Example Domain')
    expect(url).to.include('example.com') // or contain
    expect(text).to.be.a('string', 'Example Domain') 
    expect(count).to.equal(2)   

    // keyboard press simulation

    await page.goto('http://zero.webappsecurity.com/')
    
    /*await page.waitForSelector('#searchTerm')
    await page.type('#searchTerm', 'Hello World')
    await page.keyboard.press('Enter',{delay:10})*/
    
    // Element Not exist
    await page.waitForSelector('#signin_button')
    await page.click('#signin_button')
    await page.waitFor(() => !document.querySelector('#signin_button')
    await page.waitForSelector('#signin_button',{ hidden: true})


    await browser.close()


    })




})