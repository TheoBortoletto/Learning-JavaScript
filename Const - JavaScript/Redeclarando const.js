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

//* Não é permitido reatribuir uma variável const existente, no mesmo escopo:


/*
const x = 2;     // Allowed
x = 2;           // Not allowed
var x = 2;       // Not allowed
let x = 2;       // Not allowed
const x = 2;     // Not allowed

{
  const x = 2;   // Allowed
  x = 2;         // Not allowed
  var x = 2;     // Not allowed
  let x = 2;     // Not allowed
  const x = 2;   // Not allowed
}
*/

//* É permitido redeclarar uma variável com const, em outro escopo, ou em outro bloco:

/*
const x = 2;       // Allowed

{
  const x = 3;   // Allowed
}

{
  const x = 4;   // Allowed
}
*/