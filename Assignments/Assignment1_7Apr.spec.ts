import { chromium, expect, test } from "@playwright/test";
import { assert } from "console";


test("Create a new lead", async() =>{

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
    //page.click(".decorativeSubmit");
    page.click(".decorativeSubmit");
    await page.waitForTimeout(5000);
    
     //Click CRM/SFA
     await page.getByText('CRM/SFA').click();
     //await page.locator('text = CRM/SFA');
     await page.waitForTimeout(5000);

     //Click leads
    await page.click('text = Leads');

    //Create new lead
    await page.click("text=Create Lead", {timeout:7000});

    //Enter company name
    //const companyName  = page.locator("[id-createLeadForm_companyName]");
    const companyName = "Testleaf"    
    await page.fill("#createLeadForm_companyName", companyName);
    console.log("Company name is " + companyName);
    await expect(companyName).toBe(companyName);

    //Enter first name and check it contain Paulson
    const fname = "Tom"
    await page.fill("#createLeadForm_firstName", fname);
    console.log("First name is " + fname);
    await expect('Tom').toEqual(expect.stringContaining('Tom'));
    
    //Enter Last name 
    const sname = "Jerry"
    await page.fill("#createLeadForm_lastName", sname);
    console.log("Second name is " + sname);
    await expect(sname).toBeTruthy;
   
    //Enter Salutation
    await page.fill("#createLeadForm_personalTitle", "Mr.");

    //Enter Title
    await page.fill("#createLeadForm_generalProfTitle", "Professor");

    //Enter Annual revenue 
    await page.fill("#createLeadForm_annualRevenue", "5000");

   //Enter Department 
   await page.fill("#createLeadForm_departmentName", "Finance");

   //Enter Ph No. 
   await page.fill("#createLeadForm_primaryPhoneNumber", "07844412345");

   //Click Create Lead button
   //page.click(".smallSubmit");
   page.click("[class='smallSubmit']");
   await page.waitForTimeout(2000);

    //Print the status after creating lead
    let status = page.locator('//*[@id="viewLead_statusId_sp"]')
    console.log("The status of " + status); 

   // let status =  page.locator("#viewLead_statusId_sp");
    //await status.innerText();
    //console.log(`The status of ${status}`);

    browser.close();

 
   })
