//01. Declare variables using `let` for different data types in JavaScript, and verify their types using `typeof`, 
//including an uninitialized variable


let firstName = "Paul"
console.log("Data type is: " + typeof(firstName), ", First name is: " + firstName);

let string, companyName = "Apple"
console.log("Data type is: " + typeof(companyName), ", Company name is: " + companyName);

let mobileNumber = 7800012345
console.log("Data type is : " + typeof(mobileNumber), ", Mobile number is: " + mobileNumber);

let isAutomation = true
console.log("Data type is : " + typeof(isAutomation), "Value of automation is: " + isAutomation);

let hasPlaywright
console.log("Data type is : " + typeof(hasPlaywright), "Value of automation is: " + hasPlaywright);


//Declare a global variable and shadow it inside a function using both `var` and `let` to see how they behave 
//differently when printed.

function getBrowserVersion(){
if (browserVersion === "Chrome") 
    {
        return "Its Chrome browser" 
    }
    else
    {
        return "Its not a chrome brwser"
    }
}
let browserVersion = "Chrome";
console.log(getBrowserVersion());