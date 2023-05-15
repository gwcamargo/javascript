let pedidos = [
    { id: 50, nome: 'Guilherme', alimento: 'Pizza', bebida: 'Suco de uva', preço: 100},
    { id: 65, nome: 'Sofia', alimento: 'Coxinha', bebida: 'Suco de limão', preço: 50},
    { id: 28, nome: 'João', alimento: 'X-Búrguer', bebida: 'Refrigerante', preço: 64},
    { id: 36, nome: 'Ana Laura', alimento: 'Pastel', bebida: 'Refrigerante', preço: 88}
];

let pedido = pedidos.reduce((total, pedido) => {
    let {preço} = pedido;
    return total + preço;
}, 50);

console.log(pedido);