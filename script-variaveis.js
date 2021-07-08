console.log("Hello World!");

//Boa pratica: usar padrão de nomenclatura camelCase

//VAR 
var myName = "Fabio";
console.log('myName', myName)

//Escoplo Global

//LET
let language = "javascript";
//Escopo de função

//CONST
const pattern = "ECMAScript";
//Escopo de função

var timeFrontEnd;

{
    timeFrontEnd = 8;
    var age = 34;
    let timeTi = 14;
    console.log('timeTi', timeTi)
}

console.log('age', age)
// console.log(timeTi); Erro de hosting > timeTi Undefined não encontra no escopo global
console.log('timeFrontEnd', timeFrontEnd)

const myLastName = "Haddad"
console.log('myLastName', myLastName)
console.log(myLastName)

// myLastName = myLastName + " Paes"; Erro, não é possivel reatribuir Const