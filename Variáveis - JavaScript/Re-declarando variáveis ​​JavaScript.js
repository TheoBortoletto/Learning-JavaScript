console.log("\n\tRe-declarando variáveis JavaScript - JavaScript:\n");

/*Se você declarar novamente uma variável JavaScript 
declarada com var, ela não perderá seu valor.

A variável 'carName' ainda terá o valor "Volvo" 
após a execução destas instruções:*/

var carName = "Volvo";
var carName;

console.log(carName)

/*Observação:

Você não pode declarar novamente uma variável 
declarada com let ou const.

Isso não vai funcionar:*/

// let nome = "Théo Bortoletto";
// let nome;

