// classes = moldes ou modelos de objetos
// objetos = são abstrações ou representações de 'coisas' que existem no mundo
// objeto = instância ou objeto do tipo | objeto é um tipo de dados

class Pessoa {

    // atributos = variáveis ou características
    _nome
    _idade
    _sexo
    _cidade
    _peso
    _altura
    _imc
    static totalPessoas = 0 // atributos estáticos (static) ou da class

    // métodos = funções ou comportamentos
    // método construtor
    constructor (nome, idade, sexo, cidade, peso, altura) {
        this._nome = nome
        this._idade = idade
        this._sexo = sexo
        this._cidade = cidade
        this._peso = peso
        this._altura = altura
        this._imc = this._peso / (this._altura * this._altura)
        Pessoa.totalPessoas += 1  // contador de pessoas com incremento

    }

    calcula_imc() {
        return (this._peso / (this._altura * this._altura)).toFixed(2)
    }

    // método get = pegar informações
    get nome() {
        return this._nome
    }

    get idade() {
        return this._idade
    }

    get cidade() {
        return this._cidade
    }

    // método set = editar, alterar, configurar informações
    set nome(novoNome) {
        this._nome = novoNome
    }

    set idade(novaIdade) {
        this._idade = novaIdade
    } 

    set cidade(novaCidade) {
        this._cidade = novaCidade
    }
}

// criar novo objeto a partir da class, instanciar
let pessoa1 = new Pessoa('Guilherme', 18, 'Masculino', 'Manduri', 71.0, 1.93)
let pessoa2 = new Pessoa('Sofia', 16, 'Feminino', 'Manduri', 43.5, 1.55)
let pessoa3 = new Pessoa('Gabriel', 17, 'Masculino', 'Avaré', 44.9, 1.80)
let pessoa4 = new Pessoa('Isabela', 18, 'Feminino', 'Ourinhos', 50.8, 1.73)

// exibindo na tela o número total de pessoas
console.log(Pessoa.totalPessoas)

// exibindo os resultados na tela (antes)
console.log("Nome: " + pessoa1.nome)
console.log("Idade: " + pessoa1.idade)
console.log("Cidade: " + pessoa1.cidade)

// setando (alterando) os dados do usuário
pessoa1.nome = 'Guilherme Camargo'
pessoa1.idade = 19
pessoa1.cidade = 'Belém'

// exibindo os resultados na tela (depois)
console.log("Nome: " + pessoa1.nome)
console.log("Idade: " + pessoa1.idade)
console.log("Cidade: " + pessoa1.cidade)

console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3)
console.log(pessoa4)

console.log(pessoa1.calcula_imc())
console.log(pessoa2.calcula_imc())
console.log(pessoa3.calcula_imc())
console.log(pessoa4.calcula_imc())