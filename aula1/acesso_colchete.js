// Uma forma diferente de varrer o objeto e buscar seus dados

const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1122233345",
    email: "andre@dominio.com"
};

console.log(
    `O nome do cliente é: ${cliente["nome"]}, e possui ${cliente["idade"]} anos.`
);

const chaves = ["nome", "idade", "cpf", "email", "altura"];

chaves.forEach( (chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
})