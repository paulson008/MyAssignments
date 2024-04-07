//Classroom Assignment: Odd or Even

/*
function isOddOrEven(){
    if (randomNum % 2 > 0)
    {
        return "Given number is Odd number";
    } 
    else
    {
        return "Given number is Even number"
    }
}
let randomNum = 12;
console.log(isOddOrEven());

//reverse a string, check for palindromes in Js by manipulating strings and using conditional logic




//categorize a number as positive, negative, or zero using conditional statements in JavaScript.
function checkNumber(){
    if (givenNum > 0)
    {
        return givenNum + " - This is a positive number"
    }
    else if (givenNum < 0)
    {
        return givenNum + " - This is a negative number"
    }
    else
    {
        return givenNum + " - Given number is zero"
    }
}
let givenNum = 100;
console.log(checkNumber());


//JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and
//`runTests` with `switch` for test type messages.

function launchBrowser(){
    if (browserName === "chrome")
    {
        return "This is Chrome browser"
    }
    else
    {
        return "This is not chrome browser"
    }
}
let browserName = "chrome1";
console.log(launchBrowser());

//Run tests assignment
function runTests(){
    switch (testType) {
        case "smoke":
        console.log("This is smoke test");          
            break;
        case "sanity":
        console.log("This is sanity test");       
            break;
        case "regression":
        console.log("This is regression test");           
            break;
        default: 
        console.log("Default smoke test"); 
            break;
    }
}
let testType = 'regression';
(runTests());

//Write a JavaScript function that evaluates a student's score and returns their grade using a switch statement
//to assess score ranges.
function studentScore(){
    switch (studentGrade) {
        case "second":
        console.log("More than 50% Second class");
            break;
        case "first":
        console.log("More than 60% first class");
            break;
        case "distinction":
        console.log("More than 80% distinction class");
            break;
        default:
        console.log("Student failed");
            break;
    }
}
let studentGrade = "distinction"
studentScore();

//Write a JavaScript function named `printOddNumbers` that prints odd numbers between 1 and 25
function printOddNumbers(){
for (let i = 1; i <= 25; i++) {
    if (i % 2 > 0 ) 
    {
        console.log(i);
        
    } 
}
}
printOddNumbers();


//Manipulate strings and use looping statements in a programming language to solve problems.
//Given a string s consisting of words and spaces, return the length of the last word in the string

//1. convert string to array
//2. findout last word in array index, store it in a variable
//3 count number of characters using string length function

//Example 1
function printLastWordLength(){
    const words = string.split(' ');
    let lastWord = string.split(' ').pop();
    const lastWordLength = words[words.length - 1].length; 
    return console.log("The last word is \"" + lastWord + "\" with length of " + lastWordLength );
    } 
const string = "  fly me to moon on a Atlantix  ";
printLastWordLength();

//Example 2
function printLastWordLength(){
    const words = string.trim().split(' ');
    let lastWord = string.trim().split(' ').pop();
    const lastWordLength = words[words.length - 1].length; 
    return console.log("The last word is \"" + lastWord + "\" with length of " + lastWordLength );
    } 
const string = "  fly me to moon on a   Appllo  ";
printLastWordLength();


//try with loops

//Example 3 anagrams

function isAnagram(stringOne, stringTwo){
    let wordOne = stringOne.trim().toLowerCase().split('').sort().join('');
    let wordTwo = stringTwo.trim().toLowerCase().split('').sort().join('');
    console.log(wordOne, wordTwo);
    if (wordOne===wordTwo) 
    {
       return console.log("True - Given strings are anagrams");
    }
    else
    {
        return console.log("False - Given strings are NOT anagrams");
    }
}
let stringOne = "santa";
let stringTwo = "saten";
isAnagram(stringOne, stringTwo);
*/
    
function palindromeTest(str){
    let reverseString = "";
    for (let i = str.length - 1; i >= 0; i-- ){
    reverseString += str[i];
    }
    if (reverseString == str)
    {
       return console.log(string + " is a paindrome"); 
    }
    else
    {
        return console.log(string + " is not a paindrome");
    }
    }
let str = "madam";
palindromeTest()

