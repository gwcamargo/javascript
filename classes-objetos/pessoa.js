export class Pessoa {

    // atributos = variáveis ou características
    _nome
    _idade
    _sexo
    _cidade
    _peso
    _altura
    _imc
    _classificacao
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
        this._imc = (this._peso / (this._altura * this._altura)).toFixed(2)
        this._classificacao = this.classifica_imc()
        Pessoa.totalPessoas += 1  // contador de pessoas com incremento
    }

    calcula_imc() {
        return this._imc
    }

    // Classificando o valor do imc
    classifica_imc(valorImc) {
        valorImc = this._imc

        let classificacao = ""
        
        if (valorImc < 18.5) {
            classificacao = "Abaixo do peso"
        } else if (valorImc <= 24.9) {
            classificacao = "Peso normal"
        } else if (valorImc <= 29.9) {
            classificacao = "Sobrepeso"
        } else if (valorImc <= 34.9) {
            classificacao = "Obesidade grau I"
        } else if (valorImc <= 39.9) {
            classificacao = "Obesidade grau II"
        } else if (valorImc >= 40) {
            classificacao = "Obesidade grau III ou mórbida"
        } else {
            classificacao = "Peso Inválido"
        }

        return classificacao
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