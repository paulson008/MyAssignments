
/**
var firstName = "vidya"
//console.log (firstName);
var firstName = "paul";
console.log (firstName);


let companyName = "Google"
console.log (companyName);
companyName = "ABB";
console.log (companyName);

const browserName = "Chrome";
//console.log(browserName);
//browserName = "Safari";
console.log(browserName);



let gender = 'male' //global
function printGender() {

    var age = 25;//function scope - whatever declared inside function 
    if (gender.startsWith('female')){
        let color = 'blue';
        console.log("this color is from block" + color);
        console.log("She/Her");
    }
    else
    {
        console.log("He/His");
    }
    console.log(age);
    console.log("this color is from function " + color)
}
printGender();



let gender = 'female' //global
function printGender() {

    let age = 25;//function scope - whatever declared inside function 
    if (gender.startsWith('female')){
        let password = 'blue';
        console.log("This is from the block " + password);
        console.log("She/Her");
    }
    else
    {
        console.log("He/His");
    }
    console.log(age);
    //console.log("This  is from function " + password)
}
printGender();


//Hoisting
console.log(browserVersion);
var browserVersion = "123";
console.log(browserVersion);

console.log(browserName);
let browserName = "123";
*/

const browser = "Chrome";
console.log(browser);

