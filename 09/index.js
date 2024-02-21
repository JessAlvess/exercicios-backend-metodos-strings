const nome = 'Guido Cerqueira';
let str = nome.split(' ')
str = str.join('').toLowerCase()

str.length > 13 ? console.log(`@${str.slice(0,12)}`) : console.log(`@${str.slice(0)}`)
