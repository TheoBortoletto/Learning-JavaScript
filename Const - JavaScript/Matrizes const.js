console.log("\n\tMatrizes const:\n")

/*Você pode alterar os elementos de uma matriz constante:*/

//* Criando uma matriz const:
const cars = ["Fiat", "Volvo", "BMW"];

console.log("Matriz:", cars);

//* Mudando um elemento da matriz:
cars[0] = "Toyota";
console.log("Matriz com um elemento alterado:", cars);

//* Adicionando elemento na matriz:
cars.push("Audi");
console.log("Matriz com um elemento a mais:", cars);

/*NÃO É POSSÍVEL REATRIBUIR UMA MATRIZ:

const cars = ["Saab", "Volvo", "BMW"];

cars = ["Toyota", "Volvo", "Audi"];    //* Gerará um erro
*/