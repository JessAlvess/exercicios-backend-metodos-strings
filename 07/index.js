const email = "aluno@cubos.academy";
const email1 = "jose@cubos.academy.br";
const email2 = "jose.messias@cubos.academy";
const email3 = "jose.messias@cubos.io";
const email4 = "jose@cubos";
const email5 = "jose.messias@cubos";
const email6 = "jose.messias@.";
const email7 = "jose.@cubos";
const email8 = ".@";
const email9 = "@.";
const email10 = "jose.messias@cubos.";
const email11 = ".messias@cubos.";
const email12 = ".messias@cubos";


const test = email => {
    !email.includes('@') ? 
console.log('E-mail inválido') : !email.includes('.') ? console.log('E-mail inválido') : email.startsWith('.') ? console.log('E-mail inválido') : !email.endsWith('.') ? console.log('E-mail válido') : console.log('E-mail inválido')
}

console.log(test(email));
console.log(test(email1));
console.log(test(email2));
console.log(test(email3));
console.log(test(email4));
console.log(test(email5));
console.log(test(email6));
console.log(test(email7));
console.log(test(email8));
console.log(test(email9));
console.log(test(email10));
console.log(test(email11));
console.log(test(email12));


