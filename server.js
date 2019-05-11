const express = require ('express'); //importando o express utilziando o require
const mongoose = require ('mongoose'); //importar o mongoose

//iniciando o App
const app = express(); //criando uma constante e executando a função express criada acima

//Iniciando o Banco de Dados
mongoose.connect(
    "mongodb://localhost:27017/nodeapi", //url de conexão
    {useNewUrlParser: true}
); 
require('./src/model/Contact');

//para criar a primeira rota retornando uma mensagem na tela
//o primeiro paramentro, a barra "/",  indica que é a rota raíz, ou seja sem nada depois da url
//o segundo paramento, o "req" significa a requisição que está sendo feita para o servidor
//ele conterá todos os detalhes e informações possíveis dessa requisição. É possível pegar 
//parametros, corpo da requisicao, usuario, ip, autenticação, ou seja todos os tipos de informação que 
//estarão na requisição.
//e o "res" vai está todas as informações para devolver uma resposta para o usuario. 
app.get('/', (req, res)=>{
    res.send("API NODEJS");
}) 




app.listen(3000); //informa que a aplicação escuta na porta 3000
//para testar, executar no terminal: node server.js e depois acessar o localhost:3000
