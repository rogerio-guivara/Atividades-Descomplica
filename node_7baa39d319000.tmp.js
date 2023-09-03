var numeros = [1,2,3,4,5,6,7,8,9,10];

var resultado = numeros.filter(item => item % 2 == 0);
console.log(resultado);

var numerosFIltrados = numeros.filter(
    function(valor){ return valor > 5}
);

console.log(numerosFIltrados);

function buscarValores (valor){
    return valor < 5;
}

var numerosEncontrados = numeros.filter(buscarValores);
console.log(numerosEncontrados);

var r1 = numeros.filter((valor) =>{
    return valor > 5;
});

console.log(r1);

var r2 = numeros.filter(valor => valor > 5);


var funcionarios = [
    {nome: "Luiz", idade: 62},
    {nome: "Davi", idade: 22},
    {nome: "Arthur", idade: 18},
    {nome: "Lucas", idade: 40},
]

var pessoasListagem = funcionarios.filter(
    function(valor){
        return valor.nome.length < 5;
    }
)
console.log(pessoasListagem);

var produtos = [
    {id: 1, descricao: "SmartPhone", categoria: "Eletrônicos"},
    {id: 2, descricao: "NoteBook", categoria: "Eletrônicos"},
    {id: 3, descricao: "Geladeira", categoria: "Eletrodoméstico"},
    {id: 4, descricao: "Fogão", categoria: "Eletrodoméstico"},
    {id: 5, descricao: "Sofá", categoria: "Móveis"},
    {id: 6, descricao: "Armário", categoria: "Móveis"},
    ]

    //var produtopesquisado = console.log(prompt('Digite o produto que deseja pesquisar'));

    //var numero1 = prompt("Digite o primeiro número");

var listagemprodutos = produtos.filter(
    function(valor){
        return valor.categoria == "Eletrônicos";
    }
)

console.log(listagemprodutos);

const prompt=require("prompt-sync")({sigint:true});

let name = prompt("What's your name");
console.log("hello"+name+"!");
