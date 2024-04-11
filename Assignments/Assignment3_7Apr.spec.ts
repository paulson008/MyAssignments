import { chromium, expect, test } from "@playwright/test";

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
    await page.getByLabel("Username").fill("paulsonvm@gmail.com");
   
    // Enter password
    await page.getByLabel("Password").fill("JGUQ4DP3f4CJzC4");
    
    //click login
    page.locator("#Login").click();
    await page.waitForTimeout(10000);

    //Get page URL
    const url = page.url();
    await expect(url).toBe(url);
    console.log("Page url : " + url);

    //Get page title
    const title = await page.title();
    await page.waitForTimeout(2000);
    await expect(title).toBe(title);
    console.log("Title of the page is: " + title);

    //Enter Service in App launcher
    await page.locator(".slds-icon-waffle").click();

    //Click on View All
    await page.getByText('View All').click(),  {timeout: 3000};
    //page.frameLocator("#slds-size_medium").getByText("View All").click(), {timeout: 5000};
    
    //Enter ‘Service’ in the App Launcher Search box
    await page.getByPlaceholder("Search apps or items...").fill("Service"), {timeout: 3000};

    //Click Service using index based XPath
    await page.locator('[src="https://dojo5-dev-ed.develop.my.salesforce.com/logos/Salesforce/ServiceCloud/logo.png"]').click(),
   
    //Click Accounts using attribute based CSS selector
    await page.locator('[href="/lightning/o/Account/home"]').click(), {timeout: 5000};

    //Click New using getByRole
    await page.getByRole('button', {name: 'New'}).click(), {timeout: 5000};
    //await page.locator("//div[@title='New']").click(), {timeout: 5000};

    //Enter Account name using attribute based CSS selector
    await page.locator("//div/input[@name='Name']").fill("Test"); 
        
    //Click Save button using XPath
    await page.locator("//button[@name='SaveEdit']").click(), {timeout: 1000};

    //Verify the toast message displayed
    await page.locator(".forceVisualMessageQueue").isVisible();
   
    //Close the browser instance
    await browser.close();
    
 })
