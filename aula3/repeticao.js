// For... In

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

let chave = "";
for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if (tipo !== 'object' && tipo !== "function") {
        console.log(`A chave ${chave} tem o valor: ${cliente[chave]}.`);
    }
};