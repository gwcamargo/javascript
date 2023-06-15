import { Pessoa } from "./pessoa.js"

// classes = moldes ou modelos de objetos
// objetos = são abstrações ou representações de 'coisas' que existem no mundo
// objeto = instância ou objeto do tipo | objeto é um tipo de dados

// criar novo objeto a partir da class, instanciar
let pessoa1 = new Pessoa('Guilherme', 18, 'Masculino', 'Manduri', 71.0, 1.93)
let pessoa2 = new Pessoa('Sofia', 16, 'Feminino', 'Manduri', 43.5, 1.55)
let pessoa3 = new Pessoa('Gabriel', 17, 'Masculino', 'Avaré', 44.9, 1.80)
let pessoa4 = new Pessoa('Isabela', 18, 'Feminino', 'Ourinhos', 50.8, 1.73)

// exibindo na tela o número total de pessoas
console.log(Pessoa.totalPessoas)

console.log("Situação: " + pessoa1.classifica_imc())
console.log("Situação: " + pessoa2.classifica_imc())
console.log("Situação: " + pessoa3.classifica_imc())
console.log("Situação: " + pessoa4.classifica_imc())

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