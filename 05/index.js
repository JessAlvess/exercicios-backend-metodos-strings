const numeroCartao = '1111222233334444';
const primeiroTermo = numeroCartao.slice(0, 4)
const ultimoTermo = numeroCartao.slice(-4)
const maskedNumber = `${primeiroTermo + ultimoTermo.padStart(12, '*')}`
console.log(maskedNumber);