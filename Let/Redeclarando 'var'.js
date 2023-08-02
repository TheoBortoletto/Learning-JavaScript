console.log("\n\tRedeclarando variáveis 'var':\n")

/*Redeclarar uma variável 'var' em JavaScript é 
permitida em qualquer lugar em um programa:*/

var x = 2; //* x é igual a 2
console.log("Variável x antes:", x);

var x = 3; //* x é igual a 3
console.log("Variável x depois:", x);

/*Com 'let', NÃO é permitido redeclarar uma 
variável no mesmo bloco:*/

// var y = 2; 
// let y = 3;
// console.log(y)

// {
//     let x = 2;   // Allowed
//     let x = 3;   // Not allowed
// }
    
// {
//     let x = 2;   // Allowed
//     var x = 3;   // Not allowed
// }

console.log("\n\tRedeclarar variável 'let' em outro bloco:\n")
/*Redeclarar uma variável com 'let', em outro bloco, é permitido:*/

let y = 2;   //* Permitido
console.log("Variável y fora do bloco:", y)
{
    let y = 3;   //* Permitido
    console.log("Variável y em um bloco:", y)
}

{
    let y = 4;    //* Permitido
    console.log("Variável y em outro bloco:", sy)
}