// Ordenando Objetos

const clientes = require("./clientes.json");

// Função utilizando o método de sort para encontrar objetos > e < dentro de uma coleção de Objetos
//
function ordenar(clientes, propriedade) {
    const resultado = clientes.sort((a,b) => {
        if (a[propriedade] < b[propriedade]) {
            return -1;
        } else if (a[propriedade] > b[propriedade]) {
            return 1;
        } else {
            return 0;
        }
    });


    return resultado;
};

const ordenadoPorNome = ordenar(clientes, "nome");

// console.log(ordenadoPorNome);
console.log(ordenadoPorNome.reverse());