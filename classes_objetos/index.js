class Pessoa {
    nome
    idade
    sexo

    cidade
    peso
    altura

    imc

    constructor (nome, idade, sexo, cidade, peso, altura, imc) {
        this.nome = nome
        this.idade = idade
        this.sexo = sexo
        this.cidade = cidade
        this.peso = peso
        this.altura = altura
        this.imc = this.peso / (this.altura * this.altura)
    }

    calcula_imc() {
        return(this.peso / (this.altura * this.altura)).toFixed(2)
    }
}

let pessoa1 = new Pessoa('Guilherme', 18, 'Masculino', 'Manduri', 71.5, 1.93)
let pessoa2 = new Pessoa('Sofia', 22, 'Feminino', 'São Paulo', 50.9, 1.55)
let pessoa3 = new Pessoa('João', 17, 'Masculino', 'Avaré', 65.4, 1.77)
let pessoa4 = new Pessoa('Maria Vitória', 19, 'Feminino', 'Ourinhos', 55.6, 1.68)

console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3)
console.log(pessoa4)

console.log(pessoa1.calcula_imc())
console.log(pessoa2.calcula_imc())
console.log(pessoa3.calcula_imc())
console.log(pessoa4.calcula_imc())