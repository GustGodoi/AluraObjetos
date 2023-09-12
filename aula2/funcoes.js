// Funções com Objetos

// Apresentação dos Metodos de Objetos em JS.
// No caso abaixo esse objeto possui um elemento que descreve um método
// da realidade, algo que ele teria como caracteristica.
// No caso do exemplo, é o funcionalidade de limite de crédito de compra(Saldo).
const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444040"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente.");
        } else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo Saldo: ${this.saldo}.`)
        }
    },
};

// Interessante como podemos incluir a um Objeto um método(função) que executa uma
// lógica com os próprios dados do objeto, para isso usamos o método this.
// this é uma referência ao objeto atual.
cliente.efetuaPagamento(25);