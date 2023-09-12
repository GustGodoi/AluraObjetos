// Alterando dados de um objeto declarado como constante.
const pessoa = {
    nome: "Luma",
    profissao: "Engenheira"
};

console.log(pessoa.nome)

console.log(pessoa.telefone);

// Posso adicionar elementos a um objeto, mesmo fora da sua declaração
pessoa.telefone = "11 2223333444";

console.log(pessoa.telefone);

// Posso acessar e reescrever o dado de um elemento do objeto, por meio
// da sua constante. Mesmo o objeto sendo declarado como uma constante.
pessoa.nome = "Luma Silva";

console.log(pessoa);


const novaPessoa = {
    nome: "Pedro",
};

// Apesar de poder adicionar elementos a um objeto constante, e de 
// poder alterar valores dos elementos. Não fazer um objeto = a outro,
// no JS você não pode fazer atribuição de variáveis constantes de objetos
pessoa = novaPessoa;

