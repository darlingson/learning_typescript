let hero 
let hero2:string
function getHero(){
    return true
}
hero = getHero() //typescript here is unable to infere the type and sets the type to any

function getHero2(){
    //return true; // returning true causes a type error
    return 'hello'
}
hero2 = getHero2() //typescript is able to know that the function should return a string even though a return type has not been defined

