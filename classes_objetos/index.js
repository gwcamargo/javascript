class Pessoa {
    nome
    idade
    sexo
    cidade

    constructor (nome, idade, sexo, cidade) {
        this.nome = nome
        this.idade = idade
        this.sexo = sexo
        this.cidade = cidade
    }
}

let pessoa1 = new Pessoa('Guilherme', 18, 'Masculino', 'Manduri')
let pessoa2 = new Pessoa('Sofia', 22, 'Feminino', 'São Paulo')
let pessoa3 = new Pessoa('João', 17, 'Masculino', 'Avaré')
let pessoa4 = new Pessoa('Maria Vitória', 19, 'Feminino', 'Ourinhos')

// pessoa1.nome = 'Guilherme'
// pessoa1.idade = 18
// pessoa1.sexo = 'Masculino'
// pessoa1.cidade = 'Manduri'

// pessoa2.nome = 'Sofia'
// pessoa2.idade = 22
// pessoa2.sexo = 'Feminino'
// pessoa2.cidade = 'São Paulo'

// pessoa3.nome = 'João'
// pessoa3.idade = 17
// pessoa3.sexo = 'Masculino'
// pessoa3.cidade = 'Avaré'

// pessoa4.nome = 'Maria Vitória'
// pessoa4.idade = 19
// pessoa4.sexo = 'Feminino'
// pessoa4.cidade = 'Ourinhos'

console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3)
console.log(pessoa4)