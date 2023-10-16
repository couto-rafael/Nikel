const nome = "Teste 1"
let nome2 = ""
let pessoaDefault = {
    nome: "Rafael Couto",
    idade: 34,
    profissao: "Empresário"
}

let nomes = ["Marcelo Eltz", "Pedro Silva", "Maria Silva"]
let pessoas = [
    {
        nome: "Rafael Couto",
        idade: 34,
        profissao: "Empresário"
    },
    {
        nome: "Marcelo Eltz",
        idade: 34,
        profissao: "Programador"
    }
];

function alterarNome(){
    nome2 = "Maria da Silva"
    console.log("Valor alterado")
    console.log(nome2)
}

function recebeEAlteraNome(novoNome){
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome")
    console.log(nome2)
}

function imprimirPessoa(pessoa) {
    console.log("Nome: " + pessoa.nome);
    
    console.log("Idade: " + pessoa.idade);
        
    console.log("Profissão: " + pessoa.profissao);
}

function adicionarPessoa(pessoa){
    pessoas.push(pessoa)
}

imprimirPessoas();

adicionarPessoa({
    nome: "Pedro Silva", 
    idade: 28,
    profissao: "Porteiro"
})

function imprimirPessoas(){
    console.log("-----------------------");
    pessoas.forEach((item) => {
        console.log("Nome: " + item.nome);

        console.log("Idade: " + item.idade);
        
        console.log("Profissão: " + item.profissao);
    })
}

adicionarPessoa({
    nome: "Bero Bero",
    raça: "Branca",
    escolaridade: "Superior Completo"
})

imprimirPessoas();

//imprimirPessoa(pessoaDefault);
//console.log("----------")
//imprimirPessoa({
//    nome: "Sara Costa",
//    idade: 33,
//    profissao: "Arquiteta"
//})

