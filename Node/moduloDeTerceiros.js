const _ = require('lodash') //procura dentro de nodeModules
    //setInterval fica rodando de acordo com um valor de tempo
setInterval(() => console.log(_.random(1, 10)), 200) //executa um valor aleatorio de 1 a 1k a cada 2segundos


//nodemon nao carrega por erro, mas nodemon serve para executar em tempo real
//erro do nodemon foi a autorização