// Deletando elementos de um objeto

const objetoPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
};

console.log(objetoPersonagem);

// Para deletar usamos o seguinte método
delete objetoPersonagem.aliado;

console.log(objetoPersonagem.aliado);