// Filtrando Objetos sem informações essenciais 

const clientes = require("./clientes.json");

// Função para encontrar objetos dentro de uma coleção com certas condições
function filtrarApartamentosSemComplemento(clientes) {
    return clientes.filter((cliente) => {
        return ( 
            cliente.endereco.apartamento && 
            !cliente.endereco.hasOwnProperty("complemento")
        );
    });
};

const filtrados = filtrarApartamentosSemComplemento(clientes);

console.log(filtrados);