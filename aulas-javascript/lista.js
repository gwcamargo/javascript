// Criando as listas
let cidades = ["São Paulo", "Avaré", "Campinas", "Guarulhos", "Ourinhos"];
let cidades2 = cidades.slice(0, 3);

let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"];
let nomes = ["Guilherme", "Sofia", "João", "Melissa"];
let objeto = ["Cadeira", "Porta", "Armário", "Panela"];

// Configurações das listas 
cidades.push("Sorocaba", "Carapicuiba");
cidades.shift("São Paulo");

objeto.splice(2, 1)

meses.pop("Junho");

nomes.unshift("Leonardo", "Ana Laura");
nomes.shift("Leonardo");

// Imprimindo as listas
console.log(cidades);
console.log(meses);
console.log(nomes);
console.log(objeto);
console.log(cidades2);