// Sintaze de espalhamento

const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444040"]
};

// Incluindo um objeto array dentro de um objeto pai
cliente.enderecos = [
    {
        rua: "Rua Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934"
    },
];

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}.`);
    console.log(`Ligando para ${telefoneResidencial}.`);
};

ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatasrio: cliente.nome,
    ...cliente.enderecos[0],
};

console.log(encomenda);