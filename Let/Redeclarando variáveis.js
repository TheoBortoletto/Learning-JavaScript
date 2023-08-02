console.log("\n\tRedeclarando Variáveis - JavaScript:\n");

console.log("\tRedeclarando com  'var':\n")

/*Redeclarar uma variável usando a palavra-chave 'var' 
pode impor problemas.

Redeclarar uma variável dentro de um bloco também 
redeclarará a variável fora do bloco:*/

var x = 10;
//* Aqui o x é igual a 10
console.log("Variável x fora de um bloco (escopo global):", x, "\n")
{
    var x = 2;
    //* Aqui o x é igual a 2
    console.log("Variável x dentro de um bloco:", x, "\n")
}
console.log("Variável x após ser redeclarada no bloco:", x, "\n")
//* Aqui o x é 2

console.group("a")

/*Redeclarar uma variável usando a palavra-chave 'let' 
pode resolver esse problema.

Redeclarar uma variável dentro de um bloco não 
redeclarará a variável fora do bloco:*/

let y = 10;
//* Aqui o y é igual a 10
console.log("Variável y fora de um bloco (escopo global):", y, "\n")

{
    let y = 2;
    //* Aqui o y é igual a 2
    console.log("Variável y dentro de um bloco:", y, "\n")
}
console.log("Variável y após ser redeclarada no bloco:", y, "\n")
//* Aqui o y é igual a 10