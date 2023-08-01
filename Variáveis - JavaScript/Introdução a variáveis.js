console.log("\n\tIntrodução a variáveis - JavaScript:\n");

/*Variáveis ​​são contêineres para armazenamento de dados
Variáveis ​​JavaScript podem ser declaradas de 4 maneiras:

- Automaticamente
- Usando 'var'
- Usando 'let'
- Usando 'const'*/

/*Neste primeiro exemplo, x, ye z 
são variáveis ​​não declaradas.

Eles são declarados automaticamente 
quando usados ​​pela primeira vez:*/

console.log("Declarando variáveis automaticamente:\n")

x = 5;
y = 6;
z = 5 + 6;

console.log("Valor de x:", x)
console.log("Valor de y:", y)
console.log("Valor de z:", z)

/*Observação:
É considerado uma boa prática de programação 
sempre declarar variáveis ​​antes de usar.*/

console.log("\nDeclarando variáveis usando 'var':\n")

var a = 4;
var b = 2;
var c = a + b;

console.log("Valor de a:", a);
console.log("Valor de b:", b);
console.log("Valor de c:", c);

console.log("\nDeclarando variáveis usando 'let':\n")

let i = 6;
let j = 8;
let k = i + j;

console.log("Valores de i:", i);
console.log("Valores de j:", j);
console.log("Valores de k:", k);

console.log("\nDeclarando variáveis usando 'const':\n")

const val1 = 12;
const val2 = 2;
const val3 = val1 + val2;

console.log("Valor de val1:", val1)
console.log("Valor de val2:", val2)
console.log("Valor de val3:", val3)

console.log("\nExemplo misto:\n")

const price1 = 5;
const price2 = 6;
let total = price1 + price2;

console.log("Valor de price1:", price1)
console.log("Valor de price2:", price2)
console.log("Valor de total:", total)


