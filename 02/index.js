const cpf = "12345678900";
const cnpj = "12345678000199";

function cpfTransform(string) {
    const primeiroTermo = string.slice(0,3)
    const segundoTermo = string.slice(3,6)
    const terceiroTermo = string.slice(6,9)
    const quartoTermo = string.slice(9)
    return `${primeiroTermo}.${segundoTermo}.${terceiroTermo}-${quartoTermo}`
}

function cnpjTransform(string) {
    const primeiroTermo = string.slice(0,2)
    const segundoTermo = string.slice(2,5)
    const terceiroTermo = string.slice(5,8)
    const quartoTermo = string.slice(8,12)
    const quintoTermo = string.slice(12)
    return `${primeiroTermo}.${segundoTermo}.${terceiroTermo}/${quartoTermo}-${quintoTermo}`
}

cpf.length === 11 ? console.log(cpfTransform(cpf)): console.log('CPF Inválido');

cnpj.length === 14 ? console.log(cnpjTransform(cnpj)): console.log('CNPJ Inválido');
