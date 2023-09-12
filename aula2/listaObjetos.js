// Objetos em Objetos

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

// Adicionando mais um elemento ao array filho do objeto pai
// Efetuando desta forma, podemos utlizar qualquer método dos arrays
// para objetos.
// Método Push para adicionar um elemento ao array filho do objeto pai
cliente.enderecos.push({
    rua: "R. Joseph Ladder",
    numero: 404,
    apartamento: false,
    complemento: "Casa de veraneio"
});

// Efetuando um método filter para buscar nos endereços, somente os que
// são apartamentos.
const listaApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log(listaApartamentos);

