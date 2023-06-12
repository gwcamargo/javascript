class Pessoa {
    _nome
    _idade
    _sexo
    _cidade
    _peso
    _altura
    _imc

    constructor (nome, idade, sexo, cidade, peso, altura) {
        this._nome = nome
        this._idade = idade
        this._sexo = sexo
        this._cidade = cidade
        this._peso = peso
        this._altura = altura
        this._imc = this.peso / (this.altura * this.altura)
    }

    calcula_imc() {
        return(this.peso / (this.altura * this.altura)).toFixed(2)
    }

    get nome() {
        return this._nome
    }

    get idade() {
        return this._idade
    }

    get cidade() {
        return this._cidade
    }

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

let pessoa1 = new Pessoa('Guilherme', 18, 'Masculino', 'Manduri', 71.5, 1.93)
let pessoa2 = new Pessoa('Sofia', 22, 'Feminino', 'São Paulo', 50.9, 1.55)
let pessoa3 = new Pessoa('João', 17, 'Masculino', 'Avaré', 65.4, 1.77)
let pessoa4 = new Pessoa('Maria Vitória', 19, 'Feminino', 'Ourinhos', 55.6, 1.68)

console.log("Nome: " + pessoa1.nome)
console.log("Idade: " + pessoa1.idade)
console.log("Cidade: " + pessoa1.cidade)

pessoa1.nome = 'Guilherme Camargo'
pessoa1.idade = 19
pessoa1._cidade = 'São Paulo'

console.log("Nome: " + pessoa1.nome)
console.log("Idade: " + pessoa1.idade)
console.log("Cidade: " + pessoa1.cidade)