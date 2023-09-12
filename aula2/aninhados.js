// Objetos em Objetos

const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444040"]
};

// Incluindo um onjeto dentro de um objeto pai
cliente.endereco = {
    rua: "Rua Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934"
};

console.log(cliente);
console.log(cliente.endereco);

