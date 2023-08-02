console.log("\n\tObjetos const:\n")

//* Criando um objeto const:
const carro = {tipo: "Fiat", modelo: "500", cor: "Azul"};
console.log("Objeto carro:", carro, "\n");

//* Mudando a propriedade do objeto:
carro.cor = "Vermelho";
console.log("Objeto carro com a propriedade cor alterada:", carro, "\n");

//* Adicionando propriedade:
carro.dono = "Théo Bortoletto";
console.log("Adicionando uma propriedade:\n", carro);

/*NÃO É POSSÍVEL REATRIBUIR O OBJETO:

const cars = ["Saab", "Volvo", "BMW"];

cars = ["Toyota", "Volvo", "Audi"];    // ERROR*/

