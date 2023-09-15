// Métodos de Obejto

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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")) {
    console.error("Erro. É necessário ter um endereço cadastrado.");
};