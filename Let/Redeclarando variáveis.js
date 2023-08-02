console.log("\n\tRedeclarando Variáveis - JavaScript:\n");

/*Redeclarar uma variável usando a palavra-chave 'var' 
pode impor problemas.

Redeclarar uma variável dentro de um bloco também 
redeclarará a variável fora do bloco:*/

var x = 10;
//* Aqui o x é igual a 10

{
    var x = 2;
    //* Aqui o x é igual a 2
}

//* Aqui o x é 2

/*Redeclarar uma variável usando a palavra-chave 'let' 
pode resolver esse problema.

Redeclarar uma variável dentro de um bloco não 
redeclarará a variável fora do bloco:*/


