let pedidos = [
    { id: 50, nome: 'Guilherme', alimento: 'Pizza', bebida: 'Suco de uva'},
    { id: 65, nome: 'Sofia', alimento: 'Coxinha', bebida: 'Suco de limão'},
    { id: 28, nome: 'João', alimento: 'X-Búrguer', bebida: 'Refrigerante'},
    { id: 36, nome: 'Ana Laura', alimento: 'Pastel', bebida: 'Refrigerante'}
];

pedidos.map(pedido => {
    if (pedido.alimento == 'Coxinha') {
        return (pedido.alimento = 'Não temos no momento');
    }
});

console.log(pedidos);