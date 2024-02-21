const nomeArquivo = 'Foto da Familia.jpeg';

let indexPoint = nomeArquivo.indexOf('.')
nomeArquivo.slice(indexPoint + 1) === 'jpg' || nomeArquivo.slice(indexPoint + 1) === 'jpeg' ||
nomeArquivo.slice(indexPoint + 1) === 'gif' || nomeArquivo.slice(indexPoint + 1) === 'png' ?
console.log('Arquivo válido') :
console.log('Arquivo inválido')
