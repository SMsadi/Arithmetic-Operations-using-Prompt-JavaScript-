
let userOneValue = prompt("User input data one");  // taking input
let userTwoValue = prompt("User input data two");  // taking input


userOneValue= parseInt(userOneValue);  // initially it was a string, now converting this into integer
userTwoValue= parseInt(userTwoValue);  //  initially it was a string, now converting this into integer



/*

// console.log(userOneValue);  // shows in console
document.write(userOneValue + "<br>");   // shows in browser window

// console.log(userTwoValue);  // shows in console
document.write(userTwoValue);    // shows in browser window

*/


const Result1 = userOneValue + userTwoValue ;
const Result2 = userOneValue - userTwoValue ;
const Result3 = userOneValue * userTwoValue ;
const Result4 = userOneValue / userTwoValue ;
const Result5  = userOneValue % userTwoValue ;




document.write("addition: " + Result1 + "<br>");
document.write("subtraction: " + Result2 + "<br>");
document.write("multiply: " + Result3 + "<br>");
document.write("divider: " + Result4 + "<br>");
document.write("reminder: " + Result5 + "<br>");




/*

Note:


console.log("Hello World");  // shows in console

alert("Hello alert");   // shows pop-up button

document.write("Hello SADI");  // shows in browser window, document is only avaliable inside the browser, not in server


*/