// Aprendendo a ler arquivos JSON

// Metodo require do Node, serve para buscar dados de outro programa
const dados = require("./cliente.json");

console.log(dados);
console.log(typeof dados);

// stringigy é um método do JSON para passar objetos para string
const clienteEmString = JSON.stringify(dados)

console.log(clienteEmString);
console.log(typeof clienteEmString);

// método parse do JSON serve para criar um objeto com base em uma
// string JSON
const cliente = JSON.parse(clienteEmString);
console.log(cliente);
console.log(typeof cliente);