// const celular = 7199918888;
const celular = 99918888;

const celularStr = String(celular)
celularStr.length === 10 ? console.log(`(${celularStr.slice(0,2)}) ${celularStr.charAt(2)} ${celularStr.slice(2,6)}-${celularStr.slice(6,10)}`) : console.log(`${celularStr.charAt(0)} ${celularStr.slice(0,4)}-${celularStr.slice(4,8)}`)