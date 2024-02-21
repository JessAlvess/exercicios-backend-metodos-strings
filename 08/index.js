const cpf = "011.022.033-44";

let cpfArr = cpf.split('.')
cpfArr[cpfArr.length - 1] = cpfArr[cpfArr.length - 1].split('-')
let cpfOut = cpfArr.join('') 
cpfArr = cpfOut.split(',')
console.log(cpfArr.join(''));