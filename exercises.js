class Funcionario{
    constructor (nome, idade, cargo){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }
    seApresentar (){
        console.log("Olá, meu nome é " + this.nome + ", tenho " + this.idade);
    }
    trabalhar (){
        console.log("Colaboro no cargo de " + this.cargo)
    }
}

class Gerente extends Funcionario{
    constructor (nome, idade, cargo, departamento){
        super(nome, idade, cargo);
        this.departamento = departamento;
}
gerenciar (){
    console.log("Gerencio o departamento de " + this.departamento);
}
}

class Desenvolvedor extends Funcionario{
    constructor (nome, idade, cargo, linguagem){
        super(nome, idade, cargo);
        this.linguagem = linguagem;
}
programar (){
    console.log ("Desevolvo programação com a linguagem " + this.linguagem)
}
}

var func1 = new Gerente("Rodrigo da Silva","49 anos","Gerente de projetos","Pesquisa e Desenvolvimento");
var func2 = new Desenvolvedor("Juan Cabalero","23 anos","Analista Jr","Java e Python");

func1.seApresentar();
func1.trabalhar();
func1.gerenciar();

func2.seApresentar();
func2.trabalhar();
func2.programar();

