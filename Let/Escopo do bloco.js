console.log("\n\tEscopo do bloco - JavaScript:\n");

/*Antes do ES6 (2015), o JavaScript tinha escopo 
global e escopo de função.

O ES6 introduziu duas novas palavras-chave 
importantes do JavaScript: lete const.

Essas duas palavras-chave fornecem 
escopo de bloco em JavaScript.

Variáveis ​​declaradas dentro de um bloco { } 
não podem ser acessadas de fora do bloco:*/

{
    let x = 20;
    //* A variável 'x' não será usada fora do escopo
}

/*Variáveis ​​declaradas com a palavra-chave var NÃO podem ter escopo de bloco.

As variáveis ​​declaradas dentro de um bloco { } podem ser acessadas de fora do bloco:*/

{
    var x = 2;
    //* A variável 'x' poderá ser utilizada fora do escopo
}

