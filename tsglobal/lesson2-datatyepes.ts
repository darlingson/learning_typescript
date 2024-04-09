let userid : number = 333333333

let isLoggedIn:boolean = false

//type inference
let username = 'hello'
let usernumber = 333333333

username.toLowerCase() //typescript is able to infer that this is a string
usernumber.toFixed() //typescript is able to infer that this is a number

export {}