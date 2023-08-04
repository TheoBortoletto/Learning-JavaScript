console.log("\n\tRedeclarando const:\n")

/*Redeclarar uma variável existente 'var' ou
'let' para 'const', no mesmo escopo, não é permitido:*/

/*
var x = 2;     // Permitido
const x = 2;   // Não é permitido

{
let x = 2;     // Permitido
const x = 2;   // Não é permitido
}

{
const x = 2;   // Permitido
const x = 2;   // Não é permitido
}
*/

