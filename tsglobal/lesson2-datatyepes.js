var userid = 333333333;
var isLoggedIn = false;
//type inference
var username = 'hello';
var usernumber = 333333333;
username.toLowerCase(); //typescript is able to infer that this is a string
usernumber.toFixed(); //typescript is able to infer that this is a number
