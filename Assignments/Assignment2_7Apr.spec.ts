import { chromium, expect, test } from "@playwright/test";
import { assert } from "console";
import { TIMEOUT } from "dns/promises";


test("Edit existing lead", async() =>{

    // To launch browser
    const browser = await chromium.launch({headless: false, channel: "chrome"});
        
    //create browser context
    const browserContext = await browser.newContext();
    
    //Create new page
    const page = await browserContext.newPage();
    
    //Load url
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.waitForTimeout(2000);
    
    //Enter user name
    await page.getByLabel("Username").fill("demosalesmanager");
    await page.waitForTimeout(1000); 
    //await page.fill("#username", "demosalesmanager");
        
    // Enter password
    await page.getByLabel("Password").fill("crmsfa");
    //await page.fill("[name='PASSWORD']", "crmsfa");
    await page.waitForTimeout(1000);
    
    //click login
    page.click(".decorativeSubmit");
    await page.waitForTimeout(5000);
    
     //Click CRM/SFA
     await page.getByText('CRM/SFA').click();
     //await page.locator('text = CRM/SFA');
     await page.waitForTimeout(2000);

     //Click leads tab
    await page.click('text = Leads');

    //Click find lead
    await page.waitForTimeout(3000);
    //await page.getByText('Find Leads').click();
    await page.click('text = Find Leads');

    //Enter first name 
    await page.locator("//input[@id='ext-gen248']").fill("Tom"); 
    //await page.getByLabel('First name:').fill("Tom");
    //await page.locator('//input[contains(text(), "text")]').fill("Tom");
    //'//input[contains(text(), "text")] | //[@name="firstName"]|[@class=" x-form-text x-form-field"]').fill("Tom");
    
    
    //Click Find leads button on Search
    await page.locator('//button[@class="x-btn-text"][contains(text(), "Find Leads")]').click(), {timeout: 5000};
        
    //Click on the record  and edit record
    await page.locator("div[class='x-grid3-cell-inner x-grid3-col-partyId'] a[class='linktext']").first().click();
    await page.getByText('Edit').click()
      
    //Edit Company Name
    await page.fill("//input[@value='Testleaf']", "");
    const companyName = await page.fill("//input[@value='Testleaf']", "TestleafUpdated");
    console.log(companyName);    
    await expect(companyName).toBe(companyName);

    //Edit Annual Revenue
    await page.fill("//input[@value='5,000']", "");
    const revenue = await page.fill("//input[@value='5,000']", "");
    console.log(revenue);
    await expect(revenue).toBeTruthy;

    //Enter description and click Update
    await page.fill("#updateLeadForm_description", "Description added");
    await page.click('text=Update');

    browser.close();

})


  

    
    
    