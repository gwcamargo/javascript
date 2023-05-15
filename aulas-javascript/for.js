let pedidos = [
    { id: 50, nome: 'Guilherme', alimento: 'Pizza', bebida: 'Suco de uva'},
    { id: 65, nome: 'Sofia', alimento: 'Coxinha', bebida: 'Suco de limão'},
    { id: 28, nome: 'João', alimento: 'X-Búrguer', bebida: 'Refrigerante'},
    { id: 36, nome: 'Ana Laura', alimento: 'Pastel', bebida: 'Refrigerante'}
];

pedidos.forEach((pedidos, index) => {
    let {nome, alimento, bebida} = pedidos;
    console.log(`${index} - O Cliente ${nome} fez o pedido do alimento ${alimento}, e sua bebida é ${bebida}`);
});