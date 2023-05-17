let título = document.querySelector('h1');
título.textContent = 'Funções no JS';
let box = document.querySelectorAll('box');

function olaMundo() {
    document.write('Olá Mundo sem retorno<br>');
}

function olaMundo2() {
    return 'Olá Mundo com retorno<br>';
}

olaMundo()
document.write(olaMundo2())

let valor1 = 2
let valor2 = 2
let mensagem = 'Jesus Cristo é o Salvador.'

function soma(a, b) {
    document.write((a + b) + "<br>")
}

function soma2(c, d) {
    return c + d
}

soma(2, 2)
soma2(10, 5)

título.addEventListener('click', function () {
    console.log('Clicou no título')
})

const olaMundoArrow = () => document.write("Olá Mundo!!!!!")

const olaMundo2Arrow = () => '<p>Olá Mundo com arrow function<p>'

olaMundoArrow()
document.write(olaMundo2Arrow())
