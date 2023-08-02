console.log("\n\tRedeclarando Variáveis - JavaScript:\n");

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

/*Redeclarar uma variável usando a palavra-chave 'let' 
pode resolver esse problema.

Redeclarar uma variável dentro de um bloco não 
redeclarará a variável fora do bloco:*/




