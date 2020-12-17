//classe que usa outros modulos que foram definidos
//importando modulos A e B
const moduloA = require('./moduloA')
const moduloB = require('./moduloB')


console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.mensagem)



console.log(moduloB.bomDia)
console.log(moduloB.boaNoite()) //chamar com os parenteses