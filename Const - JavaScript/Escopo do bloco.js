console.log("\n\tEscopo do Bloco: \n")

/*Declarar uma variável com 'const' é 
semelhante a let quando se trata de Escopo do Bloco.

O x declarado no bloco, neste exemplo, 
não é igual ao x declarado fora do bloco:*/

const x = 10; //* x é igual a 10
console.log("Valor da variável x fora de um escopo:", x);

{
    const x = 2; //* aqui o x é igual a 2
    console.log("Valor do x dentro do escopo:", x)
}

//* Aqui a variável x é igual a 10