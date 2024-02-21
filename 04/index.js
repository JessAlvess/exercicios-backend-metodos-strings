let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

identificador = identificador.length === 6 ? identificador : identificador.padStart(6, '0')

let nomeFormatado = nome.split(' ')
let isUpperCase = str => str === str.toUpperCase() 
for (let i = 0; i < nomeFormatado.length; i++) {
    const string = nomeFormatado[i] 
    nomeFormatado[i] = isUpperCase(string[0]) ? nomeFormatado[i] : string[0].toUpperCase() + nomeFormatado[i].slice(1)
}



console.log(nomeFormatado.join(' '));
console.log(identificador);
console.log(email.trim());