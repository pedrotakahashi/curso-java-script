//Foco no Require

// const moduloA = require('../../moduloa')
const moduloA = require('../../moduloA')
const moduloC = require('./pastaC/index')
console.log(moduloA.ola)

//funciona no Mac  e no windows, mas nao no Linux.
//seguir o padrao correto do nome!!!

const http = require('http')

// http.createServer((req, res) => {
//     res.write("'Servidor Criado com algum sucesso!'")
//     res.end()

// }).listen(8080)

console.log(moduloC.msg)