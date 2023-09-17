// Econtrando um Objeto dentro de uma lista

const clientes = require("./clientes.json");

// Função de busca de um objeto dentro de uma lista, busca e retorna
function encontrar(lista, chave, valor) {
    return lista.find((item) => item[chave].includes(valor));
};

const encontrado = encontrar(clientes,"nome","Kirby");
const encontrado2 = encontrar(clientes,"telefone","1918820860");

console.log(encontrado);
console.log(encontrado2);