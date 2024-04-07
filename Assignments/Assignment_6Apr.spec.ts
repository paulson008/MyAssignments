import { chromium, test } from "@playwright/test";

test ("Test to launch the Saleforce", async () => {
    
    // To launch browser
    const browser = await chromium.launch({headless: false, channel: "chrome"});
    
    //create browser context
    const browserContext = await browser.newContext();
   
    //Create new page
    const page = await browserContext.newPage();
    
    //Load url
    await page.goto("https://dojo5-dev-ed.develop.my.salesforce.com/");
    await page.waitForTimeout(2000);

    //Enter user name
    await page.locator("#username").fill("paulsonvm@gmail.com");
    //await page.waitForTimeout(1000);

    // Enter password
    await page.locator("#password").fill("JGUQ4DP3f4CJzC4");
    //await page.waitForTimeout(2000);

    //Get page URL
    const url = page.url();
    console.log("Page url : " + url);

    //Get page title
    const title = await page.title();
    console.log("Title of the page is: " + title);

    //click login
    page.locator("#Login").click();
    await page.waitForTimeout(10000);

    //close page
    await page.close();
    
    //Close browser context
    await browserContext.close();
 
    //Close the browser instance
    await browser.close();
 })

